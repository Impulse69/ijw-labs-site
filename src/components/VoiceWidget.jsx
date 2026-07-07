import { useState, useRef, useEffect, useCallback } from "react";

const ENDPOINT = "/.netlify/functions/retell-web-call";

// idle | connecting | live | error
// The Retell SDK bundles WebRTC libs (~heavy), so it is imported lazily on first
// call — keeps the initial page load light for the ~99% of visitors who never call.
export default function VoiceWidget() {
  const [status, setStatus] = useState("idle");
  const [agentTalking, setAgentTalking] = useState(false);
  const clientRef = useRef(null);

  const attach = useCallback((client) => {
    client.on("call_started", () => setStatus("live"));
    client.on("call_ended", () => { setStatus("idle"); setAgentTalking(false); });
    client.on("agent_start_talking", () => setAgentTalking(true));
    client.on("agent_stop_talking", () => setAgentTalking(false));
    client.on("error", (err) => {
      console.error("Retell call error:", err);
      try { client.stopCall(); } catch { /* ignore */ }
      fail();
    });
  }, []);

  const fail = useCallback(() => {
    setStatus("error");
    setAgentTalking(false);
    setTimeout(() => setStatus("idle"), 2600);
  }, []);

  const startCall = useCallback(async () => {
    if (status === "connecting" || status === "live") return;
    setStatus("connecting");
    try {
      const [{ RetellWebClient }, tokenRes] = await Promise.all([
        import("retell-client-js-sdk"),
        fetch(ENDPOINT, { method: "POST" }),
      ]);
      if (!tokenRes.ok) throw new Error("token request failed");
      const { access_token } = await tokenRes.json();
      if (!access_token) throw new Error("no access token");

      if (!clientRef.current) {
        clientRef.current = new RetellWebClient();
        attach(clientRef.current);
      }
      await clientRef.current.startCall({ accessToken: access_token });
    } catch (err) {
      console.error("Could not start voice call:", err);
      fail();
    }
  }, [status, attach, fail]);

  const endCall = useCallback(() => {
    try { clientRef.current?.stopCall(); } catch { /* ignore */ }
    setStatus("idle");
    setAgentTalking(false);
  }, []);

  useEffect(() => () => { try { clientRef.current?.stopCall(); } catch { /* ignore */ } }, []);

  const live = status === "live";
  const connecting = status === "connecting";

  return (
    <div className="voice-widget">
      {live && (
        <div className="voice-panel" role="dialog" aria-label="Live call with Sarah">
          <div className="voice-panel-head">
            <span className={`voice-avatar ${agentTalking ? "talking" : ""}`}>S</span>
            <div>
              <strong>Sarah</strong>
              <small>IJW Labs assistant</small>
            </div>
          </div>
          <div className="voice-status">
            <span className="voice-live-dot" />
            {agentTalking ? "Sarah is speaking…" : "Listening — go ahead and talk"}
          </div>
          <button className="voice-end" onClick={endCall}>End call</button>
        </div>
      )}

      <button
        className={`voice-float ${live ? "is-live" : ""} ${status === "error" ? "is-error" : ""}`}
        onClick={live ? endCall : startCall}
        disabled={connecting}
        aria-label={live ? "End call with Sarah" : "Talk to Sarah, our voice assistant"}
        title={live ? "End call" : "Talk to Sarah"}
      >
        {connecting ? (
          <span className="voice-spinner" aria-hidden="true" />
        ) : live ? (
          <IconHangup />
        ) : status === "error" ? (
          <span className="voice-x" aria-hidden="true">!</span>
        ) : (
          <IconMic />
        )}
      </button>
    </div>
  );
}

function IconMic() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" fill="#fff" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v3M9 20h6" stroke="#fff" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHangup() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.5 14.5c5-4.5 12-4.5 17 0l-2.2 2.2a1.6 1.6 0 0 1-2 .2l-2-1.3a1.6 1.6 0 0 1-.7-1.3v-1.1c-2-.6-4.2-.6-6.2 0v1.1a1.6 1.6 0 0 1-.7 1.3l-2 1.3a1.6 1.6 0 0 1-2-.2L3.5 14.5Z"
        fill="#fff" transform="rotate(135 12 12)" />
    </svg>
  );
}

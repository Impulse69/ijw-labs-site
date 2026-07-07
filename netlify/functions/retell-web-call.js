// Mints a short-lived Retell web-call access token.
// The Retell API key stays server-side (Netlify env var) and is never exposed to the browser.
const RETELL_AGENT_ID = process.env.RETELL_AGENT_ID || "agent_d85df170855974c5831d6d77a6";

export default async (req) => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.RETELL_API_KEY;
  if (!apiKey) {
    return json({ error: "Voice calling is not configured yet." }, 500);
  }

  try {
    const res = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ agent_id: RETELL_AGENT_ID }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Retell create-web-call failed:", res.status, detail);
      return json({ error: "Could not start the call. Please try again." }, 502);
    }

    const data = await res.json();
    // Only hand the browser what it needs to connect — nothing sensitive.
    return json({ access_token: data.access_token, call_id: data.call_id }, 200);
  } catch (err) {
    console.error("Retell web-call error:", err);
    return json({ error: "Could not start the call. Please try again." }, 500);
  }
};

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

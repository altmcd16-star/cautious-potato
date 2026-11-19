const PRESENCE_URL = "https://presence.roblox.com/v1/presence/users";

async function getRobloxPresence(userId) {
  if (!/^\d+$/.test(String(userId))) {
    throw new Error("Invalid Roblox user ID");
  }

  const response = await fetch(PRESENCE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userIds: [Number(userId)] })
  });

  if (!response.ok) {
    throw new Error(`Roblox API returned ${response.status}`);
  }

  const data = await response.json();
  const presence = data.userPresences?.[0];
  if (!presence) return null;

  const statuses = {
    0: "Offline",
    1: "Online",
    2: "In Game",
    3: "In Studio",
    4: "Invisible"
  };

  return {
    userId: String(presence.userId),
    status: statuses[presence.userPresenceType] || "Unknown",
    lastLocation: presence.lastLocation || null,
    placeId: presence.placeId || null
  };
}

module.exports = { getRobloxPresence };

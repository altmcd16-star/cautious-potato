# Roblox Presence Discord Bot

A Discord.js v14 bot with `/presence userid:<Roblox user ID>`.

## Files
- `index.js`: Discord bot and slash command
- `robloxPresence.js`: Roblox public presence lookup
- `package.json`: Node dependencies

## Local setup
1. Copy `.env.example` to `.env` and fill in values.
2. Run `npm install`.
3. Run `npm start`.

## Render
Create a **Background Worker** from this GitHub repository.
- Build command: `npm install`
- Start command: `npm start`
Add the three variables from `.env.example` in Render's Environment settings.

Never commit `.env` or your bot token.

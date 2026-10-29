<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/983c6f49-1e87-4298-9ea5-e940855cff43

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Demo Login and Role Access

The app opens on the login screen. Demo users can sign in with the password `prism2026`:

- Student (`alex.vance@school.edu`): student profile, lessons, engagement, assignments, and reminders.
- Educator (`sarah.chen@school.edu`): assignments and evaluation, engagement, and reminders.
- Specialist (`marcus.brody@district.k12`): governance, contract validation, backend console, and state export.

These are demo-only client-side role controls, not production authentication or server-side authorization.

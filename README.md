# Bhavani Matrimony — rebuild

A modern, mobile-first matrimony site with **real registration, login, and profile search**, built on Firebase (free tier).

## Step 1 — Create a Firebase project (one-time setup)

1. Go to https://console.firebase.google.com and sign in with a Google account.
2. Click **Add project** → give it a name (e.g. "bhavani-matrimony") → follow the prompts (you can disable Google Analytics, not needed) → **Create project**.
3. Once created, click the **Web icon (</>)** on the project overview page to register a web app. Give it a nickname and click **Register app**.
4. Firebase will show you a code block with a `firebaseConfig` object — copy those 6 values (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId).
5. Open `firebase-config.js` in this project and paste your values in, replacing the placeholders.

## Step 2 — Turn on Authentication

1. In the Firebase Console sidebar, go to **Build → Authentication → Get started**.
2. Under the **Sign-in method** tab, enable **Email/Password**.

## Step 3 — Turn on Firestore (the database)

1. In the sidebar, go to **Build → Firestore Database → Create database**.
2. Choose **Start in production mode** → pick a location close to you → **Enable**.
3. Go to the **Rules** tab and replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /profiles/{userId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
      allow delete: if false;
    }
  }
}
```

This means: any logged-in user can browse/search profiles, but you can only create or edit your *own* profile. Click **Publish**.

## Step 4 — Test locally (optional but recommended)

Since this uses Firebase's web SDK, you can just open `index.html` directly in a browser to test — no local server needed. Try registering a test account and confirm it shows up when you search.

## Step 5 — Deploy to Vercel

1. Push this whole folder to a GitHub repo (or drag-and-drop it into Vercel's "deploy without Git" uploader).
2. In Vercel, **Add New → Project**, import the repo.
3. Framework preset: **Other** (no build step needed).
4. Deploy. You'll get a live URL.

**Important:** Firebase Authentication only allows requests from domains you've explicitly authorized. After deploying:
- Go to Firebase Console → Authentication → Settings → **Authorized domains**
- Click **Add domain** and add your Vercel URL (e.g. `your-project.vercel.app`)
- Without this step, login/register will fail on the live site with a "domain not authorized" error.

## File structure

```
index.html          Home + quick search
register.html        Sign-up form → creates Firebase Auth user + Firestore profile
login.html            Sign-in form
search.html           Filter & browse profiles (caste, religion, age, marital status)
dashboard.html        Logged-in user's own profile, editable
about.html            About Us
contact.html          Contact Us
firebase-config.js    YOUR Firebase project credentials go here
app.js                Shared nav behavior + auth state watcher
styles.css            Warm maroon/gold/cream theme, mobile-first responsive
```

## Known limitations (things to add later if needed)

- **Photos**: currently a paste-a-URL field, not a real image upload. Adding real photo uploads requires enabling Firebase Storage (a short additional step) — ask if you want this built.
- **Messaging between members**: not included yet — this rebuild covers registration, login, search, and profile management, which was the core ask.
- **Admin moderation**: there's no admin panel to approve/reject profiles before they go live. Every registered profile is immediately searchable.

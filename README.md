# Bipolar Gossamer website

Static site (plain HTML/CSS/JS, no build step) for GitHub Pages.

```
index.html        Home page
css/styles.css    All styling. Colors and fonts are the variables at the top.
js/main.js        Mobile menu, hero scroll, reveal animations, YouTube embed
images/           Put photos here (hero.jpg, portrait.jpg, ...)
.nojekyll         Tells GitHub Pages to serve files as-is
```

## Preview locally
Double-click `index.html`, or run `python -m http.server` in this folder and open http://localhost:8000.

## Photos
Full-size originals from Cynthia's "Website Pictures" Drive folder live in `images/originals/`. That folder is git-ignored, so it never gets pushed. The site uses resized copies:

| Original | Used as | Where |
|---|---|---|
| background of above the fold? | `images/butterfly.jpg` (900px square) | Hero, next to "Gossamer" |
| "Photo of Cynthia" | `images/portrait.jpg` (900px wide) | "Navigating Life with Bipolar Disorder" |
| Strength in vulnerability | `images/strength.jpg` (900px) | "Finding Strength in Vulnerability" |
| Fb pfp | `images/about.jpg` (800x1000 crop) | About me section |
| fb pfp sunset ocean | not used yet | |
| secondary professional photo | not used (low-res screenshot) | |

When adding photos, keep them under about 1600px wide and 300 KB.

## To-dos marked in index.html (search for `TODO`)
- **YouTube:** set `data-video-id="..."` on the `.yt` element to embed a video.
- **Mood tracker sign-up:** replace the `<form class="signup">` with an embed from Tally, MailerLite, Kit or a similar service.
- **Reviews:** replace the placeholder quotes with real testimonials (with permission).
- **Other pages:** About, Life Coaching, Free Resources, FAQ and Contact are linked but not built yet.

## Publish on GitHub Pages
1. Create a repo on GitHub (e.g. `bipolargossamer`) and push this folder:
   ```
   git init
   git add .
   git commit -m "Initial home page"
   git branch -M main
   git remote add origin https://github.com/USERNAME/bipolargossamer.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages → Build and deployment**, set Source to **Deploy from a branch**, then pick **main** and **/ (root)**.
3. After a minute the site is live at `https://USERNAME.github.io/bipolargossamer/`.

## Custom domain (later)
1. Buy the domain (e.g. from Namecheap, Porkbun, Cloudflare or Squarespace Domains).
2. In the repo, go to **Settings → Pages → Custom domain**, enter `www.yourdomain.com` and save. This adds a `CNAME` file.
3. At the registrar, add DNS records:
   - `CNAME` record: `www` pointing to `USERNAME.github.io`
   - `A` records for the bare domain (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. When the DNS check passes, tick **Enforce HTTPS**.

All links in the site are relative, so nothing needs to change when you switch domains.

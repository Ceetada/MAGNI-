# Magni Automations — Go-Live & SEO Checklist

A step-by-step guide to take the site fully live and get it indexed by Google
and AI search engines. Work top to bottom — each step unlocks the next.

---

## Step 1 — Connect your domain (magniautomation.com)

**Why:** Google can't rank a site it can't find at a stable address. The site's
SEO tags already point to `https://magniautomation.com`, so once this is done
everything lines up automatically.

### 1a. Add the domain in Vercel
1. Open the **magni-** project in Vercel.
2. Left sidebar → **Domains**.
3. Type `magniautomation.com` → **Add**.
4. When prompted, also add `www.magniautomation.com` and let Vercel redirect it
   to the root domain. (Keep `magniautomation.com` as the primary.)

### 1b. Point your DNS at Vercel
After adding, Vercel shows the exact records to create. It's usually:

| Type  | Name  | Value                    |
|-------|-------|--------------------------|
| A     | `@`   | `76.76.21.21`            |
| CNAME | `www` | `cname.vercel-dns.com`   |

> Use whatever values **Vercel actually displays** — they are the source of truth.

Log in to the registrar where you **bought** magniautomation.com, open
**DNS settings / Manage DNS**, and add those records. Save.

### 1c. Wait for verification
- DNS can take a few minutes to a few hours to propagate.
- In Vercel's Domains page, the domain flips to green **Valid Configuration**.
- Vercel auto-issues the HTTPS (SSL) certificate — no action needed.

**✅ Done when:** visiting `https://magniautomation.com` loads the site with a
padlock (secure) icon.

---

## Step 2 — Verify the deploy is serving the right content

Once the domain is live, open these directly in the browser:

- `https://magniautomation.com/robots.txt` → shows the AI crawler list + Sitemap line
- `https://magniautomation.com/sitemap.xml` → lists the home page + 4 project URLs
- Homepage → scroll to confirm the **FAQ** section appears

Hard-refresh if anything looks stale: `Ctrl/Cmd + Shift + R`.

---

## Step 3 — Set up Google Search Console (free)

**Why:** This is how Google officially indexes you and reports which searches
you appear for. It's the single most important off-site SEO step.

1. Go to **https://search.google.com/search-console**.
2. Sign in with your Google account.
3. Add a property → choose **Domain** → enter `magniautomation.com`.
4. Google gives you a **TXT record** to verify ownership.
5. Add that TXT record in your registrar's DNS (same place as Step 1b) → Save.
6. Back in Search Console, click **Verify**. (May take a few minutes.)

**✅ Done when:** Search Console shows the property as verified.

---

## Step 4 — Submit your sitemap to Google

1. In Search Console, left sidebar → **Sitemaps**.
2. Enter `sitemap.xml` in the box → **Submit**.
3. Status should read **Success** within a day or two.

This tells Google about all 5 pages at once so nothing is missed.

**Optional — Bing:** repeat at **https://www.bing.com/webmasters** (also free).
Bing powers some AI search results, so it's worth 5 minutes.

---

## Step 5 — Test the structured data

Confirm the rich results / AI-readable data are valid on the live domain:

- **Rich Results Test:** https://search.google.com/test/rich-results
  → paste `https://magniautomation.com` → expect **FAQ** detected, no errors.
- **Schema validator:** https://validator.schema.org
  → paste the same URL → expect ProfessionalService, WebSite, ItemList, FAQPage.

---

## Step 6 — Ongoing (no code required)

These drive long-term ranking and can't be done in a single pass:

- **Backlinks** — get listed in AI-agency directories, add your site to your
  social profiles, ask clients to link to you.
- **Google Business Profile** — set one up if you want local/map visibility.
- **Content** — a simple blog (e.g. "How AI voice agents book appointments 24/7")
  is what pulls in steady search traffic over time.
- **Re-check Search Console monthly** — see what people search to find you and
  double down on what works.

---

## Optional later — static pre-rendering

The site is a client-rendered React SPA. Google can read it, but static HTML is
more reliable for crawlers. If SEO becomes a priority, migrating to a framework
that pre-renders pages (Next.js or Astro) would make every page's full content
visible in the raw HTML. Not urgent — the structured data and FAQ answers that
matter most for AI search are already in static HTML.

---

### Quick status reference

| Layer                                            | Status              |
|--------------------------------------------------|---------------------|
| On-page technical (titles, meta, sitemap, schema)| ✅ Done             |
| Domain live + HTTPS                              | ⏸️ Step 1           |
| Deploy serving correct content                  | ⏳ Step 2 (verify)  |
| Google Search Console + sitemap                 | ⏳ Steps 3–4        |
| Structured data validated on live URL           | ⏳ Step 5           |
| Backlinks / content / off-page                  | 📈 Step 6 (ongoing) |

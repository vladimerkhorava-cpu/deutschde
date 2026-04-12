/**
 * DeutschDE Marketing Agents
 *
 * Four AI-powered agents to market the DeutschDE German-language learning PWA:
 *   - contentAgent:  social media posts & promotional copy
 *   - emailAgent:    user-acquisition / retention email campaigns
 *   - seoAgent:      SEO-optimised landing-page content
 *   - engageAgent:   push-notification & in-app re-engagement messages
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node agents.js content
 *   ANTHROPIC_API_KEY=sk-ant-... node agents.js email
 *   ANTHROPIC_API_KEY=sk-ant-... node agents.js seo
 *   ANTHROPIC_API_KEY=sk-ant-... node agents.js engage
 *   ANTHROPIC_API_KEY=sk-ant-... node agents.js all
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

const MODEL = "claude-opus-4-6";

// ─── shared app context injected into every agent ──────────────────────────
const APP_CONTEXT = `
DeutschDE is a free, open-source Progressive Web App (PWA) that teaches German
verbs to Georgian-speaking students.

Key facts:
- 270+ German verbs with Georgian translations
- Flashcard mode, quiz mode, and searchable verb list
- Verb-family groupings (geben-, gehen-, kommen-family, etc.)
- Offline support via service worker – works without internet
- Installable on any phone as a home-screen app (no app store needed)
- Example sentences in both German and Georgian for every verb
- Completely free, no ads, no sign-up required
- Target audience: Georgian students learning German (A1–B2 level)

Tone: friendly, encouraging, educational. Avoid jargon. Highlight the
"free & offline" angle and the bilingual (German/Georgian) experience.
`.trim();

// ─── helpers ───────────────────────────────────────────────────────────────

/**
 * Call Claude with adaptive thinking and streaming, then return the full text.
 * @param {string} systemPrompt
 * @param {string} userPrompt
 * @returns {Promise<string>}
 */
async function callAgent(systemPrompt, userPrompt) {
  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 4096,
    thinking: { type: "adaptive" },
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  process.stdout.write("\n");
  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      process.stdout.write(event.delta.text);
    }
  }
  process.stdout.write("\n");

  const final = await stream.finalMessage();
  return final.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");
}

function header(title) {
  const line = "─".repeat(60);
  console.log(`\n${line}\n  ${title}\n${line}`);
}

// ─── Agent 1: Content Marketing ─────────────────────────────────────────────

async function contentAgent() {
  header("Content Marketing Agent");

  const system = `You are an expert social-media content creator specialising in
edtech and language-learning apps. You write concise, engaging copy that
resonates with students and teachers.

${APP_CONTEXT}`;

  const user = `Create a content-marketing pack for DeutschDE. Include:

1. **Instagram / Facebook post** (≤ 280 chars, with 5 relevant hashtags)
2. **Twitter/X thread** (3 tweets, each ≤ 280 chars)
3. **LinkedIn post** (professional tone, ≤ 600 chars)
4. **YouTube video description** (≤ 200 chars, punchy hook)
5. **Short app-store description** (≤ 80 chars, for the PWA manifest)

Write all copy in English. Where relevant, mention Georgian-language support
and the offline / installable nature of the app.`;

  await callAgent(system, user);
}

// ─── Agent 2: Email Campaign ─────────────────────────────────────────────────

async function emailAgent() {
  header("Email Campaign Agent");

  const system = `You are a CRM specialist and email copywriter for edtech products.
You craft email campaigns that drive installs and daily study habits.

${APP_CONTEXT}`;

  const user = `Design a 3-email drip campaign for new users of DeutschDE. For each email provide:
- Subject line
- Preview text (≤ 90 chars)
- Body (plain text, ≤ 200 words, friendly & motivating tone)
- Single clear CTA

Email 1 – Welcome & first impression (sent immediately after sign-up)
Email 2 – Habit-building tip (sent on day 3)
Email 3 – Re-engagement if the user hasn't opened the app in 7 days`;

  await callAgent(system, user);
}

// ─── Agent 3: SEO Content ───────────────────────────────────────────────────

async function seoAgent() {
  header("SEO Content Agent");

  const system = `You are an SEO strategist and web copywriter focused on
language-learning and edtech. You write content that ranks well and converts.

${APP_CONTEXT}`;

  const user = `Produce SEO content for DeutschDE's landing page:

1. **Page title** (≤ 60 chars, include primary keyword)
2. **Meta description** (≤ 155 chars)
3. **H1 headline** (compelling, keyword-rich)
4. **Three H2 sub-sections** with a short paragraph (≤ 80 words each) covering:
   - What the app does
   - Who it's for
   - Why it's better than alternatives
5. **10 target keywords** (mix of short-tail and long-tail)

Focus on English-language search traffic for queries like "learn German verbs",
"German Georgian dictionary", "German learning app offline".`;

  await callAgent(system, user);
}

// ─── Agent 4: User Engagement ────────────────────────────────────────────────

async function engageAgent() {
  header("User Engagement Agent");

  const system = `You are a growth-hacker specialising in mobile PWA retention.
You create micro-copy that re-activates lapsed users and rewards active ones.

${APP_CONTEXT}`;

  const user = `Write a set of push-notification and in-app messages for DeutschDE:

**Push notifications (≤ 90 chars each)**
1. Daily study reminder (morning)
2. Streak-at-risk warning (evening, user hasn't studied today)
3. New achievement unlocked
4. Weekend challenge invitation

**In-app messages (≤ 120 chars each)**
1. Onboarding welcome banner
2. After completing first flashcard session
3. When a user marks 10 verbs as "known"
4. Encourage quiz mode after flashcard practice

**Gamification suggestions**
List 5 small feature ideas (one sentence each) that would boost daily
retention through streaks, badges, or social sharing.`;

  await callAgent(system, user);
}

// ─── Runner ─────────────────────────────────────────────────────────────────

const AGENTS = {
  content: contentAgent,
  email: emailAgent,
  seo: seoAgent,
  engage: engageAgent,
};

async function main() {
  const arg = process.argv[2] ?? "all";

  if (arg === "all") {
    for (const fn of Object.values(AGENTS)) {
      await fn();
    }
  } else if (AGENTS[arg]) {
    await AGENTS[arg]();
  } else {
    console.error(
      `Unknown agent "${arg}". Choose from: ${Object.keys(AGENTS).join(", ")}, all`,
    );
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

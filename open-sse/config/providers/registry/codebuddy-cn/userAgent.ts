/**
 * CODEBUDDY_CN_USER_AGENT is the single source of truth for the CLI/CodeBuddy
 * version string. It MUST stay identical across OAuth
 * (src/lib/oauth/constants/oauth.ts), chat completions (./index.ts) and
 * usage/quota (open-sse/services/usage/codebuddy-cn.ts) — a mismatched version
 * string across a single account's auth vs. chat calls is exactly the kind of
 * internally-inconsistent client fingerprint Tencent's WAF flags as anomalous
 * (#12702).
 *
 * It lives in its own dependency-free module because the provider registry is
 * reachable from the browser bundle (dashboard model pickers import
 * `open-sse/config/providerModels.ts`), while `src/lib/oauth/constants/oauth.ts`
 * pulls in `open-sse/utils/cursorAgentCliVersion.ts` and therefore `node:fs`.
 * Importing the OAuth constants module from the registry (#13264) made
 * `next build --turbopack` fail with "the chunking context does not support
 * external modules (request: node:fs)" on every dashboard page.
 */
export const CODEBUDDY_CN_USER_AGENT = "CLI/2.108.1 CodeBuddy/2.108.1";

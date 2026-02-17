import { Actor, HttpAgent } from "@dfinity/agent";

// Imports and re-exports candid interface
import { idlFactory } from "./backend.did.js";
export { idlFactory } from "./backend.did.js";

/* CANISTER_ID is replaced by webpack based on node environment
 * Note: canister environment variable will be standardized as
 * process.env.CANISTER_ID_<CANISTER_NAME_UPPERCASE>
 * beginning in dfx 0.15.0
 */
export const canisterId =
  process.env.CANISTER_ID_BACKEND;

export const createActor = (canisterId, options = {}) => {
  const agent = options.agent || new HttpAgent({ ...options.agentOptions });

  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }

  // Fetch root key for certificate validation during development
  if (process.env.DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions,
  });
};

// ─── MOCK BACKEND FOR DEMO/VERCEL ──────────────────────────────
const mockBackend = {
  greet: async (name) => `[DEMO] Hello ${name}! AnveshakAI is running in demo mode (No Backend Connection).`,
  prompt: async (text) => ({ Ok: `[DEMO] This is a simulated response. The backend is not connected. You said: "${text}"` }),
  icp_ai_prompt: async (text) => ({ Ok: `[DEMO] Simulated AI response for: "${text}".\n\n(To get real responses, deploy the backend to IC Mainnet and configure CANISTER_ID_BACKEND).` }),
  get_user_dashboard: async () => ({ Ok: { cycles_balance: 10000n, total_cycles_spent: 1250n, conversation_count: 5n, token_balance: 500n, stored_content_count: 2n, subscription_tier: [] } }),
  get_canister_metrics: async () => ({ total_queries: 120n, total_cycles_consumed: 500000n, total_users: 15n, storage_used_bytes: 1024n, uptime_start: 0n }),
  get_available_providers: async () => ["gemini-mock", "gpt-mock"],
  get_ai_token_balance: async () => 500n,
  get_user_cycles_balance: async () => 10000n,
  store_ai_content: async () => ({ Ok: "mock_content_id_123" }),
  get_stored_content: async () => ({ Err: "Content storage is simulated." }),
  create_sns_proposal: async () => ({ Ok: 1n }),
  get_sns_proposals: async () => [],
  vote_sns_proposal: async () => ({ Ok: "Voted (Mock)" }),
  mint_ai_tokens: async () => ({ Ok: "Minted (Mock)" }),
  deposit_user_cycles: async () => ({ Ok: "Deposited (Mock)" }),
  set_api_key: async () => { }, // No-op
  set_provider_api_key: async () => { }, // No-op
};

// Use Mock if canisterId is missing (e.g. Vercel without env var)
export const backend = canisterId ? createActor(canisterId) : mockBackend;

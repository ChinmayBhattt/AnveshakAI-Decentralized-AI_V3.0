import React from 'react';

const ApiReference = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#18181b] text-[#f4f4f5] font-sans selection:bg-[#22d3ee] selection:text-black">
            {/* Fixed Navbar */}
            <nav className="fixed w-full z-50 border-b border-[#27272a] bg-[#18181b]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-tr from-[#22d3ee] to-[#3b82f6] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <span className="text-black font-bold text-lg">A</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">Anveshak API</span>
                    </div>
                    <button
                        onClick={onBack}
                        className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors flex items-center gap-2"
                    >
                        ← Back to App
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-24 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
                <header className="border-b border-[#27272a] pb-8 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">API Reference</h1>
                    <p className="text-[#a1a1aa] text-lg max-w-2xl">
                        Documentation for interacting with AnveshakAI's backend canisters directly via the Internet Computer Protocol.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Authentication */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#22d3ee] mb-6 flex items-center gap-2">
                            <span className="text-lg opacity-50">01.</span> Authentication
                        </h2>
                        <p className="text-[#a1a1aa] leading-relaxed mb-6">
                            All API requests must be authenticated using an Internet Identity principal. The backend verifies the caller's principal for every state-changing method.
                        </p>
                        <div className="bg-[#202022] rounded-xl border border-[#27272a] overflow-hidden">
                            <div className="px-6 py-3 border-b border-[#27272a] bg-[#1a1a1c] flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-[#71717a] font-mono">Example Request</span>
                            </div>
                            <div className="p-6 font-mono text-sm overflow-x-auto">
                                <span className="text-[#c084fc]">import</span> <span className="text-[#f4f4f5]">{`{ AuthClient }`}</span> <span className="text-[#c084fc]">from</span> <span className="text-[#a5b4fc]">"@dfinity/auth-client"</span>;<br /><br />
                                <span className="text-[#60a5fa]">const</span> <span className="text-[#f4f4f5]">authClient</span> <span className="text-[#c084fc]">=</span> <span className="text-[#c084fc]">await</span> <span className="text-[#f4f4f5]">AuthClient.create();</span><br />
                                <span className="text-[#60a5fa]">const</span> <span className="text-[#f4f4f5]">identity</span> <span className="text-[#c084fc]">=</span> <span className="text-[#f4f4f5]">authClient.getIdentity();</span>
                            </div>
                        </div>
                    </section>

                    {/* Endpoints */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#22d3ee] mb-6 flex items-center gap-2">
                            <span className="text-lg opacity-50">02.</span> Core Canister Methods
                        </h2>

                        <div className="space-y-8">
                            {/* Method 1 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#22d3ee]/10 text-[#22d3ee] px-2 py-1 rounded text-xs font-bold font-mono uppercase tracking-wider">QUERY</span>
                                    <h3 className="text-xl font-bold text-white font-mono">get_user_dashboard(principal)</h3>
                                </div>
                                <p className="text-[#a1a1aa]">Retrieves the dashboard data associated with a specific user principal. Returns user settings, usage stats, and saved chats.</p>
                                <div className="bg-[#1a1a1c] border border-[#27272a] rounded-lg p-4 font-mono text-sm text-[#a1a1aa]">
                                    Returns: <span className="text-[#a5b4fc]">Result&lt;UserDashboard, Error&gt;</span>
                                </div>
                            </div>

                            {/* Method 2 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded text-xs font-bold font-mono uppercase tracking-wider">UPDATE</span>
                                    <h3 className="text-xl font-bold text-white font-mono">save_chat_session(session_data)</h3>
                                </div>
                                <p className="text-[#a1a1aa]">Persists a chat session to the canister storage. Requires the caller to be the owner of the session.</p>
                                <div className="bg-[#1a1a1c] border border-[#27272a] rounded-lg p-4 font-mono text-sm text-[#a1a1aa]">
                                    Returns: <span className="text-[#a5b4fc]">Result&lt;SessionId, Error&gt;</span>
                                </div>
                            </div>
                            {/* Method 3 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#22d3ee]/10 text-[#22d3ee] px-2 py-1 rounded text-xs font-bold font-mono uppercase tracking-wider">QUERY</span>
                                    <h3 className="text-xl font-bold text-white font-mono">get_available_providers()</h3>
                                </div>
                                <p className="text-[#a1a1aa]">Lists the currently supported AI providers (e.g., Gemini, OpenAI, Claude) available for the user to switch between.</p>
                                <div className="bg-[#1a1a1c] border border-[#27272a] rounded-lg p-4 font-mono text-sm text-[#a1a1aa]">
                                    Returns: <span className="text-[#a5b4fc]">Vec&lt;ProviderInfo&gt;</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ApiReference;

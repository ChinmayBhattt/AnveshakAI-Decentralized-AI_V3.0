import React from 'react';

const TermsOfService = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#18181b] text-[#f4f4f5] font-sans selection:bg-[#22d3ee] selection:text-black">
            {/* Fixed Navbar */}
            <nav className="fixed w-full z-50 border-b border-[#27272a] bg-[#18181b]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-tr from-[#22d3ee] to-[#3b82f6] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <span className="text-black font-bold text-lg">A</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">Anveshak Terms</span>
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
            <div className="pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
                <header className="border-b border-[#27272a] pb-8 mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Terms of Service</h1>
                    <p className="text-[#a1a1aa]">Last Updated: {new Date().toLocaleDateString()}</p>
                </header>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#22d3ee]">1. Acceptance of Terms</h2>
                        <p className="text-[#a1a1aa] leading-relaxed text-lg">
                            By accessing and using AnveshakAI, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#22d3ee]">2. Description of Service</h2>
                        <p className="text-[#a1a1aa] leading-relaxed text-lg">
                            AnveshakAI is a decentralized AI assistant running on the Internet Computer Protocol. It provides document analysis and query capabilities using AI technology.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#22d3ee]">3. User Responsibilities</h2>
                        <div className="bg-[#202022] p-6 rounded-xl border border-[#27272a]">
                            <p className="text-[#a1a1aa] mb-4">You agree NOT to use AnveshakAI to:</p>
                            <ul className="space-y-2 text-[#a1a1aa]">
                                <li className="flex gap-2"><span className="text-red-400">✖</span> Upload illegal, harmful, or malicious content.</li>
                                <li className="flex gap-2"><span className="text-red-400">✖</span> Attempt to exploit vulnerabilities in the smart contracts.</li>
                                <li className="flex gap-2"><span className="text-red-400">✖</span> Use the service for generating disinformation or hate speech.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#22d3ee]">4. Disclaimer of Warranties</h2>
                        <p className="text-[#a1a1aa] leading-relaxed text-lg">
                            The service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. As a decentralized application, we do not guarantee uninterrupted access or total freedom from errors.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#22d3ee]">5. Limitation of Liability</h2>
                        <p className="text-[#a1a1aa] leading-relaxed text-lg">
                            AnveshakAI and its contributors shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the service or smart contracts.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#22d3ee]">6. Governance</h2>
                        <p className="text-[#a1a1aa] leading-relaxed text-lg">
                            AnveshakAI is subject to decentralized governance. Updates to the protocol and these terms may be proposed and voted upon by the community DAO.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;

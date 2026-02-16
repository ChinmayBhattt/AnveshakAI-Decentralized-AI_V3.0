import React from 'react';

const PrivacyPolicy = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#18181b] text-[#f4f4f5] font-sans p-8 md:p-12">
            <button
                onClick={onBack}
                className="mb-8 text-[#22d3ee] hover:text-[#06b6d4] transition-colors flex items-center gap-2"
            >
                ← Back to App
            </button>

            <div className="max-w-4xl mx-auto space-y-8">
                <header className="border-b border-[#27272a] pb-8">
                    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-[#a1a1aa]">Last Updated: {new Date().toLocaleDateString()}</p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#22d3ee]">1. Data Sovereignty & Decentralization</h2>
                    <p className="text-[#a1a1aa] leading-relaxed">
                        AnveshakAI is built on the <strong>Internet Computer Protocol (ICP)</strong>, ensuring that your interactions and data remain under your control. unlike traditional centralized AI services, we do not store your data on opaque servers owned by a single corporation.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#22d3ee]">2. Data Collection</h2>
                    <div className="bg-[#202022] p-6 rounded-lg border border-[#27272a]">
                        <ul className="list-disc list-inside space-y-2 text-[#a1a1aa]">
                            <li><strong>Identity:</strong> We use Internet Identity for authentication, which allows you to sign in anonymously without revealing your email or phone number.</li>
                            <li><strong>Documents:</strong> Files updated to AnveshakAI are stored in Canister smart contracts. You retain ownership of this data.</li>
                            <li><strong>Queries:</strong> Your conversations with the AI are processed securely. While we use Google Gemini for the AI engine, we are working towards fully on-chain inference.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#22d3ee]">3. Security</h2>
                    <p className="text-[#a1a1aa] leading-relaxed">
                        Your data is secured by the cryptographic properties of the Internet Computer blockchain. Canister smart contracts are tamper-proof and operate exactly as programmed.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#22d3ee]">4. Third-Party Services</h2>
                    <p className="text-[#a1a1aa] leading-relaxed">
                        Currently, AnveshakAI utilizes Google Gemini API for generating responses. Please refer to Google's privacy policy for understanding how they handle transient data during processing.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#22d3ee]">5. User Rights</h2>
                    <p className="text-[#a1a1aa] leading-relaxed">
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-[#a1a1aa] ml-4">
                        <li>Access your stored documents.</li>
                        <li>Delete your documents and history from the canister.</li>
                        <li>Manage your Internet Identity anchors.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

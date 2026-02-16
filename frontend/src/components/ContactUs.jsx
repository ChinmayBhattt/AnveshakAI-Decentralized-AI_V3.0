import React from 'react';

const ContactUs = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#18181b] text-[#f4f4f5] font-sans p-8 md:p-12">
            <button
                onClick={onBack}
                className="mb-8 text-[#22d3ee] hover:text-[#06b6d4] transition-colors flex items-center gap-2"
            >
                ← Back to App
            </button>

            <div className="max-w-3xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#22d3ee] to-blue-500 bg-clip-text text-transparent">Get in Touch</h1>
                    <p className="text-[#a1a1aa] text-lg">We'd love to hear from you. Here's how you can reach us.</p>
                </header>

                <div className="grid gap-6">
                    {/* Email Card */}
                    <div className="bg-[#202022] p-8 rounded-xl border border-[#27272a] hover:border-[#22d3ee]/50 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#22d3ee]/10 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-[#22d3ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                <p className="text-[#a1a1aa] mb-4">For general inquiries, support, and partnerships.</p>
                                <a href="mailto:contact@anveshak.ai" className="text-[#22d3ee] hover:underline">hackerunity.community@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="bg-[#202022] p-8 rounded-xl border border-[#27272a] hover:border-[#22d3ee]/50 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#22d3ee]/10 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-[#22d3ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Office</h3>
                                <p className="text-[#a1a1aa] mb-2">Cbe 13,1st floor</p>
                                <p className="text-[#f4f4f5]">Vikramaditya Marg, Mansarovar</p>
                                <p className="text-[#f4f4f5]">Rajasthan, Jaipur, 302020</p>
                            </div>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-[#202022] p-8 rounded-xl border border-[#27272a] hover:border-[#22d3ee]/50 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#22d3ee]/10 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-[#22d3ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                                <p className="text-[#a1a1aa] mb-4">Mon-Fri from 9am to 6pm.</p>
                                <a href="tel:+919876543210" className="text-[#22d3ee] hover:underline">+91 8852924002</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

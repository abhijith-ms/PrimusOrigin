import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.target;
        const formData = new FormData(form);
        
        formData.append("access_key", "30ca9965-6e31-4771-8560-38d0c216462d");
        formData.append("subject", "New Business Enquiry from PrimusOrigin Website");
        formData.append("from_name", "PrimusOrigin Contact Form");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus('success');
                form.reset();
                setTimeout(() => setFormStatus(null), 5000);
            } else {
                console.log("Error", data);
                setFormStatus('error');
            }
        } catch (error) {
            console.log("Error", error);
            setFormStatus('error');
        }
    };

    return (
        <section className="py-16 md:py-24 bg-bg">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Start Your Export Journey</h2>
                    <p className="text-text/70 text-base md:text-lg max-w-2xl mx-auto">
                        Ready to explore premium Indian products? Contact us for inquiries, samples, or bulk orders.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <h3 className="text-2xl font-serif font-bold mb-6 relative z-10">Contact Information</h3>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                                    <HiMail className="text-xl text-accent" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm mb-1">Email Us</p>
                                    <a href="mailto:primusoriginbusiness@gmail.com" className="text-base hover:text-accent transition-colors break-all">
                                        primusoriginbusiness@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                                    <HiPhone className="text-xl text-accent" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm mb-1">Call / WhatsApp</p>
                                    <a href="tel:+918762154637" className="text-base hover:text-accent transition-colors block">
                                        +91 87621 54637
                                    </a>
                                    <a 
                                        href="https://wa.me/918762154637" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-2 text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors"
                                    >
                                        <span>💬</span> Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                                    <HiLocationMarker className="text-xl text-accent" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm mb-1">Location</p>
                                    <p className="text-base">Kerala, India</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <h4 className="text-sm font-semibold text-accent mb-3">Business Hours</h4>
                                <div className="space-y-2 text-sm text-white/80">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                    <p>Saturday: 9:00 AM - 2:00 PM IST</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-primary/10"
                    >
                        {formStatus === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <HiCheckCircle className="text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                                <p className="text-text/70">Thank you for your enquiry. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setFormStatus(null)}
                                    className="mt-6 text-primary font-semibold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text/70 mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-bg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text/70 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-bg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-text/70 mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-4 py-3 rounded-lg bg-bg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="Your Company Ltd"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-text/70 mb-2">Country *</label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-bg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="USA"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="product_category" className="block text-sm font-medium text-text/70 mb-2">Product Category *</label>
                                        <select
                                            id="product_category"
                                            name="product_category"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-bg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        >
                                            <option value="">Select Category</option>
                                            <option value="spices">Spices & Condiments</option>
                                            <option value="textiles">Textiles & Garments</option>
                                            <option value="grains">Grains & Cereals</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="order_type" className="block text-sm font-medium text-text/70 mb-2">Order Type *</label>
                                        <select
                                            id="order_type"
                                            name="order_type"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-bg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        >
                                            <option value="">Select Type</option>
                                            <option value="bulk">Bulk Order</option>
                                            <option value="retail">Retail Order</option>
                                            <option value="sample">Sample Request</option>
                                            <option value="inquiry">General Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text/70 mb-2">Message / Requirements *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                                </button>

                                {formStatus === 'error' && (
                                    <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

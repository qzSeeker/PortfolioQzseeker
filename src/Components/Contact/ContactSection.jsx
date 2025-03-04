import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, MapPin, Github } from "lucide-react";

function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const socialLinks = [
        {
        icon: <Github className="w-5 h-5" />,
        name: "GitHub",
        href: "https://github.com/qzSeeker",
        },
        {
        icon: <Linkedin className="w-5 h-5" />,
        name: "LinkedIn",
        href: "https://linkedin.com/in/arpit-yadav-29b5a0257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
        icon: <Twitter className="w-5 h-5" />,
        name: "Twitter",
        href: "https://twitter.com/qzseeker",
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend service
        console.log("Form submitted:", formData);

        // Clear form and show submission confirmation
        setFormData({
        name: "",
        email: "",
        message: "",
        });
        setIsSubmitted(true);

        // Reset submission message after 3 seconds
        setTimeout(() => {
        setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div id="contact" className="w-full py-20 overflow-hidden text-white">
        <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            >
            <h2 className="text-2xl mb-4">{`Let's Connect`}</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
                {`Let's work together! Feel free to reach out for collaborations, job
                opportunities, or just to say hello. I'm always excited to discuss
                new projects and innovative ideas.`}
            </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 p-8 rounded-xl border border-white/10"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0b101a] border border-white/15 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0b101a] border border-white/15 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-[#0b101a] border border-white/15 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {isSubmitted ? (
                    <div className="bg-green-600/20 border border-green-500 text-green-400 p-4 rounded-lg text-center">
                    Thank you! Your message has been sent successfully.
                    </div>
                ) : (
                    <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#adc3eff1] text-black font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Send Message
                    </button>
                )}
                </form>
            </motion.div>

            {/* Contact Information & Social Links */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 p-8 rounded-xl border border-white/10 flex flex-col justify-between"
            >
                <div>
                <h3 className="text-2xl mb-6">Get in Touch</h3>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5" />
                    <span>qzseeker@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5" />
                    <span>New Delhi, India</span>
                    </div>
                </div>
                </div>

                <div className="mt-8">
                <h4 className="text-xl mb-4">Connect with Me</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:space-x-6">
                    {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition duration-300 flex items-center gap-2"
                    >
                        {link.icon}
                        <span className="text-sm">{link.name}</span>
                    </a>
                    ))}
                </div>
                </div>
            </motion.div>
            </div>
        </div>
        </div>
    );
}

export default ContactSection;

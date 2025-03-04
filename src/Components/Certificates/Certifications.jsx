import { motion } from 'framer-motion';
import { ExternalLink, Award, Book } from 'lucide-react';

function Certifications() {
    const cardVariants = {
        initial: { 
            opacity: 0, 
            scale: 0.9 
        },
        animate: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: { 
                duration: 0.3,
                type: "spring",
                stiffness: 300
            }
        }
    };

    const certifications = [
        {
            icon: <Award className="w-8 h-8 text-blue-400 mb-4" />,
            title: "FrontEnd Development Libraries",
            issuer: "freeCodeCamp",
            date: "Issued Aug 2024",
            credentialId: "Credential ID arpityadv_-fedl",
            link: "https://freecodecamp.org/certification/arpityadv_/front-end-development-libraries"
        },
        {
            icon: <Book className="w-8 h-8 text-green-400 mb-4" />,
            title: "Back End Development and APIs",
            issuer: "freeCodeCamp",
            date: "Issued Sep 2024",
            link: "#"
        },
        {
            icon: <Award className="w-8 h-8 text-purple-400 mb-4" />,
            title: "Fundamentals of Digital Marketing",
            issuer: "Google",
            date: "Issued Sep 2023",
            link: "https://skillshop.exceedlms.com/student/award/z3gh5FAeQxC8jqYkGdvUHgBP"
        }
    ];

    return (
        <div className='w-full'>
            <div className='h-max mt-10 mb-10 mx-8 xl:mx-40'>
                <h1 className='text-2xl mb-8'>Licenses & Certificates</h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <motion.div 
                            key={cert.title}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                                border border-white/15 rounded-xl p-6 
                                transition-all duration-300 
                                hover:border-white/30 
                                hover:shadow-xl 
                                overflow-hidden"
                        >
                            <div className="relative z-10">
                                {cert.icon}
                                <h1 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">
                                    {cert.title}
                                </h1>
                                <div className="text-white/70 group-hover:text-white/90 transition-colors">
                                    <p className="text-sm">{cert.issuer}</p>
                                    <p className="text-sm">{cert.date}</p>
                                    {cert.credentialId && <p className="text-sm">{cert.credentialId}</p>}
                                </div>

                                {cert.link && (
                                    <div className="mt-4">
                                        <a 
                                            href={cert.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-[#0b101a] text-sm rounded-full py-2 px-4 hover:bg-[#162030] transition-colors"
                                        >
                                            Show Credential
                                            <ExternalLink className="ml-2 w-4 h-4" />
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div 
                                className="absolute inset-0 
                                bg-gradient-to-br from-blue-900/10 to-purple-900/10 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 
                                z-0"
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certifications;
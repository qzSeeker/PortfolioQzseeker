import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

function AcademicQualification() {
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

    const educationDetails = [
        {
            icon: <GraduationCap className="w-8 h-8 text-blue-400 mb-4" />,
            degree: "Bachelor of Computer Science",
            year: "2025",
            institution: "JSU, Uttar Pradesh"
        },
        {
            icon: <School className="w-8 h-8 text-green-400 mb-4" />,
            degree: "Higher Secondary Education",
            year: "2022",
            institution: "BKIC, Uttar Pradesh"
        }
    ];

    return (
        <div className='w-full'>
            <div className='mt-12 mb-10 mx-8 xl:mx-40'>
                <h1 className='text-2xl mb-8'>Academic Qualification</h1>
                <div className='grid md:grid-cols-2 gap-6'>
                    {educationDetails.map((edu) => (
                        <motion.div 
                            key={edu.degree}
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
                                {edu.icon}
                                <div className="grid md:grid-cols-2 gap-3">
                                    <h1 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors col-span-1">
                                        {edu.degree}
                                    </h1>
                                    <h1 className="text-lg text-white/70 group-hover:text-white/90 transition-colors text-right col-span-1">
                                        {edu.year}
                                    </h1>
                                    <h1 className="text-sm text-white/70 group-hover:text-white/90 transition-colors col-span-2">
                                        {edu.institution}
                                    </h1>
                                </div>
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

export default AcademicQualification;
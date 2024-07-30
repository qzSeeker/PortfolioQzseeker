import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Page() {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, {once : true});
    
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, {once : true});
    
    return (
        <div className='w-full'>
            <div className='mt-12 mb-10 mx-8 xl:mx-40'>
                <h1 className='text-2xl mb-8'>Academic Qualification</h1>
                <div className='grid md:grid-cols-2 gap-4'>
                    <motion.div ref={ref1} className='w-full h-max bg-white/10 p-8 hover:border border-white/15 rounded-md transition-all ease-in shadow-md hover:shadow-white/20'
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={isInView1 ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 0.3,
                        delay: 0.3,
                        easeIn: [0.25, 1, 0.25, 1]
                    }}
                    >
                        <div className='grid md:grid-cols-2 gap-3'>
                            <h1>Bachelor of Computer Science</h1>
                            <h1>2025</h1>
                            <h1>JSU, Uttar Pradesh</h1>
                        </div>
                    </motion.div>
                    <motion.div ref={ref2} className='w-full h-max bg-white/10 p-8 hover:border border-white/15 rounded-md transition-all ease-in shadow-md hover:shadow-white/20'
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 0.3,
                        delay: 0.3,
                        easeIn: [0.25, 1, 0.25, 1]
                    }}
                    >
                        <div className='grid md:grid-cols-2 gap-3'>
                            <h1>Higher Secondary Education</h1>
                            <h1>2022</h1>
                            <h1>BKIC, Uttar Pradesh</h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Page

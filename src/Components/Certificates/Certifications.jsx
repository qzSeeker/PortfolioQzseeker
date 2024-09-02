import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'

function Certifications() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once : true});

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, {once : true});

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, {once : true});

    return (
        <div className='w-full'>
            <div className='h-max mt-10 mb-10 mx-8 xl:mx-40'>
                <h1 className='text-2xl mb-8'>Licenses & certificates</h1>

                <div className="grid md:grid-cols-2 gap-4">
                <motion.div ref={ref} className="bg-white/10 p-4 flex flex-col gap-4 rounded-lg hover:border border-white/15"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 0.3,
                    delay: 0.3,
                    easeIn: [0.25, 1, 0.25, 1]
                }}>
                    <div>
                        <h1 className='text-lg mb-4'>FrontEnd Development Libraries</h1>
                        <p className='text-sm'>freeCodeCamp</p>
                        <p className='text-sm'>Issued Aug 2024</p>
                        <p className='text-sm'>Credential ID arpityadv_-fedl</p>
                    </div>
                    <div>
                        <a href='https://freecodecamp.org/certification/arpityadv_/front-end-development-libraries'>
                            <button className='bg-[#0b101a] text-sm rounded-full py-2 px-4 flex items-center gap-2'>Show credential
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div ref={ref2} className="bg-white/10 p-4 flex flex-col gap-4 rounded-lg hover:border border-white/15"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 0.3,
                    delay: 0.3,
                    easeIn: [0.25, 1, 0.25, 1]
                }}>
                    <div>
                        <h1 className='text-lg mb-4'>Back End Development and APIs</h1>
                        <p className='text-sm'>freeCodeCamp</p>
                        <p className='text-sm'>Issued Sep 2024</p>
                    </div>
                    <div>
                        <a href='#'>
                            <button className='bg-[#0b101a] text-sm rounded-full py-2 px-4 flex items-center gap-2'>Show credential
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div ref={ref3} className="bg-white/10 p-4 flex flex-col gap-4 rounded-lg hover:border border-white/15"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView3 ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 0.3,
                    delay: 0.3,
                    easeIn: [0.25, 1, 0.25, 1]
                }}>
                    <div>
                        <h1 className='text-lg mb-4'>Fundamentals of digital marketing</h1>
                        <p className='text-sm'>Google</p>
                        <p className='text-sm'>Issued Sep 2023</p>
                    </div>
                    <div>
                        <a href="https://skillshop.exceedlms.com/student/award/z3gh5FAeQxC8jqYkGdvUHgBP">
                            <button className='bg-[#0b101a] text-sm rounded-full py-2 px-4 flex items-center gap-2'>Show credential
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
                            </button>
                        </a>
                    </div>
                </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Certifications

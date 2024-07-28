import React from 'react'

function Page() {
    return (
        <div className='w-full'>
            <div className='mt-12 mb-10 mx-8 xl:mx-40'>
                <h1 className='text-2xl mb-8'>Academic Qualification</h1>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='w-full h-max bg-white/10 p-8 hover:border border-white/15 rounded-md transition-all ease-in shadow-md hover:shadow-white/20'>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <h1>Bachelor of Computer Science</h1>
                            <h1>2025</h1>
                            <h1>JSU, Uttar Pradesh</h1>
                        </div>
                    </div>
                    <div className='w-full h-max bg-white/10 p-8 hover:border border-white/15 rounded-md transition-all ease-in shadow-md hover:shadow-white/20'>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <h1>Higher Secondary Education</h1>
                            <h1>2022</h1>
                            <h1>BKIC, Uttar Pradesh</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

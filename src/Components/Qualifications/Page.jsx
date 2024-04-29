import React from 'react'

function Page() {
    return (
        <div className='w-full'>
            <div className='mt-12 mb-10 mx-8 xl:mx-40'>
                <h1 className='text-2xl mb-8'>Academic Qualification</h1>
                <div className='w-full h-max bg-white/10 p-8 hover:border border-white/15 rounded-md'>
                    <div className='grid md:grid-cols-2 gap-3'>
                        <h1>Bachelor of science in Computer Science</h1>
                        <h1>Expected Graduation: [2025]</h1>
                        <h1>JSU, Uttar Pradesh</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

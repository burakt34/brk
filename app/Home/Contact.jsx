import Link from 'next/link';
import React from 'react'
import { CiMail, CiLinkedin } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";




const Contact = () => {
    return (
        <div className='px-4 md:px-[315px] py-[85px] bg-[#191919]' id='Contact'>
            <h3 className='text-2xl text-white font-bold'>Contact</h3>
            <p className='mt-9 font-light text-[14px] text-gray-300'>During my engineering education, I got acquainted with C and C++, which led me to the software field. I find myself close to the front-end part of web development in this field, and I am improving myself in this area. Throughout my career, my aim is to stay updated, keep up with new technologies, and become a well-rounded professional in the field </p>
            <div className='my-6 text-gray-200 flex items-center gap-2'>
                <p className='h-5'><CiMail className='w-full h-full' /></p>
                buraktanyel34@gmail.com
            </div>

            <div className='mt-10 text-white'>
                    <div className='flex gap-5'>
                        <Link className='w-6 h-6' href="https://github.com/burakt34">
                            <AiOutlineGithub className='w-full h-full hover:bg-slate-700 hover:rounded-full' />
                        </Link>

                        <Link className='w-6 h-6' href="https://tr.linkedin.com/in/burak-tanyel-3308691ba">
                            <CiLinkedin className='w-full h-full hover:bg-slate-700 hover:rounded-md' />
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'
import "../globals.css"
import { TbHexagonLetterCFilled } from "react-icons/tb";



const Experience = () => {
    return (
        <div className='px-4 md:px-[315px] mt-24 pb-24'>
            <h3 className='text-center text-4xl font-extrabold text-blue-600'>Experience</h3>
            <div className='lg:w-[810px] mt-14'>
                <div>
                    <div className='flex items-center justify-between '>
                        <div className='flex items-center space-x-5'>
                            <div className='text-white h-6'><TbHexagonLetterCFilled className='h-full w-full' /></div>
                            <p className='text-white md:stext-[21px] font-bold'>Front End Developer at Colornic</p>
                        </div>

                        <div>
                            <p className='text-xs font-normal text-gray-400'>Mar 2023 - Present</p>
                        </div>

                    </div>

                    <div className='mt-6 text-[14px] font-normal text-white'>
                        <p>At Colornic Advertising Agency, I contributed to various projects by meticulously translating the designs of esteemed professional Mr. Ende Beytekin into code, thereby enhancing the development of responsive web applications.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
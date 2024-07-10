import Image from 'next/image'
import Link from 'next/link'
import React,{FC} from 'react'
import { BiSearch } from 'react-icons/bi'

type Props = {}

const Hero:FC<Props> = (props) => {
    return(
        <div className='w-full 1000pz:flex items-center'>
            <div className='absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation'>
                
                    <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[0px] bg-transparent relative m-6'>
                        <input
                        type='search'
                        placeholder='Search Courses...'
                        className='bg-transparent border dark:border-none dark:bg-black placeholder:text-black dark:placeholder:text-white rounded-[5px] p-2 h-[50px] w-full outline-none text-[#ffffffe6] text-[20px] font-[500] font-Josefin'
                        />
                        <div className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-black dark:bg-[#39c1f3] rounded-e-[5px]'>
                           <BiSearch className='text-white' size={25} />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Hero
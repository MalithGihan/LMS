import Link from 'next/link'
import React,{FC} from 'react'

export const navItemsData = [
    {
        name:"Home",
        url:"/"
    },
    {
        name:"Course",
        url:"/course"
    },
    {
        name:"About",
        url:"/about"
    },
    {
        name:"Policy",
        url:"/policy"
    },
    {
        name:"FAQ",
        url:"/faq"
    },

]

type Props = {
    activeItem:number
    isMobile:boolean
}

const NavItems: React.FC<Props> = ({activeItem,isMobile}) => {
  return (
    <>
    <div className='hidden 800:flex'>
        {
            navItemsData && navItemsData.map((i,index) => (
                <Link href={`${i.url}`} key={index} passHref>
                    <span className={ `${activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"} text-[18px] px-6 font-Poppine font-[400]`}>
                        {i.name}
                    </span>
                </Link>
            ))
        }
    </div>
    {
        isMobile && (
            <div className='800px:hidden mt-5'>
                <div className='w-full text-center py-6'>
                       <Link href="/" passHref>
                          <span></span>
                       </Link>
                </div>
            </div>
        )
    }
    </>
  )
}

export default NavItems
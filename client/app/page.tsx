'use client'
import React,{FC,useState} from "react"
import Heading from "./utils/Heading"

interface Props{}

const Page : FC<Props> = (props) => {
  return(
    <div>
       <Heading 
          title="Elearning"
          description=" Elaeaning is dun to learn"
          keywords="MERN,HTML,JAVA"
       />
    </div>
  )
}

export default Page
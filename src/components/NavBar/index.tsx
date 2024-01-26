import { Tooltip } from '@mui/material'
import React from 'react'
import { Badge, Home, Laptop, Message, MiscellaneousServices, School, Work} from '@mui/icons-material/';
import text from '@/languages/US_eng.json'
import { FlexBox } from '@/common';

const NavBar = () => {

    const NavBarArray=[
        {
            icon: <Home className={`iconCls`}/>,
            description: text.home
        },
        {
            icon: <Badge className={`iconCls`}/>,
            description: text.aboutMyself
        },
        {
            icon: <School className={`iconCls`}/>,
            description: text.cerficates,
        },
        {
            icon: <Work className={`iconCls`}/>,
            description: text.workExperience
        },
        {
            icon: <MiscellaneousServices className={`iconCls`}/>,
            description: text.myServices
        },
        {
            icon: <Laptop className={`iconCls`}/>,
            description: text.myProjects
        },
        {
            icon: <Message className={`iconCls`}/>,
            description: text.contactMe
        }
    ]

  return (
    <FlexBox className={`!flex-col items-center rounded-full space-y-5 w-[3rem] border py-5 bg-blue-900 shadow-md`}>
        {   NavBarArray.map((data: any, idx: number)=>
             <Tooltip title={data.description} key={idx} arrow placement={`left`} className={`cursor-pointer`}>
             {data.icon}
         </Tooltip>
        )}
    </FlexBox>
  )
}

export default NavBar
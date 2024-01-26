import { FlexBetween, FlexBox, FlexItemCenter } from '@/common'
import React from 'react'
import text from '@/languages/US_eng.json'
import { Box, Container, Typography } from '@mui/material'
import { FacebookRounded, Instagram, LinkedIn } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { pathName } from '@/utils/router/pathname'


const socialMediaIcons=[
    {
        icon: <FacebookRounded className={`iconCls`} />,
        path: pathName.landingPage
    },
    {
        icon: <Instagram className={`iconCls`} />,
        path: pathName.landingPage
    },
    {
        icon:<LinkedIn className={`iconCls`} />,
        path: pathName.landingPage
    }

]


const Header = () => {

    const router=useRouter()

    return (
        <Container className={`!w-[80%]`}>
        <FlexItemCenter className={`!h-[5rem]`}>
            <FlexBetween className={`w-full`}>
                <Typography component={`h1`}>
                   <Typography component={`span`} className={`!font-bold text-white !text-3xl`}>
                     {text.myName.firstName}
                    </Typography>&nbsp;
                    <Typography component={`span`}>{text.myName.lastName}</Typography>
                </Typography>
                <FlexBox gap={2}>
                   {socialMediaIcons.map((icons: any, idx: number)=><Box key={idx} onClick={()=>router.push(icons.path)}>
                        {icons.icon}
                   </Box>)}
                </FlexBox>
            </FlexBetween>  
        </FlexItemCenter>
        </Container>
    )
}

export default Header
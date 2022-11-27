import { Typography, Card, CardMedia, CardContent, CardActions, Button, Stack } from '@mui/material'
import React from 'react'

const CardAssets = [
    { name: "Website Development", img: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80", para: "Web development services help create all types of web-based software and ensure great experience for web users." },
    { name: "Mobile App Development", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMGFwcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", para: "Our mobile app developers have over a decade-long expertise in building solutions that meet market needs, empower companies brand identity, and encourage business growth and expansion." },
    { name: "Ai Chatbot Development", img: "https://media.istockphoto.com/id/1406732954/photo/ai-chatbot-intelligent-digital-customer-service-application-concept.jpg?b=1&s=170667a&w=0&k=20&c=ybyg-akThqZFEyZ6vYZU3_qe7-RZmpEkJEwz1pgl_bE=", para: "Voice app pro will work with your company to create a customized, branded conversational interface to help your users make purchases, access support, market products, manage events etc." },
    { name: "Graphic Designing", img: "https://www.winssol.net/wp-content/uploads/2020/01/grahic-designing.png", para: "Our graphics design services are very cost effective for small and medium size businesses around the world. Take a look of our pricing to know more!" },
    { name: "Content Writing", img: "https://web-static.wrike.com/blog/content/uploads/2016/10/Content-Marketing.jpg?av=a5a248f961a4275cd4cdadc6114afb2d", para: "Create top-level content that converts and attracts more organic search traffic with Thrive Internet Marketing Agencys SEO content writing services." },
    { name: "Digital Marketing", img: "https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-Digital-Marketing-1.jpg", para: "Digital marketing services guarantee an engaging experience for your customers and retain users by inducing brand loyalty." }
]


const Services = () => {
    return (
        <>
            <Typography variant='h3' mt={7} mb={5} sx={{ borderBottom: '1px solid black' }}>Services</Typography>

            <Stack direction='row' justifyContent='space-around' sx={{flexWrap: "wrap", gap: '20px'}}>

                {
                    CardAssets.map((eachCard, i) => {
                        return (

                            <Card sx={{ maxWidth: 300, mb: 4 }} key={i} >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={eachCard.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {eachCard.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {eachCard.para}
                                    </Typography>
                                </CardContent>
                            </Card>

                        )
                    })
                }

            </Stack>

        </>
    )
}

export default Services

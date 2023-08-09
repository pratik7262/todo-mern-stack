import { Avatar, Button, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Menu, Typography } from '@mui/material'
import { BsBellFill } from "react-icons/bs";
import { useToggle } from "../hooks/useToggle";
import { notificationData } from "../data/app.data";
import { notificationWrapper, inlineText } from "../styles/styles";
import React from 'react'
import { Box } from '@mui/system';

export const NotificationsList = () => {
    const {el,open,onClick,onClose}=useToggle();
    return (
        <Box sx={{ p: 1 }}>
            <Button onClick={onClick} id='basic-n-button'>
                <BsBellFill size={24}/>
            </Button>
            <Menu id='basic-n-menu'
                onClose={onClose}
                open={open}
                MenuListProps={{ "aria-labelledby": 'basic-n-button' }}
                anchorEl={el}>
                    <List  sx={notificationWrapper}>
                        {
                            notificationData.map((item)=>{
                                return(
                                   <Link href='#' key={item.id} underline='none'>
                                    <ListItem sx={{pt:0,pb:1,mt:1}} alignItems='flex-start'>
                                        <ListItemAvatar>
                                            <Avatar alt={item.alt} src={item.avatar}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.text} secondary={
                                            <>
                                            <Box component='span' sx={{mt:2}}>
                                                <Typography sx={inlineText} component='span'>{item.time}</Typography>
                                            </Box>
                                            </>
                                        }/> 
                                    </ListItem>
                                    {
                                        notificationData.length !== item.id && <Divider variant='inset' component='li'/>
                                    }
                                   </Link>
                                )
                            })
                        }
                    </List>
            </Menu>
        </Box>
    )
}

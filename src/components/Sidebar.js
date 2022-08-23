import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div>
        <TwitterIcon className='sidebar__twitterIcon'/>
        <SidebarOption active Icon={HomeIcon} text="home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
        <SidebarOption Icon={EmailIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListAltIcon} text="Lists"/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>
        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>  
  )
}

export default Sidebar
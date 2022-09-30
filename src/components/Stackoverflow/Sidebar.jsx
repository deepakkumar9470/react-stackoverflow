import React from 'react'
import './sidebar.css'
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-container">
            <div className="sidebar-options">
                <div className="sidebar-option">
                    <QuestionMarkOutlinedIcon className="mat_icon"/>
                    <a href="#">QUESTIONS</a>
                </div>
                <div className="sidebar-option">
                    <WorkOutlineRoundedIcon className="mat_icon"/>
                    <a href="#">JOBS</a>
                </div>
                <div className="sidebar-option">
                    <DescriptionOutlinedIcon className="mat_icon"/>
                    <a href="#">DOCUMENTATION</a>
                </div>
                <div className="sidebar-option">
                    <LocalOfferOutlinedIcon className="mat_icon"/>
                    <a href="#">TAGS</a>
                </div>
                <div className="sidebar-option">
                    <Person2OutlinedIcon className="mat_icon"/>
                    <a href="#">USERS</a>
                </div>
                <div className="sidebar-option">
                <LocalOfferOutlinedIcon className="mat_icon"/>
                    <a href="#">BADGES</a>
                </div>
                <div className="sidebar-option">
                    <InboxRoundedIcon className="mat_icon"/>
                    <a href="#">INBOX</a>
                </div>
                <div className="sidebar-option">
                    <ReorderOutlinedIcon className="mat_icon"/>
                    <a href="#">STACK EXCHANGE</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
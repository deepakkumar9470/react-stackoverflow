import React from 'react'
import './header.css'
import {Inbox, Search} from '@mui/icons-material'
import { Avatar } from '@mui/material'

const Header = () => {
  return (
   <header>
     <div className='header_container'>
        <div className="left">
            <img src="https://wizardsourcer.com/wp-content/uploads/2019/03/Stackoverflow.png" alt="" />
            <h3>Products</h3>
        </div>
        <div className="middle">
            <div className="search_container">
                <Search/>
                <input type="text" name="" placeholder='Search question..' />      
            </div>
        </div>
        <div className="right">
                <div className="right_container">
                   <Avatar className="a_icon" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                   <Inbox/> 
                   <svg aria-hidden="true" className="svg-icon iconStackExchange MySvgIcon" width="18" height="18" viewBox="0 0 18 18"><path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path></svg>            
                </div>
        </div>
    </div>
   </header>
  )
}

export default Header
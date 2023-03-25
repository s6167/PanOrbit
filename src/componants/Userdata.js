import React from 'react';
import './Userdata.css'

import { useState } from 'react';


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Profile from './Profile';
import Posts from './Posts';
import Gallary from './Gallary';
import Todo from './Todo';


const Userdata = (props) => {
   const [isProfile, setIsProfile] = useState(true);
   const [isPosts, setIsPost] = useState(false);
   const [isGallary, setIsGallary] = useState(false);
   const [isTodo, setIsTodo] = useState(false);

   const viewProfile =()=>{
        setIsProfile(true)
        setIsPost(false)
        setIsGallary(false)
        setIsTodo(false)
   }
   const viewPosts =()=>{
        setIsProfile(false)
        setIsPost(true)
        setIsGallary(false)
        setIsTodo(false)
   }
   const viewGallary =()=>{
        setIsProfile(false)
        setIsPost(false)
        setIsGallary(true)
        setIsTodo(false)
   }
   const viewTodo =()=>{
        setIsProfile(false)
        setIsPost(false)
        setIsGallary(false)
        setIsTodo(true)
   }
    
    
    return (
        <div>
            <div className='window' >
                <div className='menu' >
                    <div onClick={viewProfile} className='profile-menu'>Profile </div>
                    <div onClick={viewPosts} className='posts-menu'>Posts</div>
                    <div onClick={viewGallary} className='gallary-menu'>Gallary</div>
                    <div onClick={viewTodo} className='todo-menu' >ToDO</div>
                </div>
                {isProfile && <Profile user={props.user}/>}
                {isPosts && <Posts />}
                {isGallary && <Gallary />}
                {isTodo && <Todo />}
            </div>
        </div>
    );
}

export default Userdata;

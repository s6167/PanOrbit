import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Userdata from './componants/Userdata';


function App() {
  const [data, setData] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [userLogin, setUserLogin] = useState({})

  useEffect(() => {
      fetch("https://panorbit.in/api/users.json")
      .then((res)=> res.json() )
      .then((data)=>{
        setData(data);
        console.log(data)
        setIsDataLoaded(true)
      })
    
  }, []);

  const handleClick =(item)=>{
    console.log(item)
    setUserLogin(item);
    setIsLogin(true);
  }


  if(!isDataLoaded){
    console.log("LOading Data")
    return <>Data Loading</>
  }

  return (
    <div >
      <div   >     
          {!isLogin && 
          <div className='All-users' >
            {data.users.map((item)=><p onClick={()=>handleClick(item)}  key={item.id} ><img src={item.profilepicture} />{item.name}</p>)}
          </div>}
      </div>
          {isLogin && <Userdata  user={userLogin} />}
    </div>
  );
}

export default App;

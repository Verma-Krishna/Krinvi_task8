import React from 'react'
import { useState } from 'react'
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

export default function Card() {

    const [shift,setshift] = useState(false)
    const [breakfast,setbreakfast] = useState(false)
    const [lunch,setlunch] = useState(false)
    const [dinner,setdinner] = useState(false)
    const [brunch,setbrunch] = useState(false)

    const handleshift = () => {
          setshift(!shift)
    };
    const handlebreakfast = () => {
          setbreakfast(!breakfast)
    };
    const handlelunch = () => {
          setlunch(!lunch)
    };
    const handledinner = () => {
          setdinner(!dinner)
    };
    const handlebrunch = () => {
          setbrunch(!brunch)
    };
   
  return (
    <>
    <main className='h-screen flex flex-col gap-6' style={{backgroundColor:"#D2D2D2"}}>
      <div className="bg-white h-1/3 rounded-md mt-24 w-3/4 mx-auto pl-6 py-6">
          <h1 className='text-2xl font-bold text-gray-700'>Service Hour</h1>
          <h3 className='text-center'>Add shifts or select no shifts to add sefvice hour.</h3>
          <label htmlFor="services" className=' text-xl font-medium text-gray-700'>Shift Times</label>
          <div className="flex mt-2 gap-4">
             <Chip label={shift ? "No Shifts Done": "No Shifts"} icon={shift?<DoneIcon style={{color:"#2260B2"}}/>:<AddIcon style={{color:"black"}}/>} onClick={handleshift} sx={{backgroundColor: shift ? "#BFDBFE":"#F5F6F8",color:shift ? "#2260B2":"#454649",height:"35px",fontSize:"18px",border: shift ? "none":"1px solid #94A3B8",'&:hover':{backgroundColor: shift ? "#BFDBFE":"#F5F6F8"}}}/>
             <Chip label={breakfast ? "Breakfast Done": "Breakfast"} icon={breakfast?<DoneIcon style={{color:"#2260B2"}}/>:<AddIcon style={{color:"black"}}/>} onClick={handlebreakfast} sx={{backgroundColor: breakfast ? "#BFDBFE":"#F5F6F8",color:breakfast ? "#2260B2":"#454649",height:"35px",fontSize:"18px",border: breakfast ? "none":"1px solid #94A3B8",'&:hover':{backgroundColor: breakfast ? "#BFDBFE":"#F5F6F8"}}}/>
             <Chip label={lunch ? "Lunch Done": "Lunch"} icon={lunch?<DoneIcon style={{color:"#2260B2"}}/>:<AddIcon style={{color:"black"}}/>} onClick={handlelunch} sx={{backgroundColor: lunch ? "#BFDBFE":"#F5F6F8",color:lunch ? "#2260B2":"#454649",height:"35px",fontSize:"18px",border: lunch ? "none":"1px solid #94A3B8",'&:hover':{backgroundColor: lunch ? "#BFDBFE":"#F5F6F8"}}}/>
             <Chip label={dinner ? "Dinner Done": "Dinner"} icon={dinner?<DoneIcon style={{color:"#2260B2"}}/>:<AddIcon style={{color:"black"}}/>} onClick={handledinner} sx={{backgroundColor: dinner ? "#BFDBFE":"#F5F6F8",color:dinner ? "#2260B2":"#454649",height:"35px",fontSize:"18px",border: dinner ? "none":"1px solid #94A3B8",'&:hover':{backgroundColor: dinner ? "#BFDBFE":"#F5F6F8"}}}/>
             <Chip label={brunch ? "Brunch Done": "Brunch"} icon={brunch?<DoneIcon style={{color:"#2260B2"}}/>:<AddIcon style={{color:"black"}}/>} onClick={handlebrunch} sx={{backgroundColor: brunch ? "#BFDBFE":"#F5F6F8",color:brunch ? "#2260B2":"#454649",height:"35px",fontSize:"18px",border: brunch ? "none":"1px solid #94A3B8",'&:hover':{backgroundColor: brunch ? "#BFDBFE":"#F5F6F8"}}}/>
          </div>
          <div className="flex justify-end gap-4 mr-6">
                 <IconButton  sx={{color:'#AEB6BD',backgroundColor:'#E1E7F1',padding:0.5,borderRadius:"7px"}}>
                   <CheckIcon />
                 </IconButton>
                 <IconButton sx={{color:'#AEB6BD',backgroundColor:'#E1E7F1',padding:0.5,borderRadius:"7px"}}>
                   <CloseIcon />
                 </IconButton>
           </div>
      </div>
      <div className="bg-white h-1/6 w-3/4 rounded-md mx-auto pl-6 py-6">
        <h1 className='text-2xl font-bold text-gray-700'>Add Floor Plan</h1>
        <h3 className='text-center text-gray-500 text-lg font-medium mt-3'>Create Floor Plan</h3>
      </div>
      <div className="flex gap-4 justify-end w-3/4 mx-auto">
        <button className=' border-2 border-gray-400 bg- rounded-md text-xl font-medium py-2 px-12' style={{backgroundColor:"#D2D2D2"}}>Cancel</button>
        <button className='bg-blue-600 rounded-md text-white text-xl font-medium py-2 px-6'>Save and Create Floor Plan</button>
      </div>  
    </main>
    </>
  )
}

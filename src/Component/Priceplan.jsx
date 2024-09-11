import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Priceplan = ()=>{
    return(
        <>
        <main className="bg-blue-600 h-screen flex flex-col items-center justify-center">
           <header className="mb-2">
               <h6 className="text-white text-sm font-normal text-center mb-3">Pricing</h6>
               <h1 className="text-4xl text-white font-semibold mb-4">Simple, scalable pricing.</h1>
               <h6 className="text-white text-sm font-normal text-center">No Hidden charges. No hidden fees.</h6>
           </header>
           <body className="h-3/4 flex justify-evenly items-center gap-6  mx-16 px-24 py-2">
            <div className="relative rounded-xl h-full w-[380px]" style={{backgroundColor:"#E2E3E7"}}>
                <div className="flex justify-center mt-10 ">
                    <img src="/fevsd/w" alt="#" />
                </div>
              <h3 className='text-blue-600 text-lg font-bold text-center mb-3'>Basic plan</h3>
              <h1 className="text-center text-3xl font-bold"><span className="text-4xl">$49</span>/mo</h1>
              <h5 className="text-center mt-2 mb-6">Billed annually</h5>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>Up to 10 individual users</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>Basic reporting and analytics</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>Project Management</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>20GB individual data each user</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>Basic chat and email support</h1>
              <hr className="border-1 border-gray-500 mt-8"/>
              <div className="flex justify-center ">
                <button className="absolute bottom-0  bg-blue-500 py-2 mb-6 px-20 text-white rounded-md">Get Started</button>
              </div>
            </div>
            <div className="relative rounded-xl h-full w-[380px]" style={{backgroundColor:"#F9AF42"}}>
                <div className="flex justify-end">
                <h5 className="text-right text-white inline rounded-tr-xl px-2 py-0.5" style={{backgroundColor:"#03438F"}}>Popular</h5>
                </div>
                <div className="flex justify-center mt-3 ">
                    <img src="/fevsd/w" alt="#" />
                </div>
                <h1 className="text-blue-600 text-lg font-bold text-center mb-3">Business plan</h1>
                <h1 className="text-center text-3xl font-bold"><span className="text-4xl">$79</span>/mo</h1>
                <h5 className="text-center mt-2 mb-6">Billed annually</h5>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#0663DF"}}/>Access to all<strong>Basic</strong>features</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#0663DF"}}/>200+ integrations</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#0663DF"}}/>Unlimited team workspaces</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#0663DF"}}/>Approval workflows</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#0663DF"}}/>Salesforce integration*</h1>
                <hr className="border-1 border-gray-500 mt-8"/>
                <div className="flex justify-center ">
                <button className="absolute bottom-0  bg-blue-500 py-2 mb-6 px-20 text-white rounded-md">Start a free trial</button>
                </div>
            </div>
            <div className="relative rounded-xl h-full w-[380px]" style={{backgroundColor:"#E2E3E7"}}>
               <div className="flex justify-center mt-10 ">
                    <img src="/fevsd/w" alt="#" />
                </div>
                <h1 className="text-blue-600 text-lg font-bold text-center mb-3">Enterprise plan</h1>
                <h1 className="text-center text-3xl font-bold"><span className="text-4xl">$199</span>/mo</h1>
                <h5 className="text-center mt-2 mb-6">Billed annually.</h5>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>Access to all <strong>Business</strong> features.</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>Unlimited files uploads.</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>Real-time team collaboration.</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>SSO support and custom user roles.</h1>
                <h1 className="mb-3 pl-6"><CheckCircleIcon sx={{color:"#F9AF42"}}/>Bulk send & forms.</h1>
                <hr className="border-1 border-gray-500 mt-8"/>
                <div className="flex justify-center ">
                <button className="absolute bottom-0  bg-blue-500 py-2 mb-6 px-20 text-white rounded-md">Book a demo</button>
                </div>
                <div className="">
                </div>
                </div>
           </body>
           <h3 className=" text-sm text-white mt-2">Prices exclude any applicable taxes.</h3>
        </main>
        </>
    )
}

export default Priceplan
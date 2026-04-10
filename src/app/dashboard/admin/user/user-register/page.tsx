"use client"

import ActionBtn from '@/components/actionbtn/ActionBtn'
import Container from '@/components/container/Container'
import MainContainer from '@/components/maincontainer/MainContainer'
import { useUser } from '@/store/user/User'
import React from 'react'
import { FaEnvelope, FaIdCard, FaMapMarkerAlt, FaPhoneAlt, FaSchool } from 'react-icons/fa'

const UserRegister = () => {
 const {state,handleChange,handleSubmit}  = useUser()
  return (
    <div className='bg-white p-1'>
      <MainContainer>
        <Container>
          <form
                     className="grid grid-cols-1 md:grid-cols-2 gap-5"
                     onSubmit={(e) => handleSubmit(e)}
                   >
                     {/* School Name */}
                     <div>
                       <label className="mb-2 block text-sm font-medium text-gray-700">
                         School Name
                       </label>
                       <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                         <FaSchool className="text-gray-400 text-[16px]" />
                         <input
                           name="name"
                           value={state.userObj.name}
                           onChange={(e) => handleChange(e)}
                           type="text"
                           placeholder="Enter school name"
                           className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                         />
                       </div>
                     </div>
         
                     {/* Affiliation Code */}
                     <div>
                       <label className="mb-2 block text-sm font-medium text-gray-700">
                         Affiliation Code
                       </label>
                       <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                         <FaIdCard className="text-gray-400 text-[16px]" />
                         <input
                           name="code"
                           value={state.userObj.code}
                           onChange={(e) => handleChange(e)}
                           type="text"
                           placeholder="Enter affiliation code"
                           className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                         />
                       </div>
                     </div>
         
                     {/* Email */}
                     <div>
                       <label className="mb-2 block text-sm font-medium text-gray-700">
                         Email Address
                       </label>
                       <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                         <FaEnvelope className="text-gray-400 text-[16px]" />
                         <input
                           name="email"
                           value={state.userObj.email}
                           onChange={(e) => handleChange(e)}
                           type="email"
                           placeholder="Enter school email"
                           className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                         />
                       </div>
                     </div>
         
                     {/* Contact Number */}
                     <div>
                       <label className="mb-2 block text-sm font-medium text-gray-700">
                         Contact Number
                       </label>
                       <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                         <FaPhoneAlt className="text-gray-400 text-[15px]" />
                         <input
                           name="contact"
                           value={state.userObj.contact}
                           onChange={(e) => handleChange(e)}
                           type="tel"
                           placeholder="Enter contact number"
                           className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                         />
                       </div>
                     </div>
         
                     {/* Address */}
                     <div className="md:col-span-2">
                       <label className="mb-2 block text-sm font-medium text-gray-700">
                         Address
                       </label>
                       <div className="flex items-start rounded border border-gray-300 bg-white px-3 py-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                         <FaMapMarkerAlt className="mt-1 text-gray-400 text-[16px]" />
                         <textarea
                           name="address"
                          //  value={state.userObj.address}
                           onChange={(e) => handleChange(e)}
                           rows={4}
                           placeholder="Enter school address"
                           className="w-full resize-none bg-transparent px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                         />
                       </div>
                     </div>
         
                   
                     <ActionBtn />
                   </form>
        </Container>
      </MainContainer>
    </div>
  )
}

export default UserRegister
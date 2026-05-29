import { useToggle } from '@/store/toggledashboard/Toggledashboard'
import React, { useState } from 'react'
import { FiFilter, FiGrid, FiList } from 'react-icons/fi'

const FilterGrid = () => {
    //  const [view, setView] = useState("grid");
   const {view,handleView} =  useToggle()
  return (
   
                 <div className="flex items-center gap-2">
                   {/* FILTER BUTTON */}
   
                   <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-md text-sm hover:bg-slate-50 transition">
                     <FiFilter size={15} />
                     Apply View
                   </button>
   
                   {/* GRID VIEW */}
   
                   <button
                     onClick={() => handleView("grid")}
                     className={`h-10 w-10 rounded-md flex items-center justify-center transition ${
                       view === "grid"
                         ? "bg-blue-600 text-white"
                         : "border border-slate-200 hover:bg-slate-50"
                     }`}
                   >
                     <FiGrid size={17} />
                   </button>
   
                   {/* LIST VIEW */}
   
                   <button
                     onClick={() => handleView("list")}
                     className={`h-10 w-10 rounded-md flex items-center justify-center transition ${
                       view === "list"
                         ? "bg-blue-600 text-white"
                         : "border border-slate-200 hover:bg-slate-50"
                     }`}
                   >
                     <FiList size={17} />
                   </button>
                 </div>
  )
}

export default FilterGrid
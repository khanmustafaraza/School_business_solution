import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({onChange,placeholder}:any) => {
  return (
      <div className="flex-1 border border-gray-400 rounded flex items-center px-2">
        <FaSearch/>
              <input
              type="text"
              onChange={onChange}
              placeholder={placeholder}
              className=" w-full rounded border-none bg-transparent px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900"
            />

          </div>
  )
}

export default SearchInput
import React from 'react'

const SectionCard = ({title,icon,children,}:{title:string,icon:React.ReactNode,children:React.ReactNode}) => {
  return (
    <div className="rounded bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-700">{icon}</div>
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

export default SectionCard
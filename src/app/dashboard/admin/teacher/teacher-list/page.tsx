import Container from '@/components/container/Container'
import MainContainer from '@/components/maincontainer/MainContainer'
import ParentContainer from '@/components/parentcontainer/ParentContainer'
import TableContainer from '@/components/tables/tablecontainer/Tablecontainer'
import React from 'react'
import {
  Eye,
  Pencil,
  Trash2,
  Phone,
  Mail,
  GraduationCap,
} from 'lucide-react'

// Teacher Type
interface Teacher {
  id: string
  teacherId: string
  name: string
  subject: string
  qualification: string
  phone: string
  email: string
  salary: string
  joiningDate: string
  status: 'Active' | 'On Leave' | 'Inactive'
}

const TeacherList = () => {
  // ERP Mock Data
  const teacherData: Teacher[] = [
    {
      id: '1',
      teacherId: 'EMP-101',
      name: 'Rahul Sharma',
      subject: 'Mathematics',
      qualification: 'M.Sc, B.Ed',
      phone: '+91 9876543210',
      email: 'rahul@schoolerp.com',
      salary: '₹45,000',
      joiningDate: '12 Jan 2022',
      status: 'Active',
    },
    {
      id: '2',
      teacherId: 'EMP-102',
      name: 'Priya Singh',
      subject: 'English',
      qualification: 'M.A English',
      phone: '+91 9876543201',
      email: 'priya@schoolerp.com',
      salary: '₹40,000',
      joiningDate: '03 Mar 2021',
      status: 'On Leave',
    },
    {
      id: '3',
      teacherId: 'EMP-103',
      name: 'Amit Verma',
      subject: 'Science',
      qualification: 'M.Sc Physics',
      phone: '+91 9876543299',
      email: 'amit@schoolerp.com',
      salary: '₹50,000',
      joiningDate: '18 Aug 2020',
      status: 'Active',
    },
    {
      id: '4',
      teacherId: 'EMP-104',
      name: 'Neha Kapoor',
      subject: 'Computer',
      qualification: 'MCA',
      phone: '+91 9876543277',
      email: 'neha@schoolerp.com',
      salary: '₹48,000',
      joiningDate: '10 Feb 2023',
      status: 'Inactive',
    },
  ]

  return (
    <ParentContainer>
      <MainContainer>
        <Container>
          {/* Header */}
       
          {/* Stats Cards */}
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Total Teachers</p>

              <h2 className="mt-2 text-2xl font-bold text-slate-800 dark:text-white">
                48
              </h2>
            </div>

            <div className="rounded border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Active Staff</p>

              <h2 className="mt-2 text-2xl font-bold text-emerald-600">
                42
              </h2>
            </div>

            <div className="rounded border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm text-slate-500">On Leave</p>

              <h2 className="mt-2 text-2xl font-bold text-amber-500">
                4
              </h2>
            </div>

            <div className="rounded border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Departments</p>

              <h2 className="mt-2 text-2xl font-bold text-indigo-600">
                12
              </h2>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <input
              type="text"
              placeholder="Search teacher..."
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900"
            />

            <div className="flex gap-3">
              <select className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>English</option>
              </select>

              <select className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
                <option>All Status</option>
                <option>Active</option>
                <option>On Leave</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Table */}
          {/* <div className="overflow-x-auto rounded border border-slate-200 dark:border-slate-700"> */}
            <TableContainer>
         
                {/* Header */}
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="border border-slate-200 px-6 py-4 text-left font-semibold dark:border-slate-700">
                      Teacher
                    </th>

                    <th className="border border-slate-200 px-6 py-4 text-left font-semibold dark:border-slate-700">
                      Subject
                    </th>

                    <th className="border border-slate-200 px-6 py-4 text-left font-semibold dark:border-slate-700">
                      Contact
                    </th>

                    <th className="border border-slate-200 px-6 py-4 text-left font-semibold dark:border-slate-700">
                      Qualification
                    </th>

                    <th className="border border-slate-200 px-6 py-4 text-left font-semibold dark:border-slate-700">
                      Salary
                    </th>

                    <th className="border border-slate-200 px-6 py-4 text-left font-semibold dark:border-slate-700">
                      Joining Date
                    </th>

                    <th className="border border-slate-200 px-6 py-4 text-left font-semibold dark:border-slate-700">
                      Status
                    </th>

                    <th className="border border-slate-200 px-6 py-4 text-right font-semibold dark:border-slate-700">
                      Actions
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="bg-white dark:bg-slate-900">
                  {teacherData.map((teacher) => (
                    <tr
                      key={teacher.id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    >
                      {/* Teacher */}
                      <td className="border border-slate-200 px-6 py-4 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                            <GraduationCap size={18} />
                          </div>

                          <div>
                            <h3 className="font-semibold text-slate-800 dark:text-white">
                              {teacher.name}
                            </h3>

                            <p className="text-xs text-slate-500">
                              {teacher.teacherId}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="border border-slate-200 px-6 py-4 dark:border-slate-700">
                        {teacher.subject}
                      </td>

                      {/* Contact */}
                      <td className="border border-slate-200 px-6 py-4 dark:border-slate-700">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Phone size={14} />
                            {teacher.phone}
                          </div>

                          <div className="flex items-center gap-2">
                            <Mail size={14} />
                            {teacher.email}
                          </div>
                        </div>
                      </td>

                      {/* Qualification */}
                      <td className="border border-slate-200 px-6 py-4 dark:border-slate-700">
                        {teacher.qualification}
                      </td>

                      {/* Salary */}
                      <td className="border border-slate-200 px-6 py-4 font-medium dark:border-slate-700">
                        {teacher.salary}
                      </td>

                      {/* Joining */}
                      <td className="border border-slate-200 px-6 py-4 dark:border-slate-700">
                        {teacher.joiningDate}
                      </td>

                      {/* Status */}
                      <td className="border border-slate-200 px-6 py-4 dark:border-slate-700">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            teacher.status === 'Active'
                              ? 'bg-emerald-100 text-emerald-700'
                              : teacher.status === 'On Leave'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {teacher.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="border border-slate-200 px-6 py-4 dark:border-slate-700">
                        <div className="flex justify-end gap-3">
                          <button className="text-slate-500 transition hover:text-indigo-600">
                            <Eye size={18} />
                          </button>

                          <button className="text-slate-500 transition hover:text-emerald-600">
                            <Pencil size={18} />
                          </button>

                          <button className="text-slate-500 transition hover:text-red-600">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
        
            </TableContainer>
          {/* </div> */}
        </Container>
      </MainContainer>
    </ParentContainer>
  )
}

export default TeacherList

"use client";

import { useEffect, useState } from "react";

const StudentList = () => {
  const [students, setStudents] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(false);

  const viewStudents = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/class-teacher/view-students"
      );

      const data = await res.json();

      if (data.success) {
        setStudents(data.students);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    viewStudents();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        Students
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        students.map((student) => (
          <div
            key={student._id}
            className="rounded border p-4"
          >
            <h2>
              {student.firstName}{" "}
              {student.lastName}
            </h2>

            <p>{student.mobile}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentList;
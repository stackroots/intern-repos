import React, { useEffect, useState } from "react";
import "./addStudent.css";
import axios from "axios";

export default function AddStudent() {
  const [student, setStudent] = useState({
    fullname: "",
    rollNo: "",
    age: "",
    gender: "",
  });

  const handleChangeFullname = (e) => {
    setStudent({
      ...student,
      fullname: e.target.value,
    });
  };

  const handleChangeRollNo = (e) => {
    setStudent({
      ...student,
      rollNo: e.target.value,
    });
  };

  const handleChangeAge = (e) => {
    setStudent({
      ...student,
      age: e.target.value,
    });
  };

  const handleChangeGender = (e) => {
    setStudent({
      ...student,
      gender: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3001/student/register", student);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(student);
  }, [student]);

  return (
    <div className="addStudent">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Fullname :
          <input
            type="text"
            name="fullname"
            value={student.fullname}
            onChange={(e) => handleChangeFullname(e)}
          />
        </label>
        <label>
          Roll Number :
          <input
            type="text"
            name="rollNo"
            value={student.rollNo}
            onChange={(e) => handleChangeRollNo(e)}
          />
        </label>
        <label>
          Gender:
          <select name="gender" value={student.gender} onChange={(e) => handleChangeGender(e)}>
            <option value="">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Age :
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={(e) => handleChangeAge(e)}
          />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

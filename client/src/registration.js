import "./App.css";
import { useState } from "react";
import Axios from "axios";


function registration() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [idnum, setIdnum] = useState("0");
  const [institution, setInstitution] = useState("");
  const [department, setDepartment] = useState("");
  const [mobile, setMobile] = useState("0");
  const [municipality, setMunicipality] = useState("");
  const [town, setTown] = useState("");
  const [completeadd, setCompleteadd] = useState("");
  const [studentList, setStudentList] = useState([]);

  const addStudent = () => {
    Axios.post("http://localhost:3001/create", {
      lastname:lastname,
      firstname: firstname,
      email: email,
      idnum: idnum,
      institution: institution,
      department: department,
      mobile: mobile,
      municipality: municipality,
      town: town,
      completeadd: completeadd,
    }).then(() => {
      setStudentList([
        ...studentList,
        {
          lastname: lastname,
          firstname: firstname,
          email: email,
          idnum: idnum,
          institution: institution,
          department: department,
          mobile: mobile,
          municipality: municipality,
          town: town,
          completeadd: completeadd,
        },
      ]);
    });
  };

  const getAstudents = () => {
    Axios.get("http://localhost:3001/students").then((response) => {
      setStudentList(response.data);
    });
  };

  // const updateEmployeeWage = (id) => {
  //   Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
  //     (response) => {
  //       setEmployeeList(
  //         employeeList.map((val) => {
  //           return val.id == id
  //             ? {
  //                 id: val.id,
  //                 name: val.name,
  //                 country: val.country,
  //                 age: val.age,
  //                 position: val.position,
  //                 wage: newWage,
  //               }
  //             : val;
  //         })
  //       );
  //     }
  //   );
  // };

  const deleteStudent = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setStudentList(
        studentList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
    
      <div className="information">
        <label>Last Name</label>
        <input
          type="text"
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
        <label>First Name</label>
        <input
          type="text"
          onChange={(event) => {
            setFirstname(event.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>ID Number (17-12345)</label>
        <input
          type="number"
          onChange={(event) => {
            setIdnum(event.target.value);
          }}
        />
        <label>Institution</label>
        <input
          type="text"
          onChange={(event) => {
            setInstitution(event.target.value);
          }}
        />
        <label>Depertment</label>
        <input
          type="text"
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        />
        <label>Mobile Number</label>
        <input
          type="number"
          onChange={(event) => {
            setMobile(event.target.value);
          }}
        />
        <label>Municipality</label>
        <input
          type="text"
          onChange={(event) => {
            setMunicipality(event.target.value);
          }}
        />
        <label>Town</label>
        <input
          type="text"
          onChange={(event) => {
            setTown(event.target.value);
          }}
        />
        <label>Complete Address</label>
        <input
          type="text"
          onChange={(event) => {
            setCompleteadd(event.target.value);
          }}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="students">
        <button onClick={getAstudents}>Show Students</button>

        {studentList.map((val, key) => {
          return (
            <div className="students">
              <div>
                <h3>First Name: {val.firstname}</h3>
                <h3>Last Name: {val.lastname}</h3>
                <h3>Email: {val.email}</h3>
                <h3>Institution: {val.institution}</h3>
                <h3>Department: {val.department}</h3>
                <h3>Mobile Number: {val.mobile}</h3>
                <h3>Municipality: {val.municipality}</h3>
                <h3>Town: {val.town}</h3>
                <h3>Complete Address: {val.completeadd}</h3>


              </div>
              <div>
                {/* <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button> */}

                <button
                  onClick={() => {
                    deleteStudent(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default registration;
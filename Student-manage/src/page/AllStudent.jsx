
import { Link } from "react-router-dom"
import Sidebaar from "../component/Sidebaar"
import { useEffect, useState } from "react"
import axios from "axios";


const AllStudent = () => {

    const [Stu, setStu] = useState([]);

    const fetchStudent = () => {
        fetch("http://localhost:8080/student")
            .then(res => res.json())
            .then(data => setStu(data));
    };
    const [keyword, setKeyword] = useState("");

    const searchStudent = async (e) => {
        const value = e.target.value;
        setKeyword(value);
        if (value.trim() === "") {
            fetchStudent();
            return;
        }
        try {
            const res = await axios.get(`http://localhost:8080/student/search/${keyword}`)
            setStu(res.data);
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        fetchStudent();
    }, []);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8080/student/${id}`, {
            method: "DELETE",
        });
        fetchStudent();
    };
    return (
        <>
            <Sidebaar>
                <div className="container mt-3">

                    <h2 className="text-center mb-4" style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", backgroundColor: "yellow" }}> All Student</h2>
                    <div className="d-flex gap-10 m-4 p-4">
                        <input type="text" placeholder="Search Student(roll,course,name,email)..." className="form-control"
                            value={keyword}
                            onChange={searchStudent}

                        />
                    </div>

                    <div className="col col-md">

                        <div style={{
                            boxShadow: "0px 0px 10px black",
                            borderRadius: "10px",
                            margin: "30px",
                            padding: "30px",
                            height: "100%",
                            width: "100%"

                        }}>
                            <table border={1} className=" table table-bordered table-striped table-hover text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Father</th>
                                        <th>E-mail</th>
                                        <th>Mobile</th>
                                        <th>DOB</th>
                                        <th>Roll No.</th>
                                        <th>Course</th>
                                        <th>Address</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {Stu.map((student) => (
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.fatherName}</td>
                                            <td>{student.email}</td>
                                            <td>{student.mobile}</td>
                                            <td>{student.age}</td>
                                            <td>{student.roll}</td>
                                            <td>{student.course}</td>
                                            <td>{student.address}</td>
                                            <td>
                                                <td>
                                                    <img
                                                        src={`http://localhost:8080/${student.image}`}
                                                        alt="Student"
                                                        style={{
                                                            width: "70px",
                                                            height: "70px",
                                                            objectFit: "cover"
                                                        }}
                                                        onError={(e) => {
                                                            console.log("Image URL:", e.target.src);
                                                        }}
                                                    />
                                                </td>
                                            </td>
                                            <td className="d-flex gap-10">
                                                <Link to={`/editStudent/${student.id}`} className="btn btn-success ">edit</Link>
                                                <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </Sidebaar>
        </>
    )
}

export default AllStudent
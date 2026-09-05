import { useEffect, useState } from "react";
import Sidebaar from "../component/Sidebaar";
import { Link } from "react-router-dom";



const Register1 = () => {

    const [att, setAtt] = useState([]);

    const fetchAttend = () => {
        fetch("http://localhost:8080/api/email")
            .then(res => res.json())
            .then(data => setAtt(data));
    };

    useEffect(() => {
        fetchAttend();
    }, []);


    const handleDelete = async () => {
        await fetch(`http://localhost:8080`, {
            method: "DELETE",
        });
        fetchAttend();
    };
    return (
        <>
            <Sidebaar>
                <div className="container mt-3">

                    <h2 className="text-center mb-4" style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", backgroundColor: "yellow" }}> All Attendence</h2>

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

                                        <th>Id</th>

                                        <th>Name</th>
                                        <th>E-mail</th>
                                        <th>password</th>
                                        <th>Role</th>
                                        <th>Image</th>

                                        <th>Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {att.map((student) => (
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.password}</td>
                                            <td>{student.role}</td>

                                            <td>
                                                <td>
                                                    <img
                                                        src={`http://localhost:8080/api-/${student.image}`}
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
                                            <td>{student.status}</td>
                                            <td>
                                                <Link to={`/editAttendence/${student.id}`} className="btn btn-success ">edit</Link>

                                                <button className="btn btn-danger" onClick={() => handleDelete(student.id)} >delete</button>
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

export default Register1

import { Link } from "react-router-dom"
import Sidebaar from "../component/Sidebaar"
import { useEffect, useState } from "react";


const Fees = () => {

    const [fees, setfees] = useState([]);

    const fetchfees = () => {
        fetch("http://localhost:8080/fees")
            .then(res => res.json())
            .then(data => setfees(data));
    };

    useEffect(() => {
        fetchfees();
    }, []);
    const handleDelete = async (id) => {
        await fetch(`http://localhost:8080/fees/delete/${id}`, {
            method: "DELETE",
        });
        fetchfees();
    };

    return (
        <>
            <Sidebaar>
                <div className="container mt-3">
                    <h2 className="text-center mb-4" style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", backgroundColor: "yellow" }}> Fees Management System</h2>
                    <div className="col-12">

                        <div style={{
                            boxShadow: "0px 0px 10px black",
                            borderRadius: "10px",
                            margin: "30px",
                            padding: "30px",
                            height: "100%",
                            width: "100%"

                        }}>
                            <table border={1} className="col-12 table table-bordered table-striped table-hover text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Id</th>
                                        <th>Roll No.</th>
                                        <th>Name</th>
                                        <th>Father Name</th>
                                        <th>E-mail</th>
                                        <th>Amount</th>
                                        <th>Image</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fees.map((feesData) => (
                                        <tr key={feesData.id}>
                                            <td>{feesData.id}</td>
                                            <td>{feesData.roll}</td>
                                            <td>{feesData.name}</td>
                                            <td>{feesData.fatherName}</td>
                                            <td>{feesData.email}</td>
                                            <td>{feesData.amount}</td>
                                            <td>
                                                <td>
                                                    <img
                                                        src={`http://localhost:8080/${feesData.image}`}
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
                                            <td>{feesData.status}</td>
                                            <td>
                                                <Link to={`/editfees/${feesData.id}`} className="btn btn-success ">edit</Link>
                                                <button className="btn btn-danger" onClick={() => handleDelete(feesData.id)} >delete</button>
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

export default Fees
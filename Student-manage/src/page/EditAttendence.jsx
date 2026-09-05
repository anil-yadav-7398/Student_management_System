import axios from "axios";
import Sidebaar from "../component/Sidebaar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditAttendence = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [atten, setAttend] = useState({
        roll: "",
        date: "",
        status: ""
    });

    // Load existing attendance
    useEffect(() => {

        const loadAttendance = async () => {

            try {

                const res = await axios.get(
                    `http://localhost:8080/attendence/${id}`
                );

                console.log("Attendance from DB:", res.data);

                setAttend({
                    roll: res.data.roll ?? "",
                    date: res.data.date
                        ? String(res.data.date).substring(0, 10)
                        : "",
                    status: res.data.status ?? ""
                });

            } catch (error) {

                console.error("GET Attendance Error:", error);

            }

        };

        loadAttendance();

    }, [id]);


    // Input change
    const handleChange = (e) => {

        const { name, value } = e.target;

        setAttend(prev => ({
            ...prev,
            [name]: value
        }));

    };


    // Update
    const submit = async (e) => {

        e.preventDefault();

        try {

            const data = {
                date: atten.date,
                status: atten.status
            };

            console.log("Sending:", data);

            await axios.put(
                `http://localhost:8080/attendence/update/${id}`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            alert("Attendance Updated Successfully");

            navigate("/attendence");

        } catch (error) {

            console.error("UPDATE ERROR:", error);

            alert("Attendance update failed");

        }

    };


    return (
        <Sidebaar>

            <div className="container">

                <div className="text-center">

                    <h2
                        style={{
                            textAlign: "center",
                            fontFamily: "serif",
                            backgroundColor: "yellow",
                            padding: "10px"
                        }}
                    >
                        Edit Student Attendance
                    </h2>

                </div>


                <div className="d-flex justify-content-center align-items-center">

                    <div
                        style={{
                            boxShadow: "0px 0px 10px black",
                            borderRadius: "10px",
                            margin: "30px",
                            padding: "30px",
                            width: "100%"
                        }}
                    >

                        <form onSubmit={submit}>





                            {/* Date */}

                            <div className="mb-3">

                                <label>Date:</label>

                                <input
                                    type="date"
                                    name="date"
                                    value={atten.date}
                                    onChange={handleChange}
                                    className="form-control"
                                />

                            </div>


                            {/* Status */}

                            <div className="mb-3">

                                <label>Status:</label>

                                <br />

                                <input
                                    type="radio"
                                    name="status"
                                    value="Present"
                                    checked={atten.status === "Present"}
                                    onChange={handleChange}
                                />

                                <label className="ms-2">
                                    Present
                                </label>

                                <br />

                                <input
                                    type="radio"
                                    name="status"
                                    value="Absent"
                                    checked={atten.status === "Absent"}
                                    onChange={handleChange}
                                />

                                <label className="ms-2">
                                    Absent
                                </label>

                            </div>


                            {/* Update */}

                            <div className="mb-3">

                                <button
                                    type="submit"
                                    className="btn btn-success form-control"
                                >
                                    Update
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </Sidebaar>
    );
};

export default EditAttendence;
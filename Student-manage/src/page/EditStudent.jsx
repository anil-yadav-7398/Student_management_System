import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebaar from "../component/Sidebaar";

const EditStudent = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        fatherName: "",
        email: "",
        mobile: "",
        age: "",
        course: "",
        address: "",
        image: null

    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        loadStudent();
    }, []);

    const loadStudent = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/student/${id}`);

            setStudent({
                ...res.data,
                image: null
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setStudent({
            ...student,
            [name]: value
        });
    };

    const handleImage = (e) => {
        setStudent({
            ...student,
            image: e.target.files[0]
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", student.name);
        formData.append("fatherName", student.fatherName);
        formData.append("email", student.email);
        formData.append("mobile", student.mobile);
        formData.append("age", student.age);
        formData.append("course", student.course);
        formData.append("address", student.address);
        if (student.image instanceof File) {
            formData.append("image", student.image);
        }
        try {
            await axios.put(
                `http://localhost:8080/student/update/${id}`,
                formData
            );
            alert("Student Updated Successfully");
            navigate("/student");
        } catch (err) {

            console.log(err);

        }

    };

    return (

        <Sidebaar>
            <div className="container mt-4">

                <div className="card shadow-sm">
                    <div className="card-body text-ceneter">
                        <h2 style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", backgroundColor: "yellow" }}>Edit Student</h2>

                        <form onSubmit={submit}>

                            <input
                                type="text"
                                name="name"
                                value={student.name}
                                onChange={handleChange}
                                className="form-control mb-3"
                                placeholder="Name"
                            />

                            <input
                                type="text"
                                name="fatherName"
                                value={student.fatherName}
                                onChange={handleChange}
                                className="form-control mb-3"
                                placeholder="Father Name"
                            />

                            <input
                                type="email"
                                name="email"
                                value={student.email}
                                onChange={handleChange}
                                className="form-control mb-3"
                                placeholder="Email"
                            />

                            <input
                                type="text"
                                name="mobile"
                                value={student.mobile}
                                onChange={handleChange}
                                className="form-control mb-3"
                                placeholder="Mobile"
                            />

                            <input
                                type="date"
                                name="age"
                                value={student.age}
                                onChange={handleChange}
                                className="form-control mb-3"
                                placeholder="Age"
                            />

                            <input
                                type="text"
                                name="course"
                                value={student.course}
                                onChange={handleChange}
                                className="form-control mb-3"
                                placeholder="Course"
                            />

                            <textarea
                                name="address"
                                value={student.address}
                                onChange={handleChange}
                                className="form-control mb-3"
                                placeholder="Address"
                            />

                            <input
                                type="file"

                                className="form-control mb-3"
                                onChange={handleImage}
                            />



                            <button type="submit" className="btn btn-success form-control text-center">
                                Update Student
                            </button>

                        </form>


                    </div>

                </div>
            </div>
        </Sidebaar>

    );
};

export default EditStudent;
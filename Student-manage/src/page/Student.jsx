
import { useState } from "react"
import axios from "axios"
import Sidebaar from "../component/Sidebaar"



const Student = () => {

    const [student, setStudent] = useState({
        name: "",
        fatherName: "", // Spring Boot Controller parameters se match karne ke liye add kiya
        email: "",
        mobile: "",
        age: "",
        course: "",
        address: "",
        roll: "",
        image: null
    });

    const handle = (e) => {
        if (e.target.name === "image") {

            setStudent({
                ...student,
                image: e.target.files[0]
            });
        } else {
            // Normal text inputs ke liye
            setStudent({
                ...student,
                [e.target.name]: e.target.value
            });
        }
    };

    // Form submit handle karne ke liye
    const submit = async (e) => {
        e.preventDefault();

        // ⚠️ Sabse important step: FormData object banana padega form-data headers ke sath
        const formData = new FormData();
        formData.append("name", student.name);
        formData.append("fatherName", student.fatherName);
        formData.append("email", student.email);
        formData.append("mobile", student.mobile);
        formData.append("age", student.age);
        formData.append("course", student.course);
        formData.append("address", student.address);
        formData.append("image", student.image)


        try {
            // Ab axios call me direct data ki jagah 'formData' pass karein
            const res = await axios.post("http://localhost:8080/student", formData);

            if (res) {
                alert("Saved Successfull!\n" + `Name: ${res.data.name}, Roll Number: ${res.data.roll}`);
            }
            else {
                alert("Does not save");
            }
        } catch (error) {
            console.log(error);
            alert("Error saving student data!");
        }
    };
    return (
        <Sidebaar>
            <div className="container">
                <div className="col col-sm-6 col-md-12 text-center">
                    <h2 style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", backgroundColor: "yellow" }}> Student </h2>
                </div>
                <div className=" d-flex justify-content-center align-items-center  " >
                    <div style={{
                        boxShadow: "0px 0px 10px black",
                        borderRadius: "10px",
                        margin: "30px",
                        padding: "30px",
                        height: "100%",
                        width: "100%"

                    }}>
                        <form onSubmit={submit} className="">
                            < div className="mb-1">
                                <label > Name :</label>
                                <input type="text" onChange={handle} placeholder="Name" name="name" className="form-control" />
                            </div>
                            <div className="mb-1">
                                <label > Father Name:</label>
                                <input type="text" onChange={handle} placeholder="Father Name" name="fatherName" className="form-control" />
                            </div>
                            <div className="mb-1">
                                <label > E-mail</label>
                                <input type="text" onChange={handle} placeholder="E-mail" name="email" className="form-control" />
                            </div>
                            <div className="mb-1">
                                <label > Mobile No:</label>
                                <input type="Number" onChange={handle} placeholder="mobile" name="mobile" className="form-control" />
                            </div>
                            <div className="mb-1">
                                <label > Date of Birth :</label>
                                <input type="date" onChange={handle} placeholder="date of birth" name="age" className="form-control" />
                            </div>
                            <div className="mb-1">
                                <label > Course:</label>
                                <input type="text" onChange={handle} placeholder="Course" name="course" className="form-control" />
                            </div>
                            <div className="mb-1">
                                <label > Address:</label>
                                <input type="text" placeholder="Address" onChange={handle} name="address" className="form-control" style={{ height: "50px" }} />
                            </div>
                            <div className="mb-1">
                                <label > Image :</label>
                                <input placeholder="Image" type="file" className="form-control" onChange={handle} name="image" />
                            </div>

                            <div className="mb-1 text-center">
                                <button className="btn btn-success form-control mb-3"> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </Sidebaar >
    )
}

export default Student
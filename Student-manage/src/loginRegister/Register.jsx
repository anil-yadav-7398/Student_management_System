import { useState } from "react"
import axios from "axios"
import Sidebaar from "../component/loginbar"

const Register = () => {

    const [form, setForm] = useState({
        name: "",
        role: "",
        email: "",
        password: "",
        confirmPassword: "",
        file: null
    });


    const handle = (e) => {
        if (e.target.name === "file") {

            setForm({
                ...form,
                file: e.target.files[0]
            });
        } else {
            // Normal text inputs ke liye
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        }
    };

    // Form submit handle karne ke liye
    const submit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("try again! password is not matched");
            return;
        } else {
            // ⚠️ Sabse important step: FormData object banana padega form-data headers ke sath
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("role", form.role);
            formData.append("email", form.email);
            formData.append("password", form.password);
            formData.append("confirmPassword", form.confirmPassword);
            formData.append("file", form.file);


            try {
                // Ab axios call me direct data ki jagah 'formData' pass karein
                const res = await axios.post("http://localhost:8080/api/register", formData);

                if (res) {
                    alert("Saved Successfull!\n" + `Name: ${res.data.email}, Password: ${res.data.password}`);
                }
                else {
                    alert("Does not save");
                }
            } catch (e) {

                alert("already Registerd", e);
            }
        }
    };

    return (
        <>
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
                            Student Register
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

                            <form onSubmit={submit}
                            >
                                <div className="mb-3">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        onChange={handle}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">User Roll</label>
                                    <select name="role" className="form-control" onChange={handle}>
                                        <option value="">Select User Roll</option>

                                        <option value="USER">User</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={handle}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={handle}

                                    />

                                </div>
                                <div className="mb-3">
                                    <label>Confirm Password:</label>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        onChange={handle}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image">Profile Image:</label>
                                    <input type="file" name="file" className="form-control" onChange={handle} />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-success form-control">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Sidebaar>
        </>
    )
}

export default Register
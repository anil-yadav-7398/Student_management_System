
import { Link } from "react-router-dom"
import Sidebaar from "../component/Sidebaar"
import "../component/side.css"
import { useEffect, useState } from "react";
import axios from "axios";
import "../component/side.css"
const Dashboard = () => {

    const [keyword, setKeyword] = useState(null);
    const [roll, setRoll] = useState("");
    const [showPoup, setShowPopup] = useState(false);
    const fetchRoll = async () => {

        try {
            const res = await axios.get(`http://localhost:8080/student/roll/${roll}`);
            setKeyword(res.data);
            alert("Successfull verifid")
            setShowPopup(true);
        } catch (error) {
            setShowPopup(false);
            alert("Not verifid" + error)

        }


    };





    const [Stu, setStu] = useState(0);

    const fetchStudent = () => {
        fetch("http://localhost:8080/student")
            .then(res => res.json())
            .then(data => setStu(data));
    };
    useEffect(() => {
        fetchStudent();
    }, []);

    const [Att, setAtt] = useState(0);
    const fetchAttend = () => {
        fetch("http://localhost:8080/attendence")
            .then(res => res.json())
            .then(data => setAtt(data))


    };
    useEffect(() => {
        fetchAttend();
    }, []);
    const [fees, setFees] = useState(0);
    const fetchFees = () => {
        fetch("http://localhost:8080/fees")
            .then(res => res.json())
            .then(data => setFees(data))


    };
    useEffect(() => {
        fetchFees();
    }, []);

    return (
        <Sidebaar>
            <div className="container">
                <h2 style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", backgroundColor: "yellow" }}> Student DashBoard </h2>
                <div className="row">

                    <div className="col col-sm-6 col-md-4">
                        <div style={{
                            boxShadow: "0px 0px 10px black",
                            borderRadius: "10px",
                            margin: "30px",
                            padding: "30px",

                        }}>
                            <div >
                                <h3 style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", color: "blue" }}>{Stu.length}</h3>
                                <h4 style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", color: "black" }}>Total Student</h4>

                                <Link to={"/allStudent"} className="btn btn-success" style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", height: "100%", width: "100%" }}>View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-6 col-md-4">
                        <div style={{
                            boxShadow: "0px 0px 10px black",
                            borderRadius: "10px",
                            margin: "30px",
                            padding: "30px",

                        }}>
                            <div >
                                <h3 style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", color: "blue" }}>{fees.length}</h3>
                                <h4 style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", color: "black" }}>Total Student Fees </h4>

                                <Link to={"/fees"} className="btn btn-success" style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", height: "100%", width: "100%" }}>View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-6 col-md-4">
                        <div style={{
                            boxShadow: "0px 0px 10px black",
                            borderRadius: "10px",
                            margin: "30px",
                            padding: "30px",

                        }}>
                            <div >
                                <h3 style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", color: "blue" }}> {Att.length}</h3>
                                <h4 style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", color: "black" }}>Total Student Attendence </h4>

                                <Link to={"/allAttend"} className="btn btn-success" style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", height: "100%", width: "100%" }}>View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-6 col-md-4 -">
                        <div style={{
                            boxShadow: "0px 0px 10px black",
                            borderRadius: "10px",
                            margin: "30px",
                            padding: "30px",

                        }}>
                            <div >
                                <h4 style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", color: "black" }}> Student ID Card </h4>

                                <input type="text" placeholder="enter the roll Number" className="form-controls col-12" value={roll} onChange={(e) => setRoll(e.target.value)} style={{ fontFamily: "serif", fontSize: "40", fontStyle: "bold", margin: "20px" }} />

                                <button type="submit" onClick={() => { fetchRoll(); setShowPopup(false); }} className="btn btn-success" style={{ textAlign: "center", fontFamily: "serif", fontSize: "30", fontStyle: "bold", height: "100%", width: "100%" }}>Verifyed</button>
                            </div>
                        </div>
                    </div>

                </div>
                {showPoup && (


                    <div className="  container h-50 w-50 " style={{
                        boxShadow: "0px 0px 10px black",
                        borderRadius: "10px",
                        margin: "30px",
                        padding: "30px",
                        background: "#ade5e8",
                        justifyContent: "center",
                        alignItems: "center",
                        top: "0px",

                    }}>


                        <div className="d-flex ">
                            <img src="src/image/jrdsu.jpeg" alt="#" style={{ borderRadius: "50%", width: '15vw', height: '7.5vw', margin: "10px", padding: "10px" }} />
                            <div className="m-0 p-0 fs-12">
                                <h4 style={{ fontFamily: "serif", fontStyle: "bold", fontSize: "20px", color: "orange" }}>Jagadguru RamBhadracharya Divyang state University chitrakoot UP</h4>
                                <p style={{ fontSize: "11px", fontFamily: "serif-" }}>Web : https://jrdsu.up.gov.in Email : jrduniversity@gmail.com <br /><span> Phone :051098-2242093,224481 Mobile: +91 7269016878, +91 7398392136</span></p>

                            </div>
                        </div>
                        <h4 style={{ fontFamily: "sans-serif", fontStyle: "bold", background: "#F39A00", color: "white", textAlign: "center", justifyContent: "center" }}>Student Indentity Card</h4>

                        <div className="row">


                            <div className="col col-md-6">
                                <div className="mb-3 gap-10">
                                    <div className="row">
                                        <div className="col col-md-6">
                                            <label htmlFor="">Name :</label>
                                            <label htmlFor="">Father Name :</label>
                                            <label htmlFor="">Roll Number :</label>
                                            <label htmlFor="">Date of Birth:</label>
                                            <label htmlFor="">Course :</label>
                                        </div>

                                        {keyword && (
                                            <div className="col col-md-6" key={keyword.id}>

                                                <label>{keyword.name}</label><br />
                                                <label>{keyword.fatherName}</label><br />
                                                <label>{keyword.roll}</label><br />
                                                <label>{keyword.age} </label><br />
                                                <label>{keyword.course}</label>
                                            </div>

                                        )}
                                    </div>

                                </div>
                            </div>
                            <div className="col col-md-6">
                                {keyword && (
                                    <img src={`http://localhost:8080/${keyword.image}`} alt="#" style={{ borderRadius: "10%", width: '150px', height: '150px', margin: "10px", padding: "10px" }} />
                                )}
                            </div>

                        </div>
                    </div>)}
            </div>
        </Sidebaar>
    )
}

export default Dashboard
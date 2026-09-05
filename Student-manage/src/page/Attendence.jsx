
import { useState } from "react"
import Sidebaar from "../component/Sidebaar"
import axios from "axios";

const Attendence = () => {

    const [Attend, setAttend] = useState({
        date: "",
        roll: "",
        status: ""

    });
    const handling = (e) => {
        setAttend({
            ...Attend,
            [e.target.name]: e.target.value
        });
    };
    // Form submit handle karne ke liye
    const formSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post("http://localhost:8080/attendence", Attend);

            if (res) {
                alert("Saved Successfull!");
            }
            else {
                alert("Does not save");
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Sidebaar>
            <div className="container">
                <div className="col col-sm-6 col-md-12 text-center">
                    <h2 style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", backgroundColor: "yellow" }}> Student Attendence </h2>
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
                        <form onSubmit={formSubmit} >
                            <div className="mb-3">
                                <label > Date</label>
                                <input type="date" value={Attend.date} onChange={handling} placeholder="date" name="date" className="form-control" />
                            </div>


                            <div className="mb-3">
                                <label > Roll Number</label>
                                <input type="text" placeholder="Roll number" value={Attend.roll} onChange={handling} name="roll" className="form-control" />
                            </div>


                            <div className="mb-3">
                                <label > status :</label><br />
                                <input type="radio" name="status" value={"present"} onChange={handling} />
                                <label >Present</label><br />
                                <input type="radio" name="status" value={"Absent"} onChange={handling} />
                                <label >Absent</label>
                            </div>

                            <div className="mb-3 text-center">
                                <button className='btn btn-success form-control' >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </Sidebaar>
    )
}

export default Attendence
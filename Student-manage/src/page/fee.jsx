
import axios from 'axios';
import Sidebaar from '../component/Sidebaar'
import { useState } from 'react';

const fees = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fees, setFees] = useState({
        roll: "",
        amount: "",
        status: "",

    });
    const savehandling = (e) => {
        setFees({
            ...fees,
            [e.target.name]: e.target.value
        });
    };

    // Form submit handle karne ke liye
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/fees", fees);
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
                    <h2 style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", backgroundColor: "yellow" }}> Student Fees </h2>
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
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor=""> Roll Number</label>
                                <input type="text" value={fees.roll} onChange={savehandling} name="roll" placeholder="Roll number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=""> Amount:</label>
                                <input type="number" value={fees.amount} onChange={savehandling} name="amount" placeholder="Amount" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=""> status :</label><br />
                                <input type="radio" name="status" onChange={savehandling} value={"payment"} /> <label htmlFor="">Paymented</label><br />
                                <input type="radio" name="status" onChange={savehandling} value={"non-payment"} /><label htmlFor="">Non-payment</label>

                            </div>

                            <div className="mb-3 text-center">
                                <button type="submit" className='btn btn-success form-control'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </Sidebaar >
    )
}

export default fees
import { useEffect, useState } from 'react';
import Sidebaar from '../component/Sidebaar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditFees = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [fees, setFees] = useState({
        roll: "",
        amount: "",
        status: ""
    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        loadFees();
    }, [id]);

    const loadFees = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8080/fees/${id}`
            );

            console.log("Edit Fees Data:", res.data);

            setFees({
                roll: res.data.roll || "",
                amount: res.data.amount || "",
                status: res.data.status || ""
            });

        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFees(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submit = async (e) => {

        e.preventDefault();

        try {

            await axios.put(
                `http://localhost:8080/fees/update/${id}`,
                {
                    amount: fees.amount,
                    status: fees.status
                }
            );

            alert("Fees Updated Successfully");

            navigate("/fees");

        } catch (err) {

            console.log(err);

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
                            backgroundColor: "yellow"
                        }}
                    >
                        Edit Student Fees
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

                            {/* Roll - readonly */}



                            {/* Amount */}

                            <div className="mb-3">

                                <label>Amount:</label>

                                <input
                                    type="number"
                                    name="amount"
                                    value={fees.amount}
                                    onChange={handleChange}
                                    placeholder="Amount"
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
                                    value="payment"
                                    checked={fees.status === "payment"}
                                    onChange={handleChange}
                                />

                                <label className="ms-2">
                                    Paymented
                                </label>

                                <br />

                                <input
                                    type="radio"
                                    name="status"
                                    value="non-payment"
                                    checked={fees.status === "non-payment"}
                                    onChange={handleChange}
                                />

                                <label className="ms-2">
                                    Non-payment
                                </label>

                            </div>


                            {/* Submit */}

                            <div className="mb-3 text-center">

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

export default EditFees;
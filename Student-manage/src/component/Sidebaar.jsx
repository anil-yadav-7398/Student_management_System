import './side.css'
import { NavLink } from "react-router-dom"

const Sidebaar = ({ children }) => {



    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    };
    return (

        <>
            <div className="container-fluid">
                <div className="row">

                    <  div className="col-2 bg-primary text-white vh-100">
                        <div className="p-3 text-center" style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", color: "black", backgroundColor: "yellow", borderRadius: "10px" }}>
                            Menu</div>

                        <ul className=" nav fex-column" >
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/user"}>Student Dashboard</NavLink></li>
                            <li className="nav-item">

                                <NavLink className="nav-link text-white" to={"/student"}>Add Student Form</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/attendence"}>Student Attendence form</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/fee"}>Fees Management Form</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/fees"}> View All Fees Management</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/allAttend"}>View All Student Attendence</NavLink></li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/allstudent"}> View All Student</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/registerGet"}> View All Register</NavLink></li>


                            <li className="nav-item">
                                <button className="nav-link text-white" onClick={logout}> LOG-OUT</button></li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <nav className="navbar navbar-light bg-primary shadow-sm">
                            <div className="container-fluid">
                                <h2 style={{ color: "white" }} className="navbar-brand mb-0  text-center ">
                                    Student Management System
                                </h2>
                            </div>
                        </nav>
                        <div className="p-4">
                            {children}

                        </div>
                    </div>

                </div>
            </div >

        </>
    )

}


export default Sidebaar
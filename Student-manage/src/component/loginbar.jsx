import './side.css'
import { NavLink } from "react-router-dom"

const loginbar = ({ children }) => {


    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <  div className="col-2 bg-primary text-white vh-100">
                        <h3 className="p-3 text-center" style={{ margin: "209", textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold", color: "black", backgroundColor: "yellow", borderRadius: "10px" }}>Menu</h3>

                        <ul className=" nav fex-column" >
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/register"}> SING UP</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/"}> Login</NavLink>
                            </li>
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


export default loginbar
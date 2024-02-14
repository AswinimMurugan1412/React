import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const EmpListing = () => {
    const [empdata,setEmpdata] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/employee")
        .then((res)=>res.json())
        .then((res)=>{
            setEmpdata(res);
        })
        .catch((err)=>{
            console.log(err.message)
        })
    })
    return(
        <div>
            <div className='container'>
                <div className='card'>
                    <div className='card-title'>
                    <h2>Employee Listing</h2>
                    </div>
                    <div className='card-body'>
                        <div className='divbtn'>
                            <Link to = 'empoloyee/create' className='btn btn-success'>AddNew(+)</Link>
                        </div>
                        <table className='table table-borderd'>
                            <thead className='table-dark text-white'>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empdata &&
                                    empdata.map((item)=>(
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <a className="btn btn-success"> Edit</a>
                                                <a className="btn btn-danger"> Delete</a>
                                                 <a className="btn btn-primary"> Details</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpListing
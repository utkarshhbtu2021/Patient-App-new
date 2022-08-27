import React, { useEffect, useState } from "react"
import "./appointment.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import api from "../../api";
import { useContext } from "react";
import patientContext from "../../context/patientDetails/patientContext"
import { useHistory } from 'react-router-dom';
import Loader from "react-js-loader";


const Appointment = () => {
    const history = useHistory()
    const a = useContext(patientContext)
    const [value, onChange] = useState(new Date());
    const [information, setData] = useState([])
    const [rawInformation, setRawData] = useState([])
    const [patientType, setPatientType] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [reason, setReason] = useState("COVID-19 Testing");
    const [provider, setProvider] = useState("");
    const [location, setLoction] = useState("OOLTEWAH CLINIC (EDT)");
    const [timeData, setTimeData] = useState("");
   
    useEffect(() => {
        let request = {
            url: `https://appointmentapi.apatternclinic.com/v1/24451/appointments/open?practiceid=24451&departmentid=1&reasonid=-1`,

        }
        api.getAuth(request).then(data => {
            if (data.data.appointments.length > 0) {
                setRawData([...data.data.appointments])
            }

        })

    }, [])

    useEffect(() => {
        if(rawInformation.length >0 ){
        const yyyy = value.getFullYear();
        let mm = value.getMonth() + 1; // Months start at 0!
        let dd = value.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const date = mm + '/' + dd + '/' + yyyy;
        const data = rawInformation.filter(el => el.date === date)
        setData([...data])
        }
    }, [value, rawInformation]);

    const UpdateData = (starttime, appointmentid, appointmenttypeid) => {
        setTimeData(starttime)
        a.update({ location: location, timeData: starttime, reason: reason, appointmenttypeid: appointmenttypeid, appointmentid: appointmentid, value: value.toDateString() })
        setTimeout(() => {
            history.push("/schedule/")
        }, 500)


    }


    return (<> 
        <div className="container-fluid">
            <div className="row mb-3 d-block d-sm-none">
                <div className="col-md-12 text-center">
                    <div className="d-grid gap-2 col-10 mx-auto mb-3">
                        <button type="button" className="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#leftModalScrollExample">Search</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 d-none d-sm-block">
                    <div class="sidebar-left">
                        <div class="sidebar-contnt pt-2">

                            <h2 class="font-weight-bold pt-2 text-info">Search</h2>
                            <form>
                                <div class="mb-3">
                                    <label class="form-label text-white">Patient Type <span class="text-white">*</span></label>
                                    <select class="form-select" onChange={(event) => { setPatientType(event.target.value) }}>
                                        <option>-Select-</option>
                                        <option>Existing</option>
                                        <option>New</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-white">Specialty <span class="text-white">*</span></label>
                                    <select class="form-select" onChange={(event) => { setSpecialty(event.target.value) }}>
                                        <option>General Practice</option>

                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label text-white">Reason for visit <span class="text-white">*</span></label>
                                    <select class="form-select" onChange={(event) => { setReason(event.target.value) }}>
                                        <option>COVID-19 Testing</option>

                                    </select>
                                    <label class="form-label text-white mt-2">What reason should I choose?</label>
                                </div>
                                <div class="row mb-1">
                                    <div class="col-sm-12">
                                        <Calendar onChange={onChange} value={value} minDate={new Date()} />

                                    </div>
                                </div>




                                <div class="row mb-1 mt-2">
                                    <div class="col-md-6 col-6">
                                        <h4 class="text-info ">Filters</h4>
                                    </div>
                                    <div class="col-md-6 col-6 text-end">
                                        <span class="text-medium text-white">Clear Filters</span>
                                    </div>
                                </div>
                                <hr class="mt-0 mb-0" />
                                <div class="mb-3">
                                    <label class="form-label text-white">Provider</label>
                                    <select class="form-select" onChange={(event) => { setProvider(event.target.value) }}>
                                        <option>COVID-19 Testing</option>

                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-white">Location</label>
                                    <select class="form-select" onChange={(event) => { setLoction(event.target.value) }}>
                                        <option>OOLTEWAH CLINIC</option>

                                    </select>
                                </div>



                            </form>

                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="card mb-1">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="text-medium mb-0"><strong>{value.toDateString()} </strong></h3>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card mb-5 ">
                        <div class="card-body min-vh-100">
                            <div class="row">
                                <div class="col-md-6">
                                    <h3 class="text-medium mb-1 mt-1"><strong>{location}</strong></h3>
                                </div>
                                <div class="col-md-6 text-sm-end">
                                    <h3 class="mb-0 text-medium">5545 abc, new york, usa, 110010</h3>
                                </div>
                            </div>
                            <hr class="mt-2" />
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="card h-100 hover-scale-up bg-light">
                                        <a class="card-body text-center d-flex flex-column align-items-center" href="#">
                                            <div class="sw-8 sh-8 rounded-xl d-flex justify-content-center align-items-center border border-primary">
                                                <img src="img/provider-black.png" alt="" /> </div>
                                            <p class="heading mt-3 text-body mb-0"><strong>{reason}</strong></p>

                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-5">
                                <div className="col-md-12">

                                    {
                                        information && information.length > 0 ? information.map((item, index) => {
                                            return (<>
                                                {/* <div className="cardData" onClick={()=>{UpdateData(item.starttime ,item.appointmentid, item.appointmenttypeid)}}>
                                    <span style={{ padding: "10px", paddingTop: "10px", paddingBottom: "10px" }}>

                                        <div className="tooltip">{item.starttime}
                                            <span className="tooltiptext">
                                                {item.patientappointmenttypename} <br />
                                                {item.date}
                                            </span>
                                        </div>
                                    </span>
                                </div>
                                 */}
                                                <div className="cat action" data-toggle="tooltip" title={item.patientappointmenttypename + " " + item.date} onClick={() => { UpdateData(item.starttime, item.appointmentid, item.appointmenttypeid) }}>
                                                    <label><input type="checkbox" value="1" /><span>{item.starttime}</span></label>

                                                </div>
                                            </>)
                                        }) :
                                            <Loader type="bubble-scale" bgColor={"#0c71c3"} title={"bubble-scale"} color={'#FFFFFF'} size={100} />
                                    }


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <div className="leftDasbord">
                <p className="SearchName"> Search </p>
                <div className="select_bar">
                    <p>Patient type Required</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status" onChange={(event)=>{setPatientType(event.target.value)}}>
                            <option>-Select-</option>
                            <option>Existing</option>
                            <option>New</option>
                           
                        </select>

                    </form>
                </div>
                <div className="select_bar">
                    <p>Specialty- Required</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status"  onChange={(event)=>{setSpecialty(event.target.value)}}>
                            <option>General Practice</option>
                            
                        </select>

                    </form>
                </div>
                <div className="select_bar">
                    <p>Reason for visit- Required</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status" onChange={(event)=>{setReason(event.target.value)}}>
                            <option>COVID-19 Testing</option>
                         
                        </select>

                    </form>
                </div>
                <div>
                    <p style={{fontSize:"12px", color:"#0097F9"}}> What reason should i choose ?</p>
                </div>
                <div>
                    <div style={{ margin: "20px" }}>
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
                <div style={{ borderBottom: "1px solid red", display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px" }}>
                    <div>
                        <p> Filters</p>
                    </div>
                    <div>
                        <p style={{ color: "#0097F9" }}> Clear Filters</p>
                    </div>
                </div>
 
                <div className="select_bar">
                    <p>Provider</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status" onChange={(event)=>{setProvider(event.target.value)}}>
                            <option>COVID-19 Testing</option>
                           
                        </select>

                    </form>
                </div>
                <div className="select_bar">
                    <p>Location</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status" onChange={(event)=>{setLoction(event.target.value)}}>
                            <option>OOLTEWAH CLINIC</option>
                            
                        </select>

                    </form>
                </div>

            </div> */}

            {/* <div style={{ display: "flex", flexDirection: "column", width: "75%" }}>
                <div className="mainheader">
                    <p> {value.toDateString()} </p>

                </div>
                <div className="mainContainer">
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" ,paddingLeft:"10px", paddingRigh
                    
                    
                    t:"10px" }}>
                        <p className="topHeaderLeft">
                           {location}
                        </p>
                        <p className="topHeaderLeft"> 
                            5545 LITTLRE DEBBIE PKWY OOLTEWAH , TN 37363-4357
                        </p>
                    </div>
                    <p>{reason}</p>
                    <div style={{ width: "100%", border: "1px solid red" }}></div>
                    <div>
                      
                        {
                        information&& information.length>0?   information.map((item, index)=>{
                                return(<>
                                <div className="cardData" onClick={()=>{UpdateData(item.starttime ,item.appointmentid, item.appointmenttypeid)}}>
                                    <span style={{ padding: "10px", paddingTop: "10px", paddingBottom: "10px" }}>

                                        <div className="tooltip">{item.starttime}
                                            <span className="tooltiptext">
                                                {item.patientappointmenttypename} <br />
                                                {item.date}
                                            </span>
                                        </div>
                                    </span>
                                </div>
                                
                                </>)
                            }):
                            <Loader type="bubble-scale" bgColor={"red"} title={"bubble-scale"} color={'#FFFFFF'} size={100} />
                        }
                        
                    </div>

                </div>
            </div> */}


        </div>

    </>)

}


export default Appointment;

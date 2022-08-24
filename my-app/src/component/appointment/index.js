import React, { useEffect, useState  } from "react"
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
    const [patientType , setPatientType] = useState("");
    const[specialty , setSpecialty] = useState("");
    const [reason , setReason]= useState("COVID-19 Testing");
    const [provider, setProvider] = useState("");
    const [location , setLoction]= useState("OOLTEWAH CLINIC (EDT)");
    const [timeData, setTimeData] = useState("");
    useEffect(()=>{
        let request = {
            url: `https://api.preview.platform.athenahealth.com/v1/24451/appointments/open?practiceid=24451&departmentid=1&reasonid=-1`,
            
        }
        api.getAuth(request).then(data => {    
            if(data.data.appointments.length>0){     
                setData([...data.data.appointments])
                
            }
           
        })

    },[])

    const UpdateData =(starttime, appointmentid , appointmenttypeid)=>{  
        setTimeData(starttime)
        a.update({location:location,timeData:starttime , reason:reason , appointmenttypeid:appointmenttypeid, appointmentid:appointmentid, value:value.toDateString()})  
setTimeout(()=>{
    history.push("/schedule/")
}, 1000)
          
        
    }
   

    return (<>

 
        <div className="container">
            <div className="leftDasbord">
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

            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "75%" }}>
                <div className="mainheader">
                    <p> {value.toDateString()} </p>

                </div>
                <div className="mainContainer">
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" ,paddingLeft:"10px", paddingRight:"10px" }}>
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

                                        <div class="tooltip">{item.starttime}
                                            <span class="tooltiptext">
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
            </div>


        </div>
        
    </>)

}


export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import patientContext from "../../context/patientDetails/patientContext";
import api from "../../api";

import moment from 'moment';

const ScheduleAppointment = (props) => {
    const a = useContext(patientContext)
    const [dateData, setDateData] = useState(1111)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    var details = {
        "firstname": firstname,
        "lastname": lastname,
        "departmentid": 1,
        "dob":"1/1/1980",
        "email": email,
        "guarantoremail": email,
        "ssn": 178988977,

    }
    const validation = ()=>{
        if(firstname.length >0 && lastname.length>0 && dob.length> 0 && email.length> 0){
            return true
        }
        else{
            return false
        }
    }

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }


    useEffect(() => {
        
    }, [])

    const ScheduleApi = () => {
        if(validation){
        let formBodydata = formBody.join("&");
        let request = {
            url: `https://api.preview.platform.athenahealth.com/v1/24451/patients`,
            token: `Bearer Qb5LCAMoNtXX3P1aKOcoGL2zMXa4`,
            data: formBodydata
        }

        api
            .postAuth(request)
            .then((response) => {

                console.log(response, "response")
            })
            .catch((error) => {
            })
    }
}

    return (<>
        {
            console.log(a, "check a data ")
        }
        <p> Schedule Appointment </p>
        <div>
            <div>
                <p> Patient Information</p>
                <div>
                    <label>
                        first Name:
                        <input type="text" name="name" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                    </label>
                    <label>
                        first  Name used:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Last  Name:
                        <input type="text" value={lastname} onChange={(e) => { setLastname(e.target.value) }} name="name" />
                    </label>
                    <label>
                        date of birth :
                        <input type="date" name="name" value={dob} onChange={(e) => { setDob(e.target.value) }} />
                    </label>
                    <label>
                        Sex
                    </label>
                    <select >
                        <option>male</option>
                        <option>female</option>

                    </select>
                    <label>
                        Phone Required :
                        <input type="number" name="name" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </label>
                    <label>
                        phone type
                    </label>
                    <select >
                        <option>data1</option>
                        <option>data2</option>
                        <option>data3</option>
                        <option>data4</option>
                    </select>

                   
                    <label>
                        email Required :
                        <input type="email" name="name" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </label>


                </div>
            </div>



            <div>
                <p>Appointment Details</p>
                <div>
                    <p>{a.patientDetails.reason}</p>
                    <div>
                        <p> Day and Time</p>
                        <p>{a.patientDetails.value}</p>
                        <p> Location </p>

                        <p> <p>{a.patientDetails.location}</p></p>
                        <p>Insurance - Required</p>
                        <input />
                        <p>Additional notes - Required</p>
                        <input />


                    </div>
                </div>
                <div>
                    <button> Previous</button>
                    <button onClick={()=>{ScheduleApi()}}> Next</button>
                </div>

            </div>

        </div>
    </>)
}

export default ScheduleAppointment;
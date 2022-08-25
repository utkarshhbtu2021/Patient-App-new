
import reCAPTCHA from "react-google-recaptcha"
import React, { useContext, useEffect, useState } from "react";
import patientContext from "../../context/patientDetails/patientContext";
import api from "../../api";
import { useHistory } from 'react-router-dom';
const ReviewAppoinment = () => {
    const history = useHistory()
    const a = useContext(patientContext)
    var details = {
        "patientid": a.patientDetails.patientid,
        "appointmenttypeid": a.patientDetails.appointmenttypeid,
        "appointmentid": a.patientDetails.appointmentid,
        "departmentid":9325,
        "ignoreschedulablepermission": true,
        
    }
   
    const Preview=()=>{
        setTimeout(()=>{
            history.push("/schedule/")
        }, 1000)
       }
    const ShaduleAppointment=()=>{
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        let formBodydata = formBody.join("&");
        let request = {
            url: `https://api.preview.platform.athenahealth.com/v1/24451/appointments/${a.patientDetails.appointmentid}`,
            data: formBodydata
          }
          api
            .putAuth(request)
            .then((data) => {
            console.log(data)
            })
            .catch((error) => {})
    }
    return (<>
        <p>Review Appoinment</p>
        <div>
            <div>
            <reCAPTCHA />
                <p> Patient Information</p>
                <div>
                    <p> Ashok kumar </p>
                    <p>{a.patientDetails.firstname}</p>

                    <p>
                        Phone
                    </p>
                    <p>{a.patientDetails.phone}</p>
                    <p> Email </p>
                    <p>{a.patientDetails.email}</p>
                </div>
            </div>
            <div>
                <p>Appoinment Details</p>
                <p>COVID-19 Testing</p>
                <p>Day and Time </p>
                <p>{a.patientDetails.value} {a.patientDetails.timeData}</p>
                <p>Loction</p>
                <p>{a.patientDetails.location}</p>
                <p>Reason for Visit </p>
                <p>{a.patientDetails.reason}</p>
                <p>Insurance</p>
                <p>{a.patientDetails.insurance}</p>
                <p>Additional notes </p>
                <p>{a.patientDetails.additional}</p>
            
            </div>
        </div>
        <button onClick={()=>{Preview()}}>Preview </button>
        <button onClick={()=>{ShaduleAppointment()}}> Scheduled</button>
    </>)
}

export default ReviewAppoinment;
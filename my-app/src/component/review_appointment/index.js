
import reCAPTCHA from "react-google-recaptcha"
import React, { useContext, useEffect, useState } from "react";
import patientContext from "../../context/patientDetails/patientContext";
import api from "../../api";
import swal from 'sweetalert';
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
            url: `https://appointmentapi.apatternclinic.com/v1/24451/appointments/${a.patientDetails.appointmentid}`,
            data: formBodydata
          }
          api
            .putAuth(request)
            .then((data) => {
            if(data.status==200)
            {
            swal("success","Appointment Booked!!", "success")
            history.push("/")
        }else{swal("Appointment not Booked!", "error")}
            })
            .catch((error) => {})
    }
    return (<>
    {
        console.log(a ,"a data ")
    }
             <div className="container-fluid">

<div className="row">
	<div className="col-md-10 col-12 mx-auto">
		<div className="card mb-1">
			<div className="card-header bg-primary text-white text-large">Review Appointment</div>

</div>
		<div className="row">
	<div className="col-md-6">
		<div className="card mb-5 vh-80">
			<div className="card-header text-medium bg-danger"><strong>Patient Information</strong></div>
<div className="card-body">	
	<div className="row mb-3">
	<div className="col-md-12">	
		<div className="row g-3">
<div className="col-auto">
<div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
<i className="text-primary icon-20 bi-person-fill"></i>
</div>
</div>
<div className="col">
<div className="card-body d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
<div className="d-flex flex-column">
<div className="mb-0"><strong>{a.patientDetails.firstname + " "+a.patientDetails.lastname}</strong></div>
<div className="">42 yr | 01-01-1980 |Male</div>

</div>
</div>
</div>
</div>
		</div>
	</div>
	<hr/>
	<div className="row mb-3">
	<div className="col-md-12">	
		<div className="row g-3">
<div className="col-auto">
<div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
<i className="text-primary icon-20 bi-telephone-fill"></i>
</div>
</div>
<div className="col">
<div className="card-body d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
<div className="d-flex flex-column">
<div className="mb-0"><strong>Phone</strong></div>
<div className="">{a.patientDetails.phone}</div>

</div>
</div>
</div>
</div>
		</div>
	</div>
	
	<hr/>
	<div className="row mb-3">
	<div className="col-md-12">	
		<div className="row g-3">
<div className="col-auto">
<div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
<i className="text-primary icon-20 bi-envelope-fill"></i>
</div>
</div>
<div className="col">
<div className="card-body d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
<div className="d-flex flex-column">
<div className="mb-0"><strong>Email</strong></div>
<div className="">{a.patientDetails.email}</div>

</div>
</div>
</div>
</div>
		</div>
	</div>
	
</div>
</div>
		</div>
			
		<div className="col-md-6">
		<div className="card mb-5 vh-80">
			<div className="card-header text-medium bg-danger"><strong>Appointment Details</strong></div>
<div className="card-body">	
	<div className="row mb-3">
	<div className="col-md-6">
		<div className="card h-100 hover-scale-up bg-light">
<a className="card-body text-center d-flex flex-row align-items-center" href="#">
<div className="sw-8 sh-8 rounded-xl d-flex justify-content-center align-items-center border border-primary">
	<img src="img/provider-black.png" alt=""/> </div>
<p className="heading ps-3 text-body mb-0"><strong>Covid-19 Testing</strong></p>

</a>
</div>
		</div>
	</div>
	
	<div className="row g-2 mb-3">
<div className="col-xl-6 col-12">
<div className="card border border-primary">
<div className="card-body">
<div className="row g-3">
<div className="col-auto">
<div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
<i className="text-primary icon-20 bi-calendar-week"></i>
</div>
</div>
<div className="col">
<div className="card-body d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
<div className="d-flex flex-column">
<div className="mb-0"><strong>Day and Time</strong></div>
<div className="">{a.patientDetails.value}  <br/>{a.patientDetails.timeData}(EDT)</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-xl-6 col-12">
<div className="card border border-primary">
<div className="card-body">
<div className="row g-3">
<div className="col-auto">
<div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
<i className="text-primary icon-20 bi-map-fill"></i>
</div>
</div>
<div className="col">
<div className="card-body d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
<div className="d-flex flex-column">
<div className="mb-0"><strong>Location</strong></div>
<div className="">{a.patientDetails.location}</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
	
	<div className="row g-2 mb-3">
<div className="col-xl-6 col-12">
<div className="card border border-primary">
<div className="card-body">
<div className="row g-3">
<div className="col-auto">
<div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
<i className="text-primary icon-20 bi-patch-question-fill"></i>
</div>
</div>
<div className="col">
<div className="card-body d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
<div className="d-flex flex-column">
<div className="mb-0"><strong>Reason for Visit</strong></div>
<div className="">{a.patientDetails.reason}</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-xl-6 col-12">
<div className="card border border-primary">
<div className="card-body">
<div className="row g-3">
<div className="col-auto">
<div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
<i className="text-primary icon-20 bi-shield-fill-check"></i>
</div>
</div>
<div className="col">
<div className="card-body d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
<div className="d-flex flex-column">
<div className="mb-0"><strong>Insurance</strong></div>
<div className="">{a.patientDetails.insurance}</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
	
	<div className="row">
	<div className="col-md-12">
		<p className="mb-0"><strong>Additional Notes</strong></p>
		<p>{a.patientDetails.additional}</p>
		</div>
	</div>	
	
	{/* <div className="row mb-3">
	<div className="col-md-12">
		Robot Capcha
	
		</div>
	</div> */}
	<div className="row mb-3">
	<div className="col-md-12">
		<input type="checkbox" className="" /> I agree to the <span className="text-primary">Terms and Conditions </span>and <span className="text-primary">Privacy policy.</span>
	
		</div>
	</div>
	<div className="row">	
		<div className="col-12">
			<button type="button" className="btn btn-light mb-1 me-3" onClick={()=>{Preview()}}>Previous</button>
			<button type="button" className="btn btn-primary mb-1" onClick={()=>{ShaduleAppointment()}}>Schedule Appointment</button>
		</div>
</div>	
	
	
</div>
</div>
		</div>	
			
			
			
			
	</div>
		
		
		
	</div>
	</div>
</div>

    </>)
}

export default ReviewAppoinment;
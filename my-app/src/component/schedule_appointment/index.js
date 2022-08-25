import React, { useContext, useEffect, useState } from "react";
import patientContext from "../../context/patientDetails/patientContext";
import api from "../../api";
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const ScheduleAppointment = () => {
    const history = useHistory()
    const a = useContext(patientContext)
    const [dateData, setDateData] = useState(1111)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [insurance, setInsurance] = useState("")
    const [additional, setAdditional] = useState("")
    const [sex, setSex]= useState("male")

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
        if(firstname.length >0 && lastname.length>0 && dob.length> 0 && email.length> 0 && additional.length>0 && insurance.length>0 ){
            return true
        }
        else{
            return false
        }
    }

   const Preview=()=>{
    setTimeout(()=>{
        history.push("/")
    }, 1000)
   }

    useEffect(() => {
        
    }, [])

    const ScheduleApi = () => {
        
        if(validation()){
            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
        
        let formBodydata = formBody.join("&");
        let request = {
            url: `https://api.preview.platform.athenahealth.com/v1/24451/patients`,
            data: formBodydata
        }

        api
            .postAuth(request)
            .then((response) => {
                a.update({...a.patientDetails, dob:dob, sex:sex, email:email,phone:phone,firstname:firstname,lastname:lastname  ,insurance:insurance, additional:additional , patientid:response.data[0].patientid})  
                setTimeout(()=>{
                    history.push("/review")
                }, 1000)
            })
            .catch((error) => {
            })
    }
}

    return (<>
               <div className="container-fluid">

<div className="row">
	<div className="col-md-10 col-12 mx-auto">
		<div className="card mb-1">
			<div className="card-header bg-primary text-white text-large">Schedule Appointment</div>

</div>
		<div className="row">
	<div className="col-md-6">
		<div className="card mb-5 ">
			<div className="card-header text-medium bg-danger"><strong>Patient Information</strong></div>
<div className="card-body">	
	<div className="row">
	<div className="col-md-6">
		<div className="mb-3">
<label className="form-label">First Name <span className="text-danger">*</span></label>
{/* <select className="form-select">
<option selected="selected">Choose...</option>
<option>...</option>
</select>		 */}
   <input type="text" className="form-control" name="name" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
</div>
		</div>
		<div className="col-md-6">
		<div className="mb-3">
<label className="form-label">First Name - used</label>
<input type="text" className="form-control"/>		
</div>
		</div>
	</div>
	<div className="row">	
		<div className="col-12">
		<div className="mb-3">
<label className="form-label">Last Name <span className="text-danger">*</span></label>
 <input type="text" className="form-control" value={lastname} onChange={(e) => { setLastname(e.target.value) }} name="name" />
</div>
		</div>
	</div>
	<div className="row">	
		<div className="col-12">	
			<label className="form-label">Date of birth <span className="text-danger">*</span></label>
			<div className="input-group mb-3">
            <input type="date" name="name" value={dob} className="form-control" onChange={(e) => { setDob(e.target.value) }} />
				
</div>			

		</div>
	</div>
	<div className="row">	
		<div className="col-12">
		<div className="mb-3">
<label className="form-label">Legal sex <span className="text-danger">*</span></label>

<select className="form-select" onChange={(e)=>setSex(e.target.value)} >
                        <option>Male</option>
                        <option>Female</option>

                    </select>
</div>
		</div>
	</div>
	<div className="row">	
		<div className="col-md-6">
		<div className="mb-3">
<label className="form-label">Primary phone <span className="text-danger">*</span></label>
<input className="form-control" type="number" name="name" value={phone} onChange={(e) => { setPhone(e.target.value) }} />		
</div>
		</div>
		<div className="col-md-6">
		<div className="mb-3">
<label className="form-label">Phone type <span className="text-danger">*</span></label>
<select className="form-select">
<option selected="selected">Choose...</option>
<option>...</option>
</select>			
</div>
		</div>
	</div>
	<div className="row">	
		<div className="col-12">
		<div className="mb-3">
<label className="form-label">Email <span className="text-danger">*</span></label>
<input className="form-control" type="email" name="name" value={email} onChange={(e) => { setEmail(e.target.value) }} />		
</div>
		</div>
	</div>
</div>
</div>
		</div>
			
		<div className="col-md-6">
		<div className="card mb-5 ">
			<div className="card-header text-medium bg-danger"><strong>Appointment Details</strong></div>
<div className="card-body">	
	<div className="row mb-3">
	<div className="col-md-6">
		<div className="card h-100 hover-scale-up bg-light">
<a className="card-body text-center d-flex flex-row align-items-center" href="#">
<div className="sw-8 sh-8 rounded-xl d-flex justify-content-center align-items-center border border-primary">
	<img src="img/provider-black.png" alt=""/> </div>
<p className="heading ps-3 text-body mb-0"><strong>{a.patientDetails.reason}</strong></p>

</a>
</div>
		</div>
	</div>
	
	<div className="row g-2 mb-3">
<div className="col-xl-6 co-6">
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
<div className="">{a.patientDetails.value}<br/> 9:20AM (EDT)</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-xl-6 co-6">
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
	<div className="row">	
		<div className="col-12">
		<div className="mb-3">
<label className="form-label">Insurance <span className="text-danger">*</span></label>
<input className="form-control" value={insurance} onChange={(e) => { setInsurance(e.target.value) }} />
</div>
			<div className="mb-3">
<label className="form-label">Additional Notes <span className="text-danger">*</span></label>
<input value={additional} className="form-control" onChange={(e) => { setAdditional(e.target.value) }}  />	
</div>
		</div>
	</div>
	<div className="row mt-3">	
		<div className="col-12">
			<button type="button" onClick={()=>{Preview()}} className="btn btn-primary mb-1 me-3">Previous</button>
			<button type="button" onClick={()=>{ScheduleApi()}} className="btn btn-primary mb-1 me-3">Next</button>
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

export default ScheduleAppointment;
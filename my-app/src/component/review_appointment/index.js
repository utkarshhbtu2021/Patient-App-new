import React from "react";
import reCAPTCHA from "react-google-recaptcha"
const ReviewAppoinment = () => {

    return (<>
        <p>Review Appoinment</p>
        <div>
            <div>
            <reCAPTCHA />
                <p> Patient Information</p>
                <div>
                    <p> Ashok kumar </p>

                    <p>
                        Phone
                    </p>
                    <p>.......</p>
                    <p> Email </p>
                    <p>.......</p>
                </div>
            </div>
            <div>
                <p>Appoinment Details</p>
                <p>COVID-19 Testing</p>
                <p>Day and Time </p>
                <p>....</p>
                <p>Loction</p>
                <p>-----</p>
                <p>Reason for Visit </p>
                <p>....</p>
                <p>Insurance</p>
                <p>.....</p>
                <p>Additional notes </p>
                <p>......</p>
            
            </div>
        </div>
    </>)
}

export default ReviewAppoinment;
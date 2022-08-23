import React, {useContext, useState} from "react";
import patientContext from "../../context/patientDetails/patientContext";

const ScheduleAppointment = (props) => {
    const a = useContext(patientContext)
    const [dateData, setDateData] = useState(1111)
    return (<>
   {
       console.log(a,"check a data ")
   }
        <p> Schedule Appointment </p>
        <div>
            <div>
                <p> Patient Information</p>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Name:
                        <input type="date" name="name" />
                    </label>

                    <select >
                        <option>data1</option>
                        <option>data2</option>
                        <option>data3</option>
                        <option>data4</option>
                    </select>
                    <label>
                        Name:
                        <input type="date" name="name" />
                    </label>

                    <select >
                        <option>data1</option>
                        <option>data2</option>
                        <option>data3</option>
                        <option>data4</option>
                    </select>
                    <label>
                        Name:
                        <input type="date" name="name" />
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
                        <input/>
                        <p>Additional notes - Required</p>
                        <input/>
                    

                    </div>
                </div>
                <div>
                    <button> Previous</button>
                    <button> Next</button>
                </div>

            </div>

        </div>
    </>)
}

export default ScheduleAppointment;
import React, { useEffect, useState } from "react"
import "./appointment.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { data } from "../../dummyresponse/appointmentdata"
import api from "../../api";
const Appointment = () => {
    const [value, onChange] = useState(new Date());
    const [information, setData] = useState([])
    const [rawInformation, setRawData] = useState([])

    useEffect(() => {
        let request = {
            url: `https://api.preview.platform.athenahealth.com/v1/24451/appointments/open?practiceid=24451&departmentid=1&reasonid=-1`
       }
        api.getAuth(request).then(data => {
            console.log(data.data.appointments, "data check ")
            if (data.data.appointments.length > 0) {
                console.log(data.data.appointments, "data in if condition")
                setRawData([...data.data.appointments])
                console.log(information, "information in if condition")
            }
        })

    }, [])

    useEffect(() => {
        const yyyy = value.getFullYear();
        let mm = value.getMonth() + 1; // Months start at 0!
        let dd = value.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const date = mm + '/' + dd + '/' + yyyy;
        const data = rawInformation.filter(el => el.date === date)
        setData([...data])
    }, [value, rawInformation]);

    return (<>

        <div className="container">
            <div className="leftDasbord">
                <p className="SearchName"> Search </p>
                <div className="select_bar">
                    <p>Patient type Required</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status">
                            <option>data1</option>
                            <option>data2</option>
                            <option>data3</option>
                            <option>data4</option>
                        </select>

                    </form>
                </div>
                <div className="select_bar">
                    <p>Specialty- Required</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status">
                            <option>data1</option>
                            <option>data2</option>
                            <option>data3</option>
                            <option>data4</option>
                        </select>

                    </form>
                </div>
                <div className="select_bar">
                    <p>Reason for visit- Required</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status">
                            <option>data1</option>
                            <option>data2</option>
                            <option>data3</option>
                            <option>data4</option>
                        </select>

                    </form>
                </div>
                <div>
                    <p style={{ fontSize: "12px", color: "#0097F9" }}> What reason should i choose ?</p>
                </div>
                <div>
                    <div style={{ margin: "20px" }}>
                        <Calendar onChange={onChange} value={value} minDate={new Date()} />
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

                        <select className="Select_status">
                            <option>data1</option>
                            <option>data2</option>
                            <option>data3</option>
                            <option>data4</option>
                        </select>

                    </form>
                </div>
                <div className="select_bar">
                    <p>Location</p>
                    <form style={{ border: '1px solid #EDEAEA', borderLeft: '8px solid #0097F9', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '5px' }} >

                        <select className="Select_status">
                            <option>data1</option>
                            <option>data2</option>
                            <option>data3</option>
                            <option>data4</option>
                        </select>

                    </form>
                </div>

            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "75%" }}>
                <div className="mainheader">
                    <p> Tue., Aug., 16 </p>

                </div>
                <div className="mainContainer">
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px" }}>
                        <p className="topHeaderLeft">
                            OOLTEWAH CLINIC (EDT)
                        </p>
                        <p className="topHeaderLeft">
                            5545 LITTLRE DEBBIE PKWY OOLTEWAH , TN 37363-4357
                        </p>
                    </div>
                    <div style={{ width: "100%", border: "1px solid red" }}></div>
                    <div>

                        {
                            information && information.length > 0 && information.map((item, index) => {
                                return (<>
                                    <div className="cardData">
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
                            })
                        }

                    </div>

                </div>
            </div>


        </div>
    </>)

}
export default Appointment;
import ReviewAppoinment from "../component/review_appointment";
import ScheduleAppointment from "../component/schedule_appointment";
import Appointment from "../component/appointment";



const routes  = [
    {path:'/',exact: true, strict:true, component:Appointment},
    { path: '/schedule/',strict:true, component: ScheduleAppointment},
    {path:'/review',exact: true, strict:true, component:ReviewAppoinment},
]

export  default routes;
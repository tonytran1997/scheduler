import React from "react";
// import React, { useState,useEffect } from "react";
import useApplicationData from "hooks/useApplicationData";

// import axios from 'axios';
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index";
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from "../helpers/selectors";

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();

//   const dailyAppointments = getAppointmentsForDay(state, state.day);

//   const [state, setState] = useState({
//     day: "Monday",
//     days: [],
//     appointments: {},
//     interviewers: {}
//   });
//   const setDay = day => {
//     return setState({ ...state, day })};

//   const setDays = (days) => {
//     setState(prev => setState({...prev, days}));
//   }

//   useEffect(()=>{
//     const dayURL = "http://localhost:8001/api/days";
//     const appointmentURL = "http://localhost:8001/api/appointments";
//     const interviewersURL = "http://localhost:8001/api/interviewers";
//     Promise.all([
//       axios.get(dayURL),
//       axios.get(appointmentURL),
//       axios.get(interviewersURL)
//     ]).then((all) =>{
//       setState(prev=>({...prev, days:all[0].data, appointments:all[1].data, interviewers:all[2].data}));
//     })
//   },[]);

//   function bookInterview(id, interview) {
//     const appointment = {
//       ...state.appointments[id],
//       interview: { ...interview }
//     };

//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };

//     const url =`http://localhost:8001/api/appointments/${id}`;

//     const req={
//       url,
//       method: 'PUT',
//       data: appointment
//     }
//     return axios(req).then(response => {
//       setState({...state, appointments})
//     })
//   }

//   function cancelInterview(id){
//     const appointment = {
//       ...state.appointments[id],
//       interview: null
//     };
//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };

//     const url =`http://localhost:8001/api/appointments/${id}`;

//     let req={
//       url,
//       method: 'DELETE',
//       data:appointment
//     }
//     return axios(req).then(response =>{
//       console.log("response from delete axios===>",response);
//       setState({...state, appointments});
//     })
//   }

//   const appointments = getAppointmentsForDay(state, state.day);
//   const schedule = appointments.map((appointment) => {
//   const interview = getInterview(state, appointment.interview);
//   const interviewers = getInterviewersForDay(state,state.day)

  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      interviewers={interviewers}
      bookInterview={bookInterview}
      cancelInterview={cancelInterview}
    />
  );
};

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          day={state.day}
          days={state.days}
          setDay={setDay}
        />
        </nav>  
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );


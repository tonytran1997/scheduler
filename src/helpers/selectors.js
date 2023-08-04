export function getAppointmentsForDay(state, name) {
    const filteredDays = state.days.filter(day => day.name === name);
    if(state.days.length===0 || filteredDays.length===0){
      return [];
    }
    const appointmentsFromDays = filteredDays[0].appointments;
    const filteredAppointments = [];
    for(const appointment of appointmentsFromDays) {
      filteredAppointments.push(state.appointments[appointment]);
    }
    return filteredAppointments;
  }
  
export  function getInterview(state, interview) {
  if(!interview) return null;
  const filteredInterview = {};
  filteredInterview.student = interview.student;
  filteredInterview.interviewer = state.interviewers[interview.interviewer];
  return filteredInterview;
};
 
export function getInterviewersForDay(state, name) {
  const filteredDays = state.days.filter(day => day.name === name);
  
  if(state.days.length===0 || filteredDays.length===0){
    return [];
  }
  const interviewersFromDays = filteredDays[0].interviewers;
  const filteredInterviewers = [];

  for(const interviewer of interviewersFromDays) {
    filteredInterviewers.push(state.interviewers[interviewer]);
  }
  return filteredInterviewers;
};
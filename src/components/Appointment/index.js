import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "../../hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function remove(){
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
  }

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);

    props.bookInterview(props.id,interview).then(()=>{
      transition(SHOW);
    }
    );
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
      <Show
        interview={props.interview}
        onDelete={()=>transition(CONFIRM)}
        onEdit={()=>transition(EDIT)}
      />
      )}
      {mode === CREATE && (
        <Form
         interviewer={props.interviewer}
         interviewers={props.interviewers}
         onCancel={() => back(EMPTY)}
         bookInterview={props.bookInterview} 
         onSave={save}/>
      )}
      {mode === SAVING && (
        <Status />
        )}
        {mode === CONFIRM && (
        <Confirm
        onConfirm={remove}
        onCancel={back}
        message="Are you sure you would like to delete?"
        />
      )}
      {mode === EDIT && (
        <Form
        interviewer={props.interviewer}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
      />
      )}
    </article>
  )
}; 
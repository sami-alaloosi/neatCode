/** @format */

import React from "react";
import {Form, Segment } from "semantic-ui-react";
import QuestionButton from "./QuestionButton"

function NoteAddForm({submit, value1, value2, valueUpdate}) {
  return (
    <div className="marginR">
      <Segment placeholder>
        <Form onSubmit={submit}>
          <div className="register-div">Title</div>
          <Form.Input
            type="text"
            name="noteTitle"
            id="noteTitle"
            placeholder="Enter Your Note Title"
            value={value1}
            onChange={valueUpdate}
          />

          <div className="register-div">Note</div>
          <Form.TextArea
            type="text"
            name="noteNote"
            id="noteNote"
            placeholder="Enter Your Note"
            value={value2}
            onChange={valueUpdate}
          />
          
          <QuestionButton color="green" hiddenWord="Note" visibleWord="Add" />
        </Form>
      </Segment>
    </div>
  );
}

export default NoteAddForm;

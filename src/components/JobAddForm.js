/** @format */

import React from "react";
import { Form, Segment } from "semantic-ui-react";
import QuestionButton from "./QuestionButton";

function JobAddForm({ submit, value1, value2, value3, valueUpdate }) {
  return (
    <div className="marginR">
      <Segment placeholder>
        <Form onSubmit={submit}>
          <div className="register-div">Company Name</div>
          <Form.Input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Enter The Company Name"
            value={value1}
            onChange={valueUpdate}
          />

          <div className="register-div">Position</div>
          <Form.Input
            type="text"
            name="position"
            id="position"
            placeholder="Enter The position "
            value={value2}
            onChange={valueUpdate}
          />

          <div className="register-div">Note</div>
          <Form.TextArea
            type="text"
            name="jobNote"
            id="jobNote"
            placeholder="Enter Your Note"
            value={value3}
            onChange={valueUpdate}
          />

          <QuestionButton color="green" hiddenWord="Job" visibleWord="Add" />
        </Form>
      </Segment>
    </div>
  );
}

export default JobAddForm;

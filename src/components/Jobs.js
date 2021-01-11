/** @format */

import React, { useEffect, useState } from "react";
import store from "../state-manegment/store";
import { axiosCallJobs, valueClearing } from "../state-manegment/userReducer";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useUserForm } from "../hooks/useUserForm";
import QuestionButton from "./QuestionButton";
import { Form, Icon } from "semantic-ui-react";
import JobAddForm from "./JobAddForm";
import Header from "./Header";

function Jobs() {
  const componentName = "Jobs";
  useEffect(() => {
    store.dispatch(axiosCallJobs());
  }, []);
  const [state, valueUpdate] = useUserForm();
  const jobs = state.jobs;
  const jobForm = state.jobForm;
  const jobUpdate = state.jobUpdate;
  
  const jobObj = {
    companyName: jobForm.companyName,
    position: jobForm.position,
    note: jobForm.jobNote,
  };

  const [updateToggle, setUpdateToggle] = useState(0);

  const addPost = () => {
    axiosWithAuth()
      .post(`user/jobs`, jobObj)
      .then((res) => {
        store.dispatch(valueClearing());
        store.dispatch(axiosCallJobs());
      })
      .catch((err) => console.log("error", err));
  };

  const deleteJobs = (jobId) => {
    axiosWithAuth()
      .delete(`user/jobs/${jobId}`)
      .then(() => {
        store.dispatch(axiosCallJobs());
      })
      .catch((err) => console.log("deleting Job Error", err));
  };

  const jobUpdating = (jobId, event) => {
    event.preventDefault();
    const updateObj = {
      companyName: jobUpdate.companyNameUpdate,
      position: jobUpdate.positionUpdate,
      note: jobUpdate.jobNoteUpdate,
    };
    axiosWithAuth()
      .put(`user/jobs/${jobId}`, updateObj)
      .then(() => {
        store.dispatch(valueClearing());
        setUpdateToggle(0);
        store.dispatch(axiosCallJobs());
      })
      .catch((err) => console.log("updating job Error", err));
  };

  const submit = (event) => {
    event.preventDefault();
    addPost();
    store.dispatch(axiosCallJobs());
  };

  return (
    <div className="gridContainer">
      <Header componentName={componentName} />
      <div>
        {jobs.map((data) => (
          <div key={data._id} className="note">
            <div> company Name: {data.companyName} </div>
            <div> position: {data.position}</div>
            <div> note: {data.note}</div>

            <QuestionButton
              color="blue"
              hiddenWord="Update"
              visibleWord={<Icon name="edit outline" />}
              handleClick={() => {
                setUpdateToggle(data._id);
              }}
            />

            <QuestionButton
              color="red"
              hiddenWord="Delete"
              visibleWord={<Icon name="delete" />}
              handleClick={() => deleteJobs(data._id)}
            />

            <div className={updateToggle === data._id ? "show" : "no-show"}>
              <Form>
                <Form.Input
                  type="text"
                  name="companyNameUpdate"
                  id="companyNameUpdate"
                  placeholder="Update Company Name"
                  value={jobUpdate.companyNameUpdate}
                  onChange={valueUpdate}
                />

                <Form.Input
                  type="text"
                  name="positionUpdate"
                  id="positionUpdate"
                  placeholder="Update Position"
                  value={jobUpdate.positionUpdate}
                  onChange={valueUpdate}
                />

                <Form.TextArea
                  type="text"
                  name="jobNoteUpdate"
                  id="jobNoteUpdate"
                  placeholder="Update Note"
                  value={jobUpdate.jobNoteUpdate}
                  onChange={valueUpdate}
                />

                <QuestionButton
                  color="blue"
                  hiddenWord="Now"
                  visibleWord="Update"
                  handleClick={(event) => jobUpdating(data._id, event)}
                />

                <QuestionButton
                  color="orange"
                  hiddenWord="Cancel"
                  visibleWord="Cancel"
                  handleClick={() => {
                    setUpdateToggle(0);
                    store.dispatch(valueClearing());
                  }}
                />
              </Form>
            </div>
          </div>
        ))}
        <div className="note-form">
          <JobAddForm
            submit={submit}
            value1={jobForm.companyName}
            value2={jobForm.position}
            value3={jobForm.jobNote}
            valueUpdate={valueUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default Jobs;

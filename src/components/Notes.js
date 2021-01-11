/** @format */

import React, { useEffect, useState } from "react";
import store from "../state-manegment/store";
import { axiosCallNotes, valueClearing } from "../state-manegment/userReducer";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useUserForm } from "../hooks/useUserForm";
import QuestionButton from "./QuestionButton";

import { Form, Icon } from "semantic-ui-react";

import NoteAddForm from "./NoteAddForm";

import Header from "./Header";

function Notes() {
  const componentName = "Notes";
  const [state, valueUpdate] = useUserForm();
  const notes = state.notes;
  const noteForm = state.noteForm;

  const noteUpdate = state.noteUpdate;

  const noteObj = { title: noteForm.noteTitle, note: noteForm.noteNote };

  const [updateToggle, setUpdateToggle] = useState(0);

  useEffect(() => {
    store.dispatch(axiosCallNotes());
  }, []);

  const addNote = () => {
    axiosWithAuth()
      .post(`user/notes`, noteObj)
      .then((res) => {
        store.dispatch(valueClearing());
        store.dispatch(axiosCallNotes());
      })
      .catch((err) => console.log("error", err));
  };

  const deleteNote = (noteId) => {
    axiosWithAuth()
      .delete(`user/notes/${noteId}`)
      .then(() => {
        store.dispatch(axiosCallNotes());
      })
      .catch((err) => console.log("deleting Job Error", err));
  };

  const noteUpdating = (noteId, event) => {
    event.preventDefault();
    const updateObj = {
      title: noteUpdate.noteTitleUpdate,
      note: noteUpdate.noteNoteUpdate,
    };
    axiosWithAuth()
      .put(`user/notes/${noteId}`, updateObj)
      .then(() => {
        store.dispatch(valueClearing());
        setUpdateToggle(0);
        store.dispatch(axiosCallNotes());
      })
      .catch((err) => console.log("updating Note Error", err));
  };

  const submit = (event) => {
    event.preventDefault();
    addNote();
    store.dispatch(axiosCallNotes());
  };

  return (
    <div className="gridContainer">
      <Header componentName={componentName} />
      <div>
        {notes.map((data) => (
          <div key={data._id} className="note">
            <div> title: {data.title}</div>
            <div> note: {data.note} </div>

            <QuestionButton
              color="blue"
              hiddenWord="Update"
              visibleWord={<Icon name="edit outline" />}
              handleClick={() => {
                setUpdateToggle(data._id)
                }}
            />

            <QuestionButton
              color="red"
              hiddenWord="Delete"
              visibleWord={<Icon name="delete" />}
              handleClick={() => deleteNote(data._id)}
            />

            <div className={updateToggle === data._id ? "show" : "no-show"}>
              <Form>
                <Form.Input
                  type="text"
                  name="noteTitleUpdate"
                  id="noteTitleUpdate"
                  placeholder="Update Title"
                  value={noteUpdate.noteTitleUpdate}
                  onChange={valueUpdate}
                />

                <Form.TextArea
                  type="text"
                  name="noteNoteUpdate"
                  id="noteNoteUpdate"
                  placeholder="Update Note"
                  value={noteUpdate.noteNoteUpdate}
                  onChange={valueUpdate}
                />

                <QuestionButton
                  color="blue"
                  hiddenWord="Now"
                  visibleWord="Update"
                  handleClick={(event) => noteUpdating(data._id, event)}
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
          <NoteAddForm
            submit={submit}
            value1={noteForm.noteTitle}
            value2={noteForm.noteNote}
            valueUpdate={valueUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default Notes;

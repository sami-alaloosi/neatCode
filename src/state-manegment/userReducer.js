/** @format */
import { axiosWithAuth } from "../utils/axiosWithAuth";

// actions
const VALUE_CHANGE = "VALUE_CHANGE";
const VALUE_CLEAR = "VALUE_CLEAR";
const QUESTIONS_SUCCESS = "QUESTIONS_SUCCESS";
const TODOS_SUCCESS = "TODOS_SUCCES";
const JOBS_SUCCESS =  "JOBS_SUCCESS";
const NOTES_SUCCESS =  "NOTES_SUCCESS"

// action creatores
export const valueChanger = (values, name) => {
  return {
    type: VALUE_CHANGE,
    payload: values,
    name,
  };
};

export const valueClearing = () => {
  return {
    type: VALUE_CLEAR,
  };
};

export const axiosCallQuestions = () => (dispatch) => {
  axiosWithAuth()
    .get("questions")
    .then((res) => {
      dispatch({ type: QUESTIONS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      console.log("here's the error message", e);
    });
};

export const axiosCallTodos = () => (dispatch) => {
  axiosWithAuth()
    .get("user/todos")
    .then((res) => {
      dispatch({ type: TODOS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      console.log("here's the error message", e);
    });
};

export const axiosCallJobs = () => (dispatch) => {
  axiosWithAuth()
    .get("user/jobs")
    .then((res) => {
      dispatch({ type: JOBS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      console.log("here's the error message", e);
    });
};

export const axiosCallNotes = () => (dispatch) => {
  axiosWithAuth()
    .get("user/notes")
    .then((res) => {
      dispatch({ type: NOTES_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      console.log("here's the error message", e);
    });
};

// initail state
const intialState = {
  login: { username: "", password: "" },
  register: { usernameR: "", email: "", passwordR: "", confirmPassword: "" },
  jobForm: {companyName: "", position: "", jobNote: ""},
  jobUpdate: {companyNameUpdate: "", positionUpdate: "", jobNoteUpdate: "" },
  noteForm: {noteTitle: "", noteNote: ""},
  noteUpdate: {noteTitleUpdate: "", noteNoteUpdate: ""},
  questions: [],
  todos: [],
  jobs: [],
  notes: []
};

// reducer

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case VALUE_CHANGE:
      return {
        ...state,
        login: { ...state.login, [action.name]: action.payload },
        register: { ...state.register, [action.name]: action.payload },
        jobForm: { ...state.jobForm, [action.name]: action.payload },
        jobUpdate: { ...state.jobUpdate, [action.name]: action.payload },
        noteForm: { ...state.noteForm, [action.name]: action.payload },
        noteUpdate: { ...state.noteUpdate, [action.name]: action.payload },
      };

    case VALUE_CLEAR:
      return {
        ...state,
        login: { username: "", password: "" },
        register: {
          usernameR: "",
          email: "",
          passwordR: "",
          confirmPassword: "",
        },
        jobForm: {companyName: "", position: "", jobNote: ""},
        jobUpdate: {companyNameUpdate: "", positionUpdate: "", jobNoteUpdate: "" },
        noteForm: {noteTitle: "", noteNote: ""},
        noteUpdate: {noteTitleUpdate: "", noteNoteUpdate: ""},
      };

    case QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
      };

    case TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };

      case JOBS_SUCCESS:
        return {
          ...state,
          jobs: action.payload,
        };

       case NOTES_SUCCESS:
        return {
          ...state,
          notes: action.payload,
        };

    default:
      return state;
  }
};

export default userReducer;

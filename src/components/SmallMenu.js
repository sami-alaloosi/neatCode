/** @format */

import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "semantic-ui-react";

const SmallMenu = () => {
  const { push } = useHistory();
  const clickHandler = () =>{
    localStorage.clear()
    push("/")
}
  return (
    <div className="samll-menu">
      <Button fluid onClick={()=> push("/Questions")}>
        Questions
      </Button>
      <Button fluid basic onClick={()=> push("/Todos")}>
        Todos
      </Button>
      <Button fluid onClick={ ()=> push("/Notes")}>
        Notes
      </Button>
      <Button fluid basic onClick={()=> push("/Jobs")}>
        Jobs
      </Button>
      <Button fluid basic color='red' onClick={clickHandler}>
        Log Out
      </Button>
    </div>
  );
};

export default SmallMenu;

/** @format */

import React from "react";
import { Button} from "semantic-ui-react";

function QuestionButton({color="black",hiddenWord, visibleWord, handleClick}) {
  return (
    <Button basic color={color} animated="vertical" size="mini" onClick={handleClick}>
      <Button.Content hidden>{hiddenWord}</Button.Content>
      <Button.Content visible>{visibleWord}</Button.Content>
    </Button>
  );
}

export default QuestionButton;

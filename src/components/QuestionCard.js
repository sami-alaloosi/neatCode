/** @format */

import React from "react";
import { Icon } from "semantic-ui-react";
import QuestionButton from "./QuestionButton";

function QuestionCard({ questions, hiddenWord, iconName, fn }) {
  const leetCodeLinkHandler = (data) => window.open(data.link);

  return (
      <div className="sizer" >
    <div className="questions-grid">
      {questions.map((data) => (
        <div
          key={data._id}
          className={
            data.difficulty === "Easy"
              ? "questions-container easy"
              : data.difficulty === "Medium"
              ? "questions-container medium"
              : "questions-container hard"
          }
        >
          <div className="question-flex">
            <div>{data.question}</div>
            <div>
              <QuestionButton
                hiddenWord={
                  data.category === "Dynamic Programming" ? "DP" : data.category
                }
                visibleWord="Category"
              />

              <QuestionButton
                hiddenWord="Leetcode"
                visibleWord="Visit"
                handleClick={() => leetCodeLinkHandler(data)}
              />

              <QuestionButton
                hiddenWord={hiddenWord}
                visibleWord={<Icon name={iconName} />}
                handleClick={() => fn(data._id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default QuestionCard;

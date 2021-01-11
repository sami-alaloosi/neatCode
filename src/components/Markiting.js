/** @format */

import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
function Markiting() {
  const { push } = useHistory();
  return (
    <div>
      <div className="markiting-1">
        <div>
          <h1> Neat code</h1>
          <p>
            {" "}
            Ace the coding interview, waste no time!{" "}
          </p>
          <Button
            content="Log in or Join"
            icon="user plus"
            size="masive"
            color="orange"
            
            onClick={() => push("/UserLogin")}
          />
        </div>

        <div>
        <div >
            <img
              src="/images/man.png"
              alt="man pointing at his watch"
              className="neatcode-pic"
            />
          </div>
          
        </div>
      </div>

      <div className="markiting-2">
        <h2> Our Products</h2>
        <div className="product-container">
          <div className="product">
            <h4>Questions</h4>
            <Icon name="code" size="massive" color="yellow" />
            <p className="product-text">
              Choose from our pre-selected questions that are specifically
              chosen to maximize your pattern recognition and help you ace the
              coding interview. Our questions will help you ramp up in technical
              interview questions such as binary search, depth first search,
              breadth first search and many more famous algorithms for coding
              interviews, all the stuff you need none of your time wasted. Do
              these questions and understand them and you will be ready to
              interview!
            </p>
          </div>

          <div className="product">
            <h4>Todos</h4>
            <Icon name="file code" size="massive" color="teal" />
            <p className="product-text">
              To help you keep track of your progress and understand your
              weaknesses we help you track questions you have done and recommend
              questions daily so you never have to worry about which questions
              you should do on a particular day, simply log in and your account
              will have a list of question to do based on the amount you will
              specify. You have all the control.
            </p>
          </div>

          <div className="product">
            <h4>Notes</h4>
            <Icon name="edit outline" size="massive" color="teal" />
            <p className="product-text">
            Simply trying to memorize solutions is an oversimplification of the coding interview prep process, at NeatCode we believe that memorizing solutions is a waste of your time. We created a way for you to keep notes of all the important patterns and algorithms such that you will never forget a pattern not a solution to a specific question. Learning the importance of patterns is the difference between solving one question by memorizing its solution or learning the underlying pattern and being able to solve dozens of variants of that question we want to help you ace the coding interview patterns, for that reason we believe in note taking, that’s why we gave you the user the option to keep a note log of all the questions and the pattern that they teach you, you will never need to memorize solutions ever again!
            </p>
          </div>

          

          <div className="product">
            <h4> Jobs </h4>
            <Icon name="world" size="massive" color="yellow" />
            <p className="product-text">
              Applications and mark notes, and keep track of important details,
              we help you keep track of the stage you are in the hiring process,
              this will surely speed up your job search experience.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="markiting-3">
        <h2> Meet The Team</h2>
        <div className="team-container">
          <div className="dev">
            <img
              src="/images/neatcode.png"
              alt="neat code logo"
              className="neatcode-img"
            />
            <h4> sami al aloosi</h4>
            <div>
              sdolfjhdik hnsjfnidolksjlfvn mnsolf,jdmoilk bsolkfjdosiklf
            </div>
          </div>

          <div className="dev">
            <img
              src="/images/neatcode.png"
              alt="neat code logo"
              className="neatcode-img"
            />
            <h4> sami al aloosi</h4>
            <div>
              sdolfjhdik hnsjfnidolksjlfvn mnsolf,jdmoilk bsolkfjdosiklf
            </div>
          </div>
        </div>
      </div> */}
      <br />
    </div>
  );
}

export default Markiting;

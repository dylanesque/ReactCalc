import React from "react";
import "./App.css";

// import Button from './components/Button'

// Calculator Logic tasks:

// 1) When a number, mathematical operator, or the decimal button is pressed,
// that particular value is added to the display.  (Test #8)

// Variables to create:

// A check for the last character inputted (including zero if one is beginning a calculation)
// A check for non-numerical characters being inputted twice in a row

const buttons = [
  { id: "one", char: "1" },
  { id: "two", char: "2" },
  { id: "three", char: "3" },
  { id: "add", char: "+" },
  { id: "four", char: "4" },
  { id: "five", char: "5" },
  { id: "six", char: "6" },
  { id: "subtract", char: "-" },
  { id: "seven", char: "7" },
  { id: "eight", char: "8" },
  { id: "nine", char: "9" },
  { id: "multiply", char: "*" },
  { id: "zero", char: "0" },
  { id: "divide", char: "/" },
  { id: "decimal", char: "." },
  { id: "space", char: " " }
];

class App extends React.Component {
  state = {
    display: "0",
    lastEntered: "0"
  };

  clearDisplay = () => {
    this.setState({ display: "0" });
    console.log("display is cleared!");
  };

  handleLastEntered = () => {
    // sets state of lastEntered to inputted character
  };

  handleClick = () => {
    // pushes button id to array
    // updates handleLastEntered with current value
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Calculator App</h1>
          <main>
            <h3 id="display">{this.state.display}</h3>

            <div className="main-buttons">
              {buttons.map(button => (
                <button
                  key={button.id}
                  id={button.id}
                  handleClick={this.handleClick}
                >
                  {button.char}
                </button>
              ))}
            </div>
            <div className="utility-buttons">
              <button id="clear" onClick={this.clearDisplay}>
                Clear
              </button>
              <button id="equals" className="equals">
                =
              </button>
            </div>
          </main>
        </header>
      </div>
    );
  }
}

export default App;

/*


User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of
any length, and when I hit =, the correct result should be shown in the element with the id of display.

User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two.
in one number should not be accepted.
User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last
operator entered.
User Story #14: Pressing an operator immediately following = should start a new calculation that operates on
the result of the previous evaluation.
User Story #15: My calculator should have several decimal places of precision when it comes to rounding
(note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable
  precision to at least 4 decimal places).
Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic:
immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation
precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose,
your calculator may yield different results than ours for certain equations (see below example). As long as your
math can be verified by another production calculator, please do not consider this a bug.
EXAMPLE: 3 + 5 x 6 - 2 / 4 =
Immediate Execution Logic: 11.5
Formula/Expression Logic: 32.5
*/

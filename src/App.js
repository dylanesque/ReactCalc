import React from 'react';
import './App.css';

const buttonData = [
  { id: 'one', char: '1'},
  { id: 'two', char: '2'},
  { id: 'three', char: '3'},
  { id: 'add', char: '+'},
  { id: 'four', char: '4'},
  { id: 'five', char: '5'},
  { id: 'six', char: '6'},
  { id: 'subtract', char: '-'},
  { id: 'seven', char: '7'},
  { id: 'eight', char: '8'},
  { id: 'nine', char: '9'},
  { id: 'multiply', char: '*'},
  { id: 'zero', char: '0'},
  { id: 'decimal', char: '.'},
  { id: 'divide', char: '/'},
];

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator App</h1>
        <main>
        <h3 id="display">Edit me later</h3>

        <div className="buttons">
        {buttonData.map(button => (
          <button
            id={button.id}
            onClick={this.handleClick}>{button.char}</button>
        ))}
        <button id="clear">C</button>


        </div>
        </main>

      </header>

    </div>
  );
}

export default App;

/*

My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".
User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".
User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".
User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".
User Story #5: My calculator should contain a clickable element with an id="clear".
User Story #6: My calculator should contain an element to display values with a corresponding id="display".
User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.
User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.
User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.
User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.
User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).
Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.
EXAMPLE: 3 + 5 x 6 - 2 / 4 =
Immediate Execution Logic: 11.5
Formula/Expression Logic: 32.5
*/

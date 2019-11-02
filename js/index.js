//variables
let input,
  output,
  stack = [],
  track = -1,
  stackContent;
var count = 0;
let pushBtn = document.getElementById("add");
let popBtn = document.getElementById("delete");
let stackBorder = document.querySelector(".stackBorder");

//push and pop operation class
class PushToStack {
  // push method
  static pushToStack() {
    input = document.getElementById("push").value;
    if (input) {
      stack.push(input);
      UI.handleSimulationPush(input);
      document.querySelector(".pushSmall").innerHTML = "Success! Good Going";

    } else {
      console.log("failed!");
    }
  }

  // pop method
  static PopFromStack() {
    output = stack.pop();
    if (output) {
      UI.handleSimulationPop();
      UI.sendOutputToForm(output);
    } else {
      console.log("empty stack!");
    }
  }
}

//UI class

class UI {
  // Push Simulation
  static handleSimulationPush(element) {
    stackContent = ` <!-- Stack Content -->
    <div class="stackContent " id="${count}">
      ${element}
    </div>`;
    stackBorder.insertAdjacentHTML("beforeend", stackContent);
    count++;
  }

  // Pop Simulation
  static handleSimulationPop() {
    let stackContentPop = document.getElementById(count - 1);
    stackContentPop.parentNode.removeChild(stackContentPop);
    count--;
  }

  // display popped element in the UI
  static sendOutputToForm(output) {
    document.getElementById("pop").value = output;
  }

  // display messages
  static message(status){
    
  }
}

//event listeners

pushBtn.addEventListener("click", () => {
  PushToStack.pushToStack();
});

popBtn.addEventListener("click", () => {
  PushToStack.PopFromStack();
});

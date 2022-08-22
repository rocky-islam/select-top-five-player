let cartArray = [];
// console.log(cartArray);

function display(cartProduct) {
  let body = document.getElementById("player-name");
  body.innerHTML = "";

  for (let i = 0; i <= cartArray.length; i++) {
    let name = cartArray[i].playerName;
    // console.log(name);

    let paragraph = document.createElement("p");
    paragraph.innerHTML = `<p class="text-center">${i + 1}.  ${name}</p>
                                `;
    body.appendChild(paragraph);

    document.getElementById("calculate").addEventListener("click", function () {
      let perPlayer = parseInt(document.getElementById("per-player").value);

      let totalPlayer = parseInt(i + 1);

      let playerExpense = perPlayer * totalPlayer;
      // console.log(playerExpense);

      let expenseValue = document.getElementById("total-expenses");
      let value = expenseValue.innerText;

      expenseValue.innerText = playerExpense;

      document
        .getElementById("total-calculate")
        .addEventListener("click", function () {
          let managerValue = parseInt(document.getElementById("manager").value);
          let coachValue = parseInt(document.getElementById("coach").value);

          let managerCoach = managerValue + coachValue + playerExpense;

          // console.log(managerCoach);

          let totalCost = document.getElementById("total-cost");
          let costValue = totalCost.innerText;
          totalCost.innerText = managerCoach;
        });
    });
  }
}
function add(element) {
  // console.log(element.parentNode.children[0].innerText);
  let playerName = element.parentNode.children[0].innerText;
  // console.log(playerName);

  let playerObj = {
    playerName: playerName,
  };

  // console.log(playerObj);
  cartArray.push(playerObj);

  display(cartArray);
}



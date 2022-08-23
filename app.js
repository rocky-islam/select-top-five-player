let cartArray = [];

function display(cartProduct) {
  let body = document.getElementById("player-name");
  body.innerHTML = "";

  for (let i = 0; i <= cartArray.length; i++) {
    if (cartArray.length >= 6) {
      alert("Set only five player");
      return;
    } else {
      let name = cartArray[i].playerName;
      let paragraph = document.createElement("p");
      paragraph.innerHTML = `<p class="text-center">${i + 1}.  ${name}</p>`;
      body.appendChild(paragraph);

      document
        .getElementById("calculate")
        .addEventListener("click", function () {
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
              let managerValue = parseInt(
                document.getElementById("manager").value
              );
              let coachValue = parseInt(document.getElementById("coach").value);

              let managerCoach = managerValue + coachValue + playerExpense;

              let totalCost = document.getElementById("total-cost");
              let costValue = totalCost.innerText;
              totalCost.innerText = managerCoach;
            });
        });
    }
  }
}
function add(element) {
  let playerName = element.parentNode.children[0].innerText;

  let playerObj = {
    playerName: playerName,
  };

  cartArray.push(playerObj);

  display(cartArray);
}

let removes = document.getElementsByClassName("remove");
for (let remove of removes) {
  remove.addEventListener("click", function (event) {
    event.target.setAttribute("disabled", true);
    this.style.backgroundColor = "tomato";
  });
}

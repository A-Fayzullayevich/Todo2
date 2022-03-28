const input = document.querySelector(".div_inp");
const button = document.querySelector(".div_btn");

document.querySelector(".div_btn").onclick = function (e) {
  e.preventDefault();
  if (document.querySelector(".div_inp").value == "") {
    alert("Please enter your task");
  } else {
    document.querySelector(
      ".tasks"
    ).innerHTML += `<div class="task"> <span class="taskname">${
      document.querySelector(".div_inp").value
    }</span> <button class="delete">Delete</button> </div>`;
    document.querySelector(".div_inp").value = "";
    func();
  }
};

// const deletee = document.querySelectorAll(".delete");
// for (let i = 0; i < deletee.length; i++) {
//   deletee[i].onclick = function () {
//     this.parentNode.remove();
//   };
// }

function func() {
  document.querySelectorAll(".delete").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  });
}

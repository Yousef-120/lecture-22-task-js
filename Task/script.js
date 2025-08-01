let buttons = document.querySelectorAll(`.section-btn`);
let input = document.querySelector(`.task-input`);
let tasks = document.querySelector(`.content .bottom`);
let alert = document.querySelector(`.alert`);
let alertIco = document.querySelector(`.alert i`);

let msg = document.createElement("div");
alert.appendChild(msg);

let alertTimeout;

let showAlert = (type, message) => {
  clearTimeout(alertTimeout);
  alert.classList.remove("bg-success", "bg-danger", "bg-primary");
  alertIco.classList.remove("fa-circle-check", "fa-circle-exclamation");

  if (type === "success") {
    alert.classList.add("bg-success");
    alertIco.classList.add("fa-circle-check");
  } else if (type === "warning") {
    alert.classList.add("bg-primary");
    alertIco.classList.add("fa-circle-exclamation");
  } else if (type === "error") {
    alert.classList.add("bg-danger");
    alertIco.classList.add("fa-circle-exclamation");
  }

  msg.textContent = message;
  alert.classList.remove("animate__fadeInDown", "animate__fadeOutUp");

  setTimeout(() => {
    alert.classList.remove("d-none");
    alert.classList.add("d-flex", "animate__fadeInDown");
  }, 10);

  alertTimeout = setTimeout(() => {
    alert.classList.remove("animate__fadeInDown");
    alert.classList.add("animate__fadeOutUp");
    setTimeout(() => {
      alert.classList.remove("animate__fadeOutUp", "d-flex");
      alert.classList.add("d-none");
    }, 1000);
  }, 6000);
};
let closeAlert = ()=>
{
   alertTimeout = setTimeout(() => {
    alert.classList.remove("animate__fadeInDown");
    alert.classList.add("animate__fadeOutUp");
    setTimeout(() => {
      alert.classList.remove("animate__fadeOutUp", "d-flex");
      alert.classList.add("d-none");
    }, 1000);
  }, 100);
}
buttons[0].classList.add(`active`);

let activeToggle = (index) => {
  buttons.forEach((el) => el.classList.remove(`active`));
  buttons[index].classList.add(`active`);
};

let addTask = () => {
  let taskName = tasks.querySelectorAll(`.task h4`);
  let newTaskName = input.value.trim();
  let alreadyExists = false;

  if (newTaskName === "") {
    showAlert("error", "Empty elements are not allowed.");
    return;
  }

  taskName.forEach((el) => {
    if (newTaskName.toLowerCase() === el.textContent.toLowerCase()) {
      alreadyExists = true;
      input.value = "";
      el.closest(".task").classList.add("hover");
      showAlert("warning", "This task already exists.");
      setTimeout(() => el.closest(".task").classList.remove("hover"), 300);
    }
  });

  if (!alreadyExists) {
    tasks.innerHTML += `
      <label class="task d-flex align-items-center justify-content-between">
        <div class="task-info">
          <h4 class="task-name fw-medium">${newTaskName}</h4>
          <p class="task-time m-0">${new Date().toLocaleTimeString()}, ${new Date().toLocaleDateString()}</p>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox add-mode" />
          <i class="fa fa-check"></i>
        </div>
      </label>`;
    showAlert("success", "The task has been added successfully.");
    input.value = "";
  }
};
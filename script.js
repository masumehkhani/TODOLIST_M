// tags variabels

// form
const form_activities = document.querySelector(".form_activities");
// form > taskName
const taskName = document.querySelector(".taskName");
// form > task_time
const task_time = document.querySelector(".task_time");
// form > task_time
const add_btn = document.querySelector("#add_btn");

// Current Date
const displayTime = document.querySelector(".display-time");
// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}
updateDate();

// display task items
const T_add_task_btn = document.querySelector(".add_task_btn");
T_add_task_btn.addEventListener("click", (event) => {
  form_activities.style.display = "block";
});

// disable add_task button if text field is empty
function disable_addTask_btn() {
  if (taskName.value.length == 0) {
    add_btn.disabled = true;
    add_btn.style.opacity = "0.5";
  } else {
    add_btn.disabled = false;
    add_btn.style.opacity = "1";
  }
}



// Add Items List by Add_Task_btn
add_btn.addEventListener("click", (event) => {
  //add list item tag to  todo_items_list (ul)
  let to_do__item = document.createElement("li");
  to_do__item.classList.add = "to_do__item";
  let todo_items_list = document.querySelector(".todo_items_list");
  todo_items_list.appendChild(to_do__item);
  to_do__item.textContent = taskName.value;
  // styling to_do__item (li)
  to_do__item.style.borderBottom = "1px solid #e4dfdf";
  to_do__item.style.width = "70%";
  to_do__item.style.color = "#757878";

  clear_text_field();
  disable_addTask_btn();

  let remove_btn = document.createElement("button");
  remove_btn.classList.add = "remove_btn";
  to_do__item.appendChild(remove_btn);
  remove_btn.textContent = "-";
  // styling remove_btn
  remove_btn.style.border = "none";
  remove_btn.style.borderRadius = "3px";
  remove_btn.style.color = "#757878";
  remove_btn.style.marginLeft = "0.5rem";
  remove_btn.style.padding = " 0 0.5rem";
  remove_btn.style.boxShadow =
    "0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),0 0.5rem 1.125rem rgba(75, 0, 0, 0.05)";

  let add_btn = document.createElement("button");
  add_btn.classList.add = "add_btn";
  to_do__item.appendChild(add_btn);
  add_btn.textContent = "+";
  // styling add_btn
  add_btn.style.border = "none";
  add_btn.style.borderRadius = "3px";
  add_btn.style.color = "#757878";
  add_btn.style.padding = " 0 0.5rem";
  add_btn.style.boxShadow =
    "0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),0 0.5rem 1.125rem rgba(75, 0, 0, 0.05)";

  // remove list if remove_btn has been clicked!
  remove_btn.addEventListener("click", (e) => {
    e.stopPropagation();
    to_do__item.remove();
  });
  // <!-- done items list -->
let x = []
  add_btn.addEventListener("click", (event) => {
    const done_items = document.querySelector(".done_items");
    const done_task = document.createElement("li");
    done_task.classList.add("done_task");
    done_items.appendChild(done_task);
    const done_result = to_do__item.textContent;
    notification();
    x.push(to_do__item.textContent);
    done_task.textContent = done_result.substr(0, done_result.length - 2);
    event.stopPropagation();
    to_do__item.remove();
  });
  console.log(x);

});
// clear_text_field
function clear_text_field() {
  taskName.value = "";
}

//Delete textField by cancel_btn 
const cancel_btn = document.getElementById("cancel_btn");
cancel_btn.addEventListener("click", (event) => {
  clear_text_field();
  disable_addTask_btn();
})

// aside_done_taskes
const container_today = document.querySelector(".container_today");
const container_DoneTaskes = document.querySelector(".container_DoneTaskes");
const done_taskes = document.querySelector(".done_taskes");
const today = document.querySelector(".today");

done_taskes.addEventListener("click", (event) => {
  event.preventDefault();
  container_today.style.display = "none";
  container_DoneTaskes.style.display = "block";
});

today.addEventListener("click", (event) => {
  container_today.style.display = "block";
  container_DoneTaskes.style.display = "none";
});

// notification on Done Task link
let clicks = 0;
function notification() {
  clicks += 1;
  const badge = document.querySelector(".badge");
  badge.style.display='inline'
  badge .innerHTML = clicks;
};

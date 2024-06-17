const outlayer = document.querySelector(".base")
const inlayer = document.querySelector(".baseevent")
const res = document.querySelector(".disptask");


const btn = document.querySelector(".addtask");
btn.addEventListener("click", function () {
    outlayer.style.display = "block";
    inlayer.style.display = "block";
})
const cancel = document.querySelector("#task1");
cancel.addEventListener("click", function () {
    outlayer.style.display = "none";
    inlayer.style.display = "none";
})




function addtodo() {
    const input = document.querySelector("#input");
    const div = document.createElement("div");
    const content = document.createElement("input");
    const h3 = document.createElement("h3");
    const button = document.createElement("button");
    content.type = "checkbox";
    button.type = "button";
    button.innerHTML = `<i class="fa fa-trash">`;
    button.addEventListener("click", function () {
        button.parentElement.remove();
        alert("Task Deleted");
        SavingTask();
    });

    if (input.value === "") {
        alert("Enter the Task");
    } else {
        div.append(content);
        h3.innerText = input.value;
        div.append(h3);
        div.append(button);
        content.addEventListener("change", function () {
            if (content.checked === true) {
                h3.style.textDecoration = "line-through";
                h3.style.color = "red";

            } else {
                h3.style.textDecoration = "none";
                h3.style.color = "black";
            }
            SavingTask();
        })
        div.setAttribute("class", "disptaskinner");
        res.append(div);
        SavingTask();
        outlayer.style.display = "none";
        inlayer.style.display = "none";
        alert("Task Added");

        input.value = "";
    }
}
function SavingTask() {
    const a = [];
    console.log(res.innerHTML)
    for (let i = 0; i < res.children.length; i++) {
        const task = {

            taskname: res.children[i].children[1].innerText,
            status: res.children[i].children[0].checked,

        };

        a.push(task);
    }
    localStorage.setItem("Task", JSON.stringify(a));
}
function LoadTask() {
    const data = JSON.parse(localStorage.getItem("Task"));
    for (let i = 0; i < data.length; i++) {
        const input = document.querySelector("#input");
        const div = document.createElement("div");
        const content = document.createElement("input");
        const h3 = document.createElement("h3");
        const button = document.createElement("button");
        content.type = "checkbox";
        button.type = "button";
        button.innerHTML = `<i class="fa fa-trash">`;
        button.addEventListener("click", function () {
            button.parentElement.remove();
            alert("Task Deleted");
            SavingTask();
        });

        div.append(content);
        h3.innerText = data[i].taskname;
        div.append(h3);
        div.append(button);
        if (data[i].status === true) {
                
            div.children[0].checked = true;
            // div.children[1].classList.add("task-done");
            h3.style.textDecoration = "line-through";
                h3.style.color = "red";
                
                // h3.style.border="2px solid black";
        }
        content.addEventListener("change", function () {
            if (content.checked === true) {
                h3.style.textDecoration = "line-through";
                h3.style.color = "red";

            } else {
                h3.style.textDecoration = "none";
                h3.style.color = "black";
            }
            SavingTask();
        })
        div.setAttribute("class", "disptaskinner");
        res.append(div);
        SavingTask();
        outlayer.style.display = "none";
        inlayer.style.display = "none";

        input.value = "";
    }
}
LoadTask();
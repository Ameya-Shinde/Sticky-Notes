const note = document.getElementById("input");
const addbtn = document.getElementById("add");
const list = document.getElementById("notes-list");
const col = document.getElementById("col");
const empty = document.getElementById("no-notes");

addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        if (note.value == "") {
            alert("A note can't be empty.");
        } else {
            empty.innerHTML = "";
            createNote();
        }
    }
})

addbtn.addEventListener("click", () => {
    if (note.value) {
        empty.innerHTML = "";
        createNote();
    } else {
        alert("A note can't be empty.");
    }
});

function createNote() {
    const div = document.createElement("div");
    div.style.backgroundColor = col.value;
    div.className = "notes";
    div.innerHTML = `<p>${note.value}</p>
                     <a class="delBtn">Del</a>`;
    list.appendChild(div);
    note.value = "";

    const delBtn = div.querySelector(".delBtn");
    delBtn.addEventListener("click", () => {
        list.removeChild(div);
    });
}






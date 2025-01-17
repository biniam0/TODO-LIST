// Variables
const add_note = document.getElementById("apply")
const note_array = ["NOTE #0", "NOTE #1", "NOTE #2"]

// >>>>>>Functions<<<<<<

// Add new notes
function addNote() {
  const note = document.getElementById("note-text")
  const new_note = document.getElementById("note-text").value
  note_array.push(`#${note_array.length} ${new_note}`)
  // note_array.push({task_name:`task_${note_array.length}`, task_content:new_note})
  console.log(note_array)
  document.getElementById("note-text").value = ""
  displayNotes()
}

// Render the notes
function displayNotes() {
  const notes = document.querySelector('#notes');
  notes.innerHTML = '';

  note_array.forEach((value, index) => {
    const new_note = document.createElement('div');
    new_note.setAttribute('id', index);
    new_note.setAttribute('class', "note-card");
    new_note.innerHTML = 
          `
            <li>
              <div class="note-name">
                <input id="checkbox-${index}" class="checkbox" type="checkbox"/>
                <h3 id="note-text-${index}" >${value}</h3>
              </div>
              <div class="icons">
                <i id="edit-${index}" class="fa-solid fa-pencil edit"></i>
                <i id="delete-${index}" class="fa-solid fa-trash-can delete"></i>
              </div>
            </li>
          `;
    const hr = document.createElement('hr');
    notes.appendChild(new_note);
    notes.appendChild(hr);
  });
 
}

// Edit notes 
function editNote(index) {
  
}

// Delete notes
function deleteNote() {
  
}

// Strike notes
function strikeNote(idx) {
  const text = document.querySelector(`#note-text-${idx}`)
  const val = document.querySelector(`#note-text-${idx}`).innerHTML
  text.innerHTML = 
    `
      <del>${val}</del>
    `
}

// Function Call
// Render function call
displayNotes()


// Displaying modal
const toggleModal = () => {
    document.querySelector(".modal").classList.toggle("modal__hidden");
  };
  document
    .querySelector("#show-modal")
    .addEventListener("click", toggleModal);
  document.querySelector("#cancel").addEventListener("click", toggleModal);

// Close modal after apply button is clicked
document
    .querySelector("#show-modal")
    .addEventListener("click", toggleModal);
document.querySelector("#apply").addEventListener("click", toggleModal);

// Close when clicked outside the modal
const modal = document.getElementById("modal")
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

// Dark mode theme
const darkIcon = document.getElementById('theme1');
const lightIcon = document.getElementById('theme2');

let darkmode = localStorage.getItem("darkmode");
if (darkmode === "active") {
  darkIcon.style.display = "none";
  lightIcon.style.display = "block";
} else {
  darkIcon.style.display = "block";
  lightIcon.style.display = "none";
}

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
  darkIcon.style.display = "none";
  lightIcon.style.display = "block";
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.removeItem('darkmode');
  darkIcon.style.display = "block";
  lightIcon.style.display = "none";
};

darkIcon.addEventListener("click", enableDarkmode);
lightIcon.addEventListener("click", disableDarkmode);

if (darkmode === "active") {
  enableDarkmode();
}

// Listening to Clicks
// Add Notes 
document.querySelector("#apply").addEventListener("click", addNote)

// Checkbox, Edit and Delete
const ul_wrapper = document.getElementById("notes")
ul_wrapper.addEventListener("click", (e) => {
  const clicked_btn = e.target.id
  const [btn_name, idx] = clicked_btn.split("-")

  if (btn_name == "checkbox") {
    strikeNote(idx)
  }
  else if (btn_name == "edit") {
    editNote(idx)
  }
  if (btn_name == "delete") {
    deleteNote(idx)
  }
})

// Edit Notes
document.querySelector(".edit").addEventListener("click", editNote)

// Delete Notes
document.querySelector(".delete").addEventListener("click", deleteNote)

// Close modal after apply button is clicked
document
    .querySelector("#show-modal")
    .addEventListener("click", toggleModal);
document.querySelector("#apply").addEventListener("click", toggleModal);




// ===========TASKS===============
// What happen if there is not notes
// Note can be deleted and edited
// 

































// // =====================
// var x, i, j, l, ll, selElmnt, a, b, c;
// /* Look for any elements with the class "custom-select": */
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   /* For each element, create a new DIV that will act as the selected item: */
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   /* For each element, create a new DIV that will contain the option list: */
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     /* For each option in the original select element,
//     create a new DIV that will act as an option item: */
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         /* When an item is clicked, update the original select box,
//         and the selected item: */
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//     /* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }

// function closeAllSelect(elmnt) {
//   /* A function that will close all select boxes in the document,
//   except the current select box: */
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }

// /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// document.addEventListener("click", closeAllSelect);


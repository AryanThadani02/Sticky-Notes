const note = document.querySelector("textarea")
const btn = document.querySelector("#button")
const bgColor = document.querySelector("#bg")
const textColor = document.querySelector("#text")
const rightDiv = document.querySelector(".right")

btn.addEventListener("click", createStickyNote);

function createStickyNote() {
  const text=note.value;
  if(text.length===0) {Toastify({
    text: "Please enter some note. ",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#ff0000",
    },
    onClick: function(){} // Callback after click
  }).showToast(); return;}

  const stickyNote = document.createElement("div")
  stickyNote.innerText = text;
  stickyNote.classList.add("note")

  const cross = document.createElement("span");
  cross.innerHTML="&times;"
  cross.classList.add("close")
  cross.addEventListener("click",removeStickyNote);
  stickyNote.append(cross)

  stickyNote.style.backgroundColor = bgColor.value
  stickyNote.style.color = textColor.value

  rightDiv.append(stickyNote);
  note.value=""
} 


function removeStickyNote(e){
  e.target.parentElement.remove();
}
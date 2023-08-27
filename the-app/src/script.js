console.log("sdfads");

const addButton = document.getElementById("add-task");
const modal = document.getElementsByClassName("add-container")[0];


addButton.addEventListener("click", () => {
    console.log("brr");
    modal.style.display = "flex";
    console.log("brr");
})
// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select all "Add to Cart" buttons
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!"); // Temporary alert (Replace with actual cart logic)
        });
    });
});



// Header phone click 

const menu_head =document.getElementById("menico");
const list_head=document.getElementById("listhead");
const exitmenu=document.getElementById("exitmenu");


function dispadd(){

list_head.classList.add("show");

}

function disprv(){

    list_head.classList.remove("show");
    
    }


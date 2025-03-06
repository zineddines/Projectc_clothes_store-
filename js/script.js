// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("atc");

// Check if button state is saved in localStorage
if (localStorage.getItem("cartAdded") === "true") {
    button.classList.add("added-to-cart"); // Keep the button white
    button.innerHTML="remove the product "
}


// Add event listener to toggle state
button.addEventListener("click", function () {
    if (button.classList.contains("added-to-cart")) {
        button.classList.remove("added-to-cart");
        button.innerHTML="Add to cart "
        localStorage.setItem("cartAdded", "false"); // Remove from localStorage
    } else {
        button.classList.add("added-to-cart"); 
        button.innerHTML="remove the product "
        localStorage.setItem("cartAdded", "true"); // Save in localStorage
    }
    

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




// filtering products 

const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const products = document.querySelectorAll(".product-one-by-one");

function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;

products.forEach(product => {
    const productCategory = product.getAttribute("data_category");
    const productPrice = parseInt(product.getAttribute("data_price"));

    // Check if product matches the selected category
    const categoryMatch = (selectedCategory === "ALL" || selectedCategory === productCategory);

    // Check if product matches the selected price range
    let priceMatch = false;
    if (selectedPriceRange === "ALL") {
        priceMatch = true; // Show all prices if "All" is selected
    } else {
        const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
        priceMatch = (productPrice >= minPrice && productPrice <= maxPrice);
    }

    // Show or hide product based on both conditions
    if (categoryMatch && priceMatch) {
        product.style.display = "block";
    } else {
        product.style.display = "none";
    }
});


}
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

// Call filterProducts initially to display the correct products
filterProducts();


// product 

// click on product 




document.querySelectorAll(".clickable").forEach(div => {
    div.addEventListener("click", function() {
        const url = this.getAttribute("data-url"); // Get the link from data-url
        window.location.href = url; // Redirect to the link
    });
});


// images product  clicking
                var mainimage = document.getElementById("mainimage");
                var smallimage =document.getElementsByClassName("smallimage");

                smallimage[0].onclick = function () {
                    mainimage.src= smallimage[0].src
                }
                smallimage[1].onclick = function () {
                    mainimage.src= smallimage[1].src
                }
                smallimage[2].onclick = function () {
                    mainimage.src= smallimage[2].src
                }
                smallimage[3].onclick = function () {
                    mainimage.src= smallimage[3].src
                }


 


// clikc on addtocart

 // Select the button











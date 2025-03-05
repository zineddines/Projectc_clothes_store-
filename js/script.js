// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", () => {
    

    
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






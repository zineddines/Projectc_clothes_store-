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

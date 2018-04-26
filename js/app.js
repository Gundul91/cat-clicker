document.addEventListener('DOMContentLoaded',function() {
    const cat_image = document.querySelector(".cat-image");
    const clicks_count = document.querySelector(".clicks-count");
    let counter = 0;

    cat_image.addEventListener("click", function() {
        counter++;
        clicks_count.textContent = counter;
    });
});

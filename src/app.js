require("isotope-layout");

document.addEventListener("ready", () => {

    const grid = document.querySelector(".gridColumn");
    let iso = new Isotope(grid, {
        itemSelector: '.gridItem',
        percentPosition: true,
        masonry: {
            columnWidth: 50,
            gutter: 2
        }
    });

});
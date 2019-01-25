require("isotope-layout");

document.addEventListener("ready", () => {

    const grid = document.querySelector(".gridColumn");
    let iso = new Isotope(grid, {
        itemSelector: '.gridItem',
        percentPosition: true,
        masonry: {
            columnWidth: '.gridSizer',
            gutter: 10
        }
    });

});
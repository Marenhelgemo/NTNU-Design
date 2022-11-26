
(function () {
    var helpers = HELPERS();
    // Name of the container where we add HTML
    var idContainer = "programmes-container";

    var i, j;
    // We create a loop to go through all of the programmes
    for (i = 0; i < programmes.length; i++) {
        //We create H2 to go with the programme.
        var h2 = document.createElement("h2");
        h2.innerHTML = programmes[i];
        document.getElementById(idContainer).appendChild(h2);

        // We create a loop to go through all of the courses.
        var currentCourses = courses[programmes[i]];
        for (j = 0; j < currentCourses.length; j++) {
            //Description and level is created
            var menuItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(currentCourses[j].code, currentCourses[j].name, currentCourses[j].description, currentCourses[j].level);
            document.getElementById(idContainer).appendChild(menuItem);
        }
    }
})();
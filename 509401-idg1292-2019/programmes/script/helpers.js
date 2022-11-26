var HELPERS = function () {

    var publicMethods = {
        getHTMLCourseFromCodeNameDescriptionLevel: getHTMLFromCourseParams
    }
    return publicMethods;

    function getHTMLFromCourseParams(code, name, description, level) {
        //a Creates div
        var divCourse = document.createElement("div");
        // Decides the class to the div
        divCourse.className = "course-item";
        var htmlTitle = getTitleElement(code, name);
        divCourse.appendChild(htmlTitle);
        var paragraphWithDescriptionAndLevel = getParagraphWithDescriptionAndLevel(description, level);

        divCourse.appendChild(paragraphWithDescriptionAndLevel);
        return divCourse;
    }

    function getTitleElement(name, code) {
        //creates H2
        var titleH2 = document.createElement("h2");
        titleH2.innerHTML = code + " - " + name;
        //returns H2
        return titleH2;
    }

    function getDescriptionElement(description) {
        //create an empty <span>
        var descSpan = document.createElement("span");
        descSpan.innerHTML = description;
        //return the element
        return descSpan;
    }

    function getLevelElement(level) {
        var levelSpan = document.createElement("span");
        levelSpan.innerHTML = "Level: " + level;
        levelSpan.className = "level";
        return levelSpan;
    }

    function getParagraphWithDescriptionAndLevel(description, level) {
        var p = document.createElement("p");

        var htmlDesc = getDescriptionElement(description);

        p.appendChild(htmlDesc);

        var htmlLevel = getLevelElement(level);
        p.appendChild(htmlLevel);
        return p;
    }
};

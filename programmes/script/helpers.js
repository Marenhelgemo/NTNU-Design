var HELPERS = function () {

    var publicMethods = {
        getHTMLCourseFromCodeNameDescriptionLevel: getHTMLFromCourseParams
    }
    return publicMethods;

    function getHTMLFromCourseParams(code, name, description, level) {
        //a <div></div> is created to display the course
        var divCourse = document.createElement("div");
        //the <div> will have the "course-item" class. e.g: <div class="course-item"></div>
        divCourse.className = "course-item";

        /*
        */
        //<h2>title</h2> is created. E.g: <h2>IDG1292 - web coding</h2>
        var htmlTitle = getTitleElement(code, name);
        //append <h2> to <div class="course-item">. 
        // E.g: 
        //    <div class="course-item">
        //        <h2>IDG1292 - web coding</h2>
        //    </div>
        divCourse.appendChild(htmlTitle);

        //<p><span>description</span><span>level</span></p> is created. 
        // E.g: 
        //  <p>
        //    <span>This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).</span>
        //    <span>Level 1</span>
        //  </p>
        var paragraphWithDescriptionAndLevel = getParagraphWithDescriptionAndLevel(description, level);
        //append <h2> to <div class="course-item">. 
        // E.g: 
        //    <div class="course-item">
        //        <h2>IDG1292 - web coding</h2>
        //        <p>
        //          <span>This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).</span>
        //          <span>Level 1</span>
        //        </p>
        //    </div>
        divCourse.appendChild(paragraphWithDescriptionAndLevel);
        return divCourse;
    }

    function getTitleElement(name, code) {
        //create an empty <h2>
        var titleH2 = document.createElement("h2");
        //set the <h2> value using the title input param. e.g: <h2>IDG1292 - web coding</h2>
        titleH2.innerHTML = code + " - " + name;
        //return the element
        return titleH2;
    }

    /*
    Return a <span> with the description
    */
    function getDescriptionElement(description) {
        //create an empty <span>
        var descSpan = document.createElement("span");
        //set the <span> value using the description input param. e.g: <span>This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).</span>
        descSpan.innerHTML = description;
        //return the element
        return descSpan;
    }

    /*
    Return a <span class="level">Level: x</span> with the level
    */
    function getLevelElement(level) {
        var levelSpan = document.createElement("span");
        levelSpan.innerHTML = "Level: " + level;
        levelSpan.className = "level";
        return levelSpan;
    }

    function getParagraphWithDescriptionAndLevel(description, level) {
        var p = document.createElement("p");

        //<span>desc</span> is created. E.g: <span>This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).</span>
        var htmlDesc = getDescriptionElement(description);
        //append <span>description to... <p>. 
        // E.g: 
        //    <p>
        //        <span>This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).</span>
        //    </p>
        p.appendChild(htmlDesc);

        //<span>level</span> is created. E.g: <span>Level 1</span>
        var htmlLevel = getLevelElement(level);
        //append <span> to <p>
        // E.g: 
        //    <p>
        //        <span>This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).</span>
        //        <span>Level 1</span>
        //    </p>
        p.appendChild(htmlLevel);
        return p;
    }
};

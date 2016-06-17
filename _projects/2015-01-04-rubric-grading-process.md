---
layout: projects
previous_url: gameful-pedagogy-site
next_url: grade-predictor-refinements
title: rubric-grading-process
name: Rubric Grading Process
role: Role&#58; UI/UX Design, Front-End Development
overview: Overview&#58; Usability testing identified some clarity issues around rubric feedback from students. This prompted us to reexamine and refine the process for both instructors and students.
browser_url: gradecraft/assignment1
browser_image: img/student-rubric-600.jpg
mobile_image: img/student-rubric-mobile.jpg
---

<section class="project-page section grid-container">
 <div class="section-header grid-100"><h1>Rubric Grading Process</h1></div>

 <div class="project-data">
  <div class="case-study challenge grid-100 tablet-grid-100">
    <h2>Challenge</h2>
    <p>During a round of usability testing with students who were both familiar and not with the GradeCraft application, I found that students were having a hard time understanding their grade and feedback on a rubric graded assignment. Since instructors are able to build custom rubrics with varying numbers of levels for each criterion, the grid was unable to present the information back to students in way that made sense. Students needed a way to see what level they earned on each criterion, comments left by the instructor, a less-emphasized or opt-out feature for viewing how other students performed on the assignment, and a better mobile experience for anyone checking their grade on the go.</p>

    <img class="project-sketch grid-50 tablet-grid-50 mobile-grid-100" src="/img/usability-testing.jpg">
    <img class="project-sketch grid-50 tablet-grid-50 mobile-grid-100" src="/img/student-rubric-sketch.jpg">

    <h2>Process</h2>
    <p>After itemizing the issues with the student-facing rubrics and adding them as “design requirements” in Trello, I began sketching and wireframing possible designs that would be more intuitive to students. I came up with a with a tab-panel design that seemed to solve the documented issues and created medium fidelity mockups in Sketch to demo with students (luckily we had user testing scheduled for a whole month). My PDFs were able to gather much more concise feedback which I rolled into the next iteration. Soon after finalizing the student-facing designs, I began reexamining the instructor side rubric grading process as well. Not only did we find it valuable for the two sides of the app to look similar in most instances (and dramatically reduce code), but the instructor rubrics had similar issues with responsiveness.</p>

    <h2>Solution</h2>
    <p>Instead of a grid structure for this data, I took inspiration from the popular card-style approach to data where information is presented in more digestible chunks. Each criterion became its own entity so a student could easily view how they did on an assignment without being overwhelmed by levels they did not earn. I also added a toggle for hiding and showing how other students performed on the same assignment. This design translated well on a mobile phone by adding simple arrow links instead of tabs to show levels other than the one earned.<br>

    The instructor-side changes were a bit more difficult because this required the consideration of a less familiar grading workflow and rubric creation process. Using the student design as a baseline for styling, I revised the grading process to reflect the more segmented version of the rubric with each criterion acting as a separate entity. Since this elongated the page quite substantially, several of the next iterations were attempts at dealing with the amount of scrolling I was expecting instructors to do. I sent these designs to a professor who was able to give me great insight into his grading and rubric creation workflow and ended up with a split-pane design that made viewing assignments and grading a much more seamless experience.</p>
  </div>

  <div class="project-example grade-predictor grid-100 center-align">
    <div class="browser browser-window">
      <span class="browser-buttons"></span><span class="browser-buttons"></span ><span class="browser-buttons"></span>
      <div class="browser-top"><p>gradecraft.com/assignment1</p></div>
      <div class="window-screen"><img src="/img/student-rubric-600.jpg"></div>
    </div>
  </div>

  <div class="project-example grade-predictor grid-100 center-align">
    <div class="browser browser-window">
      <span class="browser-buttons"></span><span class="browser-buttons"></span ><span class="browser-buttons"></span>
      <div class="browser-top"><p>gradecraft.com/assignment1</p></div>
      <div class="window-screen"><img src="/img/instructor-rubric-600.jpg"></div>
    </div>
  </div>

</section>

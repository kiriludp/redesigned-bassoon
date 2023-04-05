// Task 2: Capture Form Data
// Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.
var inputTaskName = $("#inputTask");
var inputDate = $('#inputDate');
var submitButton = $('#submit');
var deleteTask = $('#deleteButton');
var inputType = $('#inputType');
var list
var newTaskName =$('#newTaskName');
var newTaskType =$('#newTaskType');
var newTaskDate =$('#newTaskDate');



// Select and save references to every DOM element we will interact with to a variable (i.e., var projectFormEl = $("#project-form");) so that we can use these elements later.

// Attach a submit event listener to the <form> element using jQuery.
function submitInfo(event) {
    event.preventDefault();

    //save values of inputs to their own variables

    var inputTask = {
        Name: inputTaskName.val();
        Date: inputDate.val();
        Type: inputType.val();
    }

     //save items to local storage
    localStorage.setItem("New Task", JSON.stringify(inputTask));


    //create li text element, input text items
    newTaskName.text(inputTaskName);
    newTaskType.text(inputType);
    newTaskDate.text(inputDate);
    
    //clear form data
     taskDate = inputDate.val(" ");
     taskName = inputTaskName.val(" ");
     taskType = inputType.val(" ");
    
}


    //remove task based on its indexed position

//render local storage data

function renderTasks () {
    var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
}



// On submission, capture the input values from the form and update localStorage so that the projects that have been added are persistent. Clear the form data so that the user can easily add additional projects.

// Call the function to print the project data on the page.

function removeEvent() {


}

deleteTask.on("click", removeEvent();)
submitButton.on("click", submitInfo());
// Ensure the modal closes when the user submits the form.
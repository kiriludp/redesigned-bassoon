var projects = [];
var projectInput = $('project-input');
var tableRowEl = $('#table-row');
var tableDetailEl = $('#table-detail');
var submitBtn = $('submit-btn');
tableRowEl.addClass('tr');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
});
    
function saveProjects() {
    var userProjects = {
        projectName: projectName.value,
        projectType: projectType.value,
        projectDate: projectDate.value, 
    };
    localStorage.setItem('projects', JSON.stringify('userProjects'));
}

function renderProjects() {
    var userInput = JSON.parse(localStorage.getItem)
}
    
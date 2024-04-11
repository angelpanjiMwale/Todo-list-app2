function addTask() {
    var input = document.getElementById('new-task');
    var newTask = input.value.trim();
    if (newTask) {
        var listItem = document.createElement('li');
        listItem.textContent = newTask;
        listItem.onclick = function() {
            this.classList.toggle('done');
        };
        document.getElementById('tasks').appendChild(listItem);
        input.value = ''; // Clear the input
    }
}

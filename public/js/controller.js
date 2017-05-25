'use strict';

var newTaskElement = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
var inbox = new List('inbox');

function addTask(e) {
	var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

	e.preventDefault();

	if (e.which === 13) {
		var newTask = new Task(this.value);
		list.addTask(newTask);
		printTask(this.value);
		this.value = "";
		console.table(list.tasks);
	}
}

function editTask() {
	var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inbox;

	var listItems = taskList.children;

	var _loop = function _loop(i) {
		listItems[i].querySelector('span').addEventListener('blur', function () {
			list.tasks[i].name = listItems[i].querySelector('span').textContent;
			console.table(list.tasks);
		});
	};

	for (var i = 0; i < listItems.length; i++) {
		_loop(i);
	}
}

newTaskElement.addEventListener('keyup', addTask);
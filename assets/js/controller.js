var newTaskElement 	= 	document.getElementById('new-task');
var taskList		=	document.getElementById('task-list');
var inbox			=	new List('inbox');

function addTask(e, list = inbox){
	e.preventDefault();

	if(e.which === 13){
		var newTask = new Task(this.value);
		list.addTask(newTask);
		printTask(this.value);
		this.value = "";
		console.table(list.tasks);
	}
}

function editTask(list = inbox){
	var listItems = taskList.children;
	for( let i = 0; i < listItems.length; i++){
		listItems[i].querySelector('span').addEventListener('blur', () => {
			list.tasks[i].edit(listItems[i].querySelector('span').textContent);
		});
	}
}

function completeTask(list = inbox){
	var listItems = taskList.children;
	for( let i = 0; i < listItems.length; i++){
		listItems[i].querySelector('input').addEventListener('change', () => {
			if(listItems[i].querySelector('input').checked){
				list.tasks[i].complete();
				listItems[i].classList.add('complete');
			}
			console.table(list.tasks);
		});
	}
}

function removeTask(list = inbox){
	var listItems = taskList.children;
	for( let i = 0; i < listItems.length; i++){
		listItems[i].querySelector('button').addEventListener('click', function(e){
			e.preventDefault();
			var _i = i;
			list.removeTask(_i);
			this.parentElement.remove();
			console.table(list.tasks);
			completeTask();
		});
	}
}

newTaskElement.addEventListener('keyup', addTask);
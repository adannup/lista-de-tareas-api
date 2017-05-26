function printTask(name){
	var taskLi 			= 	document.createElement('li');
	taskLi.classList.add('task_item');

	var taskCheckbox	=	document.createElement('input');
	taskCheckbox.classList.add('input-style');
	taskCheckbox.type	=	'checkbox';

	var taskElement		=	document.createElement('span');
	taskElement.textContent	=	name;
	taskElement.setAttribute('contenteditable', '');

	var taskRemove		=	document.createElement('button');
	taskRemove.textContent	=	"Borrar";
	taskRemove.classList.add('btn-remove');

	taskLi.appendChild(taskCheckbox);
	taskLi.appendChild(taskElement);
	taskLi.appendChild(taskRemove);
	taskList.appendChild(taskLi);

	editTask();
	completeTask();
}
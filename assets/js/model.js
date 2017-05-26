class Task {
	constructor(name){
		this.name = name;
		this.isComplete = false;
	}

	edit(newName){
		this.name = newName;
	}

	complete(){
		this.isComplete = true;
	}

}

class List {
	constructor(name){
		this.name = name;
		this.tasks = [];
	}

	addTask(task){
		this.tasks.push(task);
	}

	removeTask(i){
		//Eliminar la tarea
		this.tasks.splice(i, 1);
	}
}


/*var trabajo = new List('trabajo');
trabajo.addTask('preparar el informe');
trabajo.addTask('propuesta para el cliente');

console.log(trabajo.tasks);
*/
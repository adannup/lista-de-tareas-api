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

	remove(){
		//Eliminar la tarea
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
}


/*var trabajo = new List('trabajo');
trabajo.addTask('preparar el informe');
trabajo.addTask('propuesta para el cliente');

console.log(trabajo.tasks);
*/
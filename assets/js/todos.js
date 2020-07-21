function addTodo() {
	let todoText = document.getElementById('newTodoText').value,
		todoList = document.getElementById('todoUl'),
		newTodoLi = document.createElement('LI'),
		txtNode = document.createTextNode(todoText);

	newTodoLi.appendChild(txtNode);
	todoList.appendChild(newTodoLi);
}

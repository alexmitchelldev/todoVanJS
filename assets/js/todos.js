function addTodo() {
	//DOM Variable declarations
	let todoText = document.getElementById('newTodoText').value,
		dailyList = document.getElementById('dailyList'),
		weeklyList = document.getElementById('weeklyList'),
		specificList = document.getElementById('specificList'),
		todoList = document.querySelector('input[name="todoType"]:checked').value,
		newTodoLi = document.createElement('LI'),
		newSpan = document.createElement('span'),
		newIcon = document.createElement('i'),
		txtNode = document.createTextNode(todoText);

	//Adds font aswesome classes to icon
	newIcon.classList.add('fa', 'fa-trash');
	newSpan.addEventListener('click', function determineParent() {
		if (event.target.parentElement.nodeName === 'LI') {
			event.target.parentElement.remove();
			// console.log('You clicked on the span');
		} else if (event.target.parentElement.nodeName === 'SPAN');
		{
			event.target.parentElement.parentElement.remove();
			// console.log('You clicked on the icon');
		}
	});

	function addInfo() {
		newTodoLi.appendChild(newSpan);
		newTodoLi.appendChild(txtNode);
		newSpan.appendChild(newIcon);
	}

	//Logic to choose which todo list to add to
	if (todoList == 'dailyList') {
		addInfo();
		dailyList.appendChild(newTodoLi);
	} else if (todoList === 'weeklyList') {
		addInfo();
		weeklyList.appendChild(newTodoLi);
	} else if (todoList === 'specificList') {
		addInfo();
		specificList.appendChild(newTodoLi);
	}
}

function removeTodo(event) {}

// function removeTodo() {
// 	let todos = document.querySelectorAll('#dailyList li'),
// 		tab = [],
// 		liIndex;
// 	for (var i = 0; i < todos.length; i++) {
// 		tab.push(todos[i].innerHTML);
// 	}

// 	for (var i = 0; i < todos.length; i++) {
// 		todos[i].onclick = function() {
// 			liIndex = tab.indexOf(this.innerHTML);
// 			console.log(this.innerHTML + ' INDEX = ' + liIndex);
// 		};
// 	}
// }

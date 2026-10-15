const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return; 

  const li = document.createElement('li');
  li.textContent = text;

  // crear botón de borrar
  const del = document.createElement('button');
  del.type = 'button';
  del.className = 'delete-btn';
  del.textContent = '✖';
  del.title = 'Eliminar tarea';

  // cuando se pulsa el botón, eliminar la tarea
  del.addEventListener('click', function() {
    li.remove();
  });

  li.appendChild(del);
  todoList.appendChild(li);

  input.value = '';
  input.focus();
});
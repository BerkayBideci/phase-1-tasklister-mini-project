document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  let list = document.querySelector("#tasks")
  let text = document.querySelector('#new-task-description')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    ToDoAdd(text.value)
    form.reset()
  })

  function ToDoAdd(todo) {
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.addEventListener('click', deleteToDo)
    li.textContent = `${todo} `
    btn.textContent = "X"
    li.appendChild(btn)
    list.appendChild(li)
  }

  function deleteToDo(e) {
    e.target.parentNode.remove()
  }
});

class ToDo {
  isDone = false;
  task
  taskEl

  constructor(task, taskEl) {
    this.task = task
    this.taskEl = taskEl

    this.taskEl.innerHTML = `
      <input type="checkbox" />
      <label for="checkbox">${this.task}</label>
      <button>x</button>
    `

    this.initInteraction()
  }

  initInteraction() {
    // Mark as complete based on whether or not the checkbox is checked
    const checkboxEl = this.taskEl.querySelector('input')
    checkboxEl.addEventListener('input', () => {
      this.isDone = checkboxEl.checked
      this.render()
    })

    // Remove on click
    this.taskEl.querySelector('button').addEventListener('click', () => {
      this.taskEl.remove()
    })
  }

  render() {
    if (this.isDone) {
      this.taskEl.classList.add('complete')
    } else {
      this.taskEl.classList.remove('complete')
    }
  }
}

class ToDoList {
  tasks
  formEl
  tasksEl

  constructor(formEl, tasksEl) {
    this.formEl = formEl
    this.tasksEl = tasksEl
    this.tasks = new Array() 

    this.initInteraction()
  }

  initInteraction() {
    
    // Create a new task based upon the input value of 
    // the task field when the submit button is clicked
    const buttonEl = this.formEl.querySelector('button')
    buttonEl.addEventListener('click', (event) => {
      event.preventDefault()
      
      const taskValue = this.formEl.querySelector('input').value
      if (taskValue.length > 0) {
        this.addTask(taskValue)
      }
      
    })
  }

  addTask(task) {
    const taskEl = document.createElement('li')
    this.tasksEl.appendChild(taskEl)

    const t = new ToDo(task, taskEl)
    this.tasks.push(t)
  }
}


const list = new ToDoList(document.querySelector('form'), document.querySelector('ul'))
console.log(list)
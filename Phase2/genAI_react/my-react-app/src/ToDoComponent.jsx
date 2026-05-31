import { useState } from 'react'

function ToDoComponent() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])

  const handleAddTask = (event) => {
    event.preventDefault()
    const trimmedText = taskText.trim()
    if (!trimmedText) return

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: trimmedText, completed: false },
    ])
    setTaskText('')
  }

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <section className="todo-container">
      <h2>Todo List</h2>
      <form className="todo-form" onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskText}
          placeholder="Add a new task"
          onChange={(event) => setTaskText(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="todo-summary">
        <span>Total: {tasks.length}</span>
        <span>Completed: {completedCount}</span>
      </div>

      {tasks.length === 0 ? (
        <p className="todo-empty">No tasks yet. Add one above.</p>
      ) : (
        <ul className="todo-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'task-completed' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                />
                <span>{task.text}</span>
              </label>
              <button type="button" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ToDoComponent

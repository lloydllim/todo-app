import {ToDoRepository} from '@/features/todo/interfaces/TodoRepository'

const todos: any[] = []

export const mockToDoRepo: ToDoRepository = {
	createTodo: async (data) => {
		const todo = {id: `${todos.length + 1}`, ...data}
		todos.push(todo)
		return todo
	},
	editTodo: async (data, id) => {
		todos.map((todo) => (todo.id === id ? {...data} : todo))
		return todos
	},
	findById: async (id) => {
		todos.find((todo) => todo.id === id) || null
	},
}

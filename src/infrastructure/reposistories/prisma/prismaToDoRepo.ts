// infrastructure/repositories/prisma/prismaUserRepo.ts
import {ToDoRepository} from '@/features/todo/interfaces/TodoRepository'
import {prisma} from '@/core/db/prisma-client'

export const prismaToDoRepo: ToDoRepository = {
	createTodo: async ({name, description, level}) =>
		prisma.todo.create({data: {name, description, level}}),
	findById: async (id) => prisma.todo.findUnique({where: {id}}),
	editTodo: async ({name, description, level}, id) =>
		prisma.todo.update({data: {name, description, level}, where: {id}}),
}

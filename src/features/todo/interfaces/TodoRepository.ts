export interface ToDoRepository {
  createTodo( todo: { name: string; description: string, level: number } ): Promise<any>;
  findById( id: string): Promise<any | null>;
  editTodo( todo: { name: string, description: string, level: number}, id: string ): Promise<any>;
}
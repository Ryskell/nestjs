import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor(private readonly taskModel: TaskModel) {}

  async createTask(taskData: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(taskData);
    return await createdTask.save();
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  
}
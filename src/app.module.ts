import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TaskService } from './task/task.service';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [TaskService],
})
export class AppModule {}

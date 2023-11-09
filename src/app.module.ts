import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './post/post.controller';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { TasksModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { AssessmentModule } from './assessment/assessment.module';

@Module({
  imports: [
    ProductsModule,
    DatabaseModule,
    TasksModule,
    UserModule,
    AssessmentModule,
  ],
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule {}

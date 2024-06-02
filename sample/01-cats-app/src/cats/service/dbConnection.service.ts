// database.service.ts
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async connectToDatabase(databaseUri: string): Promise<void> {
    try {
      await this.connection.openUri(databaseUri);
      console.log(`Connected to MongoDB at ${databaseUri}`);
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    }
  }
}

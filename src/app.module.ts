import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'Jaime.2000',
        database: 'parcial02',
        retryDelay: 3000,
        autoLoadEntities: true,
    }),
    UsuariosModule,
    AppController,
    // Otros módulos importados
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

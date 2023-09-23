import { Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import { UsuariosService } from './usuarios/usuarios.service';
import { AppModule } from './app.module';

@Controller('usuarios')
export class AppController {
  constructor(private  appService: UsuariosService) {}

  @Get()
    listarTodos():any{
      return this.appService.ListarTodos();
  }
  @Get(':id')
    obtenerUno(@Param() params): any{
      return this.appService.obtenerUno(params.id);
    }
    @Post()
    create(@Body() userModel:AppModule):any{
        return this.appService.create(userModel);
    }
    @Put(':id')
    actualizarUsuario(@Body() UserModel:AppModule, @Param() params): any{
        return this.appService.actualizarUsuario(params.id, UserModel)
    }

    @Delete(':id')
    eliminarUsuario(@Param() params): any{
        return  this.appService.eliminarUsuario(params.id);
    }
}


    

   
    


import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly userRepositoy: Repository<UsuarioEntity>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const newUser = this.userRepositoy.create(createUsuarioDto);
    return await this.userRepositoy.save(newUser);
  }

  async findAll() {
    return await this.userRepositoy.find();
  }

  async findOne(id: number): Promise<UsuarioEntity | undefined> {
    return await this.userRepositoy.findOne({ where: { id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<UsuarioEntity | undefined> {
    const userExist = await this.userRepositoy.findOne({ where: { id } });
    if (!userExist){
      return undefined;
    }

    userExist.nombre = updateUsuarioDto.nombre;
    userExist.apellido = updateUsuarioDto.apellido;
    userExist.fecha_nacimiento = updateUsuarioDto.fecha_nacimiento;
    userExist.genero = updateUsuarioDto.genero;
    userExist.direccion = updateUsuarioDto.direccion;
    userExist.telefono = updateUsuarioDto.telefono;
    userExist.correo_electronico = updateUsuarioDto.correo_electronico;
    userExist.fecha_contratacion = updateUsuarioDto.fecha_contratacion;
    userExist.departamento = updateUsuarioDto.departamento;

    return await this.userRepositoy.save(userExist);
  }

  async remove(id: number):  Promise<void> {
    await this.userRepositoy.delete(id);
  }

}

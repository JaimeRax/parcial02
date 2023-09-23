import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class UsuarioEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   nombre: string;

   @Column()
   apellido: string;

   @Column()
   fecha_nacimiento: Date;

   @Column()
   genero: string;

   @Column()
   direccion: string;

   @Column()
   telefono: string;

   @Column()
   correo_electronico: string;

   @Column()
   fecha_contratacion: Date;

   @Column()
   departamento: string;

}

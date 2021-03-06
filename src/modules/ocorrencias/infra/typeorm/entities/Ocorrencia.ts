import Usuario from '@modules/users/infra/typeorm/entities/Usuario';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import OcorrenciaTipo from './OcorrenciaTipo';

@Entity('ocorrencia')
export default class Ocorrencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  criador: number;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'criador' })
  usuario_criador: Usuario;

  @Column()
  alvo: string;

  @Column()
  descricao: string;

  @Column({ length: 1 })
  situacao: string;

  @Column('timestamp with time zone')
  datahora: Date;

  @ManyToOne(() => OcorrenciaTipo, { eager: true })
  @JoinColumn({ name: 'ocorrencia_tipo_id' })
  ocorrencia_tipo: OcorrenciaTipo;

  @Column('integer')
  ocorrencia_tipo_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

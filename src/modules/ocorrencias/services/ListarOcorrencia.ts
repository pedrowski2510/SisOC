import { injectable, inject } from 'tsyringe';

import IOcorrenciaRepository from '../repositories/IOcorrenciaRepository';
import Ocorrencia from '../infra/typeorm/entities/Ocorrencia';
import IListarOcorrenciaDTO from '../dtos/IListarOcorrenciaDTO';

@injectable()
export default class ListarOcorrencia {
  constructor(
    @inject('OcorrenciaRepository')
    private repository: IOcorrenciaRepository,
  ) {}

  public async execute({
    usuario_id,
  }: IListarOcorrenciaDTO): Promise<Ocorrencia[]> {
    const ocorrencias = await this.repository.userOwner({ usuario_id });

    return ocorrencias;
  }
}

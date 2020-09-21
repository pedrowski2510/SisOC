import { Router } from 'express';

import userRouter from '@modules/users/infra/http/routes/user.routes';
import usuarioTipoRouter from '@modules/users/infra/http/routes/usuarioTipo.routes';

import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';

import ocorrenciaRouter from '@modules/ocorrencias/infra/http/routes/ocorrencia.routes';
import ocorrenciaTipoRouter from '@modules/ocorrencias/infra/http/routes/ocorrenciaTipo.routes';

import setorRouter from '@modules/ocorrencias/infra/http/routes/setor.routes';

const routes = Router();

routes.use('/usuarios', userRouter);
routes.use('/usuarios/tipo', usuarioTipoRouter);

routes.use('/perfil', profileRouter);
routes.use('/sessao', sessionRouter);

routes.use('/ocorrencias', ocorrenciaRouter);
routes.use('/ocorrencias/tipo', ocorrenciaTipoRouter);

routes.use('/setores', setorRouter);

export default routes;
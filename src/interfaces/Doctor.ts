export interface IDoctorContext {
  consults: IConsult2[] | undefined;
  consultSelected: IConsult2 | undefined;
  changeConsultSelected: (consult: IConsult2 | undefined) => void;
  getConsults: () => Promise<void>;
}

export interface IConsult {
  _id: string;
  horario: string;
  paciente_id: string;
  medico_id: string;
  usuario_id: string;
  descricao: string;
  pago: boolean;
  confirmado: boolean;
  compareceu: boolean;
  cancelada: boolean;
  atualizado_em: string;
  criado_em: string;
}

export interface IConsult2 {
  _id: string;
  horario: string;
  paciente_id: string;
  medico_id: string;
  usuario_id: string;
  descricao: string;
  pago: boolean;
  confirmado: boolean;
  compareceu: boolean;
  cancelada: boolean;
  atualizado_em: string;
  criado_em: string;
  paciente: {
    cpf: string;
    data_cadastro: number;
    data_nascimento: string;
    esta_ativo: true;
    id_convenio: string;
    nome: string;
    observacoes: string;
    telefone: string;
    _id: string;
  };
}

export interface IAnamnese {
  descricao?: string;
  consulta_id?: string;
  paciente_id?: string;
}

export interface IExame {
  _id: string;
  nome: string;
  executante: string;
  valor: string;
  convenios: IConvenioExame[];
}

export interface IConvenioExame {
  convenio_id: string;
  valor: string;
}

export interface IExameId {
  id: string;
}

export interface ILastExames {
  exames?: IExameId[];
  consulta_id?: string;
  medico_id?: string;
  paciente_id?: string;
}

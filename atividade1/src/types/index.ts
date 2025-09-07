import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  ViaCEP: undefined;
  Consultas: undefined;
}

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro?: string;
  localidade: string;
  uf: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  erro?: boolean;
}

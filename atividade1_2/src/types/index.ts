// src/types/index.ts
import { ParamListBase } from '@react-navigation/native';

export interface AppDrawerParamList extends ParamListBase {
  ViaCEP: undefined;
  Consultas: undefined;
  Perfil: undefined;
  Cadastros: undefined; // tela protegida por perfil
  Boletim: undefined;   // tela protegida por perfil
}

export interface AuthStackParamList extends ParamListBase {
  Login: undefined;
  Registro: undefined;
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

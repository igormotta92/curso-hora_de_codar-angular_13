// T indica que data pode ser qualquer tipo de dado
export interface Response<T> {
    message?: string;
    data: T;
  }
export interface User {
  id: number;
  username: string;
  nome: string;
  email: string;
}

export interface Photo {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}

export interface PostStatistic {
  id: number;
  title: string;
  acessos: string;
}

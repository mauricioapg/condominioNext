import Morador from "./Morador";

export default interface ClienteRepositorio{
    salvar(Morador: Morador): Promise<Morador>
    excluir(Morador: Morador): Promise<void>
    obterTodos(): Promise<Morador[]>
}
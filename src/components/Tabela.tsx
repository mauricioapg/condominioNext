import BotaoAcoes from '../components/Botao'
import { IconeEdicao, IconeLixeira } from './Icones'
import Morador from '../core/Morador'

interface PropsTabela {
    moradores: Morador[]
    alturaLinha: String
    moradorSelecionado?: (morador: Morador) => void
    moradorExcluido?: (morador: Morador) => void
}

export default function Tabela(props: PropsTabela) {

    const ExibirAcoes = props.moradorSelecionado || props.moradorExcluido

    function renderizarCabecalho() {
        return (
            <tr>
                <th className={'text-left p-4'}>ID</th>
                <th className={'text-left p-4'}>Nome</th>
                <th className={'text-left p-4'}>Estado Civil</th>
                {ExibirAcoes ?
                    <th className={'text-center p-4'}>Ações</th>
                    : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.moradores?.map((morador, i) => { //percorre o array de clientes
            return (
                <tr key={morador.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className={'text-left p-4'}>{morador.id}</td>
                    <td className={'text-left p-4'}>{morador.nome}</td>
                    <td className={'text-left p-4'}>{morador.estadoCivil}</td>
                    {ExibirAcoes ? renderizarAcoes(morador) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(morador: Morador) {
        return (
            <td className="flex justify-center">
                {props.moradorSelecionado ?
                    <BotaoAcoes className={`
                flex justify-center items-center
                text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
                `}
                        onClick={() => {props.moradorSelecionado(morador)}}>
                        {IconeEdicao}
                    </BotaoAcoes>
                    : false}
                {props.moradorExcluido ?
                    <BotaoAcoes className={`
                flex justify-center items-center
                text-red-600 rounded-full p-2 m-1
                hover:bg-purple-50
                `}
                        onClick={() => props.moradorExcluido(morador)}>
                        {IconeLixeira}
                    </BotaoAcoes>
                    : false}
            </td>
        )
    }

    return (
        <table className={`text-black w-full mx-2 rounded-lg overflow-hidden`}>
            <thead className="bg-gray-600 text-white">
                {renderizarCabecalho()}
            </thead>
            <tbody className="text-center">
                {renderizarDados()}
            </tbody>
        </table>
    )
}
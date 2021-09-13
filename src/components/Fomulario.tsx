import Entrada from "./Entrada";
import { useState } from "react"
import Morador from "../core/Morador";
import Botao from "../components/Botao"

interface FormularioProps {
    morador?: Morador
    cancelar?: () => void
    moradorMudou?: (morador: Morador) => void
}

export default function Formulario(props: FormularioProps){
    const id = props.morador?.id
    const [nome, setNome] = useState(props.morador.nome ?? '') //obtém o nome ou mantém valor padrão vazio
    const [estadoCivil, setEstadoCivil] = useState(props.morador.estadoCivil ?? '') //obtém o nome ou mantém valor padrão zero
    return (
        <div>
            {id ? (
                <Entrada
                    valor={id}
                    texto="ID"
                    somenteLeitura/>
            ) : false}
            <Entrada
                tipo="text"
                valor={nome}
                texto="Nome"
                valorMudou={setNome}/>
            <Entrada
                tipo="text"
                valor={estadoCivil}
                texto="Estado Civil"
                valorMudou={setEstadoCivil}/>
            <div className={'flex justify-end'}>
                <Botao className={`bg-gradient-to-tr from-blue-800 to-blue-600
            rounded-lg py-2 px-4 text-white`}
                    onClick={() => props.moradorMudou?.(new Morador(nome, estadoCivil, id))}>
                    {id ?
                        'Editar'
                        : 'Salvar'}
                </Botao>
                <Botao className={`bg-gradient-to-tr from-gray-800 to-gray-600
            rounded-lg py-2 px-4 text-white ml-2`}
                    onClick={props.cancelar}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
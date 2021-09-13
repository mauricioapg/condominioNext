interface PropsPaginaInicial {
    className: String
}

export default function PaginaInicial(props: PropsPaginaInicial) {
    return (
        <div className={`${props.className}`}>
            <h1 className={"text-3xl"}>
                Bem vindo!
            </h1>
            <h3 className={"text-xl mt-4"}>
                Aqui você acessa suas informações pessoais
            </h3>
        </div>
    )
}
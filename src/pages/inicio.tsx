import Layout from "../components/Layout";

export default function Inicio(props) {
    return (
        <Layout titulo='Início'>
            <div className={`text-gray-800`}>
                <h1 className={"text-3xl"}>
                    Bem vindo!
                </h1>
                <h3 className={"text-xl mt-4"}>
                    Aqui você acessa suas informações pessoais
                </h3>
            </div>
        </Layout>
    )
}
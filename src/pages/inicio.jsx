import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Menu from '../components/Menu'

export default function Inicio(props) {
    return (
        <div>
            <Layout titulo="Página Inicial">
                <Tabela></Tabela>
            </Layout>
        </div>
    )
}
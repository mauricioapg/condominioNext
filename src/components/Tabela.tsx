export default function Tabela(props){
    return(
        <table className="bg-red-400 w-full">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Estado Civil</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mauricio</td>
                    <td>Casado</td>
                </tr>
            </tbody>
        </table>
    )
}
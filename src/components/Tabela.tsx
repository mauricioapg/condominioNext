export default function Tabela(props){
    return(
        <table className="text-black w-full">
            <thead className="bg-gray-600 text-white">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Estado Civil</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                    <td>1</td>
                    <td>Mauricio Aparecido Gabriel Dias</td>
                    <td>Casado</td>
                </tr>
            </tbody>
        </table>
    )
}
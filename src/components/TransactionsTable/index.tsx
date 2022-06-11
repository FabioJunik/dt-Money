import { Container } from "./styles";

export function TransactionTable (){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>Desenvolvimento de um webSite</td>
                        <td className="deposit">150.000 AOA</td>
                        <td>Desenvolvimento</td>
                        <td>11/06/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de um webSite</td>
                        <td  className="withdraw">-150.000 AOA</td>
                        <td>Desenvolvimento</td>
                        <td>11/06/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
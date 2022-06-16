import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import {Container} from "./styles";

export function Summary (){
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },{
        deposits:0,
        withdraws:0,
        total:0
    })

    function numberFormat(amount:number){
    
        return (new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'AOA'
        }).format(amount))
        
    }

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong> {numberFormat(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-{numberFormat(summary.withdraws)}</strong>
            </div>
            <div className='heigh-light-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{numberFormat(summary.total)}</strong>
            </div>
        </Container>
    )
}
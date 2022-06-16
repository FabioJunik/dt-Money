import { useState, useEffect, createContext, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction{
    id: number,
    title: string,
    amount: number,
    type:string,
    category: string,
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
    children: ReactNode
}

interface TransationsContextData {
    transactions: Transaction[],
    createTransaction: (transation: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransationsContextData> 
                                            ({} as TransationsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(()=>{
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    },[]);

    async function createTransaction(transactionInput: TransactionInput){
          const response = await api.post('/transactions',{
            ...transactionInput,
            createdAt: new Date()
        });
          const {transaction} = await response.data;

          setTransactions([...transactions, transaction]);
    }   

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}
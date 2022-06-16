import {useState} from 'react';
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import {NewTransactionModal} from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }                                                               

  return (
    <TransactionsProvider> 
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>    
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}


import {useState} from 'react';
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import {NewTransactionModal} from './components/NewTransactionModal';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }                                                               

  return (
    <> 
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>    
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}


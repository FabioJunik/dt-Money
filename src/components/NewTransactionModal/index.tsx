import Modal from 'react-modal';
import {Container, TransactionTypeContainer} from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen,onRequestClose}:NewTransactionModalProps) {

  return(

    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button' 
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='Fechar modal'/>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          type='text'
          placeholder='Título'
        />

        <input
          type='number'
          placeholder='Valor'
        />

        <TransactionTypeContainer>
          <button
            type='button'            
          >
            <img src={incomeImg} alt='Entrada'/>      
            <span>Entrada</span>      
          </button>

          <button
            type='button'            
          >
            <img src={outcomeImg} alt='Saída'/>      
            <span>Saída</span>      
          </button>
        </TransactionTypeContainer>

        <input
          type='text'
          placeholder='Categoria'
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
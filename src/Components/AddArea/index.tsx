import { useState, KeyboardEvent } from 'react';
import { api } from '../../Services/api';
import * as C from './styles';

type Props = {
    recarregarLista: () => void
}

export const AddArea = ({ recarregarLista }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = async (e:KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
           await api.insertNote(inputText);
           recarregarLista();
        }
    }


    return (
        <C.Container>
            <div className="image">+</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            >
            </input>
        </C.Container>
    );
}
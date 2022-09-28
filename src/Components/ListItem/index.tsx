import { useState } from 'react';
import * as C from './styles';  
import { Tarefa } from '../../Types/Tarefa'

type Props = {
    item: Tarefa
}
export const ListItem = ({item}: Props) => {

    const [isChecked, setIsChecked] = useState(item.feito);

    

    return (
       <C.Container feito={isChecked}>
        <input 
            type="checkbox" 
            checked={isChecked}
            onChange={e => setIsChecked(e.target.checked)}
        />
        <label>{item.titulo}</label>
       </C.Container>
    );
}

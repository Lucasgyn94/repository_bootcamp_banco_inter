import {useState} from 'react';

// Criando componente inteligente com estados

function SmartCounter()
{
    // Retorna um vetor
    //1. Variavel stateful (estado completo)
    //2. funcão amarrada a essa variável que atualiza esse valor
    const [quantity, upQuantity] = useState(1)
    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;
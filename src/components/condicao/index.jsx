import { useState, useEffect } from 'react';
import './style.css'

const Calculos = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [nome, setNome] = useState("");
    // const imc = "";
    
    const renderizaResultado = () => {
        const alturaMetro = altura / 100;
        const multiplicacao = alturaMetro * alturaMetro;
        const imc = ((peso / multiplicacao)).toFixed(2);
        
        console.log(imc);
        console.log(alturaMetro);

        if (imc <= 18.5) {
            return (
                <p className='texto'> Olá {nome}, sendo seu peso {peso}Kg e sua altura de {alturaMetro}m então o valor de seu IMC é de: {imc}.
                Sua classificaçáo é <b>Magreza</b> </p> );
        } else if (18.5 < imc && imc <= 24.9) {
            return  ( <p className='texto'> Olá {nome}, sendo seu peso {peso}Kg e sua altura de {alturaMetro}m então o valor de seu IMC é de: {imc}.
                Sua classificaçáo é <b>Normal</b> </p> );
        } else if (24.9 < imc && imc <= 29.9) {
            return  ( <p className='texto'> Olá {nome}, sendo seu peso {peso}Kg e sua altura de {alturaMetro}m então o valor de seu IMC é de: {imc}.
                Sua classificaçáo é <b>Sobrepeso</b> </p> );
        } else if (29.9 < imc && imc <= 39.9) {
            return ( <p className='texto'> Olá {nome}, sendo seu peso {peso}Kg e sua altura de {alturaMetro}m então o valor de seu IMC é de: {imc}.
                Sua classificaçáo é <b>Obesidade</b> </p> );
        } else if  (39.9 < imc && imc <= 122) {
            return ( <p className='texto'> Olá {nome}, sendo seu peso {peso}Kg e sua altura de {alturaMetro}m então o valor de seu IMC é de: {imc}.
                Sua classificaçáo é <b>Obesidade Grave</b> </p> );
        } else {
            return ( <p className='texto'>Indique seus dados para obter seu grau de obesidade</p> );
        }

    
    }

    return(
        <>
        <form>            
            <input className='formulario' type="text" placeholder='Digite seu nome' onChange={evento => setNome(evento.target.value)} />
            <input className='formulario' type="number" placeholder="Digite seu peso em kg" onChange={evento => setPeso(parseInt(evento.target.value))} />
            <input className='formulario' type="number" placeholder="Digite sua altura em centimetros" onChange={evento => setAltura(parseInt(evento.target.value))}/>
        </form>
            {renderizaResultado()}  
        </>
    )
}

export default Calculos;
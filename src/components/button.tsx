type ButtonProps ={
    text ?: string;
}

export function Button(props: ButtonProps){
    return(
        <button>{props.text || 'Default '}</button>
    )
}

/*evitar usar export default para quando o nome do componente for alterado, o import também 
corresponda a mudança
usando o export default ele não acusa erro caso o nome do componente mude
*/

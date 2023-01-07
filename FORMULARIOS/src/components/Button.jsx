import styled from 'styled-components'

const Btn = styled.button`
    background-color: var(--DarkBlue);
    padding: .7rem;
    margin: .3rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    &:hover{
        opacity: .7;
    }
`
const Button = ({ btnText, type, }) =>{
    return(
        <Btn type={type}>{btnText}</Btn>
    )
}
export default Button
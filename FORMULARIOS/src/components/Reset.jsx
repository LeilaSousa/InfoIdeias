import styled from 'styled-components'

const Btn = styled.button`
    background-color: #808080;
    padding: .7rem;
    margin: .3rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    color: white;
    &:hover{
        opacity: .7;
    }
`
const Reset = ({ btnText, type, }) =>{
    return(
        <Btn type={type}>{btnText}</Btn>
    )
}
export default Reset
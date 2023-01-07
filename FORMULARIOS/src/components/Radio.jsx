import styled from 'styled-components'
import './radio.css'
const Input = styled.input`
    display: none;    
    padding: .5rem;
`
const Label = styled.label`
    margin: 2rem;
    cursor: pointer;
    &:hover{
        background-color: var(--MediumBlue);
        color: #fff;
        padding: .2rem .5rem;
        border-radius: .3rem;
    }&: active{
        background-color: red;
    }
` 

const Radio = ({ type, value, name, label}) => {

    return(
    <Label className='active'>{label}
        <Input type={type} value={value} name={name} id={name} />
    </Label>
    )
}
export default Radio
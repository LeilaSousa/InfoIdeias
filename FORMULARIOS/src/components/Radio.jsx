import styled from 'styled-components'

const Input = styled.input`
    padding: .5rem;
`
const Label = styled.label`
    margin: 2rem;
    cursor: pointer;
    &:hover{
        color: var(--MediumBlue);
    }
` 

const Radio = ({ type, value, name, label}) => {

    return(
    <Label >{label}
        <Input type={type} value={value} name={name} id={name} />
    </Label>
    )
}
export default Radio
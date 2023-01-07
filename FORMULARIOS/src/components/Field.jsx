import styled from 'styled-components'

const Content = styled.span`
    display: flex;
    flex-direction: column;
`
const Label = styled.label``
const Input = styled.input``

const Text = ({label, name, type, value, placeholder, register, required}) => (
    <Content>
        <Label>{label}</Label>
        <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        {...register(name, {required})}/>
    </Content>
)
const Field = { Text, }
export default Field
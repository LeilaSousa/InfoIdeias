import styled from 'styled-components'

const Seletor = styled.select`
    padding: .5rem;
    background-color: transparent;
    border: 1px solid;
    border-radius: .5rem;
`
const Option = styled.option`
    font-family: 'Poppins', sans-serif;
`
const Select = ({ name, label, value, }) => {
    const options = [
        {"id": 1, "name": 'Bairro 1'},
        {"id": 2, "name": 'Bairro 2'},
        {"id": 3, "name": 'Bairro 3'},
        {"id": 4, "name": 'Bairro 4'},
        {"id": 5, "name": 'Bairro 5'}   
    ]
    return(<>
        <label htmlFor={name}>{label}: </label>
        <Seletor
        name={name}
        id={name}
        multiple
        >
            <Option value={""} >Selecione o bairro</Option>

            {options.map((opt)=>(<Option value={opt.id} key={opt.name}>{opt.name}</Option>)
            )}
        </Seletor>
        </>
    )
}
export default Select

    

const Select = ({ name, label, value, }) => {
    const options = [
        {"id": 1, "name": 'bairro 1'},
        {"id": 2, "name": 'bairro 2'}
    
    ]
    return(<>
        <label htmlFor={name}>{label}: </label>
        <select
        name={name}
        id={name}
        
        >
            <option>Selecione o bairro</option>

            {options.map((opt)=>(<option value={opt.id} key={opt.name}>{opt.name}</option>)
            )}
            

        </select>
        </>
    )
 

}
    
export default Select
import Field from "./Field"
import Errors from "./Errors"
import Select from "./Select"

import styled from 'styled-components'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import schema from "./schema"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
const ContactForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})

    const enviar = (data) =>{
        console.log(data)
    }

    return(
    <Form onSubmit={handleSubmit(enviar)}>
        <Field.Text
        label="Nome"
        type="text"
        name="nome"
        placeholder="Digite seu nome"
        register={register}
        />
        <Errors>{errors.nome?.message}</Errors>

        <Field.Text
        label="Email"
        type="email"
        name="email"
        placeholder="email@email.com"
        register={register}
        />
        <Errors>{errors.email?.message}</Errors>

        <Field.Text
        label="Telefone"
        type="tel"
        name="tel"
        placeholder="(__)____-____"
        register={register}
        />
        <Errors>{errors.tel?.message}</Errors>

        <Field.Text
        label="Data de Nascimento"
        type="date"
        name="nasc"
        register={register}
        />
        <Errors>{errors.nasc?.message}</Errors>

        

        <Select />


        <button>Enviar</button>
    </Form>
    
    
    )
}
export default ContactForm
import Field from "./Field"
import Errors from "./Errors"
import Select from "./Select"
import Radio from "./Radio"
import Button from "./Button"
import Reset from "./Reset"

import styled from 'styled-components'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import schema from "./schema"

const H1 = styled.h1`
    text-align: center;
    color: var(--DarkBlue);
`
const H2 = styled.h2`
    text-align: center;
    color: var(--MediumBlue);
    font-weight: 100;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
const DivContainer = styled.div`
    padding: 1rem 0;
    
`
const Label = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`
const BtnContainer = styled.div`
    text-align: center;
`
const ContactForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})

    const enviar = (data) =>{
        console.log(data)
    }

    return(<>
        <H1>Não encontrou o que procurava?</H1>
        <H2>Preencha o formulário e retornaremos o contato</H2>
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

            <Select 
            label="Selecione o bairro de interesse"/>


            <DivContainer>
                <Label htmlFor="hContato">Melhor horário para contato:</Label>
                <Radio
                type="radio"
                value="man"
                name="hContato"
                label="Manhã"/>
                <Radio
                type="radio"
                value="tar"
                name="hContato"
                label="Tarde"/>
                <Radio
                type="radio"
                value="noi"
                name="hContato"
                label="Noite"/>
                
            </DivContainer>

            <DivContainer>
                <Label >Autoriza contato por telefone: </Label>
                    <Radio
                    type="radio"
                    value="s"
                    name="autoriza"
                    label="SIM"
                    />
                    <Radio
                    type="radio"
                    value="n"
                    name="autoriza"
                    label="NÃO"/>
               
            </DivContainer>
       
            <BtnContainer>
                <Reset type="reset" btnText="Limpar Formulário"/>
                <Button btnText="Enviar"/>
            </BtnContainer>
    </Form>
    </>
)}
export default ContactForm
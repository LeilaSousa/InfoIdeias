import * as yup from 'yup'

const phoneRegExp = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/

const schema = yup.object().shape({
    nome: yup.string().required("Preencha este campo"),
    email: yup.string().email("Digite um e-mail válido").required("Preencha este campo"),
    tel: yup.string().required("Preencha este campo").matches(phoneRegExp, 'Telefone inválido'),
    nasc: yup.date()
    .typeError('Preencha este campo').max(new Date(), 'Não é possível incluir uma data futura'),
})
export default schema
import * as yup from 'yup'

const validation = yup.object({
    email: yup.string().email().required('Required Field'),
    password: yup.string().min(5,'It must be at least 5 characters').required('Required Field'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Passwords are not matched').required('Required Field')
})

export default validation;
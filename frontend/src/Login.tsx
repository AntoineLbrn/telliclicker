import React from "react"
import { useLoginMutation } from "./services/user"

interface FormData {
    username: string
    password: string
}

export const SignInComponent = () => {
    const [formData, setFormData] = React.useState<FormData>({ username: '', password: '' })
    const [signup, setSignup] = React.useState<boolean>(false);
    const [triggerLogin] = useLoginMutation()

    const switchState = () => {
        setSignup(!signup)
    }

    const submit = (e: any) => {
        e.preventDefault(); 
        triggerLogin(formData)
    }

    return (
        signup ?

            <form onSubmit={submit}>
                <input required type={"text"} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <input required type={"password"} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

                <button>S'inscrire</button>
                J'ai déjà un compte ? <span onClick={switchState}>Se connecter</span>
            </form>

            :
            <form onSubmit={submit}>
                <input required type={"text"} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <input required type={"password"} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

                <button>Se connecter</button>
                Pas de compte ? <span onClick={switchState}>Inscrivez-vous</span>
            </form>
    )
}
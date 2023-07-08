import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { useLoginMutation, useSignInMutation } from "../../services/resources"
import { switchAuth } from "./LoginSlice"
import './style.css';
import { TextFieldStyled } from "./TextFieldStyled";
import logo from "../../logo-nobg.png"

interface FormData {
    username: string
    password: string
}


export const SignInComponent = () => {
    const [formData, setFormData] = React.useState<FormData>({ username: '', password: '' })
    const [triggerLogin] = useLoginMutation()
    const [triggerSignIn] = useSignInMutation()
    const { isLoggingIn, errorMessage } = useAppSelector(state => state.login);
    const dispatch = useAppDispatch()

    const submitLogin = (e: any) => {
        e.preventDefault();
        triggerLogin(formData)
    }

    const submitSignIn = (e: any) => {
        e.preventDefault();
        triggerSignIn(formData)
    }

    return <div className="main-container">
        <Box height="20vh" sx={{backgroundColor: "rgba(0,0,0,.4)", paddingTop: "20px"}}>
            <img height="80%" src={logo} /> 
        </Box>
        {isLoggingIn ?

            <Box component="form" className="login-form" onSubmit={submitLogin}>
                <Typography mb="10px" fontWeight="bold" variant="h6">CONNEXION</Typography>
                <Typography mb="10px" color="red" fontWeight="bold" variant="body2">{errorMessage}</Typography>

                <TextFieldStyled label="Pseudo" autoFocus required type={"text"} onChange={(e: any) => setFormData({ ...formData, username: e.target.value })} />
                <TextFieldStyled label="Mot de passe" required type={"password"} onChange={(e: any) => setFormData({ ...formData, password: e.target.value })} />

                <Button type="submit" fullWidth variant="contained">Se connecter</Button>
                <Link href="#" variant="body2" onClick={() => dispatch(switchAuth())}>Pas de compte ? Inscrivez-vous</Link>
            </Box>

            :
            <Box component="form" className="login-form" onSubmit={submitSignIn}>
                <Typography mb="10px" fontWeight="bold" variant="h6">INSCRIPTION</Typography>
                <Typography mb="10px" color="red" fontWeight="bold" variant="body2">{errorMessage}</Typography>
                
                <TextFieldStyled label="Pseudo" autoFocus required type={"text"} onChange={(e: any) => setFormData({ ...formData, username: e.target.value })} />
                <TextFieldStyled label="Mot de passe" required type={"password"} onChange={(e: any) => setFormData({ ...formData, password: e.target.value })} />

                <Typography variant="body2">En cliquant sur "S'inscrire", j'indique avoir pris connaissance des conditions générales d'utilisation de l'application.</Typography>
                <Button type="submit" fullWidth variant="contained">S'inscire</Button>
                <Link href="#" variant="body2" onClick={() => dispatch(switchAuth())}>J'ai déjà un compte ? Me connecter</Link>
            </Box>
        }
    </div>
}
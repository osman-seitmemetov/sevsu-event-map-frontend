import React, {FC} from "react";
import styles from "./Login.module.scss";
import Container from "@/components/Container/Container";
import Form from "@/UI/Form/Form";
import {SubmitHandler, useForm} from "react-hook-form";
import {ILoginFields} from "@/models/form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import {useAuth} from "@/hooks/useAuth";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";
import {useActions} from "@/hooks/useActions";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {REQUIRE_ERROR} from "@/utils/consts";
import {useRouter} from "next/router";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import FormSeparator from "@/UI/Form/FormSeparator/FormSeparator";
import Link from "next/link";
import LoginNav from "@/webpages/Login/LoginNav/LoginNav";


const Login: FC = () => {
    useAuthRedirect();
    const router = useRouter();
    const {isAuthorized, isLoading} = useAuth();
    if (typeof window !== 'undefined' && isAuthorized) router.push('/');

    console.log(isAuthorized)

    const {
        register,
        handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful},
        reset,
        resetField,
        control,
    } = useForm<ILoginFields>({
        mode: "onChange"
    });

    const {login} = useActions();

    const onSubmit: SubmitHandler<ILoginFields> = ({password, username}) => {
        login({username, password});
    }

    return (
        <section className={styles.login}>
            <Container>
                <LoginNav/>
                <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: 450, marginTop: 50}}>
                    <h1 className={styles.title} style={{textAlign: "center"}}>Вход</h1>
                    <InputGroup style={{marginBottom: 20}} title="Логин">
                        <Input
                            {...register('username', {
                                required: REQUIRE_ERROR,
                            })}
                            placeholder="Введите логин"
                            error={errors.username}
                        />
                    </InputGroup>

                    <InputGroup style={{marginBottom: 20}} title="Пароль">
                        <Input
                            type="password"
                            {...register('password', {
                                required: REQUIRE_ERROR,
                            })}
                            placeholder="Введите пароль"
                            error={errors.password}
                        />
                    </InputGroup>

                    <PrimaryButton type="submit" disabled={isLoading}>Войти</PrimaryButton>
                    <FormSeparator/>
                    <Link href="/register"><ButtonTransparent
                        disabled={isLoading}>Зарегистрироваться</ButtonTransparent></Link>
                </Form>
            </Container>
        </section>
    );
}

export default Login;


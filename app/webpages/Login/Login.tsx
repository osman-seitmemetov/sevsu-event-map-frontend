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
                <h1 className={styles.title}>Вход</h1>
                <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: 450}}>
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

                    <PrimaryButton disabled={isLoading}>Войти</PrimaryButton>
                </Form>
            </Container>
        </section>
    );
}

export default Login;


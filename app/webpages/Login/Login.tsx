import React, {FC} from "react";
import styles from "./Login.module.scss";
import Container from "@/components/Container/Container";
import Form from "@/UI/Form/Form";
import {SubmitHandler, useForm} from "react-hook-form";
import {ILoginFields} from "@/models/form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";
import {useActions} from "@/hooks/useActions";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {REQUIRE_ERROR} from "@/utils/consts";


const Login: FC = () => {
    useAuthRedirect();
    const router = useRouter();
    const {isAuthorized} = useAuth();
    if (isAuthorized) router.push('/');

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
        reset();
    }

    return (
        <section className={styles.favourites}>
            <Container>
                <h1>Вход</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup title="Логин">
                        <Input
                            {...register('username', {
                                required: REQUIRE_ERROR,
                            })}
                            placeholder="Введите логин"
                            error={errors.username}
                        />
                    </InputGroup>

                    <InputGroup title="Пароль">
                        <Input
                            {...register('password', {
                                required: REQUIRE_ERROR,
                            })}
                            placeholder="Введите пароль"
                            error={errors.password}
                        />
                    </InputGroup>

                    <PrimaryButton>Войти</PrimaryButton>
                </Form>
            </Container>
        </section>
    );
}

export default Login;


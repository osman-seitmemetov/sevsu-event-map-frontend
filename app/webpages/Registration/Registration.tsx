import React, {FC} from "react";
import styles from "./Registration.module.scss";
import Container from "@/components/Container/Container";
import Form from "@/UI/Form/Form";
import {SubmitHandler, useForm} from "react-hook-form";
import {IRegistrationFields} from "@/models/form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import {useAuth} from "@/hooks/useAuth";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";
import {useActions} from "@/hooks/useActions";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {REQUIRE_ERROR} from "@/utils/consts";
import {useRouter} from "next/router";
import FormSeparator from "@/UI/Form/FormSeparator/FormSeparator";
import Link from "next/link";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import {registration} from "@/store/auth/AuthActionCreators";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import RegistrationNav from "@/webpages/Registration/RegistrationNav/RegistrationNav";
import {toastr} from "react-redux-toastr";


const Registration: FC = () => {
    useAuthRedirect();
    const router = useRouter();
    const {isAuthorized, isLoading} = useAuth();
    if (typeof window !== 'undefined' && isAuthorized) router.push('/');

    const {
        register, handleSubmit, formState: {errors},
    } = useForm<IRegistrationFields>({
        mode: "onChange"
    });

    const {registration} = useActions();

    const {eventIds} = useTypedSelector(state => state.favouritesReducer);

    const onSubmit: SubmitHandler<IRegistrationFields> = ({password, username, firstName, lastName, email, confirmPassword}) => {
        registration({password, username, firstName, lastName, email, confirmPassword, eventIds});
    }

    return (
        <>
            <section className={styles.registration}>
                <Container>
                    <RegistrationNav />
                    <h1 className={styles.title}>Регистрация</h1>
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

                        <InputGroup style={{marginBottom: 20}} title="Имя">
                            <Input
                                type="text"
                                {...register('firstName', {
                                    required: REQUIRE_ERROR,
                                })}
                                placeholder="Введите имя"
                                error={errors.firstName}
                            />
                        </InputGroup>

                        <InputGroup style={{marginBottom: 20}} title="Фамилия">
                            <Input
                                type="text"
                                {...register('lastName', {
                                    required: REQUIRE_ERROR,
                                })}
                                placeholder="Введите фамилию"
                                error={errors.lastName}
                            />
                        </InputGroup>

                        <InputGroup style={{marginBottom: 20}} title="Email">
                            <Input
                                type="email"
                                {...register('email', {
                                    required: REQUIRE_ERROR,
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Введите валидный email'
                                    }
                                })}
                                placeholder="Введите email"
                                error={errors.email}
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

                        <InputGroup style={{marginBottom: 20}} title="Подтвердите пароль">
                            <Input
                                type="password"
                                {...register('confirmPassword', {
                                    required: REQUIRE_ERROR,
                                })}
                                placeholder="Подтвердите пароль"
                                error={errors.confirmPassword}
                            />
                        </InputGroup>

                        <PrimaryButton type="submit" disabled={isLoading}>Зарегистрироваться</PrimaryButton>
                        <FormSeparator/>
                        <Link href="/login"><ButtonTransparent disabled={isLoading}>У меня уже есть
                            аккаунт</ButtonTransparent></Link>
                    </Form>
                </Container>
            </section>
        </>
    );
}

export default Registration;


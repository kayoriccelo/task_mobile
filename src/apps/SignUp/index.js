import React, { useState } from 'react';

import { Image, Title, SubTitle, Form } from './style';
import backgroundImage from '../../assets/imgs/login.jpg';
import { Input, Button, Link } from '../../components';

export default function SignUp({ navigation }) {
    const [values, setValues] = useState({});

    const onChange = fieldName => value => setValues({ ...values, [fieldName]: value });

    const styleInput = "margin-top: 10px; background-color: #FFF;";

    const signUp = () => {
        console.log('Sign Up Pressionado.');
    };

    return (
        <Image source={backgroundImage}>
            <Title>Task</Title>
            <Form>
                <SubTitle>
                    Crie a sua conta
                </SubTitle>
                <Input
                    icon="user"
                    style={styleInput}
                    placeholder='Nome'
                    value={values['name']}
                    onChangeText={onChange('name')}
                />
                <Input
                    icon="at"
                    style={styleInput}
                    placeholder='E-mail'
                    value={values['email']}
                    onChangeText={onChange('email')}
                />
                <Input
                    icon="lock"
                    secureTextEntry={true}
                    style={styleInput}
                    placeholder='Senha'
                    value={values['password']}
                    onChangeText={onChange('password')}
                />
                <Input
                    icon="asterisk"
                    secureTextEntry={true}
                    style={styleInput}
                    placeholder='Confirmar Senha'
                    value={values['confirmPassword']}
                    onChangeText={onChange('confirmPassword')}
                />
                <Button
                    label="Registrar"
                    onPress={signUp}
                />
                <Link
                    label="Já possui conta?"
                    onPress={() => navigation.navigate('SignIn')}
                />
            </Form>
        </Image>
    );
};

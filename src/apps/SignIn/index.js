import React, { useState } from 'react';

import { Image, Title, SubTitle, Form } from './style';
import backgroundImage from '../../assets/imgs/login.jpg';
import { Input, Button, Link } from '../../components';

export default function SignIn({ navigation }) {
    const [values, setValues] = useState({});

    const onChange = fieldName => value => setValues({ ...values, [fieldName]: value });

    const styleInput = "margin-top: 10px; background-color: #FFF;";

    const signIn = () => {
        navigation.navigate('Home');
    };

    return (
        <Image source={backgroundImage}>
            <Title>Tasks</Title>
            <Form>
                <SubTitle>
                    Informe seus Dados
                </SubTitle>
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
                <Button
                    validForm={true} 
                    label="Entrar"
                    onPress={signIn}
                />
                <Link
                    label="Ainda não possui conta?"
                    onPress={() => navigation.navigate('SignUp')}
                />
            </Form>
        </Image>
    );
};

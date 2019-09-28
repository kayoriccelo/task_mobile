import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import { Image, Title, SubTitle, Form } from './style';
import backgroundImage from '../../assets/imgs/login.jpg';
import { Input, Button, Link } from '../../components';
import { authenticate } from './store';


export const SignIn = ({ navigation, signIn }) => {
    const [values, setValues] = useState({});

    useEffect(() => {
        AsyncStorage.getItem('access') && navigation.navigate('Home');
    }, []);

    const onChange = fieldName => value => setValues({ ...values, [fieldName]: value });

    const styleInput = "margin-top: 10px; background-color: #FFF;";

    const signIn = () => authenticate(values['email'], values['password'], navigation);

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

const mapDispatchToProps = dispatch => bindActionCreators({ authenticate }, dispatch);
export default connect(null, mapDispatchToProps)(SignIn);

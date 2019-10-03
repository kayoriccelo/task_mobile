import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Image, Title, SubTitle, Form } from './style';
import backgroundImage from '../../assets/imgs/login.jpg';
import { Input, Button, Link } from '../../components';
import { authenticate } from './store';
import { getToken } from '../../common/utils';


export const SignIn = ({ authenticate, navigation }) => {
    const [values, setValues] = useState({});
    const styleInput = "margin-top: 10px; background-color: #FFF;";

    useEffect(() => {
        let token = getToken();
        token.then(res => res && navigation.navigate('Today'));
    }, []);

    const onChange = fieldName => value => setValues({ ...values, [fieldName]: value });

    const signIn = () => authenticate(values, navigation);

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

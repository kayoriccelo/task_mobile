import React, { useState, useEffect } from 'react';
import {
    Modal, DatePickerIOS, TouchableWithoutFeedback, TouchableOpacity,
    Alert, DatePickerAndroid, Platform
} from 'react-native';
import moment from 'moment';

import { Offset, Container, Header, Input, GroupButtons, TextButton } from './style';


export default function ModalTask({ onSave, onCancel, isVisible }) {
    const [values, setValues] = useState({ desc: '', date: new Date() });
    let datePicker = null;

    useEffect(() => {
        if (Platform.OS === 'ios') {
            datePicker = <DatePickerIOS
                mode='date'
                date={values['date']}
                onDateChange={date => setValues({ ...values, date })}
            />
        } else {
            datePicker = (
                <TouchableOpacity onPress={handleDateAndroidChanged}>
                    <Date>
                        {moment(values['date']).format('ddd, D [de] MMMM [de] YYYY')}
                    </Date>
                </TouchableOpacity>
            );
        };
    }, []);

    const save = () => {
        if (!values['desc'].trim()) {
            Alert.alert('Dados inválidos', 'Informe uma descrição para a tarefa');
            return;
        };

        onSave(values);
    };

    const handleDateAndroidChanged = () => {
        DatePickerAndroid.open({
            date: values['date']
        }).then(e => {
            if (e.action !== DatePickerAndroid.dismissedAction) {
                const momentDate = moment(values['date']);
                momentDate.date(e.day);
                momentDate.month(e.month);
                momentDate.year(e.year);
                setValues({ ...values, date: momentDate.toDate() });
            }
        })
    }

    return (
        <Modal
            onRequestClose={onCancel}
            visible={isVisible}
            animationType='slide'
            transparent={true}
            onShow={() => setValues({ ...values })}
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <Offset />
            </TouchableWithoutFeedback>

            <Container>
                <Header>Nova Tarefa!</Header>
                <Input
                    placeholder="Descrição..."
                    onChangeText={desc => setValues({ ...values, desc })}
                    value={values['desc']}
                />
                {datePicker}
                <GroupButtons>
                    <TouchableOpacity onPress={onCancel}>
                        <TextButton>Cancelar</TextButton>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={save}>
                        <TextButton>Salvar</TextButton>
                    </TouchableOpacity>
                </GroupButtons>
            </Container>

            <TouchableWithoutFeedback onPress={onCancel}>
                <Offset />
            </TouchableWithoutFeedback>
        </Modal>
    );
};

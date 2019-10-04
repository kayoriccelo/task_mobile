import React, { useState, useEffect } from 'react';
import {
    Modal, DatePickerIOS, TouchableWithoutFeedback, TouchableOpacity,
    Alert, DatePickerAndroid, Platform
} from 'react-native';
import moment from 'moment';

import { Offset, Container, Header, Input, GroupButtons, TextButton, Text } from './style';


export default function ModalTask({ onSave, onCancel, isVisible }) {
    const [values, setValues] = useState({ desc: '', date: new Date() });

    const save = () => {
        if (!values['desc'].trim()) {
            Alert.alert('Dados inválidos', 'Informe uma descrição para a tarefa');
            return;
        };

        onSave(values);
    };

    const renderDatePicker = _ => {
        if (Platform.OS === 'ios') {
            return <DatePickerIOS
                mode='date'
                date={values['date']}
                onDateChange={date => setValues({ ...values, date })}
            />
        } else {
            return <TouchableOpacity onPress={handleDateAndroidChanged}>
                <Text>
                    {moment(values['date']).format('ddd, D [de] MMMM [de] YYYY')}
                </Text>
            </TouchableOpacity>
        };
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
                {renderDatePicker()}
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

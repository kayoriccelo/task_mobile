import styled from 'styled-components';

import commonStyles from '../../../common/style'; 

export const Container = styled.View`
    background-color: white;
    justify-content: space-between;
`;

export const Offset = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.7);
`;

export const Header = styled.Text`
    font-family: ${commonStyles.fontFamily};
    background-color: ${commonStyles.colors.default};
    color: ${commonStyles.colors.secondary};
    text-align: center;
    padding: 15px;
    font-size: 15px;
`;

export const GroupButtons = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const TextButton = styled.Text`
    margin: 20px;
    margin-right: 30px;
    color: ${commonStyles.colors.default};
`;

export const Input = styled.TextInput`
    font-family: ${commonStyles.fontFamily};
    width: 90%;
    height: 40px;
    margin-top: 10px;
    margin-left: 10px;
    background-color: white;
    border-width: 1px;
    border-color: #e3e3e3;
    border-radius: 6px;
`;

export const Date = styled.Text`
    font-family: ${commonStyles.fontFamily};
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
`;
import styled from 'styled-components';

import commonStyles from '../../../../common/style';


export const View = styled.View`
    ${props => props.valid && 'backgroundColor: #AAA;'}
    background-color: #080;
    margin-top: 10px;
    padding: 10px;
    align-items: center;
`;

export const Text = styled.Text`
    font-family: ${commonStyles.fontFamily};
    color: #FFF;
    font-size: 20px;
`;

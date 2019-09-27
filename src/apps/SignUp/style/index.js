import styled from 'styled-components';

import commonStyles from '../../../common/style';


export const Image = styled.ImageBackground`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${commonStyles.fontFamily};
    color: #FFF;
    font-size: 70px;
    margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
    font-family: ${commonStyles.fontFamily};
    color: #FFF;
    font-size: 20px;
`;

export const Form = styled.View`
    background-color: rgba(0,0,0,0.8);
    padding: 20px;
    width: 90%;
`;
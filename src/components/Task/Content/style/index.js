import styled from 'styled-components';

import common from '../../../../common/style';

export const Exclude = styled.View`
    flex: 1;
    background-color: red;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    ${props => props.style && props.style}
`;

export const ExcludeText = styled.Text`
    font-family: ${common.fontFamily};
    color: #FFF;
    font-size: 20px;
    margin: 10px;
`;

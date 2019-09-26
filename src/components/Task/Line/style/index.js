import styled from 'styled-components';

import common from '../../../../common/style';

export const TextDesc = styled.Text`
    font-family: ${common.fontFamily};
    color: ${common.colors.mainText};
    font-size: 15;
    ${props => props.descStyle && 'text-decoration-line: line-through'}
`;

export const TextDate = styled.Text`
    font-family: ${common.fontFamily};
    color: ${common.colors.subText};
    font-size: 12;
`;
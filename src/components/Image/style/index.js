import { Platform } from 'react-native'
import styled from 'styled-components';

export const ImageBackground = styled.ImageBackground`
    flex: 3;
`;

export const IconBar = styled.View`
    margin-top: ${Platform.OS === 'ios' ? 30 : 1};
    margin-horizontal: 20;
    flex-direction: row;
    justify-content: space-between;
`;
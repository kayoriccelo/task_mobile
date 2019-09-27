import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { commonStyles } from '../../../common/style';


export default function TouchDrawer(navigation) {
    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon
                name='bars'
                size={20}
                color={commonStyles.colors.secondary}
            />
        </TouchableOpacity>
    );
};

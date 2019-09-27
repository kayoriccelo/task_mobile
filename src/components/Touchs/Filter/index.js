import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { commonStyles } from '../../../common/style';


export default function TouchFilter(showDoneTasks, toggleFilter) {
    return (
        <TouchableOpacity onPress={toggleFilter}>
            <Icon
                name={showDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyles.colors.secondary}
            />
        </TouchableOpacity>
    );
};

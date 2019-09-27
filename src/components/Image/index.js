import React from 'react'

import { ImageBackground, IconBar } from './style';
// import TouchDrawer from '../Touchs/Drawer';
// import TouchFilter from '../Touchs/Filter';
import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';
import commonStyles from '../../common/style';

export default function Image(props) {
    let styleColor = null;
    let image = null;

    switch (props.daysAhead) {
        case 0:
            styleColor = commonStyles.colors.today;
            image = todayImage;
            break;
        case 1:
            styleColor = commonStyles.colors.tomorrow;
            image = tomorrowImage;
            break;
        case 7:
            styleColor = commonStyles.colors.week;
            image = weekImage;
            break;
        default:
            styleColor = commonStyles.colors.month;
            image = monthImage;
            break;
    }

    return (
        <ImageBackground source={image}>
            {/* <IconBar> */}
                {/* <TouchDrawer>

                </TouchDrawer>
                <TouchFilter>

                </TouchFilter> */}
            {/* </IconBar> */}
        </ImageBackground>
    );
};

import React from 'react'

import { ImageBackground, IconBar } from './style';
import TouchDrawer from '../Touchs/Drawer';
import TouchFilter from '../Touchs/Filter';


export default function Image(props) {
    return (
        <ImageBackground source={props.image}>
            <IconBar>
                <TouchDrawer />
                <TouchFilter
                    showDoneTasks={true}
                    toggleFilter={() => console.log('filter')}
                />
            </IconBar>
        </ImageBackground>
    );
};

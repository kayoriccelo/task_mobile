import React from 'react'

import { ImageBackground, IconBar } from './style';
import TouchDrawer from '../Touchs/Drawer';
import TouchFilter from '../Touchs/Filter';


export default function Image({ image, showDoneTasks, toggleFilter }) {
    return (
        <ImageBackground source={image}>
            <IconBar>
                <TouchDrawer />
                <TouchFilter
                    showDoneTasks={showDoneTasks}
                    toggleFilter={toggleFilter}
                />
            </IconBar>
        </ImageBackground>
    );
};

import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';

import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';
import commonStyles from '../../common/style';
import { Container, TaskContainer, Image, } from '../../components';


export default function Home(props) {
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);
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

    const load = () => {
        setTasks([
            { id: 1, description: 'teste' },
        ])
    }

    useEffect(() => {
        load()
    }, []);

    return (
        <Container>
            <Image image={image} />
            <TaskContainer>
                <Text>
                    Hello Tasks
                </Text>
            </TaskContainer>
            <ActionButton
                buttonColor={styleColor}
                onPress={() => setShowAddTask(true)}
            />
        </Container>
    )
};

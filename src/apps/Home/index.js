import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';

import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';
import commonStyles from '../../common/style';
import { Container, TaskContainer, Image, Task } from '../../components';


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
            {
                id: 1,
                description: 'Fazer café',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: 2,
                description: 'Tomar café',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: 3,
                description: 'Estudar',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: 4,
                description: 'Codificar',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: 4,
                description: 'Jogar Futebol',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: 4,
                description: 'Jogar Playstation',
                estimateAt: new Date(),
                doneAt: null
            },
        ])
    }

    useEffect(() => {
        load()
    }, []);

    const toggleTask = () => {
        console.log('toggle');
    };

    const deleteTask = () => {
        console.log('deleteoggle');
    };

    return (
        <Container>
            <Image image={image} />
            <TaskContainer>
                <FlatList
                    data={tasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Task
                            {...item}
                            onToggleTask={toggleTask}
                            onDelete={deleteTask}
                        />
                    }
                />
            </TaskContainer>
            <ActionButton
                buttonColor={styleColor}
                onPress={() => setShowAddTask(true)}
            />
        </Container>
    )
};

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';

import AsyncStorage from '@react-native-community/async-storage';

import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';
import commonStyles from '../../common/style';
import { Container, TaskContainer, Image, Task } from '../../components';
import { load, create, remove } from './store';


export const Home = ({ itens, daysAhead, navigation }) => {
    const [tasks, setTasks] = useState([]);
    const [visibleTasks, setVisibleTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);
    const [showDoneTask, setShowDoneTask] = useState(true);
    const [design, setDesign] = useState({ style: null, image: null });

    useEffect(() => {
        loadTasks();
        loadStyle();
    }, []);

    useEffect(() => {
        setTasks(itens);
        filterTasks();
    }, [itens]);

    const loadStyle = () => {
        switch (daysAhead) {
            case 0:
                setDesign({ style: commonStyles.colors.today, image: todayImage });
                break;
            case 1:
                setDesign({ style: commonStyles.colors.tomorrow, image: tomorrowImage });
                break;
            case 7:
                setDesign({ style: commonStyles.colors.week, image: weekImage });
                break;
            default:
                setDesign({ style: commonStyles.colors.month, image: monthImage });
                break;
        };
    };

    const loadTasks = () => load();

    const addTask = task => create(task).then(res => setShowAddTask(false));

    const removeTask = () => {

    };

    const filterTasks = () => {
        let visibleTasks = null;

        visibleTasks = showDoneTask ? [...tasks] : tasks.filter(task => task.doneAt === null);

        setVisibleTasks(visibleTasks);
    };

    const toggleFilter = () => {
        // setShowDoneTask(!showDoneTasks);
        // filterTasks();

        // temporario
        signOut();
    };

    const signOut = () => {
        AsyncStorage.clear();
        navigation.navigate('SignIn');
    };

    const toggleTask = () => {
        console.log('toggle');
    };

    return (
        <Container>
            <Image image={design.image} toggleFilter={toggleFilter} />
            <TaskContainer>
                <FlatList
                    data={tasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Task
                            {...item}
                            onToggleTask={toggleTask}
                            onDelete={removeTask}
                        />
                    }
                />
            </TaskContainer>
            <ActionButton
                buttonColor={design.style}
                onPress={() => setShowAddTask(true)}
            />
        </Container>
    )
};

const mapStateToProps = ({ home }) => ({ ...home });
const mapDispatchToProps = dispatch => bindActionCreators({ load, create, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);

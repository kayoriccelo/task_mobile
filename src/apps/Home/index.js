import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';

import AsyncStorage from '@react-native-community/async-storage';

import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';
import commonStyles from '../../common/style';
import { Container, TaskContainer, Image, Task, ModalTask } from '../../components';
import { load, create, remove } from './store';


export const Home = ({ load, create, remove, itens, daysAhead, navigation }) => {
    const [tasks, setTasks] = useState([]);
    const [visibleTasks, setVisibleTasks] = useState([]);
    const [showAddTasks, setShowAddTasks] = useState(false);
    const [showDoneTasks, setShowDoneTasks] = useState(true);
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

    const loadTasks = () => {
        const days = daysAhead ? daysAhead : 0;
        load(days);
    };

    const addTask = task => create(task).then(res => setShowAddTasks(false));

    const removeTask = (id) => remove(id)

    const filterTasks = () => {
        let visibleTasks = null;

        visibleTasks = showDoneTasks ? [...tasks] : tasks.filter(task => task.doneAt === null);

        setVisibleTasks(visibleTasks);
    };

    const toggleFilter = () => {
        setShowDoneTasks(!showDoneTasks);
        filterTasks();
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
            <ModalTask
                isVisible={showAddTasks}
                onSave={addTask}
                onCancel={() => setShowAddTasks(false)}
            />
            <Image image={design.image} showDoneTasks={showDoneTasks} toggleFilter={toggleFilter} />
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
                onPress={() => setShowAddTasks(true)}
            />
        </Container>
    )
};

const mapStateToProps = ({ home }) => ({ ...home });
const mapDispatchToProps = dispatch => bindActionCreators({ load, create, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);

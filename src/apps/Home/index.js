import React, { useState, useEffect } from 'react';

import { Text } from 'react-native';

import { Container, TaskContainer } from '../../components';


export default function Home() {
    const [tasks, setTasks] = useState([]);

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
            <TaskContainer>
                <Text>
                    Hello Tasks
                </Text>
            </TaskContainer>
        </Container>
    )
};

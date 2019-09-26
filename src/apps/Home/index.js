import React, { useState, useEffect } from 'react';

import { Text } from 'react-native';

import { Container, TaskContainer, Image } from '../../components';


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
            <Image>

            </Image>
            <TaskContainer>
                <Text>
                    Hello Tasks
                </Text>
            </TaskContainer>
        </Container>
    )
};

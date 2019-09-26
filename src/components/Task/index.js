import Swipeable from 'react-native-swipeable';
import { Container } from './style';
import Check from './Check';
import Line from './Line';
import RightContent from './Content/Right';
import LeftContent from './Content/Left';


export default function Task(props) {
    return (
        <Swipeable
            leftActionActivationDistance={200}
            onLeftActionActivate={() => props.onDelete(props.id)}
            leftContent={<LeftContent />}
            rightButtons={<RightContent onPress={() => props.onDelete(props.id)} />}
        >
            <Container>
                <Check
                    onPress={() => props.onToggleTask(props.id)}
                />
                <Line
                    description={props.desc}
                    date={props.estimateAt}
                    descStyle={props.doneAt !== null}
                />
            </Container>
        </Swipeable>
    );
};

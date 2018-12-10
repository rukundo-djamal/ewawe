import React from 'react';
import { View} from 'react-native';
import styles from '../styling/style';
const {card} = styles;
const Card = (props) => {
    return(
        <View style={card}>
            {props.children}
        </View>
    );
};
export default Card;
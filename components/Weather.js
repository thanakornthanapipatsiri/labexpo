import React, { useState } from 'react';
import { Text } from 'react-native'
import Forecast from './Forcast';
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    }) 

    return (
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
            <Text>Zipcode</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop : {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})

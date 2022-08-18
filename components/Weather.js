import React, { useState } from 'react';
import { Text } from 'react-native'
import Forecast from './Forcast';
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { useEffect } from 'react';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    }) 

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=b1c13d128ed6b76bc33fed37eb442685`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp});
                    })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])  
    
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

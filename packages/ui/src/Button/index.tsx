import React from 'react';
import { Pressable, Text } from 'react-native';

const CustomButton = () => {
    return <Pressable onPress={()=>alert('Button Pressed')} style={{backgroundColor: 'blue', padding: 12, marginTop: 48}}>
    <Text style={{color: 'white', fontWeight: 'bold'}}>I'm pressable!</Text>
  </Pressable>
}

export default CustomButton;
import React from 'react';
import { Pressable, Text } from 'react-native';

const CustomButton = () => {
    return <Pressable onPress={()=>alert('Button Pressed')} style={{backgroundColor: 'black', padding: 12, marginTop: 48}}>
    <Text style={{color: 'white', fontWeight: 'bold'}}>Secondary Button</Text>
  </Pressable>
}

export default CustomButton;
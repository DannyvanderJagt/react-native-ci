import React, { Component } from 'react'
import { 
	View, Text,
} from 'react-native'
import styles from './styles'


class Button extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Android Button</Text>
			</View>
		)
	}
}

export default Button
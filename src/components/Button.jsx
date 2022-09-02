import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ disabled, btnStyle, btnText, btnTxtStyle, onPress }) => {
	return (
		<TouchableOpacity
			disabled={disabled}
			style={[styles.btn, btnStyle]}
			onPress={onPress}
		>
			<Text style={[styles.btnText, btnTxtStyle]}>{btnText}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btn: {
		padding: 5,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 10,
	},
	btnText: {
		color: 'whitesmoke',
	},
});

export default Button;

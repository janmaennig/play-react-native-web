/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import offices from './fixtures/offices';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
	web: 'Use CMD+R in browser window'
});

const Home = props => {
	const handlePress = office => {
		props.selectOffice(office);
		props.history.push('/subpage', {selectedOffice: office});
	};
	return (
		<View>
			<FlatList
				keyExtractor={offices => offices.id.toString()}
				data={offices}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => handlePress(item)}>
						<Text>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};
export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

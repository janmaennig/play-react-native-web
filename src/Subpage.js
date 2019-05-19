/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import offices from './fixtures/offices';
import { Link } from './routing';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
	web: 'Use CMD+R in browser window'
});

type Props = {};
export default class App extends Component<Props> {
	render() {
		const {  id, name, address, zip, city, image } = this.props.selectedOffice;

		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>SUBPAGE</Text>
				<Link to="/">
					<Text>Go Back</Text>
				</Link>

				<View>
					<Text>{`#${id}`}</Text>
				</View>
				<View>
					<Text>{name}</Text>
				</View>
				<View>
					<Text>{`Adresse: ${address} ${zip} ${city}`}</Text>
				</View>
				<View>
					<Image style={{ width: 50, height: 50 }} source={{ uri: image }} />
				</View>
			</View>
		);
	}
}

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

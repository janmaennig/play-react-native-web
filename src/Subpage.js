/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Link } from './routing';

type Props = {};
export default class App extends Component<Props> {
	render() {
		let {  id, name, address, zip, city, image } = this.props.selectedOffice;

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
					<Image style={{ width: 200, height: 200 }} source={{ uri: image }} />
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, SafeAreaView } from 'react-native';
import { Router, Switch, Route } from './routing';
import Home from './Home';
import Subpage from './Subpage';

const instructions = Platform.select( {
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
	web: 'Use CMD+R in browser window'
} );

type Props = {};
export default class App extends Component<Props> {
	state = {
		selectedOffice: null
	};
	selectOffice = selectedOffice => {
		this.setState( {
			selectedOffice
		} );
	};


	isWeb = () => {
		return Platform.OS === 'web';
	};

	isAndroid = () => {
		return Platform.OS === 'android';
	};

	isIos = () => {
		return Platform.OS === 'ios';
	};


	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Router>
					<Switch>
						<Route exact path="/" render={props => (
							<Home {...props} selectOffice={this.selectOffice} />
						)} />
						<Route path="/subpage" render={props => (
							<Subpage {...props} selectedOffice={this.state.selectedOffice} />
						)} />
					</Switch>
				</Router>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create( {
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
} );

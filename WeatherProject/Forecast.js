import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 2,
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});


class Forecast extends React.Component{
	render(){
		return(
			<View>
				<Text style={styles.bigText}>
					{this.props.main}
				</Text>
				<Text style={styles.mainText}>
					Current conditions: {this.props.description}
				</Text>
				<Text style={styles.bigText}>
					{this.props.temp}°F
				</Text>
			</View>
		);
	}
}

export default Forecast;
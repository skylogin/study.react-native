import React from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import styles from './styles';

class ComponentName extends React.Component{
	render(){
		return (
			<View style={styles.wrapper}>
				<View style={styles.header}>
					<View style={styles.leftTop}>
						<View style={[styles.cell1, styles.baseBorder]} />
						<View style={[styles.cell2, styles.baseBorder]} />
					</View>
					<View style={[styles.cell3, styles.baseBorder]} />
				</View>
				<View style={styles.footer}>
					<View style={[styles.cell4, styles.baseBorder]} />
					<View style={[styles.cell5, styles.baseBorder]} />
					<View style={styles.rightBottom}>
						<View style={[styles.cell6, styles.baseBorder]}/>
						<View style={[styles.cell7, styles.baseBorder]}/>
					</View>
				</View>
			</View>
		);
	}
}

export default ComponentName;
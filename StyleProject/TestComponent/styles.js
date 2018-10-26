import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	wrapper:{
		borderWidth: 2,
		marginTop: 20,
		flex: 1,
	},
	baseBorder: {
		borderWidth:3,
		borderColor: '#000'
	},


	header: {
		flex:8,
		backgroundColor: '#0f0',
		flexDirection: 'row'
	},
	footer: {
		flex:4,
		backgroundColor: '#f00',
		flexDirection: 'row'
	},



	leftTop: {
		flex: 3,
		flexDirection: 'column'
	},
	cell3: {
		backgroundColor: '#888',
		flex: 9
	},

	cell1: {
		flex:3,
		backgroundColor: '#FFF000'
	},
	cell2: {
		flex:9,
		backgroundColor: '#000FFF'
	},




	cell4: {
		flex: 3,
		backgroundColor: '#ccc'
	},
	cell5: {
		flex: 7,
		backgroundColor: '#f00'
	},
	rightBottom: {
		flex:2,
		flexDirection: 'column'
	},



	cell6: {
		flex:6,
		backgroundColor: '#FFF'
	},
	cell7: {
		flex:6,
		backgroundColor: '#0f0'
	}
});

export default styles;
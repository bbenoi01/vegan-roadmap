import { Image, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Button from './components/Button';

const VeganRoadmapApp = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.pageHead}>
				<Text style={styles.h1}>Your Personalized</Text>
				<Text style={styles.h1}>Vegan Roadmap</Text>
			</View>
			<View style={styles.body}>
				<View style={styles.section}>
					<View style={styles.sectionHead}>
						<Text>Day 1 </Text>
						<Text>Order Plant Power plant-based fast food for lunch today</Text>
					</View>
					<View style={styles.actions}>
						<Button btnStyle={[styles.btn, styles.openT]} btnText='OpenTable' />
						<Button btnStyle={[styles.btn, styles.uberE]} btnText='UberEates' />
						<Button
							btnStyle={[styles.btn, styles.reminder]}
							btnText='Set Reminder'
						/>
					</View>
				</View>
				<View style={styles.section}>
					<View style={styles.sectionHead}>
						<Text>Day 2 </Text>
						<Text>Schedule your first vegan mentor session</Text>
					</View>
					<View style={styles.sectionBody}>
						<Image
							style={styles.img}
							source={require('../assets/client.jpg')}
						/>
						<>
							<Text>7 yrs Vegan | Jay Glenn | San Diego, CA</Text>
							<Text>Tomorrow At 6:30pm PST</Text>
						</>
						<Button btnStyle={[styles.confirm]} btnText='Confirm Session' />
					</View>
				</View>
				<View style={styles.section}>
					<View style={styles.sectionHead}>
						<Text>Day 3 </Text>
						<Text>Try Beyond Burger, a plant based burger alternative</Text>
					</View>
					<View style={styles.actions}>
						<Button
							btnStyle={[styles.btn, styles.internet]}
							btnText='Internet'
						/>
						<Button btnStyle={[styles.btn, styles.amazon]} btnText='Amazon' />
						<Button
							btnStyle={[styles.btn, styles.reminder]}
							btnText='Recipies'
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	h1: {
		fontSize: 30,
	},
	body: {
		flex: 1,
		paddingVertical: 20,
		justifyContent: 'space-around',
	},
	sectionHead: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	btn: {
		width: 100,
	},
	openT: {
		backgroundColor: 'red',
	},
	uberE: {
		backgroundColor: 'green',
	},
	reminder: {
		backgroundColor: 'blue',
	},
	sectionBody: {
		alignItems: 'center',
	},
	img: {
		height: 75,
		width: 75,
		borderRadius: 100,
		marginVertical: 20,
	},
	confirm: {
		backgroundColor: 'black',
		width: 125,
		marginVertical: 20,
	},
	internet: {
		backgroundColor: 'orange',
	},
	amazon: {
		backgroundColor: 'goldenrod',
	},
});

export default VeganRoadmapApp;

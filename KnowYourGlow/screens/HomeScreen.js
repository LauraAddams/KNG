import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'MY ROUTINE',
  };

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.getStartedText}>
              Hey cutie ;)
            </Text>

          <Button
            title="Tagged Ingredients"
            onPress={() => navigate('TaggedIng')}
          />

          <Button
            title="Settings"
            onPress={() => navigate('Settings')}
          />
        </ScrollView>
      </View>
    );
  }
}

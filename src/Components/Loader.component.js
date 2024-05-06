import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';

const Loader = ({ isVisible }) => {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.7}>
      <View style={styles.container}>
        <Spinner color={"#ffffff"} size={50} type="FadingCircleAlt" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
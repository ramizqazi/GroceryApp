import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { Card, Text, Touchable } from '../../common';
import GalleryIcon from '../../assets/icon/edit-gallery.svg'
import CameraIcon from '../../assets/icon/edit-camera.svg'

/* =============================================================================
<ImgUploadModal />
============================================================================= */
const ImgUploadModal = ({ visible, onClose, onAdd }) => {

  const _handleOpenCameraPress = async () => {
    const result = await launchCamera({ mediaType: 'photo' });
    onAdd(result?.assets)
    onClose();
  };

  const _handleOpenGalleryPress = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });;
    onAdd(result?.assets)
    onClose();
  };

  return (
    <Modal
      style={styles.container}
      isVisible={visible}
      backdropOpacity={0.2}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <Card style={styles.card}>
        <Touchable android_ripple={{ color: '#999' }} horizontal style={styles.item} onPress={_handleOpenCameraPress}>
          <CameraIcon />
          <Text style={styles.txt}>Open Camera</Text>
        </Touchable>
        <Touchable android_ripple={{ color: '#999' }} horizontal style={styles.item} onPress={_handleOpenGalleryPress}>
          <GalleryIcon />
          <Text style={styles.txt}>Upload from gallery</Text>
        </Touchable>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  txt: {
    marginLeft: 14,
  }
});

export default ImgUploadModal;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import FireStore from '@react-native-firebase/storage';

import {
  View,
  Button,
  Content,
  Container,
  TextInput,
  AppLogoStackHeader,
  Text,
} from '../../common';
import UploadIcon from '../../assets/icon/edit-upload-icon.svg';
import ImgUploadModal from '../components/ImgUploadModal';

import { register as registerAction } from '../redux/actions'

/* =============================================================================
<RegisterScreen />
============================================================================= */
const RegisterScreen = ({ register }) => {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const disabled = !firstName || !lastName || !email || !image || !password;

  const _toggleModal = () => setModal((prevState) => !prevState);

  const _handleSubmit = async () => {
    if (!disabled) {
      setLoading(true)
      const storageRef = FireStore().ref('profile_pics').child(image.fileName);

      await storageRef.putFile(image.uri);

      const uploadImgUrl = await storageRef.getDownloadURL();

      register({
        email,
        password,
        firstName,
        lastName,
        profileImage: uploadImgUrl,
      });
      setLoading(false);
    };
  };


  return (
    <Container>
      <Content>
        <AppLogoStackHeader />
        <View center style={styles.imgContainer}>
          {image ? (
            <Image source={image} style={styles.image} />
          ) : (
            <View style={styles.image} center>
              <Text sm center>No Image Uploaded Yet</Text>
            </View>
          )}
        </View>
        <TextInput
          value={firstName}
          onChange={setFirstName}
          placeholder='First Name'
        />
        <TextInput
          value={lastName}
          placeholder='Last Name'
          onChange={setLastName}
        />
        <TextInput
          value={email}
          onChange={setEmail}
          placeholder='Email'
        />
        <TextInput
          value={password}
          placeholder='Password'
          secureTextEntry={true}
          onChange={setPassword}
        />
        <View center style={styles.imgBtnContainer}>
          <Button
            title='Upload Picture'
            style={styles.imgBtn}
            left={<UploadIcon />}
            btnTxtStyles={styles.imgBtnTxt}
            onPress={_toggleModal}
          />
        </View>
        <View center>
          <Button title='Sign up' loading={loading} onPress={_handleSubmit} />
        </View>
      </Content>
      <ImgUploadModal visible={modal} onClose={_toggleModal} onAdd={setImage} />
    </Container>
  );
};

const styles = StyleSheet.create({
  imgBtnContainer: {
    marginBottom: 20,
  },
  imgBtn: {
    borderWidth: 1,
    borderColor: '#4ec248',
    backgroundColor: '#fff'
  },
  imgBtnTxt: {
    color: '#4ec248'
  },
  imgContainer: {
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: '#d1d1d1',
    borderRadius: 120 / 2,
  }
})


const mapDispatchToProps = {
  register: registerAction,
}

export default connect(null, mapDispatchToProps)(RegisterScreen);

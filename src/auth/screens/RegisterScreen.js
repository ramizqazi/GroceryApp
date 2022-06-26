import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

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

/* =============================================================================
<RegisterScreen />
============================================================================= */
const RegisterScreen = () => {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState();
  const [password, setPassword] = useState('');

  const _toggleModal = () => setModal((prevState) => !prevState);

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
          <Button title='Sign up' />
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

export default RegisterScreen;

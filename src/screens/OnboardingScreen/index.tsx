import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback} from 'react';

import styles from './styles';
import ButtonCustom from 'components/ButtonCustom';
import ImageLoading from 'components/ImageLoading';
import Images from 'common/Images';
import {navigate} from 'navigation/RootNavigation';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View />

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.avatarHeader}>
            <ImageLoading
              iconStyle={styles.avatar}
              source={Images.defaultAvatar}
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.cameraBtn}>
              <ImageLoading
                iconStyle={styles.cameraIc}
                source={Images.grayCamera}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ButtonCustom
          showIcon
          txt="Jhon Done"
          sourceIcon={Images.grayUser}
          iconStyle={styles.iconStyle}
          btnStyles={[styles.btnView, styles.icNormalView]}
          btnTxtStyles={[styles.btnTxt, styles.icNormalTxt]}
        />
      </View>

      <ButtonCustom
        txt="Continue >"
        btnStyles={[styles.successView, styles.btnView]}
        btnTxtStyles={[styles.successTxt, styles.btnTxt]}
        onPress={() => navigate('App')}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

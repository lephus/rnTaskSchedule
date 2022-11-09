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

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarHeader}>
          <ImageLoading iconStyle={styles.avatar} source={Images.defaultAvatar} />
          <TouchableOpacity activeOpacity={0.7} style={styles.cameraBtn}>
            <ImageLoading
              iconStyle={styles.cameraIc}
              source={Images.grayCamera}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.joinAtTxt}>Join at 2022/11/29</Text>
      </View>

      <View style={styles.content}>
        <ButtonCustom
          showIcon
          txt="Jhon Done"
          sourceIcon={Images.grayUser}
          iconStyle={styles.iconStyle}
          btnStyles={[styles.btnView, styles.icNormalView]}
          btnTxtStyles={[styles.btnTxt, styles.icNormalTxt]}
        />
        <ButtonCustom
          showIcon
          txt="0322 8434 2332"
          sourceIcon={Images.grayPhone}
          iconStyle={styles.iconStyle}
          btnStyles={[styles.btnView, styles.icNormalView]}
          btnTxtStyles={[styles.btnTxt, styles.icNormalTxt]}
        />
        <ButtonCustom
          txt="Delete all category"
          btnStyles={[styles.btnView, styles.normalView]}
          btnTxtStyles={[styles.btnTxt, styles.normalTxt]}
        />
        <ButtonCustom
          txt="Delete all task"
          btnStyles={[styles.btnView, styles.normalView]}
          btnTxtStyles={[styles.btnTxt, styles.normalTxt]}
        />
        <ButtonCustom
          txt="Save"
          btnStyles={[styles.successView, styles.btnView]}
          btnTxtStyles={[styles.successTxt, styles.btnTxt]}
        />
        <ButtonCustom
          txt="Reset data"
          btnStyles={[styles.btnView, styles.errorView]}
          btnTxtStyles={[styles.btnTxt, styles.errorTxt]}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

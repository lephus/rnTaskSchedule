import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';

import styles from './styles';
import ButtonCustom from 'components/ButtonCustom';
import ImageLoading from 'components/ImageLoading';
import Images from 'common/Images';
import {selectUser} from 'slices';

const SettingsScreen = () => {
  const userReducer = useSelector(selectUser);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarHeader}>
          {userReducer?.avatar ? (
            <ImageLoading
              resizeMode="cover"
              source={{uri: userReducer.avatar}}
              iconStyle={styles.avatar}
            />
          ) : (
            <ImageLoading
              resizeMode="cover"
              source={Images.defaultAvatar}
              iconStyle={styles.avatar}
            />
          )}
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
          txt={userReducer.userName}
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

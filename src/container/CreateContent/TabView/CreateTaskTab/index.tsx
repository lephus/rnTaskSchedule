import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback} from 'react';

import styles from './styles';
import HeaderAction from 'components/HeaderAction';
import ImageLoading from 'components/ImageLoading';
import Images from 'common/Images';

const CreateTaskTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.titleTypeTxt}>Task Title</Text>
        <Text style={styles.nameTxt}>NFT Web App Prototype</Text>
        <Text style={styles.titleTypeTxt}>Due Date</Text>
        <View style={styles.time}>
          <ImageLoading
            source={Images.aquaClock}
            iconStyle={styles.activeClockIcon}
          />
          <Text style={styles.timeTxt}>08:30 AM, 22 May 2022</Text>
        </View>
        <Text style={styles.titleTypeTxt}>Description</Text>
        <Text style={styles.descriptionTxt}>
          Last year was a fantastic year for NFTs, with the market reaching a
          $40 billion valuation for the first time. In addition, more than $10
          billion worth of NFTs are now sold every week – with NFT..
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.onProgressStatusView}>
          <Text style={styles.onProgressStatusTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateTaskTab;

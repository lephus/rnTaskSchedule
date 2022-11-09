import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';

import styles from './styles';
import HeaderAction from 'components/HeaderAction';
import ImageLoading from 'components/ImageLoading';
import Images from 'common/Images';
import {goBack} from 'navigation/RootNavigation';
import {StagesOfTask} from '../../fakeData/Detail';

const CategoryDetailScreen = () => {
  const renderItem = useCallback(({item}: any) => {
    return (
      <View style={styles.item}>
        {item.checked ? (
          <ImageLoading
            iconStyle={styles.icItem}
            source={Images.purpleCheckBox}
          />
        ) : (
          <View style={styles.circleIcItem} />
        )}
        <Text style={styles.nameItem}>{item.label}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderAction
        title="Categories Details"
        titleActionRight="Save"
        goBack={() => goBack()}
        rightActionTxt="Save"
        rightActionBtnStyle={styles.saveBtn}
        rightActionTxtStyle={styles.saveTxt}
      />

      <FlatList
        data={StagesOfTask}
        keyExtractor={(item: any) => item.id}
        style={styles.stagesOfTaskList}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.titleTypeTxt}>Task Title</Text>
            <Text style={styles.nameTxt}>NFT Web App Prototype</Text>
            <Text style={styles.titleTypeTxt}>Due Date</Text>
            <View style={styles.footer}>
              <View style={styles.time}>
                <ImageLoading
                  source={Images.aquaClock}
                  iconStyle={styles.activeClockIcon}
                />
                <Text style={styles.timeTxt}>08:30 AM, 22 May 2022</Text>
              </View>
              <View style={styles.onProgressStatusView}>
                <Text style={styles.onProgressStatusTxt}>On Progress</Text>
              </View>
            </View>
            <Text style={styles.titleTypeTxt}>Description</Text>
            <Text style={styles.descriptionTxt}>
              Last year was a fantastic year for NFTs, with the market reaching
              a $40 billion valuation for the first time. In addition, more than
              $10 billion worth of NFTs are now sold every week – with NFT..
            </Text>
            <Text style={styles.titleTypeTxt}>Stages of Task</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default CategoryDetailScreen;

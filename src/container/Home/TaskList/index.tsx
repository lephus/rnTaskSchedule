import React, {useCallback} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import ImageLoading from 'components/ImageLoading';
import Images from 'common/Images';
import {navigate} from 'navigation/RootNavigation';
import {taskAtHome} from '../../../fakeData/Home';

const TaskList = () => {
  const goToDetail = () => {
    navigate('TaskDetailScreen');
  };

  const RenderItemTask = useCallback(({item}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.item}
        onPress={goToDetail}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <ImageLoading source={Images.threeDotsHorizontal} />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.description,
            item.status === 'completed' && styles.opacityStyle,
          ]}>
          {item.description}
        </Text>
        <View style={styles.lineGray} />
        <View style={styles.footer}>
          <View
            style={[
              styles.time,
              item.status === 'completed' && styles.opacityStyle,
            ]}>
            <ImageLoading
              source={Images.aquaClock}
              iconStyle={styles.activeClockIcon}
            />
            <Text style={styles.timeTxt}>{item.time}</Text>
          </View>
          {item.status === 'onProgress' ? (
            <View style={styles.onProgressStatusView}>
              <Text style={styles.onProgressStatusTxt}>{item.statusTxt}</Text>
            </View>
          ) : (
            <View style={styles.completedStatusView}>
              <Text style={styles.completedStatusTxt}>{item.statusTxt}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }, []);

  if (taskAtHome?.length > 0) {
    return (
      <>
        {taskAtHome.map(item => (
          <RenderItemTask key={item.id} item={item} />
        ))}
      </>
    );
  }
  return null;
};

export default TaskList;

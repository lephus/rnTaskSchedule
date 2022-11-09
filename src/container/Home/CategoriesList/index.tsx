import React, {memo, useCallback} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';
import ImageLoading from 'components/ImageLoading';
import ProgressBar from 'components/ProgressBar';
import Images from 'common/Images';
import Colors from 'common/Colors';
import {navigate} from 'navigation/RootNavigation';
import {categoriesAtHome} from '../../../fakeData/Home';

const CategoriesList = () => {

  const goToDetail = () => {
    navigate('CategoryDetailScreen');
  };

  const renderItemCategory = useCallback(({item}: any) => {
    if (item.type === 1) {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.item, styles.itemOne]}
          onPress={goToDetail}>
          <View style={styles.typeOneIconView}>
            <ImageLoading source={Images.whiteEdit} />
          </View>
          <Text style={styles.nameOne}>{item.name}</Text>
          <Text style={styles.totalProjectOne}>
            {item.totalProject} Projects
          </Text>

          <View style={styles.wrapperProgressView}>
            <View style={styles.progressOne}>
              <ProgressBar
                step={item.progress}
                steps={100}
                height={5}
                bgProgress={Colors.lightTextPrimary}
                bgAnimProgress={Colors.white}
              />
            </View>
            <View style={styles.progressView}>
              <Text style={styles.progressOneKey}>Progress</Text>
              <Text style={styles.progressOneValue}>{item.progress}%</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else if (item.type === 2) {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.item, styles.itemTwo]}
          onPress={goToDetail}>
          <View style={styles.typeTwoIconView}>
            <ImageLoading source={Images.redVideoCameraFront} />
          </View>
          <Text style={styles.nameTwo}>{item.name}</Text>
          <Text style={styles.totalProjectTwo}>
            {item.totalProject} Projects
          </Text>
          <View style={styles.wrapperProgressView}>
            <View style={styles.progressTwo}>
              <ProgressBar
                step={item.progress}
                steps={100}
                height={5}
                bgProgress={Colors.sectionSeparatorColor}
                bgAnimProgress={Colors.Color_7F56D9}
              />
            </View>
            <View style={styles.progressView}>
              <Text style={styles.progressTwoKey}>Progress</Text>
              <Text style={styles.progressTwoValue}>{item.progress}%</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }, []);

  return (
    <FlatList
      style={styles.categoriesList}
      data={categoriesAtHome}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItemCategory}
    />
  );
};

export default memo(CategoriesList);

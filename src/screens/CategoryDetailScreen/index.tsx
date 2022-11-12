import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import HeaderAction from 'components/HeaderAction';
import ImageLoading from 'components/ImageLoading';
import Images from 'common/Images';
import {goBack} from 'navigation/RootNavigation';
import {selectCategory, updateCategoryItem} from 'slices';
import {formatTxTDate} from 'utils/TransformData';
import {StagesOfTask} from '../../fakeData/Detail';

const CategoryDetailScreen = () => {
  const dispatch = useDispatch();
  const categoryReducer = useSelector(selectCategory);
  const {categoryDetail} = categoryReducer;

  const [newTaskList, setNewTaskList] = useState<any>(
    categoryDetail?.taskList || [],
  );

  const activeTask = (id: number) => {
    const temp = [...newTaskList];
    const indexI = temp.findIndex((i: any) => i.id === id);
    if (indexI !== -1) {
      temp[indexI] = {
        ...temp[indexI],
        checked: !temp[indexI].checked,
      };
    }
    setNewTaskList(temp);
  };

  const renderItem = useCallback(
    ({item}: any) => {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.item}
          onPress={() => activeTask(item.id)}>
          {item.checked ? (
            <ImageLoading
              iconStyle={styles.icItem}
              source={Images.purpleCheckBox}
            />
          ) : (
            <View style={styles.circleIcItem} />
          )}
          <Text style={styles.nameItem}>{item.taskName}</Text>
        </TouchableOpacity>
      );
    },
    [newTaskList],
  );

  const saveData = () => {
    dispatch(
      updateCategoryItem({
        id: categoryDetail.id,
        data: {
          ...categoryDetail,
          taskList: newTaskList,
        },
      }),
    );
    goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderAction
        title="Categories Details"
        titleActionRight="Save"
        rightActionTxt="Save"
        rightActionBtnStyle={styles.saveBtn}
        rightActionTxtStyle={styles.saveTxt}
        goBack={() => goBack()}
        onPressText={saveData}
      />

      <FlatList
        data={newTaskList}
        keyExtractor={(item: any) => item.id}
        style={styles.stagesOfTaskList}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.titleTypeTxt}>Task Title</Text>
            <Text style={styles.nameTxt}>{categoryDetail.title}</Text>
            <Text style={styles.titleTypeTxt}>Due Date</Text>
            <View style={styles.footer}>
              <View style={styles.time}>
                <ImageLoading
                  source={Images.aquaClock}
                  iconStyle={styles.activeClockIcon}
                />
                <Text style={styles.timeTxt}>
                  {formatTxTDate(new Date(categoryDetail.dueDate))}
                </Text>
              </View>
              <View style={styles.onProgressStatusView}>
                <Text style={styles.onProgressStatusTxt}>On Progress</Text>
              </View>
            </View>
            <Text style={styles.titleTypeTxt}>Description</Text>
            <Text style={styles.descriptionTxt}>
              {categoryDetail.description}
            </Text>
            <Text style={styles.titleTypeTxt}>Stages of Task</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default CategoryDetailScreen;

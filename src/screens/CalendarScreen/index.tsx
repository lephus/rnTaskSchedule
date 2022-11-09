import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React, {useCallback, useEffect, useState, useRef} from 'react';
import MonthPicker from 'react-native-month-year-picker';

import styles from './styles';
import HeaderAction from 'components/HeaderAction';
import ImageLoading from 'components/ImageLoading';
import SelectMonthYearModal from 'components/SelectMonthYearModal';
import Images from 'common/Images';
import {getDayByMonth} from 'utils/TransformData';
import {TaskByDay} from '../../fakeData/Calendar';

interface ItemType {
  id: number;
  title: string;
  description: string;
  starTime: string[];
  time: string;
  color: string;
}

const today = new Date();
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CalendarScreen = () => {
  const refModal = useRef<any>(null);

  const [daysList, setDaysList] = useState([]);
  const [currentDay, setCurrentDay] = useState({
    day: today.getDate(),
    month: monthNames[today.getMonth()],
    monthValue: today.getMonth(),
  });
  const [dateSelected, setDateSelected] = useState(today);
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   setDaysList(getDayByMonth(today.getFullYear(), today.getMonth()));
  // }, []);

  useEffect(() => {
    // if (
    //   currentDay.day !== refModal?.current?.date?.getDate() ||
    //   currentDay.monthValue !== refModal?.current?.date?.getMonth()
    // ) {
    //   setCurrentDay({
    //     day: refModal.current.date.getDate(),
    //     month: monthNames[refModal.current.date.getMonth()],
    //     monthValue: refModal.current.date.getMonth(),
    //   });
    const result = getDayByMonth(
      dateSelected.getFullYear(),
      dateSelected.getMonth(),
    );
    setDaysList(result);
    console.warn('1', dateSelected, result);
    // }
  }, [dateSelected]);

  const showSelectTime = useCallback(() => {
    refModal?.current?.showPicker(true);
    // setVisible(true);
  }, []);

  const renderTaskItem: ListRenderItem<ItemType> = useCallback(({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.leftItem}>
          <Text style={styles.startTime}>{item.starTime[0]}</Text>
          <Text style={styles.startTimeType}>{item.starTime[1]}</Text>
        </View>

        <View style={[styles.rightItem, {backgroundColor: item.color}]}>
          <Text style={styles.titleItem}>{item.title}</Text>
          <Text style={styles.descriptionItem}>{item.description}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  }, []);

  const renderDayItem: ListRenderItem<any> = useCallback(({item}) => {
    if (item.isToday) {
      return (
        <TouchableOpacity activeOpacity={0.7} style={styles.dateActiveBtn}>
          <Text style={styles.dateTxt}>{item.dayOnWeek}</Text>
          <View style={styles.circleDayActiveView}>
            <Text style={styles.dayActiveTxt}>{item.day}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity activeOpacity={0.7} style={styles.dateBtn}>
          <Text style={styles.dateTxt}>{item.dayOnWeek}</Text>
          <View style={styles.circleDayView}>
            <Text style={styles.dayTxt}>{item.day}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.monthSelectBtn}
        onPress={showSelectTime}>
        <Text style={styles.monthSelectTxt}>Month</Text>
        <ImageLoading
          iconStyle={styles.arrowDownIc}
          source={Images.blackChevronDown}
        />
      </TouchableOpacity>

      <View style={styles.dateSelectView}>
        <FlatList
          data={daysList}
          keyExtractor={(item: any) => `day-${item.day}`}
          renderItem={renderDayItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <Text style={styles.titleContentTxt}>
        Tasks of {currentDay.day} {currentDay.month}
      </Text>
      <FlatList
        data={TaskByDay}
        keyExtractor={(item: ItemType) => `${item.id}`}
        style={styles.taskList}
        renderItem={renderTaskItem}
        ItemSeparatorComponent={() => <View style={styles.separatorItem} />}
      />

      <SelectMonthYearModal
        ref={refModal}
        visible={visible}
        setDateSelected={setDateSelected}
        setVisible={setVisible}
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;

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
import Constants from 'common/Constants';
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
interface DayItemType {
  day: any;
  dayOnWeek: string;
  isToday: boolean;
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

  const [daysList, setDaysList] = useState<Array<DayItemType>>([]);
  const [currentDay, setCurrentDay] = useState({
    day: today.getDate(),
    month: monthNames[today.getMonth()],
    monthValue: today.getMonth(),
  });
  const [monthSelected, setMonthSelected] = useState(today);
  const [firstRun, setFirstRun] = useState(false);

  // for IOS
  const [visible, setVisible] = useState(false);

  // for Android
  const [date, setDate] = useState(today);
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value: any) => {
    setShow(value);
  }, []);

  const onValueChange = useCallback(
    (event: any, newDate: any) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
      setMonthSelected(selectedDate);
    },
    [date, showPicker],
  );

  useEffect(() => {
    const result = getDayByMonth(
      monthSelected.getFullYear(),
      monthSelected.getMonth(),
    );
    const indexSelectItem = result.findIndex(
      (i: DayItemType) => i.day === monthSelected.getDate(),
    );
    if (indexSelectItem !== -1) {
      result[indexSelectItem].isToday = true;
      setDaysList(result);
      setFirstRun(true);
    } else {
      setDaysList(result);
      setFirstRun(true);
    }
  }, []);

  useEffect(() => {
    if (firstRun) {
      const result = getDayByMonth(
        monthSelected.getFullYear(),
        monthSelected.getMonth(),
      );
      setDaysList(result);
    }
  }, [monthSelected]);

  const showSelectTime = useCallback(() => {
    if (Constants.isIOS) {
      refModal?.current?.showPicker(true);
    } else {
      showPicker(true);
    }
  }, []);

  const onSelectDay = (day: number) => {
    const result: Array<DayItemType> = [...daysList];
    for (const i in result) {
      if (result[i]?.day === day) {
        result[i].isToday = true;
        setCurrentDay({
          day: day,
          month: monthNames[monthSelected.getMonth()],
          monthValue: monthSelected.getMonth(),
        });
      } else {
        result[i].isToday = false;
      }
    }
    setDaysList(result);
  };

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

  const renderDayItem: ListRenderItem<any> = ({item}) => {
    if (item.isToday) {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.dateActiveBtn}
          onPress={() => onSelectDay(item.day)}>
          <Text style={styles.dateTxt}>{item.dayOnWeek}</Text>
          <View style={styles.circleDayActiveView}>
            <Text style={styles.dayActiveTxt}>{item.day}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.dateBtn}
          onPress={() => onSelectDay(item.day)}>
          <Text style={styles.dateTxt}>{item.dayOnWeek}</Text>
          <View style={styles.circleDayView}>
            <Text style={styles.dayTxt}>{item.day}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

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

      {Constants.isIOS ? (
        <SelectMonthYearModal
          ref={refModal}
          visible={visible}
          setMonthSelected={setMonthSelected}
          setVisible={setVisible}
        />
      ) : (
        <>
          {show && (
            <MonthPicker
              onChange={onValueChange}
              value={date}
              maximumDate={today}
              mode="full"
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default CalendarScreen;

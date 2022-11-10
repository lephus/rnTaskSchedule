import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';
import ImageLoading from 'components/ImageLoading';
import Images from 'common/Images';
import TabView from 'container/Home/TabView';
import CategoriesList from 'container/Home/CategoriesList';
import TaskList from 'container/Home/TaskList';

const HomeScreen = () => {
  const [indexTab, setIndexTab] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoUser}>
        <ImageLoading
          resizeMode="cover"
          source={Images.defaultAvatar}
          iconStyle={styles.imgUser}
        />
        <View style={styles.infoUserView}>
          <Text style={styles.nameUserTxt}>Jhon Doe</Text>
          <Text style={styles.numOfTaskUserTxt}>40 tasks today</Text>
        </View>
      </View>

      <View style={styles.search}>
        <TouchableOpacity activeOpacity={0.75} style={styles.searchBtn}>
          <ImageLoading
            source={Images.blackSearch}
            iconStyle={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput placeholder="Search task..." style={styles.searchInput} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContentView}>
          <Text style={styles.titleContentTxt}>Categories</Text>
        </View>
        <CategoriesList />

        <View style={styles.titleContentView}>
          <Text style={styles.titleContentTxt}>My Task</Text>
        </View>
        <TabView setIndexTab={setIndexTab} />
        <TaskList />

        <View style={styles.emptyView} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

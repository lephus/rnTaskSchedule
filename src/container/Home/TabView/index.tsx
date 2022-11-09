import React, {
  useRef,
  createRef,
  useEffect,
  useState,
  forwardRef,
  useCallback,
} from 'react';
import {Text, View, Animated, Dimensions, TouchableOpacity} from 'react-native';

import styles from './styles';

const {width} = Dimensions.get('screen');

interface TabType {
  item: {
    id: string;
    label: string;
    ref: any;
  },
  onItemPress: () => void;
  index: number;
}

const TabView = ({setIndexTab}) => {
  const ref = useRef<any>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [localIndex, setLocalIndex] = useState<number>(1);

  const ListTabVIew = [
    {id: '1', label: 'Today', ref: createRef()},
    {id: '2', label: 'Upcoming', ref: createRef()},
    {id: '3', label: 'Late', ref: createRef()},
    {id: '4', label: 'Completed', ref: createRef()},
  ];

  const onItemPress = (itemIndex: number) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
    setIndexTab(itemIndex);
    setLocalIndex(itemIndex);
  };

  const init = () => {
    ref?.current?.scrollToOffset({
      offset: 1 * width,
    });
  };

  useEffect(() => {
    init();
  }, []);

  const Tabs = ({data, scrollX, onItemPress}) => {
    const containerRef = useRef<any>();

    return (
      <View style={styles.tabs} ref={containerRef}>
        {data.map((item, index) => (
          <Tab
            key={item.id}
            item={item}
            index={index}
            ref={item.ref}
            onItemPress={() => onItemPress(index)}
          />
        ))}
      </View>
    );
  };

  const Tab = forwardRef(({item, onItemPress, index}: TabType, ref: any) => {
    if (localIndex === index) {
      return (
        <TouchableOpacity
          style={styles.tabBtn}
          activeOpacity={0.6}
          onPress={onItemPress}>
          <View ref={ref}>
            <Text style={styles.textActiveTab}>{item.label}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.tabBtn}
        activeOpacity={0.6}
        onPress={onItemPress}>
        <View ref={ref}>
          <Text style={styles.textTab}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <Tabs scrollX={scrollX} data={ListTabVIew} onItemPress={onItemPress} />
    </View>
  );
};

export default TabView;

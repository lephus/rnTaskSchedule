import {StyleSheet} from 'react-native';

import Colors from 'common/Colors';
import Constants from 'common/Constants';
import {scaleHeightSize, scaleSize, scaleFont} from 'common/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  stagesOfTaskList: {
    paddingHorizontal: scaleSize(15),
  },

  titleTypeTxt: {
    fontWeight: '500',
    fontSize: scaleFont(14),
    color: Colors.Color_5D6B98,
    marginTop: scaleSize(22),
    marginBottom: scaleSize(7),
  },

  nameTxt: {
    fontWeight: '600',
    fontSize: scaleFont(20),
  },

  descriptionTxt: {
    fontWeight: '500',
    fontSize: scaleFont(14),
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeClockIcon: {
    width: scaleSize(16),
    height: scaleSize(16),
  },
  timeTxt: {
    fontWeight: '400',
    fontSize: scaleFont(12),
    marginLeft: scaleSize(7),
  },
  footerAction: {
    marginHorizontal: scaleSize(15),
    marginBottom: scaleSize(10),
  },
  onProgressStatusView: {
    borderRadius: scaleSize(20),
    paddingVertical: scaleSize(9),
    paddingHorizontal: scaleSize(15),
    backgroundColor: 'rgba(3, 152, 85, 0.1)',
  },
  onProgressStatusTxt: {
    fontWeight: '500',
    fontSize: scaleFont(12),
    color: Colors.Color_039855,
  },
  completedStatusView: {
    borderRadius: scaleSize(20),
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(15),
    backgroundColor: Colors.Color_DCDFEA,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleSize(10),
  },
  completedStatusTxt: {
    fontWeight: '500',
    fontSize: scaleFont(14),
  },
  errorView: {
    backgroundColor: Colors.Color_F3DADA,
  },
  errorTxt: {
    color: Colors.Color_980C03,
  },

  item: {
    backgroundColor: Colors.Color_F9F9FB,
    flexDirection: 'row',
    marginTop: scaleSize(15),
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(20),
    borderRadius: scaleSize(10),
  },
  icItem: {
    width: scaleSize(20),
    height: scaleSize(20),
  },
  circleIcItem: {
    width: scaleSize(20),
    height: scaleSize(20),
    borderWidth: scaleSize(1),
    borderColor: Colors.Color_98A2B3,
    borderRadius: scaleSize(10),
  },
  nameItem: {
    fontWeight: '500',
    fontSize: scaleFont(16),
    marginLeft: scaleSize(10),
  },

  saveBtn: {
    backgroundColor: Colors.Color_D9D9D9,
    paddingVertical: scaleSize(5),
    paddingHorizontal: scaleSize(15),
    borderRadius: scaleSize(20),
  },
  saveTxt: {
    fontWeight: '500',
    fontSize: scaleFont(14),
  },
});

export default styles;

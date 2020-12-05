import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descTextStyle: {
    fontSize: 20,
    lineHeight: 25,
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'octicons',
  },
  buttonStyles: {
    width: '80%',
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'octicons',
  },
});

export default styles;

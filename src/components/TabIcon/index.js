/* eslint-disable default-case */
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export default function TabIcon({
  name, type, tintColor, style, size,
}) {
  console.log('TCL: type', type);
  switch (type) {
    case 'material':
      return (
        <Icon style={style || {}} name={name} size={size} color={tintColor} />
      );

    case 'entypo':
      return (
        <EntypoIcon
          style={style || {}}
          name={name}
          size={size}
          color={tintColor}
        />
      );

    case 'rounded':
      return (
        <View>
          <Icon
            style={style || {}}
            name={name}
            size={size}
            color={
              tintColor
              //= == AppStyles.colors.inactiveGreyColor ? AppStyles.colors.white : tintColor
            }
          />
        </View>
      );

    case 'FontAwesome':
      return (
        <FontAwesomeIcon
          style={style || {}}
          name={name}
          size={size}
          color={tintColor}
        />
      );

    case 'SimpleLineIcon':
      return (
        <SimpleLineIcon
          style={style || {}}
          name={name}
          size={size}
          color={tintColor}
        />
      );
  }
}

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'material',
    'entypo',
    'rounded',
    'FontAwesome',
    'Octicons',
    'SimpleLineIcon',
  ]),
  tintColor: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.number,
};
TabIcon.defaultProps = {
  type: 'material',
  size: 24,
};

import React, {useState, useMemo} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../styles/colors';

const CustomCalendar = ({onDayPress, selectedDate, theme = 'light'}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const isDark = theme === 'dark';
  const textColor = isDark ? colors.white : colors.black;
  const backgroundColor = isDark ? colors.black : colors.white;
  const disabledColor = isDark ? colors.grayMedium : colors.grayLight;

  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const firstDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  }, [currentMonth]);

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

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDayPress = day => {
    if (day) {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth() + 1;
      const dateString = `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
      onDayPress({dateString});
    }
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const isSelected = day => {
    if (!day || !selectedDate) return false;
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth() + 1;
    const dateString = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return dateString === selectedDate;
  };

  const isToday = day => {
    if (!day) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  return (
    <View style={{backgroundColor, padding: 16, borderRadius: 12}}>
      {/* Header с месяцем и стрелками */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}>
        <TouchableOpacity onPress={goToPreviousMonth}>
          <Text style={{color: textColor, fontSize: 18}}>‹</Text>
        </TouchableOpacity>
        <Text style={{color: textColor, fontSize: 18, fontWeight: 'bold'}}>
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </Text>
        <TouchableOpacity onPress={goToNextMonth}>
          <Text style={{color: textColor, fontSize: 18}}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Дни недели */}
      <View style={{flexDirection: 'row', marginBottom: 8}}>
        {dayNames.map((day, index) => (
          <View key={index} style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{color: disabledColor, fontSize: 12, fontWeight: '500'}}>
              {day}
            </Text>
          </View>
        ))}
      </View>

      {/* Календарная сетка */}
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {daysInMonth.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: '14.28%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isSelected(day)
                ? colors.greenPrimary
                : 'transparent',
              borderRadius: 20,
            }}
            onPress={() => handleDayPress(day)}
            disabled={!day}>
            {day && (
              <Text
                style={{
                  color: isSelected(day)
                    ? colors.white
                    : isToday(day)
                    ? colors.greenPrimary
                    : textColor,
                  fontSize: 16,
                  fontWeight: isToday(day) ? 'bold' : 'normal',
                }}>
                {day}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomCalendar;

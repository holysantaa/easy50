import React, { useState } from 'react';
import Calendar, { CalendarProps, Value } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarAPI() {
  const [value, onChange] = useState<Date | null>(new Date());

  return (
    <div>
      <Calendar onChange={onChange as CalendarProps['onChange']} value={value} />
    </div>
  );
}

export default CalendarAPI;
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../store';

export default function DatePicker() {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);

  return (
    <div className="p-4">
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => dispatch(setSelectedDate(e.target.value))}
      />
    </div>
  );
}
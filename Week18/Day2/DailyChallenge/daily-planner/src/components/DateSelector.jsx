import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector({ selectedDate, onDateChange }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => onDateChange(date)}
        dateFormat="MMMM d, yyyy"  // Example: August 1, 2025
        inline // ✅ shows the full calendar inline instead of dropdown
      />
    </div>
  );
}
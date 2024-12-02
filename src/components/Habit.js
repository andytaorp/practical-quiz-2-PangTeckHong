import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({ habit, onDeleteHabit, onToggleHabit }) {
    return (
      <li style={{textDecoration: habit.packed ? "line-through" : ""}}>
        <input
          type="checkbox"
          checked={habit.packed} // Ensure the checkbox reflects the current state
          onChange={() => onToggleHabit(habit.id)}
        />
        {habit.habitName}
        <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
      </li>
    );
  }

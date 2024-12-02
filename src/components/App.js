import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habit) => {
    // TODO: write code to add a new habit here
    setHabits((prevHabits) => [...prevHabits, habit]);
  };


  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    setHabits((prevHabits) => prevHabits.map((habit) => habit.id === id ? {...habit, packed: !habit.packed} : habit));

  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit

    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      < AddHabitForm onAddHabit={handleAddHabit}/>
      {/*TODO: add a list of habits*/}
      < HabitList habits={habits} onDeleteHabit={handleDeleteHabit} onToggleHabit={handleToggleHabit}/>
    </div>
  );
}

export default App;

// Get habit and habit-goal, validate both and update their states
const getHabitList = (event, habit, goal, setHabit, setGoal, setHabitList) => {
  event.preventDefault();

  if (habit.trim().length == 0 || goal.trim().length == 0) {
    alert("Fill in both input fields!");
  } else if (goal.trim().length > 60) {
    alert("Your habit goal cannot exceed 60 characters/letters");
  } else {
    let new_habit = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
      habit: habit,
      goal: goal,
    };
    setHabitList((prevHabits) => [...prevHabits, new_habit]);
    setHabit("");
    setGoal("");
  }
};

export default getHabitList;

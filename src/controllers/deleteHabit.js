// delete an habit from the list of habits

export const deleteHabit = (id, setHabitList) => {
  setHabitList((prev) => prev.filter((habit) => habit.id !== id));
}
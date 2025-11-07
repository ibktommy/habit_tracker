export const editHabit = (habitItem, setNewGoal, setEditModal, setOverlay, setSelectedHabit, setSelectedHabitID) => {
  const { id, goal, habit } = habitItem;
    setNewGoal(goal);
    setEditModal(true);
    setOverlay(true);
    setSelectedHabit(habit);
    setSelectedHabitID(id);
}

export const closeEditModal = (setEditModal, setOverlay) => {
  setEditModal(false);
  setOverlay(false);
}

export const submitEditedGoal = (habitList, selectedHabitID, newGoal, setHabitList, setEditModal, setOverlay) => {
  const updatetHabitList = habitList.map((habitItem) =>
    habitItem.id === selectedHabitID
      ? { ...habitItem, goal: newGoal }
      : habitItem
  );

  setHabitList(updatetHabitList);
  setEditModal(false);
  setOverlay(false);
}
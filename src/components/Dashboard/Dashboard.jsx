import { useState } from "react";
import HabitCard from "../HabitCard/HabitCard";
import "./Dashboard.css";
import getHabitList from "../../controllers/getHabitList";

const Dashboard = () => {
  // State for habit name, goal, and list
  const [habit, setHabit] = useState("");
  const [goal, setGoal] = useState("");
  const [habitList, setHabitList] = useState([]);
  const [overlay, setOverlay] = useState(false);

  return (
    <section id="dashboard" className={overlay ? "overlay" : ""}>
      <div className="habit_input">
        <h1>Personal Habit Tracker</h1>
        <form>
          <label htmlFor="habit">Enter Habit</label>
          <input
            type="text"
            id="habit"
            placeholder="Write a new habit here..."
            value={habit}
            onChange={(event) => {
              setHabit(event.target.value);
            }}
          />
          <textarea
            id="habit"
            value={goal}
            placeholder="Write the goal for this habit (< 61 characters)"
            onChange={(event) => setGoal(event.target.value)}
          ></textarea>
          <button
            onClick={(event) => {
              getHabitList(event, habit, goal, setHabit, setGoal, setHabitList);
            }}
          >
            Submit habit
          </button>
        </form>
      </div>
      <div className="habit_list">
        <h4>Your Habits:</h4>
        <HabitCard data={{ habitList }} action={{ setHabitList, setOverlay }} />
      </div>
    </section>
  );
};

export default Dashboard;

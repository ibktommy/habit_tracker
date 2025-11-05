import { useState } from "react";
import HabitCard from "../HabitCard/HabitCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section id="dashboard" className="overlay">
      <div className="habit_input">
        <h1>Personal Habit Tracker</h1>
        <form>
          <label htmlFor="habit">Enter Habit</label>
          <input
            type="text"
            id="habit"
            placeholder="Write a new habit here..."
          />
          <textarea
            id="habit"
            placeholder="Write the goal for this habit (< 61 characters)"
          ></textarea>
          <button>Submit habit</button>
        </form>
      </div>
      <div className="habit_list">
        <h4>Your Habits:</h4>
        <HabitCard />
      </div>
    </section>
  );
};

export default Dashboard;

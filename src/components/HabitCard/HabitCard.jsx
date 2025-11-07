import { useState } from "react";
import { CloseBoxIcon, ColorCheckIcon, EditIcon } from "../../assets/icons";
import { deleteHabit } from "../../controllers/deleteHabit";
import {
  editHabit,
  closeEditModal,
  submitEditedGoal,
} from "../../controllers/handleGoalEdit";
import "./HabitCard.css";

const HabitCard = ({ data, action }) => {
  const { habitList } = data;
  const { setHabitList, setOverlay } = action;
  const [editModal, setEditModal] = useState(false);
  const [newGoal, setNewGoal] = useState("");
  const [selectedHabit, setSelectedHabit] = useState("");
  const [selectedHabitID, setSelectedHabitID] = useState("");
  const [markHabit, setMarkHabit] = useState(false)

  return (
    <div className="habit_card">
      {habitList.map((habitItem) => {
        const { id, habit, goal } = habitItem;

        return (
          <div className="habit_item" key={id}>
            <div className="col_1">
              <h6>Habit:</h6>
              <h6>Goal:</h6>
            </div>
            <div className="col_2">
              <p>{habit}</p>
              <p>{goal}</p>
              <div className="weekdays">
                <div className="day">
                  <p>M</p>
                  <div className="day_check">{/* <ColorCheckIcon /> */}</div>
                </div>
                <div className="day">
                  <p>T</p>
                  <div className="day_check"></div>
                </div>
                <div className="day">
                  <p>W</p>
                  <div className="day_check"></div>
                </div>
                <div className="day">
                  <p>Th</p>
                  <div className="day_check"></div>
                </div>
                <div className="day">
                  <p>F</p>
                  <div className="day_check"></div>
                </div>
                <div className="day">
                  <p>Sa</p>
                  <div className="day_check"></div>
                </div>
                <div className="day">
                  <p>Su</p>
                  <div className="day_check"></div>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div onClick={() => deleteHabit(id, setHabitList)}>
                <CloseBoxIcon />
              </div>
              <div
                onClick={() =>
                  editHabit(
                    habitItem,
                    setNewGoal,
                    setEditModal,
                    setOverlay,
                    setSelectedHabit,
                    setSelectedHabitID
                  )
                }
              >
                <EditIcon />
              </div>
            </div>
          </div>
        );
      })}

      {editModal && (
        <div className="habit_edit_modal">
          <div onClick={() => closeEditModal(setEditModal, setOverlay)}>
            <CloseBoxIcon />
          </div>
          <p>Habit: {selectedHabit}</p>
          <textarea
            id="edit_habit"
            placeholder="Edit Habit (< 61 characters)"
            value={newGoal}
            onChange={(event) => setNewGoal(event.target.value)}
          ></textarea>
          <button
            onClick={() =>
              submitEditedGoal(
                habitList,
                selectedHabitID,
                newGoal,
                setHabitList,
                setEditModal,
                setOverlay
              )
            }
          >
            Submit habit
          </button>
        </div>
      )}
    </div>
  );
};

export default HabitCard;

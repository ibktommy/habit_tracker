import { CloseBoxIcon, ColorCheckIcon, EditIcon } from "../../assets/icons";
import { deleteHabit } from "../../controllers/deleteHabit";
import "./HabitCard.css";

const HabitCard = ({ data, action }) => {
  const { habitList } = data;
  const { setHabitList } = action;

  // function deleteHabit(id) {
  //   let updated_habits = habitList.filter((habit) => habit.id !== id);
  //   setHabitList(updated_habits);
  // }

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
              <div>
                <EditIcon />
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="habit_edit_modal">
        <CloseBoxIcon />
        <textarea
          id="edit_habit"
          placeholder="Edit Habit (< 61 characters)"
        ></textarea>
        <button>Submit habit</button>
      </div> */}
    </div>
  );
};

export default HabitCard;

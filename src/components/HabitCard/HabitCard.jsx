import { CloseBoxIcon, ColorCheckIcon, EditIcon } from "../../assets/icons";
import "./HabitCard.css";

const HabitCard = () => {
  return (
    <div className="habit_card">
      <div className="habit_item">
        <div className="col_1">
          <h6>Habit:</h6>
          <h6>Goal:</h6>
        </div>
        <div className="col_2">
          <p>Drink Water</p>
          <p>
            Lörem ipsum semyd anapörektig tefas homor geocaching. Lid talepunkt
            Fade.
          </p>
          <div className="weekdays">
            <div className="day">
              <p>M</p>
              <div className="day_check">
                <ColorCheckIcon />
              </div>
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
          <CloseBoxIcon />
          <EditIcon />
        </div>
      </div>
      <div className="habit_item">
        <div className="col_1">
          <h6>Habit:</h6>
          <h6>Goal:</h6>
        </div>
        <div className="col_2">
          <p>Drink Water</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit Ipsa</p>
          <div className="weekdays">
            <div className="day">
              <p>M</p>
              <div className="day_check">
                <ColorCheckIcon />
              </div>
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
          <CloseBoxIcon />
          <EditIcon />
        </div>
      </div>

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

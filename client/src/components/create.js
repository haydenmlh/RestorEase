import React, { useState } from "react";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './component_styles.css';
 
export default function Create() {
  const [form, setForm] = useState({
    fulldate: new Date(),
    date: new Date(),
    start_time: "",
    client_username: "",
    barber: "julian",
    barber_email: ""
  });
  const navigate = useNavigate();
  
  let startTime = new Date();
  startTime.setHours(9);
  startTime.setMinutes(0);

  let endTime = new Date();
  endTime.setHours(16);
  endTime.setMinutes(0);

  // These methods will update the state properties.
  function updateForm(value) {
    console.log(value);
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function updateDate(e:Date) {
    updateForm({ fulldate: e});
    let curMonth = e.getMonth() + 1;
    let month;
    let date;
    if (curMonth < 10) {
      month = '0' + curMonth.toString();
    } else {
      month = curMonth.toString();
    }
    let curDate = e.getDate();
    if (curDate < 10) {
      date = '0' + curDate.toString();
    } else {
      date = curDate.toString();
    }
    updateForm({ date: e.getFullYear() + "-" + month + "-" + date});

    let curHour = e.getHours();
    let curMinute = e.getMinutes();
    let hour;
    let minute;
    if (curHour < 10) {
      hour = '0' + curHour.toString();
    } else {
      hour = curHour.toString();
    }
    if (curMinute < 10) {
      minute = '0' + curMinute.toString();
    } else {
      minute = curMinute.toString();
    }
    updateForm({start_time: hour + ":" + minute})
  }


  
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function subDays(date, days) {
    var result = new Date(date);
    result.setHours(result.getDate() - days);
    return result;
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    console.log(newPerson);
    
    await fetch("http://localhost:5000/booking/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", position: "", level: "" });
    navigate("/");
  }


  
  // This following section will display the form that takes the input from the user.
  return (
    <div className="container">
      <div className="booking">
        <h3>Create New Booking</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="barber">Barber:</label>
            <select id="barber" name="barber"
            onChange={(e) => updateForm({ barber: e.target.value})}>
              <option value="julian">Julian</option>
              <option value="kim">Kim</option>
              <option value="lisa">Lisa</option>
              <option value="mark">Mark</option>
            </select>

            {/* <input
              type="text"
              className="form-control"
              id="barber"
              value={form.name}
              onChange={(e) => updateForm({ barber: e.target.value })}
            /> */}
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <DatePicker 
              selected={form.fulldate} 
              showTimeSelect
              minTime={startTime}
              maxTime={endTime}
              includeDateIntervals={[{start: subDays(new Date(), 1), end: addDays(new Date(), 14)}]}
              dateFormat="MMMM d, yyyy h:mm aa"
              onChange={updateDate} 
              id="date"/>
          </div>

          <div className="form-group">
            <label htmlFor="client_username">Client Name</label>
            <input
              type="text"
              className="form-control"
              id="client_username"
              value={form.client_username}
              onChange={(e) => updateForm({ client_username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Booking"
              className="btn btn-primary book btn"
            />
          </div>
        </form>
        </div>
    </div>
  );
}
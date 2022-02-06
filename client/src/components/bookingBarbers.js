import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Booking = (props) => (
  <tr>
    <td>{props.booking.date}</td>
    <td>{props.booking.start_time}</td>
    <td>{props.booking.client_username}</td>
    <td>
      {/* <Link className="btn btn-link" to={`/edit/${props.booking._id}`}>Edit</Link> | */}
      <button className="btn btn-link"
        onClick={() => {
          props.deleteBooking(props.booking._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);
 
export default function BookingList(props) {
  const [bookings, setBookings] = useState([]);
  console.log(props.barber);
  
  // This method fetches the bookings from the database.
  useEffect(() => {
    async function getBookings() {
      const response = await fetch("http://localhost:5000/booking/barber/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({barber: props.barber}),
      });
  
      if (!response.ok) {
        const message = "An error occurred: ${response.statusText}";
        console.log("error fetching");
        console.log(response.statusText);
        return;
      }

      const bookings = await response.json();
      // console.log(bookings);
      setBookings(bookings);
    }
  
    getBookings();
  
    return;
  }, [bookings.length]);
  
  // This method will delete a booking
  async function deleteBooking(param) {
    // console.log(param);
    const iddata = { id: param };
    await fetch("http://localhost:5000/booking/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(iddata),
    });
  
    const newBookings = bookings.filter((el) => el._id !== param);
    setBookings(newBookings);
  }
  
  // This method will map out the bookings on the table
  function bookingList() {
    return bookings.map((booking) => {
      return (
        <Booking
          booking={booking}
          deleteBooking={() => deleteBooking(booking._id)}
          key={booking._id}
        />
      );
    });
  }
  
  // This following section will display the table with the bookings of individuals.
  return (
    <table className="table table-striped" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Client Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{bookingList()}</tbody>
    </table>
  );
}
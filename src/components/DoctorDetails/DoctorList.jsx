import React, { useEffect, useState } from "react";
import "./doctorlist.scss";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;


  useEffect(() => {
    const titleToFind = new URLSearchParams(window.location.search).get(
      "title"
    );
    if (titleToFind) {
      axios
        .get(
          `https://lighthearted-pony-864432.netlify.app/doctors?title=${encodeURIComponent(
            titleToFind
          )}`
        )
        .then((response) => setDoctors(response.data.data))
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      <div className="main">
        <div className="left">
          {doctors.map((doctor) => (
            <div className="doctor-profile" key={doctor.id}>
              <div className="doctor-img">
                <img
                  src = {doctor.image}
                  alt={doctor.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="details">
                <h3>{doctor.name}</h3>
                <h4>{doctor.title}</h4>
                <h4>{`Experience: ${doctor.experience} years`}</h4>
                <h4>{`Location: ${doctor.location} * ${doctor.clinicName}`}</h4>
                <h4>{`Price: ${doctor.price} consultation fee at clinic`}</h4>
                <p>
                  100% <span>{`${doctor.patientStories} Patient stories`}</span>
                </p>
                <div className="right">
                  <p>Available Today</p>
                  <button>
                    Book Appointment
                    <br />
                    No Booking Fee
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorList;

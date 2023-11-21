import React from 'react';
import { Link } from 'react-router-dom';
import './bookappointment.scss';
import image1 from '../../assests/img1.png';
import image2 from '../../assests/img2.png';
import image3 from '../../assests/img3.png';

const BookAppointment = () => {
  return (
    <>
      <div className="main-container">
        <h2>Book an appointment for an in-clinic consultation</h2>
        <h3>Find experienced doctors across all specialties</h3>
        <div className="category">
          <Link to="/doctors?title=Dentist" className="dentist">
            <img src={image1} alt="Dentist" />
            <h3>Dentist</h3>
            <p>Teething troubles? Schedule a dental checkup </p>
          </Link>
          <Link to="/doctors?title=Gynecologist%20and%20Obstetrician" className="gynecologist">
            <img src={image2} alt="Gynecologist" />
            <h3>Gynecologist and Obstetrician</h3>
            <p>Explore women's health, pregnancy, and infertility treatments</p>
          </Link>
          <Link to="/doctors?title=Deititan%20and%20Nutrition" className="nutrition">
            <img src={image3} alt="Nutrition" />
            <h3>Dietitian and Nutrition</h3>
            <p>Get guidance on eating right, weight management, and sports nutrition </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;

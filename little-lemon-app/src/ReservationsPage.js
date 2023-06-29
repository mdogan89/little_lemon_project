import React, { useReducer, useState } from 'react';
import Reservations from './Reservations';
import { fetchAPI, submitAPI } from './API';
import { useNavigate } from 'react-router-dom';

export default function ReservationsPage() {

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate()

    const [confirmedBookings, setConfirmedBookings] = useState(localStorage.getItem("bookings"))

    const submitForm = (formData) => {
        const response = submitAPI(formData);
        setConfirmedBookings(() => {
            console.log(formData)
            const booking = { ...confirmedBookings, formData }
            console.log(booking)
            console.log(confirmedBookings)
            return booking
        })

        localStorage.setItem("bookings", JSON.stringify(confirmedBookings))
        if (response) {
            navigate('/confirmed-booking')
        }
    }



    return (<>
        <Reservations
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    </>)
}
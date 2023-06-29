import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsPage from './ReservationsPage';
import { MemoryRouter } from 'react-router-dom';

test("Renders the Reservation button", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>);
  const btn = screen.getByText("Make your reservation");
  expect(btn).toBeInTheDocument();
});

test('Simulates inital times', () => {
  const { getByTestId, getAllByTestId } = render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>);
  fireEvent.click(getByTestId('select'));
  let options = getAllByTestId('select-option');
  expect(options !== []);
})

test("Simulates date change", () => {
  const { getByTestId, getAllByTestId } = render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>);
  const dateSelector = screen.getByLabelText(/Choose date/);

  fireEvent.click(getByTestId('select'));
  const todaysOptions = getAllByTestId('select-option');
  const date = "2024-01-01"

  fireEvent.change(dateSelector, { target: { value: date } });
  fireEvent.click(getByTestId('select'));
  const newOptions = getAllByTestId('select-option');
  expect(todaysOptions !== newOptions);
})

test("Submits reservation form", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>);
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data !== new_data)
})
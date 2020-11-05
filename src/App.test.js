import React from 'react';
import { fireEvent, render } from '@testing-library/react';
// import App from './App';
import Table from './components/Table';

describe("Table testing", () => {
  test('The title of the table', () => {
    const { getByText } = render(<Table />);
    const linkElement = getByText("Prize List");
    expect(linkElement).toBeInTheDocument();
  });
})

it("Full table renders correctly", () => {
  const {queryByTestId} = render(<Table/>);

  expect(queryByTestId("table"));
})




import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './input';

test('renders input with label', () => {
  render(<Input label="Username" value="" onChange={() => {}} />);
  expect(screen.getByLabelText('Username')).toBeInTheDocument();
});

test('shows error message', () => {
  render(<Input label="Email" value="" onChange={() => {}} error="Required" />);
  expect(screen.getByText('Required')).toBeInTheDocument();
});

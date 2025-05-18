import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './modal';

test('renders modal when open', () => {
  render(
    <Modal isOpen={true} onClose={() => {}} title="Test Title">
      <p>Hello</p>
    </Modal>
  );
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

test('does not render modal when closed', () => {
  const { queryByText } = render(
    <Modal isOpen={false} onClose={() => {}} title="Hidden Title">
      <p>This won't show</p>
    </Modal>
  );
  expect(queryByText('Hidden Title')).toBeNull();
});

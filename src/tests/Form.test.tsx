import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import { FormPage } from '../pages/FormPage';
import { FAIL_ADDRESSES, FAIL_NAMES, TEST_ADDRESS, TEST_NAME } from '../data/test-data';
import { CreateAccForm } from '../components/Form';

const resetForm = () => {
  const mockFunc = jest.fn();
  render(<CreateAccForm formHandler={mockFunc} />);
};

describe('Form', () => {
  describe('name input', () => {
    it.each(FAIL_NAMES)('should fail validation on input "%s"', async (item) => {
      resetForm();
      fireEvent.change(screen.getByLabelText(/Surname/i), {
        target: { value: item },
      });
      await userEvent.click(screen.getByText('Create account'));
      expect(screen.queryByText(/name should be at least/)).toBeInTheDocument();
    });
  });

  describe('address input', () => {
    it.each(FAIL_ADDRESSES)('should fail validation on input "%s"', async (item) => {
      resetForm();
      fireEvent.change(screen.getByLabelText(/address/i), {
        target: { value: item },
      });
      await userEvent.click(screen.getByText('Create account'));
      expect(screen.queryByText(/address should be at least/)).toBeInTheDocument();
    });
  });

  describe('should fail validation with unchecked', () => {
    beforeEach(async () => {
      resetForm();
      await userEvent.click(screen.getByText('Create account'));
    });
    it('title block', () => {
      expect(screen.queryByText('make your choice')).toBeInTheDocument();
    });
    it('shipping method', () => {
      expect(screen.queryByText(/make your choice!/)).toBeInTheDocument();
    });
    it('agreement', () => {
      expect(screen.queryByText(/this field is required/)).toBeInTheDocument();
    });
    it('file', () => {
      expect(screen.queryByText(/provide image in/)).toBeInTheDocument();
    });
  });

  it('validation should fail with non-png image', async () => {
    const file = new File([new Blob()], 'fakeImage', { type: 'image/jpeg' });
    resetForm();
    await userEvent.upload(screen.getByLabelText(/User photo/i), file);
    await userEvent.click(screen.getByText('Create account'));
    expect(screen.queryByText(/provide image in/)).toBeInTheDocument();
  });
});

describe('Correctly completed form', () => {
  beforeEach(async () => {
    const mockFunc = jest.fn();
    URL.createObjectURL = mockFunc;
    const pngFile = new File([new Blob()], 'fakeImage', { type: 'image/png' });
    render(<FormPage />);
    fireEvent.change(screen.getByLabelText(/Surname/i), {
      target: { value: TEST_NAME },
    });
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: TEST_ADDRESS },
    });
    fireEvent.change(screen.getByLabelText(/Date-of-birth/i), {
      target: { valueAsNumber: 0 },
    });
    fireEvent.click(screen.getByLabelText(/mr/i));
    fireEvent.click(screen.getByLabelText(/I hereby consent/i));
    await userEvent.upload(screen.getByLabelText(/User photo/i), pngFile);
    await userEvent.selectOptions(screen.getByLabelText(/shipping Method/i), 'DHL');
    await userEvent.click(screen.getByText('Create account'));
  });
  it('pass validation', () => {
    screen.queryAllByTestId('error').forEach((element) => {
      expect(element).toBeEmptyDOMElement();
    });
  });
  it('creates an account', () => {
    expect(screen.queryByText(`Address: ${TEST_ADDRESS}`)).toBeInTheDocument();
  });
});

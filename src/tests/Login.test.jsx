import React from 'react';
import { describe, expect, it } from 'vitest';
import App from '../App'
import Login from '../pages/Login.jsx';
import { render, screen } from '@testing-library/react';

describe('Tests the whole login page', () => {
  it('Tests if the page renders correctly', () => {
    render(<Login />);
  })
});

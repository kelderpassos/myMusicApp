import React from 'react';
import renderWithRouter from './helpers/renderWithRouter';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';



describe('Tests the page "/favorites"', () => {
  it('should be empty on first render', async () => {
    renderWithRouter(<App />, { route: '/favorites' });

    const loadingTextEl = screen.getAllByText('Loading...');
    expect(loadingTextEl.length).toBe(2);

    await waitForElementToBeRemoved(loadingTextEl, { timeout: 3000});
    screen.debug();
  });

})
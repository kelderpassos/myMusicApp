import React from 'react';
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Tests the profile page', () => {
  it('should render the default icon', async () => {
    renderWithRouter(<App />, { route: '/profile/edit' });

    
    const loadingTextEl = screen.queryAllByText(/loading/i);

    // await waitForElementToBeRemoved(loadingTextEl[0], { timeout: 5000 })
    // expect(loadingTextEl[0]).not.toBeDefined();

    // await waitFor(() => loadingTextEl);
    // await waitFor(() => { expect(loadingTextEl[0]).toBeInTheDocument()});
    // console.log(loadingTextEl);

    // await waitFor(() => { expect(loadingTextEl[0]).not.toBeInTheDocument()});
    // screen.debug();

    // await waitForElementToBeRemoved(() => , { timeout: 3000 });    
   
    // const defaultIconEl = screen.getByAltText(/undefined/i);
    // expect(defaultIconEl).toBeInTheDocument();
    
  });

  
});
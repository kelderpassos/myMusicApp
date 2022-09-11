import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import renderWithRouter from './helpers/renderWithRouter';
import getMusics from '../services/musicsAPI';
import App from '../App';




describe('Test the page album', () => {
  // afterEach(() => {
  //   vi.restoreAllMocks()
  // });
  
  const ID = '1299151419';
  // vi.mock('../services/musicsAPI');

  
  it('should render the selected album', async () => {
    // renderWithRouter(<App />, { route: `/album/${ID}` });
    
    // const getMusics = vi.fn();
    // screen.debug();

  })
})
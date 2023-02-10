import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

 describe('Testando a página de Login', () => {
  it('verifica se os elementos estão presentes na tela de login', () => {
    renderWithRouterAndRedux(<App />);

    expect(screen.getByTestId('input-player-name')).toBeInTheDocument();
    expect(screen.getByTestId('input-gravatar-email')).toBeInTheDocument();
    expect(screen.getByTestId('btn-play')).toBeInTheDocument();
    expect(screen.getByTestId('btn-settings')).toBeInTheDocument();
  });

  it('verifica se há possibilidade de inserir dados no input de nome', () => {
    renderWithRouterAndRedux(<App />);
    
    const inputPlayerName = screen.getByTestId('input-player-name');
    userEvent.type(inputPlayerName, 'Fenrock');
  });

  it('verifica se há possibilidade de inserir dados no input de "gravatar email"', () => {
    renderWithRouterAndRedux(<App />);
    
    const inputGravatarEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputGravatarEmail, 'fenrock@triviamail.com');
  });

  it('verifica se o botão de jogar está desativado enquanto não tem nada preenchido nos inputs', () => {
    renderWithRouterAndRedux(<App />);

    const btnPlay = screen.getByTestId('btn-play');
    expect(btnPlay).toBeDisabled();

    const inputPlayerName = screen.getByTestId('input-player-name');
    const inputGravatarEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputPlayerName, 'Fenrock');
    userEvent.type(inputGravatarEmail, 'fenrock@triviaemail.com');
    expect(btnPlay).toBeEnabled();
  });
 });
 
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import {requestToken} from '../helpers/services';

const GRAVATAR_EMAIL = 'fenrock@triviaemail.com'

 describe.only('Testando a página de Login', () => {
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
    userEvent.type(inputGravatarEmail, GRAVATAR_EMAIL);
  });

  it('verifica se o botão de jogar está desativado enquanto não tem nada preenchido nos inputs', () => {
    renderWithRouterAndRedux(<App />);

    const btnPlay = screen.getByTestId('btn-play');
    expect(btnPlay).toBeDisabled();

    const inputPlayerName = screen.getByTestId('input-player-name');
    const inputGravatarEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputPlayerName, 'Fenrock');
    userEvent.type(inputGravatarEmail, GRAVATAR_EMAIL);
    expect(btnPlay).toBeEnabled();
  });

  it('verifica se o botão de jogar está habilitado quando os inputs estão preenchidos', async () => {
    const {history} = renderWithRouterAndRedux(<App />);

    const btnPlay = screen.getByTestId('btn-play');
    const inputPlayerName = screen.getByTestId('input-player-name');
    const inputGravatarEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputPlayerName, 'Fenrock');
    userEvent.type(inputGravatarEmail, GRAVATAR_EMAIL);
    expect(btnPlay).toBeEnabled();

    userEvent.click(btnPlay);
    await waitFor(() => {
      history.push('/game');
      expect(screen.getByTestId('header-player-name')).toBeInTheDocument();
      expect(screen.getByTestId('header-score')).toBeInTheDocument();
      expect(screen.getByTestId('question-text')).toBeInTheDocument();
    });

    expect(inputPlayerName).not.toBeInTheDocument();
    
  });

  it('Verifica se as informações de usuario são salvas no estado global', async () => {
    const {store} = renderWithRouterAndRedux(<App />);

    const btnPlay = screen.getByTestId('btn-play');
    const inputPlayerName = screen.getByTestId('input-player-name');
    const inputGravatarEmail = screen.getByTestId('input-gravatar-email');
    userEvent.click(inputPlayerName)
    userEvent.type(inputPlayerName, 'Fenrock');
    userEvent.click(inputGravatarEmail)
    userEvent.type(inputGravatarEmail, GRAVATAR_EMAIL);
    expect(btnPlay).toBeEnabled();

    userEvent.click(btnPlay);

    await waitFor(() => {
      const { player } = store.getState();
      expect(player.name).toBe('Fenrock');
    });
  });
 });

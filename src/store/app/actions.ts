import { action } from 'typesafe-actions';
import { AppActions } from './types';

export const set_current_screen = (screenToChange: string) => action(AppActions.SET_CURRENT_SCREEN, screenToChange);
import { Action, ActionCreator } from 'redux';
export interface IAction<T = string> {
    type: T;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export type INCREMENT = IAction<typeof INCREMENT>;
export type DECREMENT = IAction<typeof DECREMENT>;

export const increment: ActionCreator<INCREMENT> = () => ({
    type: INCREMENT
});

export const decrement: ActionCreator<DECREMENT> = () => ({
    type: DECREMENT
});

export type CounterAction = INCREMENT | DECREMENT;

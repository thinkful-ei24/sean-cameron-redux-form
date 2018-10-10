import React from 'react';

export const required = value => value ? undefined : 'Field is required';
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Field cannot be empty';
export const fiveChar = value => value.length === 5 ? undefined : 'Field must be 5 characters';
export const charNumber = value => (!Number.isNaN(Number(value))) ? undefined : 'Field can only contain numbers'
import React from 'react';
import css from './modal.module.css';

type Props = React.ComponentPropsWithoutRef<'input'>;

export const ModalInput: React.FC<Props> = ({ id, value, onKeyPress, onChange, onBlur }) => (
  <span>
    <input
      type="number"
      inputMode="numeric"
      className={css.input}
      id={id}
      value={value || ''}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onBlur={onBlur}
    />
    w
  </span>
);

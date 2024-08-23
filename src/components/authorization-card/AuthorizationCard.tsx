import React from 'react';
import { Button } from '../../wrappers/button/Button';
import { AuthorizationCardWrapper } from './styled';
const AuthorizationCard: React.FC = () => {
  return (
    <AuthorizationCardWrapper>
      <h1 className="authorization__title">Вход</h1>
      <div className="authorization__input-wrapper">
        <input
          className="authorization__input"
          type="text"
          id="email"
          placeholder=" "
        />
        <label className="authorization__input-label" htmlFor="email">
          E-mail
        </label>
      </div>
      <Button className="authorization__button">Войти</Button>
    </AuthorizationCardWrapper>
  )
}

export default AuthorizationCard;
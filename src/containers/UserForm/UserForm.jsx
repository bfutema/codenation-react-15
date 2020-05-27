import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt=""/>
              </div>
              <p className="user__name">
                John Doe
                <span>@johndoe</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input type="text" placeholder="Ex: Fulano da silva" value="John Doe"/>
            <label>Usuário</label>
            <input type="text" placeholder="Ex: fulano_da_silva" value="johndoe"/>
            <label>Email</label>
            <input type="email" placeholder="Ex: fulano@provedor.com" value="johndoe@gmail.com"/>
            <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input type="text" placeholder="http://..."/>
            <button type="button">Cadastrar</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;

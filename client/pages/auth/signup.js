import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import useRequest from '../../hooks/use-request';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Outside from '../../assets/outside.svg';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';
import LanguageSelector from '../../components/lang-selector';


const IconContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

// const LangButton = ({t}) => (
//   <div>
//     <CustomButton children={t('pushButton')} />
//   </div>
// );



const SignUp = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async event => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
      <IconContainer>
        <Outside color='green'/>
      </IconContainer>
      
        <CustomButton 
          children={<p>{t('pushButton')}</p>} 
          onClick={() => i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')}
        />
      <LanguageSelector />
      <p>{t('pushButton')}</p>
    </form>
  );
};


SignUp.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})



export default (SignUp);

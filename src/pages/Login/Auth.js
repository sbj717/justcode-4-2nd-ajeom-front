import React, { useEffect } from 'react';
import {
  CLIENT_SECRET,
  REST_API_KEY,
  REDIRECT_URI,
  KAKAOINIT,
} from '../../../src/config';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();

  const { Kakao } = window;
  const code = new URL(window.location.href).searchParams.get('code');
  const bodyData = {
    grant_type: 'authorization_code',
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: code,
    client_secret: CLIENT_SECRET,
  };

  const queryStringBody = Object.keys(bodyData)
    .map(k => encodeURIComponent(k) + '=' + encodeURI(bodyData[k]))
    .join('&');

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: queryStringBody,
    })
      .then(res => res.json())
      .then(data => {
        Kakao.init(KAKAOINIT);
        sendData(data);
      });
  }, [Kakao, queryStringBody]);

  const sendData = async data => {
    await fetch('http://localhost:8000/user/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (!res.token) return;
        localStorage.setItem('token', res.token);
        navigate('/');
      });
  };
  return null;
}

export default Auth;

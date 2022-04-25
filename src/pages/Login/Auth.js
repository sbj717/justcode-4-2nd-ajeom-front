import React, { useEffect, useState } from 'react';
import { CLIENT_SECRET, REST_API_KEY, REDIRECT_URI } from './OAuth';
import { useNavigate } from 'react-router-dom';
function Auth(props) {
  const { Kakao } = window;
  const code = new URL(window.location.href).searchParams.get('code');
  const KAKAOINIT = '407ccf3a53942a0a9a43fa86a6e8590f';
  const navigate = useNavigate;

  const bodyData = {
    grant_type: 'authorization_code',
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: code,
    client_secret: CLIENT_SECRET,
  };

  const ACCESS_TOKEN = '-RRb91NspOLOUpdd0g1Mua_NHPfr6ZbAPu786wo9dRkAAAGAXuGL0A';

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
    });
  }, [queryStringBody]);

  useEffect(() => {
    fetch('/v1/user/access_token_info', {
      method: 'GET',
    });
  }, []);

  const sendData = async data => {
    await fetch('http://localhost:8000/user/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(data),
    }).then(res => res.json());
  };
  return null;
}

export default Auth;

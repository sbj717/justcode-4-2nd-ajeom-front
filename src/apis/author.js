//작가리스트, 작가신청 관련 API 모음

import { BASE_URL } from '../config';
const token = localStorage.getItem('token');
const getAuthorList = async () => {
  return await fetch(`${BASE_URL}/user/authorList`).then(res => res.json());
};

const requestAuthor = async inputValue => {
  return await fetch(`${BASE_URL}/user/authorRequest`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
    body: JSON.stringify({
      description: inputValue,
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        return res.success;
      }
    });
};

const getSavedPost = async () => {
  return await fetch(`${BASE_URL}/list/drawer?page=1&pageSize=3`, {
    headers: { 'Content-Type': 'application/json', token: token },
  }).then(res => res.json());
};

export { getAuthorList, requestAuthor, getSavedPost };

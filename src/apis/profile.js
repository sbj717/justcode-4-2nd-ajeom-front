// 내 프로필, 작가 프로필 관련 API 모음
import { BASE_URL } from '../config';

const token = localStorage.getItem('token');

const getMyProfile = async () => {
  return await fetch(`${BASE_URL}/user/myProfile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  }).then(res => res.json());
};

export { getMyProfile };

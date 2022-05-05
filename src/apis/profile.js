// 내 프로필, 작가 프로필 관련 API 모음

const localhost = 'http://localhost:8000';
const token = localStorage.getItem('token');

const getMyProfile = async () => {
  return await fetch(`${localhost}/user/myProfile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  }).then(res => res.json());
};

export { getMyProfile };

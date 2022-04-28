const localhost = 'http://localhost:8000';
const token = localStorage.getItem('token') || sessionStorage.getItem('token');

const getAuthorList = async () => {
  return await fetch(`${localhost}/user/authorList`).then(res => res.json());
};

const requestAuthor = async inputValue => {
  return await fetch(`${localhost}/user/authorRequest`, {
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
        console.log('SUCCESS');
        return res.success;
      }
    });
};

export { getAuthorList, requestAuthor };

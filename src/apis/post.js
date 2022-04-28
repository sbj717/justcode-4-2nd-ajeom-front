const localhost = 'http://localhost:8000';
// const token = localStorage.getItem('token') || sessionStorage.getItem('token');

const getDetial = async postId => {
  return await fetch(`${localhost}/post/${postId}`).then(res => res.json());
};

export { getDetial };

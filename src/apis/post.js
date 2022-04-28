const localhost = 'http://localhost:8000';
// const token = localStorage.getItem('token') || sessionStorage.getItem('token');

const getDetail = async postId => {
  return await fetch(`${localhost}/post/${postId}`).then(res => res.json());
};

export { getDetail };

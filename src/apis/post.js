//발행글(포스트) 관련 API 모음

const localhost = 'http://localhost:8000';
const token = localStorage.getItem('token');

const getDetail = async postId => {
  return await fetch(`${localhost}/post/${postId}`).then(res => res.json());
};

const deletePost = async myPostId => {
  return await fetch(`${localhost}/write/${myPostId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', token: token },
  }).then(res => res.json());
};

const updatePost = async (myPostId, set) => {
  return await fetch(`${localhost}/write/${myPostId}?isPublished=${set}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', token: token },
  }).then(res => res.json());
};

export { getDetail, deletePost, updatePost };

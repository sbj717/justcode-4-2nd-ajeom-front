const localhost = 'http://localhost:8000';

const getMainKeywords = async () => {
  return await fetch(`${localhost}/keyword/main`).then(res => res.json());
};

const getRelatedKeywords = async keywordId => {
  return await fetch(`${localhost}/keyword/${keywordId}`).then(res =>
    res.json()
  );
};

export { getMainKeywords, getRelatedKeywords };

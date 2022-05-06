//키워드 관련 API 모음
import { BASE_URL } from '../config';
const getMainKeywords = async () => {
  return await fetch(`${BASE_URL}/keyword/main`).then(res => res.json());
};

const getRelatedKeywords = async keywordId => {
  return await fetch(`${BASE_URL}/keyword/${keywordId}`).then(res =>
    res.json()
  );
};

export { getMainKeywords, getRelatedKeywords };

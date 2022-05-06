import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import WriterInfo from './WriterInfo';
import Keyword from '../List/Keyword';
import Header from '../components/Header/Header';
import { useScroll } from '../../hooks/useScroll';
import { updatePost, deletePost, getDetail } from '../../apis/post';
import { getMyProfile } from '../../apis/profile';
import style from './AjeomBody.module.scss';

function Detail() {
  const params = useParams();
  const postId = params.id;
  const navigate = useNavigate();

  const [navStyle, setNavStyle] = useState(false);
  const scroll = useScroll();

  const MainTextFieldRef = useRef(null);
  const [progressWidth, setProgressWidth] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [postLists, setPostLists] = useState({
    postDetail: [
      {
        id: 0,
        title: '',
        subtitle: '',
        body: '',
        thumbnail_url: '',
        user_id: 0,
        nickname: '',
        description: '',
        profile_img_url: '',
        keywords: [{ id: 0, name: '' }],
      },
    ],
    previousPostInfo: [{ id: 0, title: '', user_id: 0 }],
    nextPostInfo: [{ id: 0, title: '', user_id: 0 }],
  });

  //scrollY값에 따른 Header style 변화
  useEffect(() => {
    scroll > 530 ? setNavStyle(true) : setNavStyle(false);
  }, [scroll]);

  let myPostId = postLists.postDetail[0].id;

  //본인 포스트 삭제 API
  function delPost() {
    let result = window.confirm('정말 삭제하시겠습니까?');
    if (result) {
      deletePost(myPostId).then(data => {
        alert('포스트가 삭제되었습니다.');
        navigate(`/`);
        window.scrollTo(0, 0);
      });
    }
  }

  //본인 포스트 발행 취소, 재발행 API
  function setIsPublished(set) {
    updatePost(postId, set).then(data => {
      if (set === 1) {
        alert('포스트가 발행되었습니다.');
      } else if (set === 0) {
        alert('발행이 취소 되었습니다.');
      }
      window.scrollTo(0, 0);
      window.location.reload();
    });
  }

  //userId get 하기 위한 api
  useEffect(() => {
    getMyProfile().then(data => setUserInfo(data));
  }, []);

  //detail body 불러오는 API
  useEffect(() => {
    getDetail(postId).then(data => {
      setPostLists(data);
      if (data.postDetail[0].body) {
        MainTextFieldRef.current.innerHTML = `${data.postDetail[0].body}`;
      }
    });
  }, [params.id, postId]);

  //Params로 이전 글 이동
  const goToPrevPost = () => {
    navigate(`/detail/${postLists.previousPostInfo[0].id}`);
    window.scrollTo(0, 0);
  };

  //Params로 다음 글 이동
  const goToNextPost = () => {
    navigate(`/detail/${postLists.nextPostInfo[0].id}`);
    window.scrollTo(0, 0);
  };

  //내 글일 경우 내 프로필로 이동 || Params로 작가 프로필 이동
  const goToProfile = () => {
    postLists.postDetail[0].user_id === userInfo.id
      ? navigate('/profile')
      : navigate(`/author/${postLists.postDetail[0].user_id}`);
    window.scrollTo(0, 0);
  };

  //progressbar 계산하는 useEffect
  useEffect(() => {
    const progressBarHandler = () => {
      const scrollY = window.scrollY;
      const remainHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progressRatio = `${(scrollY / remainHeight) * 100}`;

      //조건부 렌더링 (nav바가 보일때만 프로그레스 width 주기)
      scrollY > 530 ? setProgressWidth(progressRatio) : setProgressWidth(0);
    };

    window.addEventListener('scroll', progressBarHandler);

    return () => window.removeEventListener('scroll', progressBarHandler);
  }, []);

  return (
    <>
      {postLists.postDetail[0].user_id === userInfo.id ? (
        <ButtonDiv>
          <DelButton mainColor="#e22" onClick={delPost}>
            삭제
          </DelButton>

          {postLists.postDetail[0].is_published === 0 ? (
            <DelButton
              mainColor="#000"
              onClick={() => {
                setIsPublished(1);
              }}
            >
              발행하기
            </DelButton>
          ) : (
            <DelButton
              mainColor="#000"
              onClick={() => {
                setIsPublished(0);
              }}
            >
              발행취소
            </DelButton>
          )}
        </ButtonDiv>
      ) : null}

      <Header navStyle={navStyle} />
      {postLists.postDetail.map(data => (
        <Thumbnail key={data.id} data={data} />
      ))}
      <Progressbar style={{ width: progressWidth + '%' }} />
      <MainBody>
        <BodyWrapper>
          <section className={style.ajeomBody}>
            <div ref={MainTextFieldRef} />
          </section>
          <KeywordBtnWrapper>
            {postLists.postDetail.map(data =>
              data.keywords.map(data => <Keyword key={data.id} data={data} />)
            )}
          </KeywordBtnWrapper>
        </BodyWrapper>
      </MainBody>

      <WriterWrapper>
        <WriterSubWrapper>
          {postLists.postDetail.map(data => (
            <WriterInfo key={data.id} data={data} goToProfile={goToProfile} />
          ))}
          <BtnWrapper>
            <Proposition>제안하기</Proposition>
            <Subscription>구독하기</Subscription>
          </BtnWrapper>
        </WriterSubWrapper>
      </WriterWrapper>

      <NavBottom>
        {postLists.previousPostInfo.length > 0 ? (
          <NavWrapper onClick={goToPrevPost}>
            <Prev>작가의 이전글</Prev>
            <PrevPost key={postLists.previousPostInfo[0].id}>
              {postLists.previousPostInfo[0].title}
            </PrevPost>
          </NavWrapper>
        ) : (
          <NavWrapper />
        )}
        {postLists.nextPostInfo.length > 0 ? (
          <NavWrapper onClick={goToNextPost}>
            <NextPost key={postLists.nextPostInfo[0].id}>
              {postLists.nextPostInfo[0].title}
            </NextPost>
            <Next>작가의 다음글</Next>
          </NavWrapper>
        ) : null}
      </NavBottom>
    </>
  );
}

const Progressbar = styled.div`
  position: fixed;
  top: 63px;
  height: 1.8px;
  background-color: #29434e;
`;

const MainBody = styled.section`
  display: flex;
  justify-content: center;
`;

const BodyWrapper = styled.section`
  width: 700px;
  padding-top: 4rem;
`;

const KeywordBtnWrapper = styled.div`
  display: flex;
  margin: 7rem 0 4rem 0;
`;

const WriterWrapper = styled.section`
  display: flex;
  justify-content: center;
  color: #333333;
  background-color: #fbfbfb;
`;

const WriterSubWrapper = styled.div`
  width: 700px;
  margin-bottom: 2rem;
  font-weight: 200;
`;

const BtnWrapper = styled.section`
  float: right;
  margin-bottom: 2rem;
`;

const Proposition = styled.button`
  width: 5rem;
  margin-left: 0.7rem;
  padding: 0.4rem 0;
  color: #666;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 3rem;
  font-weight: 200;
`;

const Subscription = styled(Proposition)`
  color: #00c3bd;
  border: 1px solid #00c3bd;
`;

const NavBottom = styled.section`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 0;
  border-top: 1px solid #eee;
  background-color: #fff;
`;

const NavWrapper = styled.section`
  display: flex;
  align-items: center;
  color: #333333;
  font-weight: 200;
  cursor: pointer;
`;

const Prev = styled.div`
  margin-left: 3rem;
  color: #959595;
  font-size: 0.8rem;
`;

const PrevPost = styled.div`
  margin-left: 1rem;
  color: #333333;
`;

const NextPost = styled(PrevPost)`
  margin-right: 1rem;
`;

const Next = styled(Prev)`
  margin: 0 3rem 0 0;
`;

const ButtonDiv = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  z-index: 100;
`;
const DelButton = styled.button`
  float: right;
  margin-left: 5px;
  padding: 0.3rem 1.5rem;
  background-color: #ffffff;
  color: ${props => {
    return props.mainColor;
  }};
  border: 1.3px solid
    ${props => {
      return props.mainColor;
    }};
  border-radius: 20px;
  font-weight: 300;
  font-size: 13px;
  z-index: 100;
  cursor: pointer;
`;

export default Detail;

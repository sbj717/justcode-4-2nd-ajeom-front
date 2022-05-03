import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import style from './AjeomBody.module.scss';
import Header from '../components/Header/Header';
import Thumbnail from './Thumbnail';
import Keyword from '../List/Keyword';
import WriterInfo from './WriterInfo';
import { getDetail } from '../../apis/post';

function Detail() {
  const params = useParams();
  const postId = params.id;
  const navigate = useNavigate();

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

  function delPost() {
    let result = window.confirm('정말 삭제하시겠습니까?');
    if (result) {
      const token = localStorage.getItem('token');

      fetch(`http://localhost:8000/write/${postLists.postDetail[0].id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', token: token },
      })
        .then(res => res.json())
        .then(data => {
          alert('포스트가 삭제되었습니다.');
          navigate(`/`);
          window.scrollTo(0, 0);
        });
    }
  }

  function setIsPublished(set) {
    const token = localStorage.getItem('token');
    fetch(
      `http://localhost:8000/write/${postLists.postDetail[0].id}?isPublished=${set}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', token: token },
      }
    )
      .then(res => res.json())
      .then(data => {
        if (set === 1) {
          alert('포스트가 발행되었습니다.');
        } else if (set === 0) {
          alert('발행이 취소 되었습니다.');
        }

        window.scrollTo(0, 0);
        window.location.reload();
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8000/user/myProfile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      });
  }, []);

  useEffect(() => {
    getDetail(postId).then(data => {
      setPostLists(data);
      if (data.postDetail[0].body) {
        MainTextFieldRef.current.innerHTML = `${data.postDetail[0].body}`;
      }
    });
  }, [params.id]);

  const goToPrevPost = () => {
    navigate(`/detail/${postLists.previousPostInfo[0].id}`);
    window.scrollTo(0, 0);
  };

  const goToNextPost = () => {
    navigate(`/detail/${postLists.nextPostInfo[0].id}`);
    window.scrollTo(0, 0);
  };

  const goToProfile = () => {
    navigate(`/author/${postLists.postDetail[0].user_id}`);
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

      <Header />
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
  background-color: #fbfbfb;
  color: #333333;
`;

const WriterSubWrapper = styled.div`
  width: 700px;
  font-weight: 200;
  margin-bottom: 2rem;
`;

const BtnWrapper = styled.section`
  float: right;
  margin-bottom: 2rem;
`;

const Proposition = styled.button`
  width: 5rem;
  border: 1px solid #bbb;
  border-radius: 3rem;
  color: #666;
  background: #fff;
  padding: 0.4rem 0;
  font-weight: 200;
  margin-left: 0.7rem;
`;

const Subscription = styled(Proposition)`
  border: 1px solid #00c3bd;
  color: #00c3bd;
`;

const NavBottom = styled.section`
  position: sticky;
  bottom: 0;
  padding: 1.4rem 0;
  border-top: 1px solid #eee;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

const NavWrapper = styled.section`
  display: flex;
  align-items: center;
  color: #333333;
  font-weight: 200;
  cursor: pointer;
`;

const Prev = styled.div`
  color: #959595;
  font-size: 0.8rem;
  margin-left: 3rem;
`;

const PrevPost = styled.div`
  color: #333333;
  margin-left: 1rem;
`;

const NextPost = styled(PrevPost)`
  margin-right: 1rem;
`;

const Next = styled(Prev)`
  margin: 0 3rem 0 0;
`;

const ButtonDiv = styled.div`
  position: absolute;
  z-index: 100;
  right: 20px;
  top: 15px;
`;
const DelButton = styled.button`
  margin-left: 5px;
  font-size: 13px;
  z-index: 100;
  border: 1.3px solid
    ${props => {
      return props.mainColor;
    }};
  border-radius: 20px;
  padding: 0.3rem 1.5rem;

  background-color: #ffffff;
  color: ${props => {
    return props.mainColor;
  }};
  font-weight: 300;
  cursor: pointer;
  float: right;
`;

export default Detail;

import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import style from './AjeomBody.module.scss';

function Detail() {
  const [postLists, setPostLists] = useState([]);
  const [keywordLists, setKeywordLists] = useState({
    keywordList: [{ id: 0, mainKeyword: [] }],
  });
  const [writerLists, setWriterLists] = useState({
    recommendedWriter: [{ id: 0, profileImg: '', writer: '', description: '' }],
  });
  const fillteredWriter = writerLists.recommendedWriter.filter(
    el => el.id === 1
  );

  const MainTextFieldRef = useRef(null);

  useEffect(() => {
    fetch('/data/detail.json')
      .then(res => res.json())
      .then(data => setPostLists(data.posts));
  }, []);

  useEffect(() => {
    fetch('/data/keywords.json')
      .then(res => res.json())
      .then(data => setKeywordLists(data));
  }, []);

  useEffect(() => {
    fetch('/data/writer.json')
      .then(res => res.json())
      .then(data => setWriterLists(data));
  }, []);

  useEffect(() => {
    MainTextFieldRef.current.innerHTML =
      '<h2>"세상 모든 일이 그렇지만 처음부터 어떤 일을 잘하는 사람은 거의 없다" 고 생각한다.</h2><div><br></div><div>일반 회사에 들어가더라도 신입사원들은 일을 어떻게 처리하는지 처음부터 배우며 업무를 하게 된다. 하늘이 내린 천재가 아니라면 대부분 비슷할 수밖에 없는 보이지 않는 법칙 중 하나다.</div><div><br></div><div>그리고 그 법칙은 편의점 알바에게도 마찬가지로 적용된다.</div><div><br></div><div><br></div><div>본격적인 업무에 투입되기 전에 포스기 사용법부터 재고 파악, 물건 정리하는 법 등을 배우는 교육 시간이 따로 있고, 나도 그런 교육을 하루 3-4시간씩 3회 정도 받았다.</div><div><br></div><div>그리고 그때 나에게 교육을 시켜주셨던 분 중의 한 분은 평일 야간에 알바를 하는 60대 중반의 할아버지였다.</div><div><br></div><h3>역시나 세상 모든 일이 그렇지만 교육받는 3-4시간 동안 일만 하지는 않는다.</h3><div><br></div><div>회사 생활도 8시간 내내 쉬지도 않고 일만 하지 않는 것처럼.</div><div><br></div><div>야간 시간대라 손님이 뜸할 경우에는 이런저런 얘기를 나누기도 하고 그러다 손님이 오면 또 실습 차원에서 내가 손님을 응대하기도 했다. &nbsp;</div><div><br></div><div>그리고 손님이 빠져나가면 다시 이런저런 얘기를 하게 된다. 두 사람이 같은 공간에서 카운터서 나란히 있으면서 아무 얘기도 안 하며 뻘쭘하게 있을 수는 없으니까.</div><div><br></div><div>사실 그 할아버지의 연세가 정확하게 65세인지는 알 길이 없다.</div><div><br></div><div>그저 "내일모레 70"이란 얘기를 가끔 하셨고, 이런저런 대화 내용을 종합해 봤을 때 60대 중반이란 추측할 할 수 있었다. 그리고 "중반"을 표현하는 가장 좋은 숫자가 "5"다 보니 편의상 65세 할아버지라고 한 것이다.</div><div><br></div><div>내가 이 할아버지의 연세에 대해 이렇게까지 자세히 설명하는 이유는 <b>"이 나이에도 출근해서 일할 수 있는 곳이 있다는 것이 정말 좋다"</b>고 한 얘기 때문이었고, 이상하게도 그 얘기가 가슴에 와닿았기 때문이었다.</div><div><br></div><div><img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1jTp/image/HdM5SnhqPCIWlyN5OTNvOTmE1oA.jpg"><br></div><div><br></div><div>할아버지의 얘기를 종합해보면, 과거에는 회사의 중역 또는 임원이라는 역할을 해내셨다.</div><div><br></div><div>다니셨던 회사가 대기업인지 중소기업인지는 물어보지 않아서 잘 모르겠지만, 설사 중소기업이었다고 하더라도 임원은 임원이다. 일상적으로 우리가 함부로 대하기 어려운 그 "임원"이란 타이틀을 갖고 계셨던 것이었다.</div><div><br></div><div>그러다 60세가 가까워오면서 편의점 알바를 시작하셨다고 하는데 그때 인연을 맺은 사람이 지금 편의점 사장님이었다고 했다.</div><div><br></div><div>은퇴를 대비하긴 해야겠지만 특별한 기술이 없던 할아버지는 그렇게 편의점 알바와 회사 생활을 병행하셨고, 은퇴 이후엔 다른 편의점에서 알바를 하시다가 사장님과의 인연으로 현재의 편의점에 정착하신 것이었다.</div><div><br></div><div>주중, 밤 8시부터 아침 8시까지 무려 10시간 동안 야간 근무를 하면서.</div><div><br></div><div>사실 매일 같이 밤을 새워 야근 근무를 하는 것이 얼마나 힘든지는 해본 사람만 안다.</div><div><br></div><div>낮과 밤이 바뀐 채 생활을 해야 하고, 쉬는 날에 개인적인 볼일을 보려면 다시 낮에 활동을 해야 하는 시차 적응의 어려움이 몸을 지치고 힘들게 만들기 때문이다.</div><div><br></div><div>그럼에도 불구하고 그렇게 일을 하고 계시는 그 할아버지는 우리가 흔히 떠올리는 할아버지의 모습처럼 표정도 부드럽고 말투도 인자했다.</div><div><br></div><div>그리고 그 얘기의 끝에 아까 언급했던 "이 나이에도 출근해서 일할 수 있는 곳이 있다는 것이 정말 좋다"는 얘기를 하셨다.</div><div><br></div><div>평균 수명이 길어진 현대 사회를 살면서 우리에게 중요해진 것 중 하나는 "은퇴 이후의 소득"이다, 라는 것은 모든 사람이 공감하는 문제이자 사회적 이슈가 되어버렸다.</div><div><br></div><div><img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1jTp/image/aZ5wHkVyAgFKwINqrwb9kGcOVhI.jpg"><br></div><div><br></div><div>은퇴 이후 평균 15년~25년 정도를 살아가야 하는 환경에서 그 긴 시간 동안 아무런 소득 없이 생계를 유지하기란 불가능하기 때문이다.</div><div><br></div><div>하지만 현재 대한민국의 정책과 예산 집행의 대부분은 "청년"에만 맞춰져 있고, 은퇴 이후의 삶은 얼마 되지 않는 기초 연금과 국민 연금에 의지해야만 한다.</div><div><br></div><div>그중에서도 국민 연금은 65세부터나 받을 수 있어서-현재는 더 늦게 받는 것에 대해 논의 중이라고 알려져 있다- 은퇴 이후 소득 없이 몇 년 간의 공백을 보내야 하는데, 그마저도 언제 고갈될지 모르는 상황이다.</div><div><br></div><div>이런 상황에서 비록 알바지만, 그것도 몸이 저절로 피곤해지고 힘들어지는 야간 알바지만, 출근해서 일할 수 있는 곳이 있어서 좋다라는 그 할아버지의 얘기가 절절하게 공감이 됐던 이유는 <b>어쩌면 나도 그렇게 될지 모른다는 불안감 때문이었는지도 모른다.</b></div><div><br></div><div>전세 가격과 집 값은 하루가 다르게 올라가고, 물가는 고공행진을 이어가고 있어서 이제는 된장찌개를 사 먹으려면 7~8,000원은 내야 하는 시대에서 은퇴 이후의 소득은 어쩌면 생존이라는 명제에 있어서 "가장" 중요한 것이 됐고, 그래서 미래에 대한 불안은 이제 모든 세대가 갖게 된 사회에서 우리는 살고 있다.</div><div><br></div><div>그런데 "편의점 알바"라는 일자리가 어느 정도 그들, 그러니까 은퇴 이후의 삶을 보내고 있는 분들을 흡수하고 있다는 것을 그 할아버지를 통해서 알게 됐다.</div><div><br></div><div>사실 편의점 알바가 육체적으로 굉장히 힘든 직업이 아니란 것은 확실하다.</div><div><br></div><div>무거운 짐을 쉴 새 없이 날라야 하는 일도 아니고, 겨울이면 따뜻하고 여름이면 시원한 실내에서 일할 수도 있다.</div><div><br></div><div>물론 최저임금이란 한계가 있고, 또 이야기의 주인공인 할아버지처럼 야간 근무자의 경우 시차 적응을 해야 한다는 체력적인 문제가 있긴 하지만 그래도 아무런 기술이 없어도 할 수 있는 알바가 또 편의점 알바라서 은퇴 이후 소득에 대한 현실적인 대안 중 하나가 될 수 있다고 생각한다.</div><div><br></div><div>물론 편의점 알바도 다른 알바처럼 대학생처럼 젊은 사람을 선호하는 것이 사실이다. 아무래도 나이 든 사람보다 습득력이 빠르기 때문이다.</div><div><br></div><div>하지만 나이 든 사람들만의 강점인 성실성과 꼼꼼함을 젊은 사람들은 따라가기 어렵기 때문에 젊은 사람들보다는 중∙장년층을 선호하는 편의점 사장님들이 생각보다 많고, 내가 일하는 편의점 사장님도 그런 분들 중의 한 분이다.</div><div><br></div><div>편의점은 그런 곳이다.</div><div><br></div><h3>은퇴 이후의 삶에 대한 고민이 있던 한 할아버지가 즐겁게 출근할 수 있는 그런 곳.</h3><div><br></div><div>비록 알바지만, 그래서 완벽하진 않겠지만, 은퇴 이후 소득에 대한 고민을 어느 정도 해결해줄 수 있는 그런 곳.</div><div><br></div><div>나는 그런 곳에서 알바를 하고 있다.</div><div><br></div><div>원본 글 출처 : <a href="https://brunch.co.kr/@leggievi98/358">바로가기</a></div>';
  }, []);

  return (
    <>
      <Header />
      {postLists.map(data => (
        <ThumbnailWrapper key={data.id} thumbnailUrl={data.thumbnailUrl}>
          <TitleWrapper>
            <DetailTitle>
              {data.postTitle}
              <DetailSubTitle>{data.postSubTitle}</DetailSubTitle>
              <DetailWriter>
                <By>by</By>
                {data.writer}
              </DetailWriter>
            </DetailTitle>
          </TitleWrapper>
        </ThumbnailWrapper>
      ))}

      <MainBody>
        <BodyWrapper>
          <section className={style.ajeomBody}>
            <div ref={MainTextFieldRef} />
          </section>
          <KeywordBtnWrapper>
            {keywordLists.keywordList[0].mainKeyword.map(data => (
              <Keyword key={data.id}>{data.keyword}</Keyword>
            ))}
          </KeywordBtnWrapper>
        </BodyWrapper>
      </MainBody>

      <WriterWrapper>
        <WriterSubWrapper>
          {fillteredWriter.map(data => (
            <>
              <ProfileWrapper key={data.id}>
                <WriterName>{data.writer}</WriterName>
                <WriterImg src={data.profileImg} />
              </ProfileWrapper>
              <WriterDesc>{data.description}</WriterDesc>
            </>
          ))}
          <BtnWrapper>
            <Proposition>제안하기</Proposition>
            <Subscription>구독하기</Subscription>
          </BtnWrapper>
        </WriterSubWrapper>
      </WriterWrapper>

      <NavBottom>
        <NavWrapper>
          <Prev>작가의 이전글</Prev>
          <PrevPost>모던 데이터 인프라 시대</PrevPost>
        </NavWrapper>
        <NavWrapper>
          <NextPost>개발자의 가치</NextPost>
          <Next>작가의 다음글</Next>
        </NavWrapper>
      </NavBottom>
    </>
  );
}

const TitleWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 90;
`;

const ThumbnailWrapper = styled.section`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${props => props.thumbnailUrl});
  background-repeat: no-repeat; //이미지 크기가 기준보다 더 작을 때라도 반복하지 않는다.
  background-size: cover; //지정한 요소를 다 덮도록 배경이미지를 확대/축소
  background-position: center center; //이미지의 정가운데를 표시
  background-attachment: fixed;
  height: 33rem;
  z-index: -10;
`;

const DetailTitle = styled.h1`
  position: fixed;
  width: 700px;
  color: #ffffff;
  font-family: 'Nanum Myeongjo';
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 3rem;
  margin-top: 15rem;
  z-index: -1;
`;

const DetailSubTitle = styled.div`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 200;
  z-index: -1;
`;

const DetailWriter = styled(DetailSubTitle)`
  position: relative;
  font-size: 0.8rem;
  padding-top: 3rem;
  z-index: -1;
`;

const By = styled.span`
  font-family: Georgia;
  font-style: italic;
  margin-right: 0.3rem;
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

const Keyword = styled.button`
  margin: 0 0.5rem;
  padding: 0.2rem 0.7rem;
  color: #959595;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 200;
  cursor: pointer;
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

const ProfileWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  bottom: 20%;
`;

const WriterName = styled.p`
  font-size: 1.8rem;
  cursor: pointer;
`;

const WriterImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  cursor: pointer;
`;

const WriterDesc = styled.p`
  color: #959595;
  line-height: 1.5rem;
  font-size: 0.85rem;
  margin-bottom: 2rem;
  cursor: pointer;
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

export default Detail;

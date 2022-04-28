import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { requestAuthor } from '../../apis/author';
import Header from '../components/Header/Header';

function Request() {
  const [inputValue, setInputValue] = useState(0);
  const [preventBtn, setPreventBtn] = useState(false);
  const [formToggle, setFormToggle] = useState(1);
  const navigate = useNavigate();

  const countText = e => {
    setInputValue(e.target.value);
  };

  const nextForm = () => {
    if (inputValue.length === 0) {
      setPreventBtn(true);
    } else if (inputValue.length > 0) {
      setFormToggle(2);
    }
  };

  const formSubmit = () => {
    requestAuthor(inputValue);
    alert('작가 신청이 완료되었습니다.');
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <BgColor>
      <Header />
      <SideTitleWrapper>
        <SideTitle>
          브런치
          <br />
          작가를 애타게 <br />
          찾고 있습니다.
        </SideTitle>
        <VerticalLine />
        <SideTitleRotate>작가신청서</SideTitleRotate>
      </SideTitleWrapper>

      {formToggle === 1 && (
        <FormWrapper>
          <FormStage>01. 작가소개</FormStage>
          <FormTitle size="true">작가님이 궁금해요.</FormTitle>
          <FormTextWrapper>
            <FormText>
              작가님이 누구인지 이해하고 앞으로 브런치에서 어떤 활동을
              보여주실지
              <br />
              기대할 수 있도록 알려주세요.
            </FormText>
            <FormTextLength>{inputValue.length}/300</FormTextLength>
          </FormTextWrapper>
          <FormTextArea
            required
            onChange={countText}
            row="2"
            placeholder={
              preventBtn
                ? `자기 소개가 입력되지 않았습니다. 작가님에 대해 알려주세요.`
                : `브런치 활동 계획을 입력해주세요.`
            }
            preventBtn={preventBtn}
          />
          <FormBtn onClick={nextForm}>다음</FormBtn>
        </FormWrapper>
      )}

      {formToggle === 2 && (
        <FormWrapper>
          <FormStage>02. 자료첨부</FormStage>

          <FormSubWrapper>
            <section>
              <FormTitle size="true">
                내 서랍 속에 저장! <br />
                이제 꺼내주세요.
              </FormTitle>
              <FormTextWrapper>
                <FormText>
                  '작가의 서랍'에 저장해둔 글 <br />
                  또는 외부에 작성한 게시글 주소를 첨부해주세요.
                  <br />
                  선정 검토 시 가장 중요한 자료가 됩니다.
                </FormText>
              </FormTextWrapper>
            </section>

            <SaveBoxWrapper>
              <SaveTitle>브런치 저장글</SaveTitle>
              <SaveBox>
                <input
                  type="checkbox"
                  name="save"
                  value="안녕하세요"
                  style={{ zoom: '1.5', marginRight: '0.3rem' }}
                />
                행복한 하루였다.
              </SaveBox>
            </SaveBoxWrapper>
          </FormSubWrapper>
          <FormSubmitBtn onClick={formSubmit}>다음</FormSubmitBtn>
        </FormWrapper>
      )}
    </BgColor>
  );
}

const BgColor = styled.article`
  position: relative;
  min-width: 1000px;
  height: 100vh;
  background-color: #eaeaea;
`;

const SideTitleWrapper = styled.section`
  padding: 6rem 0 0 2rem;
`;

const SideTitle = styled.p`
  margin-bottom: 1rem;
  color: #666666;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 0.9rem;
  line-height: 1.2rem;
`;

const VerticalLine = styled.div`
  height: 4rem;
  border-left: 1.5px solid #666;
`;

const SideTitleRotate = styled.div`
  display: inline-block;
  transform: rotate(90deg);
  transform-origin: 0 100%;
  color: #666666;
  font-family: 'Nanum Myeongjo', serif;
`;

const FormWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 17px 40px rgb(0 0 0 / 15%);
  width: 700px;
  padding: 40px;
  background-color: #ffffff;
  z-index: 50;
`;

const FormStage = styled.div`
  color: #00c3bd;
  font-weight: 300;
  margin-bottom: 3rem;
`;

const FormSubWrapper = styled.article`
  display: flex;
  margin-bottom: 1rem;
`;

const FormTitle = styled.p`
  margin-bottom: 0.5rem;
  font-family: 'Nanum Myeongjo', serif;
  font-size: ${props => (props.size === 'true' ? '2rem' : '1.2rem')};
  line-height: 2.5rem;
`;

const FormTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormText = styled.div`
  color: #959595;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 200;
  line-height: 1.5rem;
`;

const FormTextLength = styled.div`
  color: #959595;
  font-size: 0.9rem;
  font-weight: 200;
`;

const FormTextArea = styled.textarea.attrs({
  type: 'text',
  maxLength: '300',
})`
  width: 620px;
  height: 170px;
  margin-bottom: 1rem;
  border: solid 1px #e1e1e1;
  padding: 12px 14px;
  resize: none;
  &::placeholder {
    color: ${props => (props.preventBtn ? 'red' : '#959595')};
    font-weight: 300;
  }
`;

const FormBtn = styled.button`
  border: 1px solid #00c3bd;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  color: #00c3bd;
  font-weight: 300;
  cursor: pointer;
  float: right;
`;

const SaveBoxWrapper = styled.section`
  max-width: 17rem;
  margin-left: 3rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SaveTitle = styled.p`
  padding-bottom: 1rem;
  color: #666666;
  font-weight: 300;
`;

const SaveBox = styled.div`
  padding-bottom: 0.2rem;
  color: #666666;
  font-weight: 200;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

const FormSubmitBtn = styled(FormBtn)``;

export default Request;

import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import cancel from '../../images/cancel.png';
import back from '../../images/back.png';

const Header = (props) => {
    const history = useHistory();

    return(
        <Wrap>
            {props.state==="Cancel"?
                <CancelButton>
                    <div onClick={() => history.push('/main')}/>
                </CancelButton>
                :
                <>
                    {props.state==="Back"?
                        <BackButton>
                            <div onClick={() => history.goBack()}/>
                        </BackButton>
                        : null
                    }
                </>
            }
            <Title>{props.title}</Title>
            {props.next === "저장"?
                <Next>
                    <div onClick={() => history.push('/main')}>{props.next}</div>
                </Next>
                :
                <Next/>
            }
            {/*<Next>{props.next==="저장"? console.log("저장"):console.log("실패")}</Next>*/}
        </Wrap>
    )
}

export default Header;

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CancelButton = styled.div`
  width: 40px;
  margin-left: 20px;
  > div {
    width: 16px;
    height: 16px;
    background: url(${cancel}) no-repeat;
    background-size: contain;
  }
`;

const BackButton = styled.div`
  width: 40px;
  margin-left: 20px;
  > div {
    width: 16px;
    height: 16px;
    background: url(${back}) no-repeat;
    background-size: contain;
  }
`;

const Title = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
`;

const Next = styled.div`
  width: 40px;
  margin-right: 20px;
  > div {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;
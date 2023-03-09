import React, { useState } from 'react';
import OrderIcon from '../../../../assets/order_by.png';
import styled from 'styled-components';
import { Colors } from '../../../../constants/colors';
import { BandHTTPResponse } from '../../../../services/model/bandHTTPResponse';

interface Props {
  orderFunction: (key: keyof BandHTTPResponse) => void;
}
export const Order = ({ orderFunction }: Props) => {
  const [buttonsVisible, setButtonsVisible] = useState<Boolean>(false);
  const toggleVisibility = () => setButtonsVisible((prevState) => !prevState);
  return (
    <Wrapper>
      <ButtonWrapper>
        <Icon onClick={toggleVisibility} src={OrderIcon} />
        {buttonsVisible && (
          <ButtonContainer>
            <Button onClick={() => orderFunction('name')}>Alphabetical</Button>
            <Button onClick={() => orderFunction('numPlays')}>
              Number of Plays
            </Button>
          </ButtonContainer>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 80px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin-left: auto;
`;
const Icon = styled.img`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  background-color: ${Colors.darkGray};
  width: 100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 95%);
  padding: 8px;
`;

const Button = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  width: 100%;
  color: ${Colors.white};
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

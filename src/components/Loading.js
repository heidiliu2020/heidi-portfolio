import React from "react";
import styled from "styled-components";
import { BounceLoader } from "react-spinners";

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(55, 55, 55, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <BounceLoader size={60} color={"#F5A623"} />
    </LoadingWrapper>
  );
}

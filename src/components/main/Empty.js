import React from 'react' ;
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Empty = () => {
  return (
    <Wrapper>
      <h1>Create a note to get started</h1>
    </Wrapper>
  );
}

export default Empty ;

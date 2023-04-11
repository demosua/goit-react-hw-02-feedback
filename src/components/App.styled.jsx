import styled from "@emotion/styled";

export const Container = styled.div`
padding: 20px;

& h2 {
  margin: 20px 0;
}

& ul {
  display: inline-flex;
  list-style: none;
  margin-bottom: 20px;
}

& li:not(:first-of-type){
    margin-left: 10px;
  }

& button {
  width: 60px;
  border-radius: 8px;
}

& h3 {
  margin-bottom: 20px;
}

& h4:not(:last-child) {
  margin-top: 20px;
}
`;
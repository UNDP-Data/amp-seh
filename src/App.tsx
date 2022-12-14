import styled, { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
import { UnivariateMap } from './UnivariateMap';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --primary-blue: #006EB5;
    --blue-medium: #4F95DD;
    --blue-bg: #94C4F5;
    --navy: #082753;
    --black-100: #FAFAFA;
    --black-200: #f5f9fe;
    --black-300: #EDEFF0;
    --black-400: #E9ECF6;
    --black-450: #DDD;
    --black-500: #A9B1B7;
    --black-550: #666666;
    --black-600: #212121;
    --black-700: #000000;
    --blue-very-light: #F2F7FF;
    --yellow: #FBC412;
    --yellow-bg: #FFE17E;
    --red: #D12800;
    --red-bg: #FFBCB7;
    --shadow:0px 10px 30px -10px rgb(9 105 250 / 15%);
    --shadow-bottom: 0 10px 13px -3px rgb(9 105 250 / 5%);
    --shadow-top: 0 -10px 13px -3px rgb(9 105 250 / 15%);
    --shadow-right: 10px 0px 13px -3px rgb(9 105 250 / 5%);
    --shadow-left: -10px 0px 13px -3px rgb(9 105 250 / 15%);
  }
  
  html { 
    font-size: 62.5%; 
  }

  body {
    font-family: "proxima-nova", "Helvetica Neue", "sans-serif";
    color: var(--black-600);
    background-color: var(--white);
    margin: 0;
    padding: 1rem 0;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 2.56rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-blue);
  }

  h1 {
    color: var(--primary-blue);
    font-size: 3.2rem;
    font-weight: 700;
    
    @media (max-width: 760px) {
      font-size: 2.4rem;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  button.primary {
    border-radius: 0.2rem !important;
    font-size: 1.4rem !important;
    font-weight: normal !important;
    color: var(--white) !important;
    background-color: var(--primary-blue) !important;
    border: 1px solid var(--primary-blue) !important;
    cursor: pointer !important;
    padding: 0.4rem 1rem !important;
    &:hover {
      border: 1px solid var(--blue-medium) !important;
      background-color: var(--blue-medium) !important;
    }
    &:active{
      border: 1px solid var(--blue-medium) !important;
      background-color: var(--blue-medium) !important;
    }
  }

  button.secondary {
    border-radius: 0.2rem !important;
    font-size: 1.4rem !important;
    font-weight: normal !important;
    color: var(--black-600) !important;
    border: 1px solid var(--black-450) !important;
    cursor: pointer !important;
    padding: 0.4rem 1rem !important;
    background-color: var(--white) !important;
    &:hover {
      border: 1px solid var(--primary-blue) !important;
      color: var(--primary-blue) !important;
    }
    &:active{
      border: 1px solid var(--primary-blue) !important;
      color: var(--primary-blue) !important;
    }
  }

  a:hover {
    font-weight: bold;
  }

  .bold{
    font-weight: 700;
  }
  
  .italics{
    font-style: italic;
  }
  .radioLabel{
    font-size: 1.6rem;
    text-transform: uppercase; 
  }
  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
    background-color: var(--primary-blue) !important;
    font-weight: 700;
  }
`;

const KeyContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 4rem 0;
`;

const KeyEl = styled.div`
  display: flex;
  margin: 0 1rem;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  gap: 0.5rem;
`;

const ColorBox = styled.div`
  width: 1.8rem;
  height: 1.8rem;
`;

const CATCOLOR = ['#FCB814', '#00548A', '#8AC499'];

const App = () => (
  <>
    <GlobalStyle />
    <KeyContainer>
      <KeyEl>
        <ColorBox style={{ backgroundColor: CATCOLOR[0] }} />
        <div style={{ color: CATCOLOR[0] }}>1st Round</div>
      </KeyEl>
      <KeyEl>
        <ColorBox style={{ backgroundColor: CATCOLOR[1] }} />
        <div style={{ color: CATCOLOR[1] }}>2nd Round</div>
      </KeyEl>
      <KeyEl>
        <ColorBox style={{ backgroundColor: CATCOLOR[2] }} />
        <div style={{ color: CATCOLOR[2] }}>3rd Round</div>
      </KeyEl>
    </KeyContainer>
    <UnivariateMap />
  </>
);

export default App;

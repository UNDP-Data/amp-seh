import styled from 'styled-components';
import { UnivariateMap } from './UnivariateMap';

const ColorBox = styled.div`
  width: 1rem;
  height: 1rem;
`;

const CATCOLOR = ['#FCB814', '#00548A', '#8AC499'];

const App = () => (
  <div className='undp-container'>
    <div className='flex-div gap-07 flex-hor-align-center margin-bottom-05'>
      <div className='flex-div flex-vert-align-center gap-02'>
        <ColorBox style={{ backgroundColor: CATCOLOR[0] }} />
        <div style={{ color: CATCOLOR[0] }}>1st Round</div>
      </div>
      <div className='flex-div flex-vert-align-center gap-02'>
        <ColorBox style={{ backgroundColor: CATCOLOR[1] }} />
        <div style={{ color: CATCOLOR[1] }}>2nd Round</div>
      </div>
      <div className='flex-div flex-vert-align-center gap-02'>
        <ColorBox style={{ backgroundColor: CATCOLOR[2] }} />
        <div style={{ color: CATCOLOR[2] }}>3rd Round</div>
      </div>
    </div>
    <UnivariateMap />
  </div>
);

export default App;

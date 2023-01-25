import styled from 'styled-components';

interface HoverType {
  country: string;
  round: string | null;
  partner: string | null;
  budget: string | null;
  coFinancing: string | null;
  xPosition: number;
  yPosition: number;
}

interface Props {
  data: HoverType;
}

interface TooltipElProps {
  x: number;
  y: number;
  verticalAlignment: string;
  horizontalAlignment: string;
}

const TooltipEl = styled.div<TooltipElProps>`
  display: block;
  position: fixed;
  z-index: 5;
  background-color: var(--gray-100);
  border: 1px solid var(--gray-400);
  padding: 0.5rem var(--spacing-05);
  word-wrap: break-word;
  top: ${(props) => (props.verticalAlignment === 'bottom' ? props.y - 40 : props.y + 40)}px;
  left: ${(props) => (props.horizontalAlignment === 'left' ? props.x - 20 : props.x + 20)}px;
  max-width: 15rem;
  transform: ${(props) => `translate(${props.horizontalAlignment === 'left' ? '-100%' : '0%'},${props.verticalAlignment === 'top' ? '-100%' : '0%'})`};
`;

export const Tooltip = (props: Props) => {
  const {
    data,
  } = props;
  return (
    <TooltipEl x={data.xPosition} y={data.yPosition} verticalAlignment={data.yPosition > window.innerHeight / 2 ? 'top' : 'bottom'} horizontalAlignment={data.xPosition > window.innerWidth / 2 ? 'left' : 'right'}>
      <h2 className='bold margin-top-00 margin-bottom-05'>
        {data.country}
      </h2>
      {
        !data.round ? (
          <>
            <p className='undp-typography bold'>
              Not a part of AO nor AMP
            </p>
          </>
        ) : (
          <>
            <h6 className='undp-typography margin-bottom-01'>
              Round
            </h6>
            <p className='undp-typography margin-bottom-05'>
              {data.round}
            </p>
            <h6 className='undp-typography margin-bottom-01'>
              Partner
            </h6>
            <p className='undp-typography margin-bottom-05'>
              {data.partner}
            </p>
            <h6 className='undp-typography margin-bottom-01'>
              Project Budget
            </h6>
            <p className='undp-typography margin-bottom-05'>
              {data.budget}
            </p>
            <h6 className='undp-typography margin-bottom-01'>
              Estimated co-financing
            </h6>
            <p className='undp-typography margin-bottom-05'>
              {data.coFinancing}
            </p>
          </>
        )
      }
    </TooltipEl>
  );
};

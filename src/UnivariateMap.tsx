import { useRef, useState } from 'react';
import styled from 'styled-components';
import { geoMercator } from 'd3-geo';
import { scaleSqrt } from 'd3-scale';
import World from './data/worldMap.json';
import Data from './data/ea-data.json';
import { Tooltip } from './Tooltip';

const CATCOLOR = ['#FCB814', '#00548A', '#8AC499'];

const El = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  max-width: 62rem;
`;

export const UnivariateMap = () => {
  const [hoverData, setHoverData] = useState<any>(undefined);
  const svgWidth = 420;
  const svgHeight = 475;
  const mapSvg = useRef<SVGSVGElement>(null);
  const mapG = useRef<SVGGElement>(null);
  const projection = geoMercator().rotate([0, 0]).scale(325).translate([115, 230]);
  const radiusScale = scaleSqrt().domain([0, 5000000]).range([0, 50]);
  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`} ref={mapSvg}>
        <g ref={mapG}>
          {
            (World as any).features.map((d: any, i: number) => {
              const index = Data.findIndex((el) => el.Code === d.properties.ISO3);
              if ((index === -1) || d.properties.NAME === 'Antarctica') return null;
              return (
                <g
                  key={i}
                  opacity={hoverData ? hoverData.country === Data[index].Country ? 1 : 0.1 : 1}
                  onMouseEnter={(event) => {
                    setHoverData({
                      country: Data[index].Country,
                      round: Data[index].Round,
                      partner: Data[index]['Implementing Partner'],
                      budget: Data[index]['Project Budget (GEF+UNDP+AfDB)'],
                      coFinancing: Data[index]['Estimated co-financing'],
                      xPosition: event.clientX,
                      yPosition: event.clientY,
                    });
                  }}
                  onMouseMove={(event) => {
                    setHoverData({
                      country: Data[index].Country,
                      round: Data[index].Round,
                      partner: Data[index]['Implementing Partner'],
                      budget: Data[index]['Project Budget (GEF+UNDP+AfDB)'],
                      coFinancing: Data[index]['Estimated co-financing'],
                      xPosition: event.clientX,
                      yPosition: event.clientY,
                    });
                  }}
                  onMouseLeave={() => {
                    setHoverData(undefined);
                  }}
                >
                  {
                    d.geometry.type === 'MultiPolygon' ? d.geometry.coordinates.map((el:any, j: any) => {
                      let masterPath = '';
                      el.forEach((geo: number[][]) => {
                        let path = ' M';
                        geo.forEach((c: number[], k: number) => {
                          const point = projection([c[0], c[1]]) as [number, number];
                          if (k !== geo.length - 1) path = `${path}${point[0]} ${point[1]}L`;
                          else path = `${path}${point[0]} ${point[1]}`;
                        });
                        masterPath += path;
                      });
                      return (
                        <path
                          key={j}
                          d={masterPath}
                          stroke='#AAA'
                          strokeWidth={0.25}
                          fill='#F1F1F1'
                        />
                      );
                    }) : d.geometry.coordinates.map((el:any, j: number) => {
                      let path = 'M';
                      el.forEach((c: number[], k: number) => {
                        const point = projection([c[0], c[1]]) as [number, number];
                        if (k !== el.length - 1) path = `${path}${point[0]} ${point[1]}L`;
                        else path = `${path}${point[0]} ${point[1]}`;
                      });
                      return (
                        <path
                          key={j}
                          d={path}
                          stroke='#AAA'
                          strokeWidth={0.25}
                          fill='#F1F1F1'
                        />
                      );
                    })
                  }
                </g>
              );
            })
          }
          <g>
            {
              (World as any).features.map((d: any, i: number) => {
                const index = Data.findIndex((el) => el.Code === d.properties.ISO3);
                if ((index === -1) || d.properties.NAME === 'Antarctica' || Data[index]['Project Budget (in Number)'] === 0) return null;
                return (
                  <g
                    key={i}
                    opacity={hoverData ? hoverData.country === Data[index].Country ? 1 : 0.1 : 1}
                    onMouseEnter={(event) => {
                      setHoverData({
                        country: Data[index].Country,
                        round: Data[index].Round,
                        partner: Data[index]['Implementing Partner'],
                        budget: Data[index]['Project Budget (GEF+UNDP+AfDB)'],
                        coFinancing: Data[index]['Estimated co-financing'],
                        xPosition: event.clientX,
                        yPosition: event.clientY,
                      });
                    }}
                    onMouseMove={(event) => {
                      setHoverData({
                        country: Data[index].Country,
                        round: Data[index].Round,
                        partner: Data[index]['Implementing Partner'],
                        budget: Data[index]['Project Budget (GEF+UNDP+AfDB)'],
                        coFinancing: Data[index]['Estimated co-financing'],
                        xPosition: event.clientX,
                        yPosition: event.clientY,
                      });
                    }}
                    onMouseLeave={() => {
                      setHoverData(undefined);
                    }}
                  >
                    <circle
                      cx={(projection([d.properties.LON, d.properties.LAT]) as [number, number])[0]}
                      cy={(projection([d.properties.LON, d.properties.LAT]) as [number, number])[1]}
                      width={4}
                      r={radiusScale(Data[index]['Project Budget (in Number)'])}
                      fill={Data[index].Round === '1st Round' ? CATCOLOR[0] : Data[index].Round === '2nd Round' ? CATCOLOR[1] : Data[index].Round === '3rd Round' ? CATCOLOR[2] : '#EDEDED'}
                      opacity={0.7}
                      stroke='#fff'
                      strokeWidth={0.5}
                    />
                  </g>
                );
              })
            }
          </g>
        </g>
      </svg>
      {
        hoverData ? <Tooltip data={hoverData} /> : null
      }
    </El>
  );
};

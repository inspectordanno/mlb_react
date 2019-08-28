import React, { useRef, useEffect } from 'react';
import { fieldDictionary, colorDictionary } from './dictionaries';
import * as d3 from 'd3';

const BaseballField = ({ width, height, data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      d3.xml('./diamond_clean_updated.svg').then(xml => {
        d3.select(d3Container.current).append(() => xml.documentElement) //https://stackoverflow.com/questions/25516078/d3-create-object-without-appending
          .attr('class', 'baseball_svg');


          const positionSelect = (position) => {
            return {
              x: d3.select(position).attr("x"),
              y: d3.select(position).attr("y")
            };
          };
        
          const positionDictionary = new Map();
        
          positionDictionary.set('First Base', positionSelect('#rect2801'))
            .set('Second Base', positionSelect('#rect2803'))
            .set('Shortstop', positionSelect('#shortstop'))
            .set('Third Base', positionSelect('#rect2799'))
            .set('Catcher', positionSelect('#home'))
            .set('Left Field', positionSelect('#left'))
            .set('Center Field', positionSelect('#center'))
            .set('Right Field', positionSelect('#right'))
            .set('Pitcher', positionSelect('#rect2805'));

          //enter update exit
          const players = d3.select('#layer1')
            .selectAll('.player')
            .data(data, d => d.Name)

          players.enter()
            .append('circle')
            .attr('class', 'player')
            .attr('fill', d => colorDictionary.get(d.Year))
            .attr('cx', d => positionDictionary(d.Position).x)
            .attr('cy', d => positionDictionary(d.Position).y)
            .attr('r', 0)
            .transition()
            .duration(500)
            .attr('r', 8)

          players
            .attr('fill', d => colorDictionary.get(d.Year))

          players.exit()
            .transition()
            .attr('opacity', 0)
            .remove();
          
          


          


        
        
      });
    }
  }, []);

  // useEffect(
  //   () => {
  //       if (data && d3Container.current) {
  //           const svg = d3.select(svg);

  //           // Bind D3 data
  //           const update = svg
  //               .append('g')
  //               .selectAll('text')
  //               .data(data);

  //           // Enter new D3 elements
  //           update.enter()
  //               .append('text')
  //               .attr('x', (d, i) => i * 25)
  //               .attr('y', 40)
  //               .style('font-size', 24)
  //               .text((d: number) => d);

  //           // Update existing D3 elements
  //           update
  //               .attr('x', (d, i) => i * 40)
  //               .text((d: number) => d);

  //           // Remove old D3 elements
  //           update.exit()
  //               .remove();
  //       }
  //   },

  //   /*
  //       useEffect has a dependency array (below). It's a list of dependency
  //       variables for this useEffect block. The block will run after mount
  //       and whenever any of these variables change. We still have to check
  //       if the variables are valid, but we do not have to compare old props
  //       to next props to decide whether to rerender.
  //   */
  //   [data, d3Container.current]
  // );


  return (
    <div
      className='svg_container'
      width={width}
      height={height}
      ref={d3Container}
    >
    </div>
  );
};

export default BaseballField;
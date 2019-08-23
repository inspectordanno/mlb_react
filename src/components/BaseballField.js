import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BaseballField = ({ width, height, data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      d3.xml('./diamond_clean_updated.svg').then(xml => {
        d3.select(d3Container.current).append(() => xml.documentElement) //https://stackoverflow.com/questions/25516078/d3-create-object-without-appending
          .attr('class', 'baseball_svg');
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
import React, { Component, useRef, useEffect } from 'react';
import { fieldDictionary, colorDictionary } from './dictionaries';
import { useSelector } from 'react-redux';
import * as d3 from 'd3';

// class BaseballField extends Component {
//   constructor() {
//     this.state = {

//     };
//   }

//   componentDidMount() {
//     this.data = useSelector(state => console.log(state.data));
//   }

//   render() {
//     // const {fieldDictionary} = this.props;
//     this.data &&

//   }
// }

const BaseballField = ({ width, height, decade }) => {

  //selecting only the players with the decade passed from props
  const data = useSelector(state => console.log(state.data));

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

    return (
      data
      ? <div
          className='svg_container'
          width={width}
          height={height}
          ref={d3Container}
        >
        </div>
      : null
    );
  }



export default BaseballField;
import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as d3 from 'd3';
import { fieldDictionary, colorDictionary } from './dictionaries';
import { setActivePlayer } from '../actions/actions';

const BaseballField = ({ width, height, decade }) => {

  const dispatch = useDispatch();

  //selecting only the players with the decade passed from props
  const data = useSelector(state => state.data.filter(d => d.Year === decade));

  const d3Container = useRef(null);
  const [positionDictionary, setPositionDictionary] = useState(new Map()); // the position dictionary is a state

  useEffect(() => {
    if (d3Container.current) {
      const appendSvg = async () => {
        const xml = await d3.xml('./diamond_clean_updated.svg');
        d3.select(d3Container.current).append(() => xml.documentElement) //https://stackoverflow.com/questions/25516078/d3-create-object-without-appending
          .attr('class', 'baseball_svg');

          const positionSelect = (position) => {
            return {
              x: d3.select(position).attr("x"),
              y: d3.select(position).attr("y")
            };
          };
          
          setPositionDictionary(
            positionDictionary.set('First Base', positionSelect('#rect2801'))
              .set('Second Base', positionSelect('#rect2803'))
              .set('Shortstop', positionSelect('#shortstop'))
              .set('Third Base', positionSelect('#rect2799'))
              .set('Catcher', positionSelect('#home'))
              .set('Left Field', positionSelect('#left'))
              .set('Center Field', positionSelect('#center'))
              .set('Right Field', positionSelect('#right'))
              .set('Pitcher', positionSelect('#rect2805'))
          );
      }
      appendSvg();
    }
  }, []);

    useEffect(() => {

      if (d3Container.current && data) {
            //enter update exit
            const players = d3.select('#layer1')
              .selectAll('.player')
              .data(data, d => d.Name)

            players.enter()
              .append('circle')
              .attr('class', 'player')
              .attr('fill', d => colorDictionary.get(d.Year))
              .attr('cx', d => positionDictionary.get(d.Position).x)
              .attr('cy', d => positionDictionary.get(d.Position).y)
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

            d3.selectAll('circle')
              .on('mousedown', d => dispatch(setActivePlayer(d)));
      }
    }, [data]);

    return (
      <div
          className='svg_container'
          width={width}
          height={height}
          ref={d3Container}
        >
      </div>
    );
  }

export default BaseballField;
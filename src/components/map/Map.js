import React, { Component } from 'react'
import * as geo from 'd3-geo'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { geoMercator } from 'd3'

export class Map extends Component {
    state={
        width: 960,
        height: 500,
        margin: {
            top: 50,
            botton: 50,
            left: 50,
            rigth: 50
          }
    }
    renderGraph = (data, countries) =>{
      
          const svg = d3.select('svg')
   
       const g = svg.append('g')
          .append('g')
          .attr('transform', `translate( ${this.state.margin.left}, ${this.state.margin.rigth})`);
          
          var projection = geoMercator()///.traslate([this.width / 2, this.height / 2]);
          projection.scale(150)
          const path = geo.geoPath().projection(projection);
   
         
          g.selectAll('.country')
          .data(data)
          .enter().append('path')
          .attr('class', 'country')
          .attr('d', path)
          .on('mouseover', function(d){
            d3.select(this).classed("selected", true)
          })
          .on('mouseout', function(d){
             d3.select(this).classed("selected", false)
          });
   
   
          g.selectAll('.city-circle')
          .attr('class', 'city-circle')
          .data(countries)
          .enter().append('circle')
          .attr('r', 2)
          .attr('cx', function(d) {
            var coords = projection([d.longitude, d.latitude])
            console.log(d);
            return coords[0];
            
          })
          .attr('cy', function(d){
            var coords = projection([d.longitude, d.latitude])
            return coords[1];
          })
          svg.call(d3.zoom()
          .on('zoom', () => {
          g.attr('transform', d3.event.transform);
          }));
   
         function zoomed() {
              g.attr("transform", d3.event.transform);
         }
   
       let zoom = d3.zoom().on("zoom", zoomed);
        //svg.call(this.zoomFunc)
        d3.select('#zoom-in').on('click', function(){
          console.log('clicked')
          zoom.scaleBy(svg.transition().duration(750), 1.2)
        })
   
        d3.select('#zoom-out').on('click', function(){
          console.log('zoom out')
          zoom.scaleBy(svg.transition().duration(750), 0.8)
        })
         
         d3.select('#reset').on('click', function () {
            zoom.scale(1);
         })
   
          g.selectAll("country-label")
          .data(countries)
          .enter().append("text")
          .attr('class','country-label')
          .attr('x', function(d) {
            var coords = projection([d.longitude, d.latitude])
            //console.log(coords);
            return coords[0];
            
          })
          .attr('y', function(d){
            var coords = projection([d.longitude, d.latitude])
            return coords[1];
          })
          .text(function(d){
            return d.name;
          })
   
   
          var tooltip = d3.select("div.tooltip");
          g.selectAll("country-tooptip")
          .data(countries)
          .enter().append("path")
          .attr('class','country-tooptip')
          .on("mouseover",function(d,i){
            d3.select(this).attr("fill","grey").attr("stroke-width",2);
            return tooltip.style("hidden", false).html(d.name);
        })
        .on("mousemove",function(d){
            tooltip.classed("hidden", false)
                   .style("top", (d3.event.pageY) + "px")
                   .style("left", (d3.event.pageX + 10) + "px")
                   .html(d.name);
        })
        .on("mouseout",function(d,i){
            d3.select(this).attr("fill","white").attr("stroke-width",1);
            tooltip.classed("hidden", true);
        });
   
  //  g.selectAll("temperature-label")
  //         .data(countries)
  //         .enter().append("text")
  //         .attr('class','temperature-label')
  //         .attr('x', function(d) {
  //           var coords = projection([d.longitude, d.latitude])
  //           //console.log(coords);
  //           return coords[0];
  //         })
  //         .attr('y', function(d){
  //           var coords = projection([d.longitude, d.latitude])
  //           return coords[1];
  //         })
  //         .text(function(d){
  //          return "country"
          
  //         })
   
   
          
        }

    componentWillMount(){
        Promise.all([
            d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json'),
            d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/countries.csv'),
          ]).then(([data, names ]) => {
                var countries = topojson.feature(data, data.objects.countries).features; 
               
                this.renderGraph(countries,names);
              })
       
            //   var countryNames = d3.map();
            //   d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json", function(data) {
            //     d3.tsv("https://raw.githubusercontent.com/KoGor/Map-Icons-Generator/master/data/world-110m-country-names.tsv",function(d) { countryNames.set(d.id, d.name) }, function(names) {
            //     const countries = topojson.feature(data, data.objects.countries).features;
            //        console.log(countries)
            //        this.renderGraph(countries,names);
            //     })
            // })
}
    
    render() {
        return (
            <div className="map-container">
       <div className="btn-group-vertical map-btn" role="group" id="float-button-group">
                <button  type="button" className="btn btn-default" id="zoom-in"><i className="fas fa-search-plus"></i></button>
                <button type="button" className="btn btn-default" id="zoom-out"><i className="fas fa-search-minus"></i></button>
                <button type="button" className="btn btn-default" id="reset"><i className="fas fa-redo-alt"></i></button>
      </div>
      <svg className="map" width={this.state.width} height={this.state.height} ></svg>
      <div className="tooltip"></div>


  </div>
        )
    }
}

export default Map

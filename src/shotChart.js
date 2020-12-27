  function drawCourt(){
    // Court dimensions courtesy of: https://www.recunlimited.com/blog/diagrams-basketball-courts/
    margin = {left: 0, right: 0, top: 0, bottom: 0}

    svg = d3.select('#court')
    width = svg.attr('width')
    height = svg.attr('height')

    var xScale = d3.scaleLinear().range([width, 0]).domain([25, -25])
    var yScale = d3.scaleLinear().range([height, 0]).domain([0,50])

    svg.append('rect')
      .attr('id', 'paint')
      .attr('x', xScale(-8))
      .attr('y', yScale(19))
      .attr('width', xScale(-9))
      .attr('height', height-yScale(19))
      .style('stroke','white')
      .style('fill', '#1e4885')
      .style('stroke-width', xScale(-24.83))

      svg.append('path')
        .attr('class', 'marks')
        .attr('d',
                   'M' + xScale(8) + ',' + yScale(7) + 'L' + xScale(8.75) + ',' + yScale(7) +
                   'M' + xScale(8) + ',' + yScale(8) + 'L' + xScale(8.75) + ',' + yScale(8) +
                   'M' + xScale(8) + ',' + yScale(11) + 'L' + xScale(8.75) + ',' + yScale(11) +
                   'M' + xScale(8) + ',' + yScale(14) + 'L' + xScale(8.75) + ',' + yScale(14) +
                   'M' + xScale(6) + ',' + yScale(11) + 'L' + xScale(6.75) + ',' + yScale(11) +
                   'M' + xScale(6) + ',' + yScale(14) + 'L' + xScale(6.75) + ',' + yScale(14) +
                   'M' + xScale(6) + ',' + yScale(17) + 'L' + xScale(6.75) + ',' + yScale(17)
        )
        .attr('transform', 'translate('+xScale(-24.92)+',0)')
        .style('stroke', '#fa6c4e')
        .style('fill', 'none')
        .style('stroke-width', xScale(-24.83))

        svg.append('path')
          .attr('class', 'marks')
          .attr('d',
                     'M' + xScale(-8) + ',' + yScale(7) + 'L' + xScale(-8.75) + ',' + yScale(7) +
                     'M' + xScale(-8) + ',' + yScale(8) + 'L' + xScale(-8.75) + ',' + yScale(8) +
                     'M' + xScale(-8) + ',' + yScale(11) + 'L' + xScale(-8.75) + ',' + yScale(11) +
                     'M' + xScale(-8) + ',' + yScale(14) + 'L' + xScale(-8.75) + ',' + yScale(14) +
                     'M' + xScale(-6) + ',' + yScale(17) + 'L' + xScale(-6.75) + ',' + yScale(17) +
                     'M' + xScale(-6) + ',' + yScale(11) + 'L' + xScale(-6.75) + ',' + yScale(11) +
                     'M' + xScale(-6) + ',' + yScale(14) + 'L' + xScale(-6.75) + ',' + yScale(14)
          )
          .attr('transform', 'translate('+(-xScale(-24.92))+',0)')
          .style('stroke', '#fa6c4e')
          .style('fill', 'none')
          .style('stroke-width', xScale(-24.83))

      svg.append('path')
        .attr('class', 'marks')
        .attr('d',
                   'M' + xScale(-11) + ',' + yScale(0) + 'L' + xScale(-11) + ',' + yScale(.5) +
                   'M' + xScale(11) + ',' + yScale(0) + 'L' + xScale(11) + ',' + yScale(.5) +
                   'M' + xScale(-5) + ',' + yScale(13) + 'L' + xScale(-4.5) + ',' + yScale(13) +
                   'M' + xScale(5) + ',' + yScale(13) + 'L' + xScale(4.5) + ',' + yScale(13)
        )
        .attr('transform', 'translate('+(-xScale(-24.92))+',0)')
        .style('stroke', 'white')
        .style('fill', 'none')
        .style('stroke-width', xScale(-24.83))

    svg.append('rect')
      .attr('class', 'block')
      .attr('x', xScale(-7))
      .attr('y', yScale(8.1))
      .attr('width', xScale(-24))
      .attr('height', height - yScale(1.1))
      .style('fill', '#fa6c4e')
      .style('stroke', 'none')

    svg.append('rect')
      .attr('class', 'block')
      .attr('x', xScale(6))
      .attr('y', yScale(8.1))
      .attr('width', xScale(-24))
      .attr('height', height - yScale(1.1))
      .style('fill', '#fa6c4e')
      .style('stroke', 'none')

    svg.append('path')
      .attr('id', 'key')
      .attr('d', 'M ' + xScale(22) + ',' + yScale(0) + 'L' + xScale(22) + ',' + yScale(14) + 'M' +
        xScale(-22) + ',' + yScale(0) + 'L' + xScale(-22) + ',' + yScale(14) +
        'M ' + xScale(6) + ',' + yScale(0) + 'L' + xScale(6) + ',' + yScale(19) + 'L' + xScale(-6) + ',' + yScale(19) +
        'L' + xScale(-6) + ',' + yScale(0) + 'L' + xScale(-6) + ',' + yScale(19))
      .style('stroke', 'white')
      .style('fill', 'none')
      .style('stroke-width', xScale(-24.83))





    threePt = d3.arc()
    .innerRadius(xScale(-1.25))
    .outerRadius(xScale(-1.25))
    .startAngle(Math.PI/2-.378)
    .endAngle(-(Math.PI/2-.378))

    // threeArcC = d3.arc()
    // .innerRadius(xScale(-5.25))
    // .outerRadius(xScale(-5.25))
    // .startAngle(Math.PI/2)
    // .endAngle(-(Math.PI/2))

    freeTop = d3.arc()
    .innerRadius(xScale(-19))
    .outerRadius(xScale(-19))
    .startAngle(Math.PI/2)
    .endAngle(-(Math.PI/2))

    freeBot = d3.arc()
    .innerRadius(xScale(-19))
    .outerRadius(xScale(-19))
    .startAngle(Math.PI/2)
    .endAngle(3*(Math.PI/2))

    restricted = d3.arc()
    .innerRadius(xScale(-21))
    .outerRadius(xScale(-21))
    .startAngle(Math.PI/2)
    .endAngle(-(Math.PI/2))

    halfOuter = d3.arc()
    .innerRadius(xScale(-19))
    .outerRadius(xScale(-19))
    .startAngle(Math.PI/2)
    .endAngle(3*(Math.PI/2))

    halfInner = d3.arc()
    .innerRadius(xScale(-23))
    .outerRadius(xScale(-23))
    .startAngle(Math.PI/2)
    .endAngle(3*(Math.PI/2))

    svg.append('path')
      .attr('id', 'arc')
      .attr('d', threePt)
      .attr('transform', 'translate('+width/2+',' + yScale(5.25)+')')
      .style('stroke', 'white')
      .style('fill', 'none')
      .style('stroke-width', xScale(-24.83))


    svg.append('path')
      .attr('id', 'freeTop')
      .attr('d', freeTop)
      .attr('transform', 'translate('+width/2+',' + yScale(19)+')')
      .style('stroke', 'white')
      .style('fill', 'none')
      .style('stroke-width', xScale(-24.83))

    svg.append('path')
      .attr('id', 'freeBot')
      .attr('d', freeBot)
      .attr('transform', 'translate('+width/2+',' + yScale(19)+')')
      .style('stroke', 'white')
      .style('fill', 'none')
      .style('stroke-width', xScale(-24.83))
      .style('stroke-dasharray', 10)

    svg.append('path')
      .attr('id', 'restricted')
      .attr('d', restricted)
      .attr('transform', 'translate('+width/2+',' + yScale(4)+')')
      .style('stroke', 'white')
      .style('fill', 'none')
      .style('stroke-width', xScale(-24.83))

    svg.append('path')
      .attr('id', 'halfOuter')
      .attr('d', halfOuter)
      .attr('transform', 'translate('+width/2+',' + 0 +')')
      .style('stroke', 'white')
      .style('fill', 'none')
      .style('stroke-width', xScale(-24.83))

    svg.append('path')
      .attr('id', 'halfInner')
      .attr('d', halfInner)
      .attr('transform', 'translate('+width/2+',' + 0 +')')
      .style('stroke', 'white')
      .style('fill', 'none')
      .style('stroke-width', xScale(-24.83))

    svg.append('circle')
      .attr('class', 'hoop')
      .attr('cx', xScale(0))
      .attr('cy', yScale(5.25))
      .attr('r', height-yScale(.75))
      .style('fill', 'none')
      .style('stroke', 'darkred')
      .style('stroke-width', 2)


    svg.append('rect')
      .attr('x', xScale(-3))
      .attr('y', yScale(4))
      .attr('width', xScale(-19))
      .attr('height', height-yScale(.35))

      svg.append('rect')
        .attr('x', xScale(-3))
        .attr('y', yScale(4))
        .attr('width', xScale(-19))
        .attr('height', height-yScale(.35))

      svg.append('text')
        .attr('id', 'showShots')
        .attr('x', 9)
        .attr('y', 20)
        .text('Show Shots')
        .style('font-size', '18px')
        .style('cursor', 'pointer')
        .style('display', 'none')
        .on('mouseenter', function(d){
          d3.select(this).style('text-decoration', 'underline')
        })
        .on('mouseout', function(d){
          d3.select(this).style('text-decoration', 'none')
        })

        colScale = d3.scaleLinear().domain([-.1,.3,.8]).range(['blue', 'white', 'red'])
        svg.append("g")
          .attr("class", "legendLinear")
          .attr("transform", `translate(${width-80},25)`)
          .style('display', 'none')



        svg.on('click', function(){
          if(1 == 0){
            svg.selectAll('.click-circle').remove()
            svg.selectAll('text').remove()
            var local = d3.mouse(this)


            drawCircle(local[0], local[1])
            x1 = Math.round(xScale.invert(local[0])*100,3)/100
            y1 = Math.round(yScale.invert(local[1])*100,3)/100
            svg.append('text')
              .attr('y', yScale(0))
              .attr('x', xScale(0))
              .style('text-anchor', 'middle')
              .style('font-size', '16px')
              .text('(' + Math.round(xScale.invert(local[0])*100)/100 + ', ' + y1 + ')');
              $('#btn').show
          }
        })

  }

  function drawCircle(x, y){
      svg.append('circle')
      .attr('class', 'click-circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', '5')
      .style('fill', 'navy')
    }

  tableData = []

  // data courtesy of NBA Shots API
  d3.csv("./src/shots.csv", function(row) { return row
    }).then(function(d){
          drawCourt()
          show = 0
          playerSet = new Set(d.map(function(d){ return d.name}))
          players = [...playerSet]
          for(player in players){
            $('#select optgroup').append(`<option> ${players[player]} </option>`)
          }
          $('#select').change(function(){
              $('#showShots').text('Show Shots')
              $('#showShots').show()
              $('#note').show()
              $('#showShots').unbind()
              $('#shotDiv').hide()
              $('#showShots').click(function(){
                if($('#showShots').text() == 'Show Shots'){
                  $('#showShots').text('Hide Shots')
                  show = 1
                }else{
                  $('#showShots').text('Show Shots')
                  show = 0
                }
              $('.shot').toggle()
            })
              $('.fil').css('cursor', 'pointer')

                    filters = {
                      'quarter': [],
                      'make': [],
                      'type': []
                    }
                    $('.fil').unbind()
                    $('.m').removeClass('mSelect')
                    $('.q').removeClass('qSelect')
                    $('.t').removeClass('tSelect')
                    player = $(this).val()
                    $("#select").val(player)
                    playerData = d.filter(function(d){ return d.name == player})
                    plotShots(playerData);


                    $('.fil').click(function(){
                      if($('#select').val() != '--'){


                      $('#shotDiv').hide()
                      val = $(this).data('val')
                      if($(this).hasClass('q')){
                        if($(this).hasClass('qSelect')){
                          $(this).removeClass('qSelect')
                          for(el of val){
                            filters.quarter.splice(filters.quarter.indexOf(el),1)
                          }
                        }else{
                          $(this).addClass('qSelect')
                          for(el of val){
                            filters.quarter.push(el)
                          }
                        }
                      }
                        if($(this).hasClass('m')){
                          if($(this).hasClass('mSelect')){
                            $(this).removeClass('mSelect')
                            for(el of val){
                              filters.make.splice(filters.make.indexOf(el),1)
                            }
                          }else{
                            $(this).addClass('mSelect')
                            for(el of val){
                              filters.make.push(el)
                            }
                          }
                      }
                      if($(this).hasClass('t')){
                        if($(this).hasClass('tSelect')){
                          $(this).removeClass('tSelect')
                          for(el of val){
                            filters.type.splice(filters.type.indexOf(el),1)
                          }
                        }else{
                          $(this).addClass('tSelect')
                          for(el of val){
                            filters.type.push(el)
                          }
                        }
                    }
                      filteredData = playerData
                      if(filters.quarter.length > 0 & filters.quarter.length < 6){
                        filteredData = filteredData.filter(function(d){ return filters.quarter.indexOf(d.period) > -1})
                      }
                      if(filters.make.length > 0 & filters.make.length < 2){
                        filteredData = filteredData.filter(function(d){ return filters.make.indexOf(d.shot_made_flag) > -1})
                      }
                      if(filters.type.length > 0 & filters.type.length < 2){
                        filteredData = filteredData.filter(function(d){ return filters.type.indexOf(d.shot_type) > -1})
                      }



                      plotShots(filteredData);
                      }
                    })
      })
    });





  function plotShots(data){
    if(data.length > 0 & 1 == 0){
      $('#name').text(`${data[0].name} - ${data.length} Shots`)
    }
    d3.selectAll('.legendLinear').empty()
    d3.selectAll('.legendLinear').style('display', 'block')
    d3.selectAll('.shot').remove()
    d3.selectAll('.hex').remove()
    xScaleCourt = d3.scaleLinear().range([width, 0]).domain([-250,250])
    yScaleCourt = d3.scaleLinear().range([height, 0]).domain([-50,450])



    hexbin = d3.hexbin()
    .radius(30)
    .extent([0,0], [width, height])

    hexData = []

    for(d of data){
      hexData.push([xScaleCourt(d.x), yScaleCourt(d.y), d.shot_made_flag, d.shot_key])
    }


    hexagons = hexbin(hexData)
    for(hex of hexagons){
      ids = []
      made = 0
      for(shot of hex){
        made += parseFloat(shot[2])
        ids.push(shot[3])
      }
      hex.made = made
      hex.perc = made/hex.length
      hex.ids = ids
    }





    r = d3.scaleSqrt().domain([0, d3.max(hexagons.map(function(d){return d.length}))])
    .range([10, hexbin.radius()*Math.SQRT2])


    svg.selectAll('.hex')
    .data(hexagons)
    .enter().append('path').attr('class', 'hex')
    .attr('d', function(d){return hexbin.hexagon(r(d.length))})
    .attr('transform', function(d){ return `translate(${d.x}, ${d.y})`})
    .style('fill', function(d){ return colScale(d.perc)})
    .style('stroke', 'white')
    .style('opacity', '.85')
    .style('stroke-width', '.75')
    .style('cursor', 'pointer')
    .on('mouseenter', function(d){
      $('#toolTip').css('left', d3.event.pageX+30)
      $('#toolTip').css('top', d3.event.pageY-50)
      d3.select('#toolTip').html(`${Math.round(d.perc*100)}% (${d.made}/${d.length})`)
      $('#toolTip').show()

    })
    .on('mouseout', function(d){
      $('#toolTip').hide()
      d3.select('#toopTip').html('')
    })
    .on('click', function(d){
      $('tr.rows').remove()
      $('#shotDiv').show()
      tableData = playerData.filter(function(e){ return d.ids.indexOf(e.shot_key) > -1})
      .sort(function(a,b){ return d3.ascending(new Date(String(a.game_date)), new Date(String(b.game_date)))
          || d3.ascending(a.period, b.period);
        })

      d3.select('#actShotTable').selectAll('tr.rows')
      .data(tableData, function(d){return d.shot_key}).enter().append('tr').attr('class','rows')

      d3.selectAll('tr.rows').append('td')
      .html(function(d){return d.game_date.replace('/', '-').replace('/', '-')})
      .style('width', '25%')

      d3.selectAll('tr.rows').append('td')
      .html(function(d){return parseFloat(d.period) > 4 ? 'OT' : d.period})
      .style('width', '10%')

      d3.selectAll('tr.rows').append('td')
      .html(function(d){return d.action_type.replace('shot', '').replace('Shot','').replace('Jump', 'Jumper').replace('Turnaround ', '')})
      .style('width', '45%')

      d3.selectAll('tr.rows').append('td')
      .html(function(d){return d.shot_made_flag == '1' ? 'Good' : 'No Good'})
      .style('width', '20%')

    })


    svg.selectAll('.shot').data(data)
    .enter().append('circle')
    .attr('class', 'shot')
    .attr('cx', function(d){ return xScaleCourt(d.x)})
    .attr('cy', function(d){ return yScaleCourt(d.y)})
    .attr('r', '6')
    .style('fill', function(d){ return d.shot_made_flag == 1 ? 'green' : 'red'})
    .style('stroke', 'black')
    .style('cursor', 'pointer')
    .style('display', show == 0 ? 'none' : 'inline')
    .on('mouseenter', function(d){
      $('#toolTip').css('left', d3.event.pageX+30)
      $('#toolTip').css('top', d3.event.pageY-50)
      d3.select('#toolTip').html(`${d.game_date.replace('/', '-').replace('/', '-')} @ ${d.HTM} <br>
      <div style = 'margin-top: 10px'>${d.shot_distance}ft ${d.action_type.replace('shot', '').replace('Shot','').replace('Jump', 'Jumper').replace('Turnaround ', '')} (${d.shot_made_flag == 1 ? 'Good' : 'No Good'})</div>`)
      $('#toolTip').show()

    })
    .on('mouseout', function(d){
      $('#toolTip').hide()
      d3.select('#toopTip').html('')
    })


      var legendHexagons = [
      [width-80,20,.15,5],
      [width-80,40,.3,10],
      [width-80,70,.8,15],
      ]

      var legend = svg.append('g')
      legend.selectAll('.hexLegend')
      .data(legendHexagons)
      .enter().append('path').attr('class', 'hexLegend')
      .attr('d', function(d){return hexbin.hexagon((d[3]))})
      .attr('transform', function(d){ return `translate(${d[0]}, ${d[1]})`})
      .style('fill', function(d){ return colScale(d[2])})
      .style('stroke', 'black')

      legend.append('text').text('High Freq.')
      .attr('x', width-60)
      .attr('y', 67)
      .style('font-size', '10px')
      .style('text-anchor','start')

      legend.append('text').text('Efficient')
      .attr('x', width-60)
      .attr('y', 80)
      .style('font-size', '10px')
      .style('text-anchor','start')

      legend.append('text').text('Low Freq.')
      .attr('x', width-60)
      .attr('y', 20)
      .style('font-size', '10px')
      .style('text-anchor','start')

      legend.append('text').text('Inefficient')
      .attr('x', width-60)
      .attr('y', 33)
      .style('font-size', '10px')
      .style('text-anchor','start')

      var bbox = legend.node().getBBox();

      var box = svg.append("rect")
          .attr("x", bbox.x-5)
          .attr("y", bbox.y-5)
          .attr('id', 'bbox')
          .attr("width", bbox.width+10)
          .attr("height", bbox.height+10)
          .style("stroke", "black")
          .style("stroke-width", "1.5px")

          var legend = svg.append('g')
          legend.selectAll('.hexLegend')
          .data(legendHexagons)
          .enter().append('path').attr('class', 'hexLegend')
          .attr('d', function(d){return hexbin.hexagon((d[3]))})
          .attr('transform', function(d){ return `translate(${d[0]}, ${d[1]})`})
          .style('fill', function(d){ return colScale(d[2])})
          .style('stroke', 'black')

          legend.append('text').text('High Freq.')
          .attr('x', width-60)
          .attr('y', 70)
          .style('font-size', '10px')
          .style('text-anchor','start')

          legend.append('text').text('Efficient')
          .attr('x', width-60)
          .attr('y', 83)
          .style('font-size', '10px')
          .style('text-anchor','start')
          .style('fill', 'red')

          legend.append('text').text('Low Freq.')
          .attr('x', width-60)
          .attr('y', 18)
          .style('font-size', '10px')
          .style('text-anchor','start')

          legend.append('text').text('Inefficient')
          .attr('x', width-60)
          .attr('y', 31)
          .style('font-size', '10px')
          .style('text-anchor','start')
          .style('fill', 'blue')

  }

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
    .size([width, height])
    .padding(1.5);
/*d3.csv("1.csv", function(d) {
  d.value = parseInt(d.Count)+1;
  if (d.value) return d;
},*/
//D.forEach(
// function(classes) {
  //if (error) throw error;

  var root = d3.hierarchy({children: classes})
      .sum(function(d) { return d.Count+1; })
      .each(function(d) {
        if (id = d.data.Site) {
          d.id = id;
          console.log(d.id);
          d.package = d.data.Search;
          d.class = d.data.Search;
          console.log(d.package)
          console.log(d.class)
        }
      });

  var node = svg.selectAll(".node")
    .data(pack(root).leaves())
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("circle")
      .attr("id", function(d) { return d.id; })
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.data.Site); });

  node.append("clipPath")
      .attr("id", function(d) { return "clip-" + d.id; })
    .append("use")
      .attr("xlink:href", function(d) { return "#" + d.id; });

  node.append("text")
      .attr("clip-path", function(d) { return "url(#clip-" + d.class + ")"; })
    .selectAll("tspan")
    .data(function(d) { return d.data.Search.split(/(?=[A-Z][^A-Z])/g); })
    .enter().append("tspan")
      .attr("x", 0)
      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
      .text(function(d) { return d; });


  node.append("title")
      .text(function(d) { return d.id + "\n" + format(d.data.Count) + "\n" +
         d.data.Search; });

var data = d3.map(classes, function(d) { return d.Site }).keys();

console.log(data);

var legend = svg.selectAll(".legend")
      .data(data)
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function (d, i) { console.log(d);return "translate(0," + i * 20 + ")"; });

      legend.append("rect")
                .attr("x", 0)
                .attr("width", 160)
                .attr("height", 18)
                .style("fill", function (d) { return color(d);});

      legend.append("text")
                .attr("x", 11)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(function (d) { console.log(d);return d; });


 //   }
//);


// @TODO: YOUR CODE HERE!
//svg dimensions
var svgWidth = 960;
var svgHeight = 660;

//define margin
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

//chart area dimensions
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

//svg dimensions
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);


var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("./assets/data/data.csv").then(function(allData) {

    allData.forEach(function(data) {
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
    });

    var xMin;
    var yMin;
    var xMax;
    var yMax;
    
    xMin = d3.min(allData, function(data) {
        return data.healthcare;
    });
    
    yMin = d3.min(allData, function(data) {
        return data.poverty;
    });

    xMax = d3.max(allData, function(data) {
        return data.healthcare;
    });    
   
    yMax = d3.max(allData, function(data) {
        return data.poverty;
    });

    var xLinearScale = d3.scaleLinear()
        .domain([xMin, xMax])
        .range([0, width]);
    var yLinearScale = d3.scaleLinear()
        .domain([yMin, yMax])
        .range([height, 0]);

    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

     var xAxis = chartGroup.append("g")
 
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

    var yAxis = chartGroup.append("g")
    .call(leftAxis)

})
    

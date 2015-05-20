console.log("In script !");

var generate_world= function(){
	console.log("hey");
	var n = document.getElementById("no_of_cells").value;
	console.log(n);

  
  for (i=0;i<n;i++){
    console.log("Hre");
    cell = document.getElementsByClassName('world-cell')[0];
    var new_cell = document.createElement('div');
    new_cell.className="world-cell";
    document.getElementById('world').appendChild(new_cell);
  }
}



window.onload=function(){
var data = {
  "xScale": "ordinal",
  "yScale": "linear",
  "main": [
    {
      "className": ".pizza",
      "data": [
        {
          "x": "Pepperoni",
          "y": 40
        },
        {
          "x": "Cheese",
          "y": 80
        },
        {
          "x": "dfdheese",
          "y": 80
        },
        {
          "x": "Cdfese",
          "y": 86.68	
        },

      ]
    }
  ]
};
var myChart = new xChart('bar', data, '#example1');
}
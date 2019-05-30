
function createElement() {
    var data_pool;
    var url_pool = 'http://172.30.12.145:8888/poolip_api/report_free_list/'
    var user = 'tuongvx'
    var password = 'abcd@1234'
    $.ajax({
    	type: 'GET',
    	url : url_pool,
    	dataType: 'json',
    	headers: {
    		'Authorization': 'Basic ' + btoa(user + ':' + password)
    	},
    	success: function (data){
    		data_pool = data;
   //  		var data2 = [
			// 	  {
			// 	    //value: data_pool[data_pool.length-7]['used'],
			// 	    value: 3,
			// 	    color:"#F7464A",
			// 	    highlight: "#FF5A5E",
			// 	    label: "Used"
			// 	  },
			// 	  {
			// 	    //value: data_pool[data_pool.length-7]['free'],
			// 	    value: 4,
			// 	    color: "#46BFBD",
			// 	    highlight: "#5AD3D1",
			// 	    label: "Free"
			// 	  },

			// 	];
			// console.log(data2)
			// var options1 = {
			//   bezierCurve: false,
			//   animation: true,
			//   animationEasing: "easeOutQuart",
			//   showScale: false,
			//   tooltipEvents: ["mousemove", "touchstart", "touchmove"],
			//   tooltipCornerRadius: 3,
			//   pointDot : true,
			//   pointDotRadius : 4,
			//   datasetFill : true,
			//   scaleShowLine : true,
			//   animationEasing : "easeOutBounce",
			//   animateRotate : true,
			//   animateScale : true,
			// };
			// var ctx = document.getElementById("myChart").getContext("2d");
			// var chart = new Chart(ctx, {
			// 		    // The type of chart we want to create
			// 		    type: 'pie',

			// 		    // The data for our dataset
			// 		    data: data2,
			// 		    // Configuration options go here
			// 		    options: options1
			// 			});
    		console.log(data_pool[data_pool.length-7])
   			var ctx = document.getElementById('myChart').getContext('2d');
		    var chart = new Chart(ctx, {
		    // The type of chart we want to create
		    type: 'line',

		    // The data for our dataset
		    data: {
		        labels: ['January', 'February'],
		        datasets: [{
		            label: 'My First dataset',
		            backgroundColor: 'rgb(255, 99, 132)',
		            borderColor: 'rgb(255, 99, 132)',
		            data: [data_pool[data_pool.length-7]['free'], data_pool[data_pool.length-7]['used']]
		        }]
		    },

		    // Configuration options go here
		    options: {}
			});
    	}
    });
}
createElement()
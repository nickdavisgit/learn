$(function(){
	const ctx_ret = document.getElementById('students_sex_nums');
	const labels = ['高一1班', '高一2班', '高二1班','高二2班', '高三1班', '高三2班', '高四1班'];  // 设置 X 轴上对应的标签
	const data_ret = {
	  labels: labels,
	  datasets: [{
	    label: '人数',
	    data: [65, 59, 80, 81, 56, 55, 40],
	    backgroundColor: [      // 设置每个柱形图的背景颜色
	      'rgba(255, 99, 132, 0.2)',
	      'rgba(255, 159, 64, 0.2)',
	      'rgba(255, 205, 86, 0.2)',
	      'rgba(75, 192, 192, 0.2)',
	      'rgba(54, 162, 235, 0.2)',
	      'rgba(153, 102, 255, 0.2)',
	      'rgba(201, 203, 207, 0.2)'
	    ],
	    borderColor: [     //设置每个柱形图边框线条颜色
	      'rgb(255, 99, 132)',
	      'rgb(255, 159, 64)',
	      'rgb(255, 205, 86)',
	      'rgb(75, 192, 192)',
	      'rgb(54, 162, 235)',
	      'rgb(153, 102, 255)',
	      'rgb(201, 203, 207)'
	    ],
	    borderWidth: 1     // 设置线条宽度
	  }]
	};
	const config_ret = {
	  type: 'bar', // 设置图表类型
	  data: data_ret,  // 设置数据集
	  options: {
	    scales: {
	      y: {
	        beginAtZero: true // 设置 y 轴从 0 开始
	      }
	    }
	  },
	};
	const myChart_ret = new Chart(ctx_ret, config_ret);
	
	const ctx_circle = document.getElementById('student_test_res');
	const data_circle = {
	  labels: [
	    '优秀',
	    '良好',
		'不及格'
	  ],
	  datasets: [{
	    label: '环形图实例',
	    data: [100, 50, 10],
	    backgroundColor: [
		  'rgb(0, 255, 127)',
	      'rgb(54, 162, 235)',
		   'rgb(255, 99, 132)'
	      
	    ],
	    hoverOffset: 4
	  }]
	};
	const config_circle = {
	  type: 'doughnut',
	  data: data_circle,
	  options: {
	    responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
	    maintainAspectRatio: false,// 保持图表原有比例
	  }
	};
	const myChart_circle = new Chart(ctx_circle, config_circle);
	
	const ctx_connect = document.getElementById('student_connect_res');
	const data_connect = {
	  labels: [
	    '高一1班',
	    '高一2班',
	    '高二1班',
	    '高二2班',
		'高三1班',
		'高三2班',
		'高四1班'
	  ],
	  datasets: [{
	    type: 'bar',
	    label: '男生人数',
	    data: [21, 24,22, 20,19,22,32],
	    borderColor: 'rgb(255, 99, 132)',
	    backgroundColor: 'rgba(255, 99, 132, 0.5)'
	  }, {
	    type: 'line',
	    label: '女生人数',
	    data: [24, 25, 23, 26,32,27,19],
	    fill: false,
	    borderColor: 'rgb(54, 162, 235)'
	  }]
	};
	const config_connect = {
	  type: 'scatter',
	  data: data_connect,
	  options: {
	    responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
	    maintainAspectRatio: false,// 保持图表原有比例
	    scales: {
	      y: {
	        beginAtZero: true
	      }
	    }
	  }
	};
	const myChart_connect = new Chart(ctx_connect, config_connect);
});
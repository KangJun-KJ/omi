webpackJsonp([49],{95:function(r,n){r.exports="## Bar\r\n\r\n\u67f1\u72b6\u56fe\u3002\r\n\r\n## \u4f7f\u7528\r\n\r\n```html\r\n<m-bar id=\"myBar\" width=\"600\" height=\"300\" data=\"{\r\n  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\r\n  datasets: [{\r\n    label: '# of Votes',\r\n    data: [12, 19, 3, 5, 2, 3],\r\n    backgroundColor: [\r\n      'rgba(255, 99, 132, 0.2)',\r\n      'rgba(54, 162, 235, 0.2)',\r\n      'rgba(255, 206, 86, 0.2)',\r\n      'rgba(75, 192, 192, 0.2)',\r\n      'rgba(153, 102, 255, 0.2)',\r\n      'rgba(255, 159, 64, 0.2)'\r\n    ],\r\n    borderColor: [\r\n      'rgba(255,99,132,1)',\r\n      'rgba(54, 162, 235, 1)',\r\n      'rgba(255, 206, 86, 1)',\r\n      'rgba(75, 192, 192, 1)',\r\n      'rgba(153, 102, 255, 1)',\r\n      'rgba(255, 159, 64, 1)'\r\n    ],\r\n    borderWidth: 1\r\n  }]\r\n}\"\r\n  options=\"{\r\n  legend: {\r\n    display: false\r\n  },\r\n  scales: {\r\n    yAxes: [{\r\n      ticks: {\r\n        beginAtZero: true\r\n      }\r\n    }]\r\n  }\r\n}\"></m-bar>\r\n```\r\n\r\n## \u66f4\u65b0\u56fe\u8868\r\n\r\n```js\r\n//\u83b7\u53d6\u8be5\u5143\u7d20\r\nvar chart = document.querySelector('#myBar')\r\n//\u66f4\u6539\u56fe\u8868\u7684\u6570\u636e\r\nchart.props.data.datasets.forEach(dataset => {\r\n  dataset.data.forEach((item, index) => {\r\n    dataset.data[index] = Math.random() * 100\r\n  })\r\n})\r\n//\u66f4\u65b0\u56fe\u8868\u89c6\u56fe\r\nchart.update()\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n```jsx\r\n{\r\n  data: object,\r\n  options: object,\r\n  width: number,\r\n  height: number,\r\n  horizontal?: string\r\n}\r\n```"}});
//# sourceMappingURL=49.c7be8bad.chunk.js.map
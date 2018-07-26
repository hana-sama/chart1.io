google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('string', '調査年月日');
data.addColumn('number', 'かなり上がった');
data.addColumn('number', '少し上がった');
data.addColumn('number', '変化なし');
data.addColumn('number', '少し下がった');
data.addColumn('number', 'かなり下がった');

data.addRows([
  ['2006年6月', 9.8, 43.9, 40.4, 4.8, 0.4],
  ['2006年9月', 11.2, 48, 36.1, 3.5, 0.2],
  ['2006年12月', 7.5, 39, 45.5, 7, 0.3],
  ['2007年3月', 3.4, 35, 52.6, 8.4, 0.4],
  ['2007年6月', 6, 47, 41, 4.8, 0.2],
  ['2007年9月',  8.6, 51.4, 35.1, 3.9, 0.3],
  ['2007年12月',  20.4, 58.2, 17.8, 2.3, 0.6],
  ['2008年3月',  25.2, 60.7, 11.4, 1.6, 0.4],
  ['2008年6月',  40.8, 51.3, 5.8, 0.9, 0.4],
  ['2008年9月',  53, 41.6, 3.2, 0.7, 0.7],
  ['2008年12月',  35.7, 50.9, 9, 2.9, 0.8],
  ['2009年3月',  17.8, 48.8, 22.1, 9.8, 1],
  ['2009年6月',  8.1, 39.4, 29.2, 21, 1.3],
  ['2009年9月',  8, 39.4, 31.5, 18.6, 1.5],
  ['2009年12月',  4.4, 24.4, 35.1, 31.5, 3.4],
  ['2010年3月',  3.4, 20.2, 36, 35.9, 3.9],
  ['2010年6月',  5.2, 30.6, 37.7, 22.9, 2.6],
  ['2010年9月',  4.1, 30.1, 40.7, 22.6, 1.8],
  ['2010年12月',  6.2, 31.9, 39.9, 19.2, 1.9],
  ['2011年3月',  6.5, 43.8, 35.3, 12.7, 1],
  ['2011年6月',  6.7, 43.7, 36, 11.6, 0.8],
  ['2011年9月',  7.1, 44.8, 35, 11, 1],
  ['2011年12月',  5.8, 40.9, 39.2, 12.1, 1.2],
  ['2012年3月',  6.6, 41.4, 39, 11.8, 0.7],
  ['2012年6月',  5.9, 39.9, 42.2, 10.6, 0.7],
  ['2012年9月',  5.2, 38.7, 44, 10.4, 0.9],
  ['2012年12月',  4.9, 33.6, 46.8, 12.9, 1.3],
  ['2013年3月',	  4.9,	41.7,	43.2,	8.2,	0.8],
  ['2013年6月',	  5.2,	45.3,	44.5,	4.4,	0.2],
  ['2013年9月',		8.3,	59.2,	28.1,	3.1,	0.3],
  ['2013年12月',	7.8,	59.2,	29.3,	2.7,	0.2],
  ['2014年3月',		8.4,	60.9,	27.7,	2.2,	0.3],
  ['2014年6月',		10.9,	60.4,	25.4,	1.8,	0.7],
  ['2014年9月',	  19.3,	61.1,	16.9,	1.1,	0.7],
  ['2014年12月',	18.9,	60.6,	16.8,	1.6,	0.7],
  ['2015年3月',	  21.1,	62.9,	13.1,	2,	0.5],
  ['2015年6月',		22.4,	63.9,	11.6,	1.1,	0.3],
  ['2015年9月',		22.7,	61.4,	13,	1.9,	0.2],
  ['2015年12月',	17.1,	61.7,	18.8,	1.6,	0.4],
  ['2016年3月',		14.1,	56.4,	24.1,	4.2,	0.7],
  ['2016年6月',		13.7,	59.4,	23.6,	2.4,	0.4],
  ['2016年9月',		10.2,	54.3,	31,	3.4,	0.5],
  ['2016年12月',	14.3,	55.8,	26.4,	2.7,	0.4],
  ['2017年3月',		10.5,	53.3,	32.8,	2.2,	0.4],
  ['2017年6月',		9.8,	57.6,	29.6,	2,	0.3],
  ['2017年9月',		7.8,	55.4,	33.1,	2.8,	0.3],
  ['2017年12月',	7.6,	59.5,	30,	2.2,	0.1],
  ['2018年3月',		14.8,	58.7,	23.7,	1.8,	0.4],
  ['2018年6月',		10.9,	58.9,	26.9,	2.3,	0.5]
]);

var options = {
  chart: {
    title: '生活意識アンケート調査（一年前と比べた物価変動に関する認識）',
    subtitle: '有効回答数対する割合(%)'
  },
  width: 900,
  height: 500,
  axes: {
    x: {
      0: {side: 'top'}
    }
  }
};

var chart = new google.charts.Line(document.getElementById('line_top_x'));

chart.draw(data, google.charts.Line.convertOptions(options));
}
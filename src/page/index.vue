<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<h3>{{productList.pc.title}}</h3>
				<ul>
					<li v-for="item in productList.pc.list">
						<a :href="item.url">{{item.name}}</a>
						<span v-if="item.hot" class="hot-tag">HOT</span>
					</li>
				</ul>
				<div class="hr"></div>
				<h3>{{productList.app.title}}</h3>
				<ul>
					<li v-for="item in productList.app.list">
						<a :href="item.url">{{item.name}}</a>
						<span v-if="item.hot" class="hot-tag">HOT</span>
					</li>
				</ul>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in mewList">
						<a :href="item.url" class="news-item">{{item.name}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<slide-show :slides=slides></slide-show>
			<div class="index-board-list">
				<div v-for="(item, index) in boardList" class="index-board-item" :class="[{'line-last' : index%2!==0},'index-board-' + index]">
					<div class="index-board-item-inner">
						<h2>{{item.title}}</h2>
						<p>{{item.description}}</p>
						<div class="index-board-button">
							<a href="" class="button_buy">立即购买</a>
							<!-- <router-link class="button"></router-link> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import slideShow from '../components/slideShow'
export default {
	components: {
		slideShow
	},
	data(){
		return {
			invTime: 2000,
			slides: [{
				src: require('../assets/img/slide_1.jpg'),
				title: 'xxx1',
				href: 'detail/analysis'
			},{
				src: require('../assets/img/slide_2.jpg'),
				title: 'xxx2',
				href: 'detail/count'
			},{
				src: require('../assets/img/slide_3.jpg'),
				title: 'xxx3',
				href: 'http://baidu.com'
			},{
				src: require('../assets/img/slide_4.jpg'),
				title: 'xxx4',
				href: 'detail/forecast'
			}],
			productList: {
				pc: {
					title: 'PC产品',
					list: [{
						name: '数据统计',
						url: 'htttp://starcraft.com',
						hot: true
					},{
						name: '数据预测',
						url: 'htttp://warcraft.com'
					},{
						name: '流量分析',
						url: 'htttp://overwatch.com'
					},{
						name: '广告发布',
						url: 'htttp://hearthstone.com'
					}]
				},
				app: {
					title: '应用类',
					list: [{
						name: '91助手',
						url: 'http://weixin.com'
					},{
						name: '产品助手',
						url: 'http://twitter.com',
						hot: true
					},{
						name: '智能地图',
						url: 'http://maps.com'
					},{
						name: '团队语音',
						url: 'http://phone.com'
					}]
				}
			},
			mewList: [{
					name: '91助手91助手91助手91助手91助手91助手91助手',
					url: 'http://weixin.com'
				},{
					name: '产品助手产品助手产品助手产品助手产品助手产品助手产品助手',
					url: 'http://twitter.com',
					hot: true
				},{
					name: '智能地图智能地',
					url: 'http://maps.com'
				},{
					name: '团队语音团队语音团队语音团队语音团队语音',
					url: 'http://phone.com'
			}],
			slidex: [{
				src: require('../assets/img/1.jpg'),
				title: 'xxx1',
				href: 'http://www.baidu.com'
			},{
				src: require('../assets/img/2.jpg'),
				title: 'xxx2',
				href: 'http://www.baidu.com'
			},{
				src: require('../assets/img/3.jpg'),
				title: 'xxx3',
				href: 'http://www.baidu.com'
			},{
				src: require('../assets/img/4.jpg'),
				title: 'xxx4',
				href: 'http://www.baidu.com'
			},{
				src: require('../assets/img/5.jpg'),
				title: 'xxx5',
				href: 'http://www.baidu.com'
			},{
				src: require('../assets/img/6.jpg'),
				title: 'xxx6',
				href: 'http://www.baidu.com'
			}],
			boardList: [{
				title: '开放产品',
				description: '开放产品是一款开放产品',
				saleout: false
			},{
				title: '品牌营销',
				description: '品牌营销帮助你的产品更好的找到定位',
				saleout: false
			},{
				title: '使命必达',
				description: '使命必达快速迭代永远保持最前端的速度',
				saleout: true
			},{
				title: '勇攀高峰',
				description: '帮你勇闯高峰，到达事业的顶峰',
				saleout: false
			}]
		}
	},
	created(){
		// this.$http.get('getLxxist').then(function(data){
		// 	console.log(data)
		// },function(err){
		// 	console.log(err)
		// })
	}
}
</script>
<style scoped>
.index-wrap{
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;
}
.index-left{
	float: left;
	width: 300px;
	text-align: left;
}
.index-right{
	float: left;
	width: 900px;
}
.index-left-block{
	margin: 15px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr{
	margin-bottom: 20px;
	border-bottom: 1px solid #eee;
}
.index-left-block h2{
	background: #4fc08d;
	color: #fff;
	padding: 10px 15px;
	margin-bottom: 20px;
}
.index-left-block h3{
	padding: 0 15px 5px;
	font-weight: bold;
	color: #222;
}
.index-left-block ul{
	padding: 10px 15px;
}
.index-left-block li{
	padding: 5px;
}
.index-left-block li a{
	color: #333;
	text-decoration-line: none;
}
.index-board-list{
	overflow: hidden;
}
.index-board-item{
	float: left;
	width: 400px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	padding: 20px;
	margin-right: 20px;
	margin-bottom: 20px;
}
.index-board-item-inner{
	min-height: 125px;
	padding-left: 120px;
}
.index-board-0 .index-board-item-inner{
	background: url(../assets/img/board1.jpg) no-repeat;
}
.index-board-1 .index-board-item-inner{
	background: url(../assets/img/board2.jpg) no-repeat;
}
.index-board-2 .index-board-item-inner{
	background: url(../assets/img/board3.jpg) no-repeat;
}
.index-board-3 .index-board-item-inner{
	background: url(../assets/img/board4.jpg) no-repeat;
}
.index-board-item h2{
	font-size: 18px;
	font-weight: bold;
	color: #000;
	margin-bottom: 15px;
}
.line-last{
	margin-right: 0;
}
.index-board-button{
	margin-top: 20px;
}
.lastest-news{
	max-height: 512px;
}
.hot-tag{
	background: red;
	color: #fff;
}
.new-item{
	display: inline-block;
	width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.news-item{
	display: inline-block;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.button_buy{
	padding: 5px 15px;
	background: #4fc08d;
	color: #fff;
	text-decoration-line: none;
}
</style>
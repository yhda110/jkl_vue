<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<h3>PC产品</h3>
				<ul>
					<li><a href="">x</a></li>
				</ul>
				<div class="hr"></div>
				<h3>应用类</h3>
				<ul>
					<li><a href="">3</a></li>
				</ul>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li><a href=""></a></li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<!-- <slide-show></slide-show> -->
			<div class="index-board-list">
				<div class="index-board-item">
					<div class="index-board-item-inner">
						<h2></h2>
						<p></p>
						<div class="index-board-button">
							<!-- <router-link class="button"></router-link> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				productList: {
					pc: {
						title: 'PC产品',
						list: [{
							title: '数据统计',
							url: 'htttp://starcraft.com'
						},{
							title: '数据预测',
							url: 'htttp://warcraft.com'
						},{
							title: '流量分析',
							url: 'htttp://overwatch.com'
						},{
							title: '广告发布',
							url: 'htttp://hearthstone.com'
						}]
					},
					app: {
						title: '应用类',
						list: [{
							title: '91助手',
							url: 'http://weixin.com'
						},{
							title: '产品助手',
							url: 'http://twitter.com'
						},{
							title: '智能地图',
							url: 'http://maps.com'
						},{
							title: '团队语音',
							url: 'http://phone.com'
						}]
					}
				}
			}
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
.index0board-item-inner{
	min-height: 125px;
	padding-left: 120px;
}
.index-board-0 .index-board-item-inner{
	background: url(../assets/img/1.jpg) no-repeat;
}
.index-board-1 .index-board-item-inner{
	background: url(../assets/img/2.jpg) no-repeat;
}
.index-board-2 .index-board-item-inner{
	background: url(../assets/img/3.jpg) no-repeat;
}
.index-board-3 .index-board-item-inner{
	background: url(../assets/img/4.jpg) no-repeat;
}
.index-board-4 .index-board-item-inner{
	background: url(../assets/img/5.jpg) no-repeat;
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
</style>
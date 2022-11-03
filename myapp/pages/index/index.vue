<template>
	<view class="container">
		<uni-row>
			<uni-col :xs="24" :sm="24">
				<view class="status_bar">
					 <!-- 这里是状态栏 -->
				</view>
			</uni-col>
		</uni-row>
		<uni-row>
			<uni-col :xs="24" :sm="24">
				<view :style="{'height':titleHeight+'px'}">
					<uni-nav-bar @clickLeft=showCart leftWidth="60rpx" left-icon="cart" :height="titleHeight+'px'" backgroundColor="#FFF000">
						<view @click="toSearch" class="nav_search" :style="{'line-height':(titleHeight-6)+'px','height':(titleHeight-6)+'px','margin-top':'2px'}">
							<uni-icons type="search" size="18"></uni-icons><span class>请输入搜索</span>
						</view>
					</uni-nav-bar>
				</view>
			</uni-col>
		</uni-row>
		<uni-row>
			<uni-col :xs="24" :sm="24">
				<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
					<swiper class="swiper-box" @change="change">
						<swiper-item v-for="(item ,index) in info" :key="index">
							<view class="swiper-item">
								<img :src="item.url" :style="{'width':'100%'}" alt="">
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</uni-col>
		</uni-row>
		<uni-row>
			<uni-col :xs="24" :sm="24">
				<uni-row>
					<uni-col :xs="4" :sm="4" v-for="(item,index) in navs" :key="index">
						<view class="nav_bts">
							<view class="nav_bts_icon">
								<uni-icons :type="item.icon" size="30"></uni-icons>
							</view>
							<view class="nav_bts_text">{{item.text}}</view>
						</view>
					</uni-col>
				</uni-row>
			</uni-col>
		</uni-row>
		<uni-row :gutter="10" v-for="(item,index) in 2" :key="index">
			<uni-col :xs="12" :sm="12">
				<view class="goods_show_box">
					<view class="goods_show_box_img">
						<img class="goods_show_img" src="../../static/banner_img/banner_1.jpeg" :style="{'width':'100%','height':'250rpx'}"  alt="">
						<view class="goods_show_img_info">
							<text class="goods_show_img_info_left">活动</text><text class="goods_show_img_info_right">限时特价</text>
						</view>
					</view>
					<view class="goods_show_box_desc">
						<text class="goods_show_box_desc_top">java程序</text>
						<text class="goods_show_box_desc_bottom">10年实战开发经验java程序</text>
					</view>
					<view class="goods_show_box_keyinfo">￥12</view>
				</view>
			</uni-col>
			<uni-col :xs="12" :sm="12">
				<view class="goods_show_box">
					<view class="goods_show_box_img">
						<img class="goods_show_img" src="../../static/banner_img/banner_1.jpeg" :style="{'width':'100%','height':'250rpx'}"  alt="">
						<view class="goods_show_img_info">
							<text class="goods_show_img_info_left">活动</text><text class="goods_show_img_info_right">限时特价</text>
						</view>
					</view>
					<view class="goods_show_box_desc">
						<text class="goods_show_box_desc_top">java程序</text>
						<text class="goods_show_box_desc_bottom">10年实战开发经验java程序</text>
					</view>
					<view class="goods_show_box_keyinfo">￥12</view>
				</view>
			</uni-col>
		</uni-row>
	</view> 
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				titleHeight:0,
				info: [
					{url:'../../static/banner_img/banner_1.jpeg'},
					{url:'../../static/banner_img/banner_1.jpeg'},
					{url:'../../static/banner_img/banner_1.jpeg'},
				],
				navs:[
					{icon:'shop-filled',text:'门店'},
					{icon:'vip-filled',text:'VIP'},
					{icon:'gift-filled',text:'活动'},
					{icon:'medal-filled',text:'排行'},
					{icon:'fire-filled',text:'热门'},
					{icon:'pyq',text:'圈子'},
				],
				current:0,
				mode: 'default',
			}
		},
		onLoad() {
			this.getHeight();
		},
		methods:{
			getHeight(){
				let res = wx.getMenuButtonBoundingClientRect();
				this.titleHeight = res.height;
			},
			showCart() {
				uni.showToast({
					title:'正在开发中...',
					icon:'none'
				});
			},
			toSearch() {
				uni.showToast({
					title:'正在开发中',
					icon:'none'
				});
			},
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>


<style lang="scss">
	.container {
		padding: 0;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff000;
	}
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
	}
	.nav_search{
		width: 350rpx;
		border-radius: 10rpx;
		background-color: #ffff7f;
	}
	.show {
		border: 1px solid green;
	}
	.swiper-box {
		height: 250rpx;
		background-color: white;
	}
	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 250rpx;
		color: #fff;
	}
	.nav_bts{
		width: 100%;
		padding-top: 10rpx;
		text-align: center;
		background-color: whitesmoke;
	}
	.goods_show_box{
		width: 100%;
		text-align: center;
		background-color: #d0ddff;
	}
	.goods_show_img{
		border-radius: 20rpx;
	}
	.goods_show_img_info{
		position: absolute;
		top: 200rpx;
		text-align: left; 
		margin-left: 10rpx;
		background: rgba(0,0,0,0.5);
	}
	.goods_show_img_info_left{
		background: #fff000;
		padding:0 5rpx 0 5rpx;
		border-radius: 0 10rpx 0 0;
	}
	.goods_show_img_info_right{
		color: #ffffff;
		padding:0 5rpx 0 5rpx;
	}
</style>


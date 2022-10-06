<template>
	<div class="home">
		<el-row>
			<el-col :sm="24"><img alt="Vue logo" src="../assets/logo.png"></el-col>
			<el-col :sm="24"><Header :navList="{id:'101',title:'首页'}" @open="getInfo"></Header></el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
@Component({
	components: {
		Header,
	},
})
export default class HomeView extends Vue {
	private name:string
	constructor(){
		super();
		this.name = "hello";
	}
	getInfo(val:unknown):void{
		console.log(val);
	}
	
}
</script>

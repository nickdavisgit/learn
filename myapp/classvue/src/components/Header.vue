<template>
	<div class="header">
		{{navList}}<button type="button" @click="openNav">click</button>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop,Emit} from 'vue-property-decorator';
import http from '@/axios'
@Component({
	components: {
	},
})
export default class Header extends Vue {
	private name:string
	constructor(){
		super()
		this.name="leaf"
	}
	@Prop({
		type:Object,
		default:{id:'101',title:'导航'},
		required:true
	})
	navList!:unknown
	@Emit('open')
	openNav():unknown{
		console.log('ok');
		http.post("/AuthApi/groupLists/",{page:1,limit:10}).then(function(val:any){
			console.log(val);
		}).catch(function(err:any){
			console.log(err);
		})
		return {id:'102',title:'首页'};
	}
	
}
</script>

<style>
</style>
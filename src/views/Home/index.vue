<script setup name="Home">
	import { ref, onMounted, watch, watchEffect, nextTick, onUnmounted } from 'vue'	
	import {useRoute,useRouter} from "vue-router"
	import { ElScrollbar } from "element-plus"
	import resume from "@/components/resume.vue"
	import me from '@/components/me.vue'
	import web from "@/components/web.vue"
	import visualization from "@/components/visualization.vue"
	import mobile from "@/components/mobile.vue"
	import other from "@/components/other.vue"
	const scrollbarRef = ref(null)
	const list = [
		{
			title:'Home',
			path:'#resume'
		},
		{
			title:'简历',
			path:'#me'
		},
		{
			title:'PC端',
			path:'#web'
		},
		{
			title:'APP',
			path:'#mobile'
		},
		{
			title:'可视化',
			path:'#visualization'
		},
		{
			title:'其他',
			path:'#other'
		}
	]
	const activeName = ref('')
	const jump = (path) => {
		activeName.value = path
		getScrollValue(path)
	}
	const getScrollValue = (path) => {
		if (path) {
			const id = path.replace('#', '')
			const element = document.getElementById(id)
			if (element && scrollbarRef.value) {
				const scrollbar = scrollbarRef.value.wrapRef
				const targetTop = element.offsetTop
				scrollbar.scrollTo({
					top: targetTop-100,
					behavior: 'smooth'
				})
			}
		}
	}
	const debounceTimer = ref(null)
	const scroll = e => {
		// 增加防抖
		if (debounceTimer.value) {
			clearTimeout(debounceTimer.value)
		}
		debounceTimer.value = setTimeout(() => {
			handleScroll(e)
		}, 200)
	}
	const handleScroll = e => {
		// 滚动时更新activeName.value、
		const scrollTop = e.scrollTop
		list.forEach(item => {
			if (document.getElementById(item.path.replace('#', ''))) {
				const element = document.getElementById(item.path.replace('#', ''))
				if (element.offsetTop - 100 <= scrollTop) {
					activeName.value = item.path
				}
			}
		})
	}
	onMounted(() => {
		activeName.value = '#resume'
	})
	onUnmounted(()=>{
		debounceTimer.value && clearTimeout(debounceTimer.value)
	})
</script>

<template>
	<el-scrollbar height="100vh" ref="scrollbarRef" @scroll="scroll">
		<div class="home_wrap">
			<header class="header_wrap">
				<div class="nav_wrap" >
					<div 
						v-for="item in list" :key="item.path" 
						:class="{tab_item:true,'active':activeName === item.path}"
						@click="jump(item.path)"
					>
						{{ item.title }}
					</div>
				</div>
				<div class="nav_bottom"></div>
			</header>
			<div id="resume" class="resume_home box_item">
				<resume></resume>
			</div>
			<div id="me" class="me_item box_item">
				<me></me>
			</div>
			<div id="web" class="section_item box_item">
				<web></web>
			</div>
			<div id="mobile" class="section_item box_item">
				<mobile></mobile>
			</div>
			<div id="visualization" class="section_item box_item">
				<visualization></visualization>
			</div>
      <div id="other" class="section_item box_item">
				<other></other>
			</div>
		</div>
	</el-scrollbar>
</template>

<style lang="scss" scoped>
	.home_wrap {
		width: 100vw;
		background-color: #f5f5f5;
		overflow-x: hidden;
		padding-top: 80px;
		.header_wrap {
			width: 1440px;
			position: fixed;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			.nav_wrap{
				width: 100%;
				height: 80px;
				display: flex;
				align-items: center;
				background: url('@/assets/resume/header_bg.png') no-repeat center;
				background-size: 100% 100%;
				padding: 0 70px;
				.tab_item{
					margin-right: 50px;
					cursor: pointer;
					&:hover{
						color: #007bff;
					}
				}
				.active{
					position: relative;
					color: #007bff;
					&::after{
						content: "";
						display: block;
						width: 100%;
						height: 4px;
						background:linear-gradient(90deg, #00BBFF 0%, #FF43F2 100%);
						transition: width 0.3s ease;
						position: absolute;
						bottom: -16px;
					}
				}
			}
			.nav_bottom{
				width: 100%;
				height: 20px;
				background-color: #f5f5f5;
			}
		}
		.resume_home {
			width: 1440px;
			height: 900px;
			margin: 20px auto;
		}
		.me_item{
			width: 1440px;
			height: 900px;
			margin: 20px auto;
		}
		.section_item {
			width: 1440px;
			height: auto;
			margin: 0 auto;
		}
	}
</style>

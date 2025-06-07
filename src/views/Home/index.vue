<script setup name="Home">
	import { ref, onMounted, watch } from 'vue'	
	import {useRoute,useRouter} from "vue-router"
	import { ElScrollbar } from "element-plus"
	import resume from "@/components/resume.vue"
	import me from '@/components/me.vue'
	import web from "@/components/web.vue"
	import visualization from "@/components/visualization.vue"
	import mobile from "@/components/mobile.vue"
	import other from "@/components/other.vue"
	const route = useRoute()
	const router = useRouter()
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
	const activeName = ref(route.hash)

	const jump = (path) => {
		activeName.value = path
		router.push(path)
	}
	const scrollToHash = () => {
		if (route.hash) {
			const id = route.hash.replace('#', '')
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

	onMounted(() => {
		scrollToHash()
	})

	watch(() => route.hash, () => {
		scrollToHash()
	})
</script>

<template>
	<el-scrollbar height="100vh" ref="scrollbarRef">
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
			<div id="resume" class="resume_home">
				<resume></resume>
			</div>
			<div id="me" class="me_item">
				<me></me>
			</div>
			<div id="web" class="section_item">
				<web></web>
			</div>
			<div id="mobile" class="section_item">
				<mobile></mobile>
			</div>
			<div id="visualization" class="section_item">
				<visualization></visualization>
			</div>
      <div id="other" class="section_item">
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
		padding-top: 110px;
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
				height: 30px;
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

<script setup name="Home">
	import { ref, onMounted, watch } from 'vue'	
	import {RouterLink,useRoute} from "vue-router"
	import { ElScrollbar } from "element-plus"
	import resume from "@/components/resume.vue"
	import me from '@/components/me.vue'
	import web from "@/components/web.vue"
	import visualization from "@/components/visualization.vue"
	import mobile from "@/components/mobile.vue"
	import other from "@/components/other.vue"
	const route = useRoute()
	const scrollbarRef = ref(null)
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
				<RouterLink to="#me">me</RouterLink>
				<RouterLink to="#web">web</RouterLink>
				<RouterLink to="#mobile">mobile</RouterLink>
				<RouterLink to="#visualization">visualization</RouterLink>
				<RouterLink to="#other">other</RouterLink>
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
		.header_wrap {
			width: 100%;
			height: 100px;
			position: fixed;
			top: 0;
			display: flex;
			align-items: center;
			justify-content: space-around;
			background: url('@/assets/resume/header_bg.png') no-repeat center;
			background-size: 100% 100%;
		}
		.resume_home {
			width: 100%;
			height: 100vh;
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

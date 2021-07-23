import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Item from '../views/Item.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/:id',
		name: 'Item',
		component: Item
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

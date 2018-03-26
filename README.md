## vue-scratchcard-tuzi
、、、
npm install vue-scratchcard-tuzi
、、、

## 使用说明

import ScratchCard from 'vue-scratchcard-tuzi' 

Vue.component('xxx',ScratchCard) 或者 在vue模块的component中添加
components:{
    ScratchCard
}

"<scratch-card :c_width="240" :c_height="120" :cricle_size="5" :c_color="cover" :percent="60" @SuccessFunc="scratchSuccess"></scratch-card>"

<table>
	<tr style="background-color: #DDD">
		<th>属性</th>
		<th>属性名</th>
		<th>说明</th>
	</tr>
	<tr>
		<td>c_width</td>
		<td>宽度</td>
		<td></td>
	</tr>
	<tr>
		<td>c_height</td>
		<td>高度</td>
		<td></td>
	</tr>
	<tr>
		<td>cricle_size</td>
		<td>涂擦圆点的大小</td>
		<td></td>
	</tr>
	<tr>
		<td>c_color</td>
		<td>遮盖层颜色</td>
		<td></td>
	</tr>
	<tr>
		<td>percent</td>
		<td>涂擦掉百分比的设置大小</td>
		<td></td>
	</tr>
	<tr>
		<td>imgUrl</td>
		<td>画板背景图片</td>
		<td></td>
	</tr>
	<tr>
		<td>@SuccessFunc</td>
		<td>回调函数</td>
		<td></td>
	</tr>
</table>

##喜欢的话star一下哦




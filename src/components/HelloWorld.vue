<template>
    <div class="hello">
        <h1 v-if="level == 1">
            <slot></slot>
        </h1>
        <h2 v-else-if="level == 2">
            <slot></slot>
        </h2>
        <h3 v-else-if="level == 3">
            <slot></slot>
        </h3>

		render
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
	props: ['level'],
	render: function(createElement) {
		return createElement(
			'h' + this.level,
			'一级内容',
			[
				createElement(
					'a',
					{
						attrs: {
							name: 'heardid',
							href: 'www.baidu.com'
						}
					},
					'点击跳转'
				)
			]
		)
	},
};
</script>

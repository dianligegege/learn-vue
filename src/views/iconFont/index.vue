<template>
    <div>
        <Tabs value="name1">
            <TabPane
                label="iconfont"
                name="name1"
            >
                <FontUnicode/>
            </TabPane>
            <TabPane
                label="svg"
                name="name2"
            >
                <FontSvg/>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import FontUnicode from './FontUnicode.vue';
import FontSvg from './FontSvg.vue';

export default {
    components: {
        FontUnicode,
        FontSvg,
    },
};
</script>

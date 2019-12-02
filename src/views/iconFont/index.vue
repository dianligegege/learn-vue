<template>
    <div>
        <Tabs value="name1">
            <TabPane
                label="iconfont"
                name="name1"
            >
                <FontUnicode/>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import FontUnicode from '@/components/fontType/FontUnicode.vue';


export default {
    components: {
        FontUnicode,
    },
};
</script>

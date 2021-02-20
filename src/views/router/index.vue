<template>
    <div>
        <div>
            this.$route.hash: {{ route1 }}
        </div>
        <div>
            window.location.hash: {{location1.hash }}
        </div>

        <Button
            @click="click1"
        >
            window.history.replaceState(null, null, this.$route.path);
        </Button>

        <Button
            @click="click2"
        >
            window.history.replaceState(null, null, window.location.path);
        </Button>

        <Button
            @click="click3"
        >
            this.$router.replaceState(null, null, this.$route.path);
        </Button>
        <Button
            @click="click3"
        >
            his.$router.replaceState(null, null, window.location.path);
        </Button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            location1: {},
            route1: {},
        };
    },
    methods: {
        click1() {
            window.history.replaceState(null, null, this.$route.path);
            this.location1 = window.location;
            console.log(this.$route);
            // this.route1 = this.$route;
        },
        click2() {
            window.history.replaceState(null, null, window.location.path);
            this.location1 = window.location;
            // this.route1 = this.$route;
        },
        click3() {
            this.$router.replace({path: this.$route.path});
            this.location1 = window.location;
            // this.route1 = this.$route;
        },
        click4() {
            this.$router.replace({ path: window.location.path });
            this.location1 = window.location;
            // this.route1 = this.$route;
        },
    },
    mounted() {
        this.location1 = window.location;
        console.log(this.$route);
        // this.route1 = this.$route;
    },
}
</script>
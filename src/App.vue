<template>
    <div>
        <nav>
            <router-link to="/home">Home</router-link>
            <router-link to="/profile">Profile</router-link>
        </nav>
        <div id="app">
            <transition name="navigationFade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    const favIconChangeSpeed = 2000;
    const favIcons = [
        // red circle
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Location_dot_red.svg/1024px-Location_dot_red.svg.png',
        // black circle
        'http://www.transparentpng.com/download/circle/xSvrSI-circle-transparent-picture.png'
    ];

    export default {
        name: 'app',
        components: {},
        methods: {
            animateFavIcon() {
                let count = 0;
                return setInterval(() => {
                    const icon = document.querySelector('link[rel="icon"]');
                    icon.href = favIcons[count];
                    count++;
                    if (count >= favIcons.length) {
                        count = 0;
                    }
                }, favIconChangeSpeed)
            }
        },
        mounted() {
            this.favIconAnimation = this.animateFavIcon();
        },
        beforeDestroy() {
            clearInterval(this.favIconAnimation)
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        min-height: 100vh;
        background: #151515;
    }

    nav {
        position: fixed;
        display: flex;
        justify-content: space-between;
        z-index: 999;
        width: 100%;
    }

    nav > a {
        font-size: 2rem;
        text-decoration: none;
        color: white;
    }

    /* used for the routing transition */
    .navigationFade-enter-active, .navigationFade-leave-active {
        transition: opacity 0.5s;
    }
    .navigationFade-enter, .navigationFade-leave-to {
        opacity: 0;
    }
</style>

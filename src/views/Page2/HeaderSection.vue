<template>
    <div class="root">
        <transition
                @enter="enterHeader1"
                :css="false"
                appear
        >
            <h1 class="header header1">HELLO HELLO HELLO HELLO HELLO</h1>
        </transition>

        <img class="image"
             src="../../assets/profile.jpg"
             alt="">

        <transition
                @enter="enterHeader2"
                :css="false"
                appear
        >
            <h1 class="header header2">HELLO HELLO HELLO HELLO HELLO</h1>
        </transition>
    </div>
</template>

<script>
    import {Power4, TimelineMax} from 'gsap';

    // amount of margin for the fancy text before the animation
    const headerXBeforeAnimation = 2000;

    export default {
        methods: {
            // adds the animation for the fancy text
            enterHeader(startX, el, done) {
                const tl = new TimelineMax({
                    onComplete: done
                });

                // start position
                tl.set(el, {
                    x: startX,
                    transformOrigin: '50% 50%'
                });

                // position at the end of the animation
                tl.to(el, 3, {
                    x: 0,
                    ease: Power4.easeOut,
                    delay: 0.2
                });
            },
            enterHeader1(el, done) {
                this.enterHeader(-headerXBeforeAnimation, el, done);
            },
            enterHeader2(el, done) {
                this.enterHeader(headerXBeforeAnimation, el, done);
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Londrina+Outline|Londrina+Solid');

    .root {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, #FF4B2B, #FF416C);
        margin: auto;
        position: relative;
        overflow: hidden;
        min-height: 100vh;
    }

    // fancy text
    .header {
        font-size: 12rem;
        padding: 0;
        margin: 0;
        transform: rotate(-10deg);
        white-space: nowrap;
        position: absolute;
    }

    .header1 {
        top: 15%;
        font-family: 'Londrina Solid', cursive;
    }

    .header2 {
        top: 55%;
        font-family: 'Londrina Outline', cursive;
    }

    .image {
        width: 400px;
        height: 400px;
        position: absolute;
    }
</style>

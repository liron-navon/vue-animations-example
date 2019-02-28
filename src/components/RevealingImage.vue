<template>
    <Scrollama @step-enter="stepEnterHandler" :offset="0.8" :once="true">
        <div class="root hidden cursor">
            <img :src="src" :alt="alt" :width="width" :height="height">
            <div class="text">
                <h3>{{alt}}</h3>
            </div>
        </div>
    </Scrollama>
</template>

<script>
    // scrollama is used here to reveal the image when it's scrolled to
    import 'intersection-observer' // for cross-browser support
    import Scrollama from 'vue-scrollama'

    export default {
        components: {
            Scrollama
        },
        // set stuff to change the image
        props: {
            src: String,
            alt: String,
            width: {
                type: String,
                default: () => '100%'
            },
            height: {
                type: String,
                default: () => 'auto'
            }
        },
        // show the image when it's scrolled to
        methods: {
            stepEnterHandler({element}) {
                element.classList.remove('hidden');
            }
        }
    }
</script>

<style scoped>
    .hidden {
        opacity: 0;
        transform: scale(1.2);
        pointer-events: none;
    }

    .root {
        position: relative;
        transition: all 2s;
    }

    /* some fancy cursor for some reason */
    .cursor {
        cursor: url(../assets/pointer.png), auto;
        overflow: hidden;
    }

    /* adds fancy changes when hovering the image*/
    img {
        transition: transform 1s;
    }

    .root:hover > img {
        transform: scale(1.2);
    }

    .text {
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        color: transparent;
        transition-delay: 0.5s;
        transition: color 2s ease-in-out, opacity 1s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text:hover {
        opacity: 1;
        color: white;
    }
</style>

<template>
    <div class="root">
            <div class="layer1">
                <transition
                        @enter="imageEnter(0.5,...arguments)"
                        :css="false"
                        appear
                >
                    <img
                            class="image image1"
                            ref="img1"
                            src="https://res.cloudinary.com/jingqifan/image/upload/cs_srgb,f_auto,q_auto:eco/v1548482501/intro-img1.jpg"
                            alt="">
                </transition>
                <transition
                        @enter="imageEnter(1,...arguments)"
                        :css="false"
                        appear
                >
                    <img
                            class="image image2"
                            ref="img2"
                            src="https://res.cloudinary.com/jingqifan/image/upload/cs_srgb,f_auto,q_auto:eco/v1548482501/intro-img2.jpg"
                            alt="">
                </transition>
                <transition
                        @enter="imageEnter(0.7,...arguments)"
                        :css="false"
                        appear
                >
                    <img
                            class="image image3"
                            ref="img3"
                            src="https://res.cloudinary.com/jingqifan/image/upload/cs_srgb,f_auto,q_auto:eco/v1548482501/intro-img3.jpg"
                            alt="">
                </transition>
            </div>

            <transition
                    @enter="titlesEnter"
                    :css="false"
                    appear>
                <div class="layer2">
                    <h1 class="header header1">SELECTED</h1>
                    <h1 class="header header2">WORK</h1>
                </div>
            </transition>
    </div>
</template>

<script>
    import {Power2, TweenLite, Power4, TimelineMax} from 'gsap';
    import throttle from 'lodash/debounce';

    // max movement in pixels
    const maxMovement = 50;
    // reduces movement
    const movementCoefficient = 5;

    // cap a value into a range
    const inRange = (n, range) => {
        if (n < -range) {
            return -range;
        }
        if (n > range) {
            return range;
        }
        return n;
    };

    export default {
        data() {
            return {}
        },
        // called when the component is ready to render
        mounted() {
            // I want to throttle it so gsap will not shit itself
            this.animateImagesOnMouseMove = throttle(this.animateImagesOnMouseMove, 50);
            window.addEventListener('mousemove', this.animateImagesOnMouseMove)
        },
        // called when the component is going to be destroyed
        beforeDestroy() {
            window.removeEventListener('mousemove', this.animateImagesOnMouseMove)
        },
        methods: {
            animateImagesOnMouseMove(e) {
                // calculating movement based on the mouse and the window
                const {clientX, clientY} = e;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                let movementX = inRange(clientX - centerX, maxMovement);
                let movementY = inRange(clientY - centerY, maxMovement);

                // get the elements
                const {img1, img2, img3} = this.$refs;

                // pre calculate the rotation
                const rotation = `rotate3d(${movementY * -1}, ${ movementX * -1}, 0, 20deg)`;

                const images = [img1, img3, img2];

                // tween the images
                images.forEach((img, i) => {
                    TweenLite.to(img, 2, {
                        transform: `
                        ${rotation}
                        translate(${(movementX / movementCoefficient) * (i + 1)}px, ${(movementY / movementCoefficient) * (i + 1)}px)
                        `,
                        ease: Power2.easeOut
                    });
                });
            },
            // called when the image enters
            imageEnter(time, el, done) {
                const tl = new TimelineMax({
                    onComplete: done
                });

                // start position
                tl.set(el, {
                    x: window.innerWidth * 1.5,
                    scale: 0.8,
                    transformOrigin: '50% 50%'
                });

                // position at the end of the animation
                tl.to(el, time, {
                    delay: time/2,
                    x: 0,
                    scale: 1,
                    ease: Power4.easeOut
                });
            },
            titlesEnter(el, done) {
                const tl = new TimelineMax({
                    onComplete: done
                });

                // start position
                tl.set(el, {
                    scale: 0.0,
                    opacity: 0,
                    transformOrigin: '50% 50%'
                });

                // delay a bit
                tl.to(el, 0.5, {
                    scale: 0,
                });

                // position at animation end
                tl.to(el, 1.1, {
                    opacity: 1,
                    scale: 1,
                    ease: Power4.easeOut
                });
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
        background: black;
        margin: auto;
        position: relative;
        overflow: hidden;
        min-height: 100vh;
    }

    /*
    I separate the UI into 2 layers, one for the images and one for the Titles
    It makes it easier to animate them independently
    */

    .layer1 {
        position: relative;
        width: 300px;
        height: 150px;
    }

    .layer2 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    // the moving images
    .image {
        position: absolute;
        left: 0;
        top: 0;
        transition: transform 0.2s linear;
        perspective: 800px;
        box-shadow: 0px 1px 3px 2px rgba(0,0,0,0.2), 0px 1px 1px 1px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    }

    .image1 {
        width: 28%;
        height: 85%;
        left: 0;
        top: 30%;
    }

    .image2 {
        width: 15%;
        height: 60%;
        left: 45%;
        top: 0;
    }

    .image3 {
        width: 30%;
        height: 90%;
        left: 70%;
        top: 10%;
    }


    // the fancy text
    .header {
        font-size: 4rem;
        padding: 0;
        margin: 0;
        color: white;
    }

    .header1 {
        font-family: 'Londrina Solid', cursive;
    }

    .header2 {
        font-family: 'Londrina Outline', cursive;
    }


    /* Since everything is absolute I use break points */
    @media only screen and (min-width: 600px) {
        .layer1 {
            width: 600px;
            height: 300px;
        }
        .header {
            font-size: 6rem;
        }
    }

    @media only screen and (min-width: 1000px) {
        .layer1 {
            width: 1000px;
            height: 500px;
        }
        .header {
            font-size: 8rem;
        }
    }

</style>

<template>
    <div>
        <section>
            <HeaderSection/>
        </section>

        <section class="filler filler1" ref="section1">
            <RevealingImage
                    style="width: 600px"
                    src="http://v892w2ylk4g429cyct840kvh-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/pexels-photo-117486.jpeg"
                    alt="I really love puppies!!!!"></RevealingImage>
        </section>

        <section class="filler filler2" ref="section2">
            <RevealingImage
                    style="width: 300px"
                    src="https://media.nu.nl/m/juhxpcva5efw_wd640.jpeg"
                    alt="Beutifull puppy"></RevealingImage>

            <RevealingImage
                    style="width: 300px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJgJR3Im5OIkha28Hd_VADjd8ErO_p2lmzdwRwao-bt1iaa3oIA"
                    alt="I love puppies"></RevealingImage>
        </section>

        <section class="filler filler3" ref="section3">
            <RevealingImage
                    style="width: 400px"
                    src="https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V_400x400.jpeg"
                    alt="Adorable puppy"></RevealingImage>
        </section>

    </div>
</template>

<script>
    import HeaderSection from './HeaderSection'
    import RevealingImage from '../../components/RevealingImage'
    import {ScrollMagic} from "../../ScrollMagic";
    import {TimelineMax, TweenMax} from 'gsap';

    export default {
        components: {HeaderSection, RevealingImage},
        methods: {
            setupScrollMagic() {
                const {section1, section2, section3} = this.$refs;

                // setting up the first scene
                section1.style.filter = 'sepia(0%)';
                const scene1 = new ScrollMagic.Scene({
                    triggerElement: section1, // the element at which the scene should start
                    duration: 500 // pin the element for 1000px of scrolling
                })
                    .setTween(section1, 1, {
                        filter: 'sepia(100%)'
                    })
                    .setPin(section1);

                // setting up the second scene
                const section2Images = section2.querySelectorAll('img');
                const timeline = new TimelineMax();
                section2Images.forEach((imgElement, i) => {
                    const rotation = (i % 2 === 0 ? 1 : -1) * (30 * (i + 1));
                    const time = 1 / section2Images.length;
                    timeline.add(TweenMax.to(imgElement, time, {transform: `rotate(${rotation}deg)`}))
                });

                const scene2 = new ScrollMagic.Scene({
                    triggerElement: section2, // the element at which the scene should start
                    duration: 300 // pin the element for 1000px of scrolling
                })
                    .setTween(timeline)
                    .setPin(section2);

                // setting up the third scene
                section3.style.filter = 'grayscale(0%) blur(0px)';
                const scene3 = new ScrollMagic.Scene({
                    triggerElement: section3, // the element at which the scene should start
                    duration: 300 // pin the element for 1000px of scrolling
                })
                    .setTween(section3, 1, {
                        filter: 'grayscale(100%) blur(2px)'
                    })
                    .setPin(section3);

                // setting the controller
                const controller = new ScrollMagic.Controller({
                    globalSceneOptions: {
                        triggerHook: 0,
                        offset: (window.innerHeight / 6) * -1
                    }
                });

                controller.addScene([
                    scene1,
                    scene2,
                    scene3
                ]);
                return controller;
            }
        },
        mounted() {
            this.smController = this.setupScrollMagic();
        },
        beforeDestroy() {
            if (this.smController) {
                this.smController.destroy();
            }
        }
    }
</script>

<style scoped>
    .filler {
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100% !important;
    }
</style>

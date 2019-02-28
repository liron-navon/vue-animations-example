<template>
    <div>
        <section>
            <HeaderSection/>
        </section>

        <section class="filler filler1">
            <RevealingImage
                    style="width: 400px"
                    src="https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V_400x400.jpeg"
                    alt="Adorable puppy"></RevealingImage>

        </section>

        <section class="filler filler2">

            <RevealingImage
                    style="width: 300px"
                    src="https://media.nu.nl/m/juhxpcva5efw_wd640.jpeg"
                    alt="Beutifull puppy"></RevealingImage>

            <RevealingImage
                    style="width: 300px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJgJR3Im5OIkha28Hd_VADjd8ErO_p2lmzdwRwao-bt1iaa3oIA"
                    alt="I love puppies"></RevealingImage>
        </section>

        <section class="filler filler3">
            <RevealingImage
                    style="width: 600px"
                    src="http://v892w2ylk4g429cyct840kvh-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/pexels-photo-117486.jpeg"
                    alt="I really love puppies!!!!"></RevealingImage>
        </section>
    </div>
</template>

<script>
    import HeaderSection from './HeaderSection'
    import RevealingImage from '../../components/RevealingImage'
    export default {
        components: {HeaderSection, RevealingImage}
    }
</script>

<style scoped>
    .filler {
        padding-top: 200px;
        padding-bottom: 200px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
</style>

const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // all of these aliases are used by scrollmagic gsap plugin
                "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": path.resolve('node_modules', 'scrollmagic'),
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
            }
        }
    }
};

//
// module.exports = {
//     ...
//         module: {
//     rules: [
//         {
//             test: require.resolve("some-module"),
//             use: "imports-loader?this=>window"
//         }
//     ]
// }
// };

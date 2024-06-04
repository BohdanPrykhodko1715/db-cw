/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "de7f1044142c2f4c680ec58c48825ff3"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.41048d45.css",
    "revision": "86b9db4a33791429f6a013abd97c9660"
  },
  {
    "url": "assets/img/image1.b17eecc1.png",
    "revision": "b17eecc1efd0ea66e404277a8a7560c7"
  },
  {
    "url": "assets/img/image2.8bba4720.png",
    "revision": "8bba47205573fd4e1aae9a10033935b4"
  },
  {
    "url": "assets/img/image3.a51983d2.png",
    "revision": "a51983d23a459d594ce597eddd81a2ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.966b98a4.js",
    "revision": "a23b1ec81ebdd26fa2993d29bb50f48f"
  },
  {
    "url": "assets/js/11.c83bd9b3.js",
    "revision": "48ddab246f56c5497b45b194f85e9959"
  },
  {
    "url": "assets/js/12.4e418d1c.js",
    "revision": "557e99551f340c49c55ce84a3577dec1"
  },
  {
    "url": "assets/js/13.c1b24d3f.js",
    "revision": "6b672a2175e5b73335928443252f6132"
  },
  {
    "url": "assets/js/14.f7a5257c.js",
    "revision": "43d1ef5f7d67316b46e2b3a69fc9e23d"
  },
  {
    "url": "assets/js/15.d3a72f6c.js",
    "revision": "7e212e286d760ec0758d471f6a91ba5f"
  },
  {
    "url": "assets/js/16.cdb4cf02.js",
    "revision": "9dfeb391dbe02c55a35333abe3255647"
  },
  {
    "url": "assets/js/17.08be34df.js",
    "revision": "77486d6a90ca4b6efc6b568b5618542b"
  },
  {
    "url": "assets/js/18.15bdfc4e.js",
    "revision": "0e7f3e0b9441ecdeaa6a7c85fd3aac1e"
  },
  {
    "url": "assets/js/19.5103567b.js",
    "revision": "d6c90e0683fc071c80054550f15c0538"
  },
  {
    "url": "assets/js/2.9484d651.js",
    "revision": "f4ed3e92d2a34308273b84165d6ad7d4"
  },
  {
    "url": "assets/js/20.f01daf1a.js",
    "revision": "1fe014dff70b4e991fb8ccc2436eb583"
  },
  {
    "url": "assets/js/21.6ce177e0.js",
    "revision": "d553948ca13df7062db481094d26eaad"
  },
  {
    "url": "assets/js/22.86a3177a.js",
    "revision": "f76a6e3e64e4de3d071f7f4722ebd33c"
  },
  {
    "url": "assets/js/23.83dc9631.js",
    "revision": "7ca537f1f147c417845cff6109209b7c"
  },
  {
    "url": "assets/js/24.08335057.js",
    "revision": "97d871734d15462e0bb8d132e1136512"
  },
  {
    "url": "assets/js/26.189ec659.js",
    "revision": "0816a5fe129ef6bae1d5c700b5eea9e9"
  },
  {
    "url": "assets/js/3.f9af31da.js",
    "revision": "5c066d12b2e27d92bd711fdb6707bdb8"
  },
  {
    "url": "assets/js/4.d87af922.js",
    "revision": "dfc90ca21c65dc3ae43623e9d9469b31"
  },
  {
    "url": "assets/js/5.9462c7be.js",
    "revision": "e65ad7fc4d1c9b37a8e6f8cbdaec836a"
  },
  {
    "url": "assets/js/6.f4121148.js",
    "revision": "af256713192a81b1a0b7dbaf1fc7cd26"
  },
  {
    "url": "assets/js/7.d609e247.js",
    "revision": "ae4c881f99f49b6e0945eef16d911bd5"
  },
  {
    "url": "assets/js/8.1791afbf.js",
    "revision": "37602a6fa1c3ff40299f460257685d2d"
  },
  {
    "url": "assets/js/9.a70d5448.js",
    "revision": "c2c6268a20c6cd59961248a53f650d42"
  },
  {
    "url": "assets/js/app.c7737986.js",
    "revision": "0aba13ffc18917316ed0463aa414ee80"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b1dea17bf98e9d84fed6d5b04ef53cc5"
  },
  {
    "url": "design/index.html",
    "revision": "db69003b790c9bd162a4e3c7f8758545"
  },
  {
    "url": "index.html",
    "revision": "52df0f38e8c710a2502820001ece40ea"
  },
  {
    "url": "intro/index.html",
    "revision": "ce719ab5553c40d161c6ba9f29394cdc"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "42ec395372c5c70dd561dae5d08b9fae"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4b8d476bcef4f21bc461ec63b3a3d9a6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "729468a42a0a16a641d43708cd1c5470"
  },
  {
    "url": "software/index.html",
    "revision": "ca6de588f30b06b68818fde700470470"
  },
  {
    "url": "test/index.html",
    "revision": "1fda876a3cba3e8d4f3c08e8b7851096"
  },
  {
    "url": "use cases/index.html",
    "revision": "f2e3ae23157abb8798480d97e9403224"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

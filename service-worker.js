if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"ec1624d08137fe5b45e16bc8177869d4"},{url:"/404/index.html",revision:"ec1624d08137fe5b45e16bc8177869d4"},{url:"/advanced-mining/index.html",revision:"e7b50aa14f7cb8e622c9cb95307e8344"},{url:"/assets/css/0.styles.651a7149.css",revision:"e5fd408f7d4b08722a4daa8d1d648130"},{url:"/assets/data/404/index.json",revision:"18024c7dc5f4ff459d59233e7c322852"},{url:"/assets/data/advanced-mining/index.json",revision:"b4f4f27cc913724950bbb4c073b6586c"},{url:"/assets/data/author/7dev7urandom/index.json",revision:"6ecd8e2a2c1cd2169b56732df2f3c9b1"},{url:"/assets/data/author/enderzombi102/index.json",revision:"d5a7f2c844c4490d402e94a9a032cff6"},{url:"/assets/data/author/gamemode-one/index.json",revision:"b4c2415ee30b217f8f806a5b92c25c80"},{url:"/assets/data/author/joelant05/index.json",revision:"a173dae0e8074a1eeeef016e2708e8d4"},{url:"/assets/data/author/montudor/index.json",revision:"96eb31ffb0edad6ae09f8d9eaf4319c8"},{url:"/assets/data/author/solveddev/index.json",revision:"0f5cb60a8f9997e8cee8fc90d8365de5"},{url:"/assets/data/created-plugins/2/index.json",revision:"7d165a920b4075e15bdcc8665b5ebd8b"},{url:"/assets/data/created-plugins/3/index.json",revision:"73ee19439e86817f186d5b12399cc025"},{url:"/assets/data/created-plugins/index.json",revision:"f0d111988efd3aa87ad927ae4d5f3c46"},{url:"/assets/data/creations/index.json",revision:"21db30419bf4e6c694b4b081e5ffe2d8"},{url:"/assets/data/editor-docs/faq/index.json",revision:"0085f228918a176976cba6f5422421d2"},{url:"/assets/data/editor-docs/features/index.json",revision:"3b799760c624bd7d8834e05b186c680a"},{url:"/assets/data/editor-docs/getting-started/index.json",revision:"ebb22d6d537b628098297893744baaf4"},{url:"/assets/data/editor-docs/index.json",revision:"ee0b73975b804cb8f9a6403893dc067e"},{url:"/assets/data/editor-docs/other/molang/index.json",revision:"2073d54b10aefd434ae0340195cf5b75"},{url:"/assets/data/index.json",revision:"11dae657295494a31caaf79cd3d5fae2"},{url:"/assets/data/pac-man/index.json",revision:"b101465c7df4049c9a074311ce23b595"},{url:"/assets/data/plugin-docs/auto-completions/dynamic-references/index.json",revision:"fbedba6565e6da8cc57362a0711fe7b3"},{url:"/assets/data/plugin-docs/auto-completions/index.json",revision:"9546878bfc24014998e392d8de555181"},{url:"/assets/data/plugin-docs/custom-commands/index.json",revision:"c2cbfb9dec3991f90a132af7ae133d12"},{url:"/assets/data/plugin-docs/custom-components/index.json",revision:"4f5ba1f31f8d337cd47109e04bb4a056"},{url:"/assets/data/plugin-docs/index.json",revision:"8f19d0bd364c67a5b2d686df2c8e2827"},{url:"/assets/data/plugin-docs/json/file-definitions/index.json",revision:"06b9a0406f84530873ebe07acdfb3fb1"},{url:"/assets/data/plugin-docs/json/lightning-cache/index.json",revision:"286fa7f3876c95c989d389aba234c303"},{url:"/assets/data/plugin-docs/json/presets/index.json",revision:"1eb676a4c9318e184bec722e056d66cf"},{url:"/assets/data/plugin-docs/json/snippets/index.json",revision:"18c533ca6aecb6d89e2da4bfad992d43"},{url:"/assets/data/plugin-docs/json/themes/index.json",revision:"0de0709b22004172c0cb2785dd9c5bc7"},{url:"/assets/data/plugin-docs/modules/env/index.json",revision:"5b0aa2d179d9a92aba2cb75f377a93aa"},{url:"/assets/data/plugin-docs/modules/fetch-definition/index.json",revision:"4ba4521d248c54c8f5970165e716e60d"},{url:"/assets/data/plugin-docs/modules/footer/index.json",revision:"5fe324bcf3741af4fb2ad338ff291029"},{url:"/assets/data/plugin-docs/modules/fs/index.json",revision:"e6de274d6deb44a7597fcc860144a1ad"},{url:"/assets/data/plugin-docs/modules/globals/index.json",revision:"8d7bb84703773670f276f382cf8666b9"},{url:"/assets/data/plugin-docs/modules/index.json",revision:"1eccdf904ad66a953c731cd5fc7ba77d"},{url:"/assets/data/plugin-docs/modules/path/index.json",revision:"ffb40befea855350e0526eea67bfffaa"},{url:"/assets/data/plugin-docs/modules/sidebar/index.json",revision:"b27f8270d71c8a76d2870de2f69743cd"},{url:"/assets/data/plugin-docs/modules/ui/index.json",revision:"447adcf9bfe3581b2eb7dcf24ccb5811"},{url:"/assets/data/plugin-docs/modules/utils/index.json",revision:"df61bfc7135f424b86295fb4e0bd83ac"},{url:"/assets/data/plugin-docs/modules/windows/index.json",revision:"2583cd42896ac377764203148ec5823b"},{url:"/assets/data/plugin-docs/other/common-types/index.json",revision:"113cbbfa0dbd8e859da879cddd98f636"},{url:"/assets/data/plugin-docs/other/default-file-types/index.json",revision:"2f717bcf681f6cc5e228731651b5b562"},{url:"/assets/data/plugin-docs/other/styles/index.json",revision:"9e820788bdc3a215e7cd5c7f5ecf5841"},{url:"/assets/data/plugins/056b172d-77a8-40fc-9f34-226c163e330b/index.json",revision:"403569158804515f1bda2d1f45444354"},{url:"/assets/data/plugins/44dc6685-4258-4eed-9f62-e0d0fdfd41e9/index.json",revision:"83bc3dbaad5e7ac3f224e871f1c08e07"},{url:"/assets/data/plugins/47c1b5f9-a452-4ed1-8d00-a0427dd5168a/index.json",revision:"fac67582a974b8c628c07dbc97596ccc"},{url:"/assets/data/plugins/4d73da69-6df3-46bc-9486-a602373573db/index.json",revision:"34750852ea12b222c83ce92ab66a538b"},{url:"/assets/data/plugins/6337c024-f603-11e9-802a-5aa538984bd8/index.json",revision:"9fae3a337dd9e401ac3b8248478b14e4"},{url:"/assets/data/plugins/8497489b-3b80-45a6-94f3-65d8bd1188cd/index.json",revision:"1098755198c6de8f90a56ebfcf1a42df"},{url:"/assets/data/plugins/84b65ea3-b206-40fd-aaae-3f884b12b4f4/index.json",revision:"8bc719b7337d9716db55d8224e739e4b"},{url:"/assets/data/plugins/87d418b3-e7ab-414e-9be1-13082c3cf46d/index.json",revision:"5b18c5205dadcb8977e0f0c9115663e0"},{url:"/assets/data/plugins/89457173-109d-4dff-9f7e-f8f8875e307a/index.json",revision:"3c72077a6f2ff2097f7b76f7ccb783bf"},{url:"/assets/data/plugins/a0ad4844-ee48-4687-9da2-f1a47f3d1c3a/index.json",revision:"40a44f5862967a6be1623f614b8b789b"},{url:"/assets/data/plugins/ac340569-8df3-4409-ac9d-b855b183210b/index.json",revision:"c4cca343f03d9642797664866fa1b369"},{url:"/assets/data/plugins/bridge.ui.common_window/index.json",revision:"1bbeb535f440756a38ce0f37197df907"},{url:"/assets/data/plugins/bridge.ui.confirm_window/index.json",revision:"d8d12bd90ad95dc8877cacd37a9b3975"},{url:"/assets/data/plugins/caa0a585-d513-48cf-a803-c920055e2afe/index.json",revision:"6eacf5347f87ef7bcffd23598a0917af"},{url:"/assets/data/plugins/d9419ae7-69ec-46d6-9080-a9ff48e6edab/index.json",revision:"86a47cff62a3e7926cdbace969338c47"},{url:"/assets/data/plugins/ENDERZOMBI102.bridgePlugins.create-a-block/index.json",revision:"ca501542497fdffa4f4c31adce140769"},{url:"/assets/data/plugins/f5cecd90-dda9-11ea-87d0-0242ac130003/index.json",revision:"4bb5638bfad632e00d0dd83eef5407b8"},{url:"/assets/data/plugins/f883bbc1-d81a-4373-8ec7-a11b81d9070a/index.json",revision:"21958a7907bb3f3cf79fb3927c845eb3"},{url:"/assets/data/plugins/JustSkitzo.bridgePlugins.create-an-item/index.json",revision:"8b9a3b67a278405fee0f9ed06f5ff9c2"},{url:"/assets/data/plugins/solved.features.dynamic_function/index.json",revision:"1dc89d0a0aa40f7333a6a6aee0056770"},{url:"/assets/data/plugins/solved.features.dynamic_json/index.json",revision:"84437aa20f06afc54c6d124eb7330061"},{url:"/assets/data/plugins/solved.utilities.bridge_plugin_creator/index.json",revision:"06a906d1c3a190f00d1a8f3b8fa82065"},{url:"/assets/data/plugins/solved.utilities.console/index.json",revision:"a5173a632a0a17b53fcb368586dabb42"},{url:"/assets/data/plugins/solved.utilities.crash_overview/index.json",revision:"8c9f4a3ff35fa5a26cef6e15a41c7e04"},{url:"/assets/data/plugins/solved.utilities.file_search/index.json",revision:"b304302b7ec93273e1d3aa00e245647d"},{url:"/assets/data/tags/advanced/index.json",revision:"6dec051aed070229a2852265c08f6b4d"},{url:"/assets/data/tags/component/index.json",revision:"4a788ffee8ea5de01c1a2010a89858cd"},{url:"/assets/data/tags/curated/index.json",revision:"1c9fb2333249fda1fca27294c9e869d0"},{url:"/assets/data/tags/economy/index.json",revision:"9d123f6bb1fb81d6fbbd7913e625b215"},{url:"/assets/data/tags/minigame/index.json",revision:"93cb9d95e40e7049350cf418026c5415"},{url:"/assets/data/tags/mining/index.json",revision:"4b2ba3f44e0289e5cb3e2833cf1b4313"},{url:"/assets/data/tags/presets/index.json",revision:"21165b8545feec87921889a4a1ff19df"},{url:"/assets/data/tags/snippet/index.json",revision:"45f61cd06a42e728d2bb6f5c0cd02354"},{url:"/assets/data/tags/theme/index.json",revision:"0abe872bb3732571643df6a4d7c1a4f2"},{url:"/assets/data/tags/utility/index.json",revision:"299a836f3dc389a2825f013fde2b0bb5"},{url:"/assets/data/tags/v1-0-0/index.json",revision:"6e627954124e51abdccc430b21a7b726"},{url:"/assets/data/tags/v1-0-1/index.json",revision:"d72b7164446213512443f94222b15a62"},{url:"/assets/data/tags/v1-1-0/index.json",revision:"39499539a795e088ea43b16e7769c881"},{url:"/assets/data/tags/v1-1-1/index.json",revision:"37f2e75429711fed6db652bac3938ac7"},{url:"/assets/data/tags/v1-1-4/index.json",revision:"6efd0df53dfa2ebc43b0b338ef7f98fe"},{url:"/assets/data/tags/v1-1-5/index.json",revision:"0eeca8d5163b606b68b79eae04c54aae"},{url:"/assets/data/tags/v1-2-0/index.json",revision:"f4a96956c9acce1f80df20418dede2c7"},{url:"/assets/js/app.1554c456.js",revision:"ce0730fa649bae721667b70470b6bfc6"},{url:"/assets/js/page--src--pages--404-vue.3a657a54.js",revision:"4cd5a84ca939482233a23ea31ab8b0de"},{url:"/assets/js/page--src--pages--created-plugins-vue.09aec29b.js",revision:"be3f0681c7f3b02c449e21f97af6e91b"},{url:"/assets/js/page--src--pages--creations-vue.a5aadf4f.js",revision:"e153fbda003dd873eb61a6eab562c2b9"},{url:"/assets/js/page--src--pages--index-vue.5e194f9a.js",revision:"c53d470d630794f6b9e4cc07caaf322e"},{url:"/assets/js/page--src--templates--author-vue.5501ec50.js",revision:"8dba7f31a1579cb86ae11f4909238440"},{url:"/assets/js/page--src--templates--creation-vue.1308e0eb.js",revision:"c4bb1c9784c978d91ad578f0430b3661"},{url:"/assets/js/page--src--templates--markdown-page-vue.e555f253.js",revision:"01aea3638d223ef9fa34705925766d0a"},{url:"/assets/js/page--src--templates--plugin-vue.bf8eff1f.js",revision:"bf3c975ab3c84c0d369613466680ee07"},{url:"/assets/js/page--src--templates--tag-vue.e49c5919.js",revision:"7ee4ee6044838705b7f513f938a3aa03"},{url:"/assets/js/search.2d031cba.js",revision:"c500e979d476f64aae6ecc623b02f88f"},{url:"/assets/static/faq_1.4833fd8.b5cd21168a425af93e27e684ca0d6f55.png",revision:"97b458f1fac075ac045ea7f727fe8fd9"},{url:"/assets/static/faq_1.82a2fbd.b5cd21168a425af93e27e684ca0d6f55.png",revision:"265f1e958576f2ef4a9bd90e5608713a"},{url:"/assets/static/faq_1.cbab2cf.b5cd21168a425af93e27e684ca0d6f55.png",revision:"916ec3e596f3410d74cb3c8c9b9fcd09"},{url:"/assets/static/favicon.ac8d93a.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"a72097143141ba7cebc09b34ee456feb"},{url:"/assets/static/favicon.b9532cc.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"814ace81e164119642545ea6fff550d4"},{url:"/assets/static/favicon.ce0531f.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"0aa61a5fe515860da05fa7739eecc641"},{url:"/assets/static/getting-started-1.4833fd8.a169e97caf7ed0dbb576ac84927c5654.png",revision:"fc7e3a11a588e8f76b139de70e973176"},{url:"/assets/static/getting-started-1.82a2fbd.a169e97caf7ed0dbb576ac84927c5654.png",revision:"d0a01890d709d0a72805e820f14462b2"},{url:"/assets/static/getting-started-1.cbab2cf.a169e97caf7ed0dbb576ac84927c5654.png",revision:"1ba0b45a0f174399e768de2c10df0b4f"},{url:"/assets/static/getting-started-10.4833fd8.82daf94f15845adb1646a54c924793f8.png",revision:"14814157ba776c5922320954a763cc8e"},{url:"/assets/static/getting-started-10.82a2fbd.82daf94f15845adb1646a54c924793f8.png",revision:"ab98598d4ba2592721d6d604bcb41bd7"},{url:"/assets/static/getting-started-10.cbab2cf.82daf94f15845adb1646a54c924793f8.png",revision:"82daf94f15845adb1646a54c924793f8"},{url:"/assets/static/getting-started-11.4833fd8.db3a0a18f8d4db9756159a368efe90da.png",revision:"8eda2803deed13b5eab3e3b9f3382161"},{url:"/assets/static/getting-started-11.82a2fbd.db3a0a18f8d4db9756159a368efe90da.png",revision:"503a4a9b6a85a06654653fd16c25acfc"},{url:"/assets/static/getting-started-11.cbab2cf.db3a0a18f8d4db9756159a368efe90da.png",revision:"0044f24179daa0dfa7b7a1a8d87c37bf"},{url:"/assets/static/getting-started-12.4833fd8.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1ed74d6243379e393a68dc9d89f44246"},{url:"/assets/static/getting-started-12.82a2fbd.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1321bb186053cd75d6ea9fa3fe4489c8"},{url:"/assets/static/getting-started-12.cbab2cf.03807ff21653d4d406f19b0a1e1490ab.png",revision:"ed046352e7a59f3a2b853d1d9a1374f9"},{url:"/assets/static/getting-started-13.4833fd8.5c7968afa0abcfccf6cc844367465067.png",revision:"5c7968afa0abcfccf6cc844367465067"},{url:"/assets/static/getting-started-13.82a2fbd.5c7968afa0abcfccf6cc844367465067.png",revision:"1eefe3d4ad737f4718073dc0ab38d58f"},{url:"/assets/static/getting-started-13.cbab2cf.5c7968afa0abcfccf6cc844367465067.png",revision:"282ef249bc0da65ac59bfa71cc674e46"},{url:"/assets/static/getting-started-14.4833fd8.73125189ffa662a78587a322da981df0.png",revision:"d7b51c2b9359588e55788dc5adc743ca"},{url:"/assets/static/getting-started-14.82a2fbd.73125189ffa662a78587a322da981df0.png",revision:"d619d790d50c6f9d5cd493a0b91348e8"},{url:"/assets/static/getting-started-14.cbab2cf.73125189ffa662a78587a322da981df0.png",revision:"c0d841047a050ff684aed49e60c93575"},{url:"/assets/static/getting-started-15.4833fd8.bf649fb35398df8340bbfd3670f0a86b.png",revision:"b7e3b9fb4eb54b33e47ccb17aefec95d"},{url:"/assets/static/getting-started-15.82a2fbd.bf649fb35398df8340bbfd3670f0a86b.png",revision:"31af712ea24e93b0c2f3c2fd3dc97ece"},{url:"/assets/static/getting-started-15.cbab2cf.bf649fb35398df8340bbfd3670f0a86b.png",revision:"0274dda921ae61ab95bfca15405b88fb"},{url:"/assets/static/getting-started-16.4833fd8.696ffaaa40e143e765b345789a75ffb9.png",revision:"63fd3c5d6ad344cda94428c89659d42d"},{url:"/assets/static/getting-started-16.82a2fbd.696ffaaa40e143e765b345789a75ffb9.png",revision:"54565f591d8a0789df90ebb6a4a8128b"},{url:"/assets/static/getting-started-16.cbab2cf.696ffaaa40e143e765b345789a75ffb9.png",revision:"c9f0ae5a8f302ffef65478725b14f086"},{url:"/assets/static/getting-started-17.4833fd8.44738d5eb7970905bd593362b04c6f74.png",revision:"b2e48098ddf4dbebaaf91482cbd27720"},{url:"/assets/static/getting-started-17.82a2fbd.44738d5eb7970905bd593362b04c6f74.png",revision:"0fea96b942e4b9ad5fd37aaf3fbb7ac2"},{url:"/assets/static/getting-started-17.cbab2cf.44738d5eb7970905bd593362b04c6f74.png",revision:"8080b8f949892a772e101a49ae5fe425"},{url:"/assets/static/getting-started-2.4833fd8.0313588be7a4ea8bce35c9175b9beff6.png",revision:"1da07e0f71da66c5099e3e86730071a6"},{url:"/assets/static/getting-started-2.82a2fbd.0313588be7a4ea8bce35c9175b9beff6.png",revision:"3200ebb39ff22d82334551b80e7e6d24"},{url:"/assets/static/getting-started-2.cbab2cf.0313588be7a4ea8bce35c9175b9beff6.png",revision:"70571c7bc68eec4f5f9d35dcf2d2d910"},{url:"/assets/static/getting-started-3.4833fd8.1f7f3033956969f2d73879c3636683c0.png",revision:"bd6ea82a00c9c8aa92df9a297b3c8c3c"},{url:"/assets/static/getting-started-3.82a2fbd.1f7f3033956969f2d73879c3636683c0.png",revision:"3f2f1402a6bf2c1c56de63643ecd0958"},{url:"/assets/static/getting-started-3.cbab2cf.1f7f3033956969f2d73879c3636683c0.png",revision:"f072d4c9a5f190320ccaec217581c0fe"},{url:"/assets/static/getting-started-4.4833fd8.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"9134e9eb497343e1042bac9c0702c10c"},{url:"/assets/static/getting-started-4.82a2fbd.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"48a40a73e4a0adee6cb3771e5b9c189d"},{url:"/assets/static/getting-started-4.cbab2cf.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"452afd88bf07652e26d4aae422db9f95"},{url:"/assets/static/getting-started-5.4833fd8.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"55b5486e140d593a6e151100fcfd54de"},{url:"/assets/static/getting-started-5.82a2fbd.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"b976c593aa74c4adbba1eebed5918ede"},{url:"/assets/static/getting-started-5.cbab2cf.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"36adcb2f59114914113929157cbbf436"},{url:"/assets/static/getting-started-6.4833fd8.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"f2180df8ce71b22504552afa3e5d6bf0"},{url:"/assets/static/getting-started-6.82a2fbd.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"3ae9b94c28932303a190c00da36160be"},{url:"/assets/static/getting-started-6.cbab2cf.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"28838175b7379e8b3f1a4083ece63ecd"},{url:"/assets/static/getting-started-7.4833fd8.12d7c440bcc9c15e246c549442e2d438.png",revision:"680a40633ef3c889afc1f7f7fe2f0331"},{url:"/assets/static/getting-started-7.82a2fbd.12d7c440bcc9c15e246c549442e2d438.png",revision:"d99bf7d61ced63315706c4e37fcebc22"},{url:"/assets/static/getting-started-7.cbab2cf.12d7c440bcc9c15e246c549442e2d438.png",revision:"a38d4b8d8ae2f12116c4184ca43fb03d"},{url:"/assets/static/getting-started-8.4833fd8.9398ec1bf2a300ec5ab845934d516359.png",revision:"0c76fea6efdea6ae2a51042446e43866"},{url:"/assets/static/getting-started-8.82a2fbd.9398ec1bf2a300ec5ab845934d516359.png",revision:"209e0ca72efaafc3191e797d98b3a3a4"},{url:"/assets/static/getting-started-8.cbab2cf.9398ec1bf2a300ec5ab845934d516359.png",revision:"9e398d68519f333d55b7b4a22076c521"},{url:"/assets/static/getting-started-9.4833fd8.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"f14590e40443084b931038a0fe373994"},{url:"/assets/static/getting-started-9.82a2fbd.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"8e27e8e8e9bb7c7499d57e550a78b499"},{url:"/assets/static/getting-started-9.cbab2cf.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"9d9ef4fd679c93e16e0b2619c8d40439"},{url:"/assets/static/icon.03a41a4.14b6279430a5e8ffcf50a17b6444e2bb.jpg",revision:"0d51b2111015f027311d1728306ae754"},{url:"/assets/static/icon.03a41a4.964cb2bb7e0725be355050687f550230.png",revision:"ea807e7bbb2a941864e32ae15f53f8be"},{url:"/assets/static/icon.1e38f94.4f43aa663a6b71aafee0052f3d97f04a.png",revision:"9983389c7e31af3ea915a2890c4fc75a"},{url:"/assets/static/icon.2ef5f76.541ceb744df4f9a2598327cb625ea7dd.jpg",revision:"81bc9e560fdd8ec9859351b098fb85c3"},{url:"/assets/static/icon.566f69c.fd2c653f7592848b6e70464574b89035.jpg",revision:"85d5d75e5d57351264baf593dbc4339a"},{url:"/assets/static/icon.dc52710.a3356c160acfe3767fd0f28284067129.png",revision:"3c05eae17d11c97f8b327faf29d29686"},{url:"/assets/static/logo.1539b60.a5e261baa9961fe146ba3d259eacd132.png",revision:"5f61e3d6ddfefa2120976996791dc025"},{url:"/assets/static/logo.62d22cb.a5e261baa9961fe146ba3d259eacd132.png",revision:"c10d0cae06f0df213a55a60fa173fdcb"},{url:"/assets/static/logo.7b22250.a5e261baa9961fe146ba3d259eacd132.png",revision:"13b628b41565399bc98d83a8432b41e7"},{url:"/assets/static/logo.82a2fbd.a5e261baa9961fe146ba3d259eacd132.png",revision:"b0532c04dc892791494ec1ada9c258eb"},{url:"/assets/static/logo.cbab2cf.a5e261baa9961fe146ba3d259eacd132.png",revision:"f1a5354fa241c585797bcd1a539db95b"},{url:"/assets/static/logo.dc0cdc5.a5e261baa9961fe146ba3d259eacd132.png",revision:"c7ab07c5d8e2f51710e6150a3e17eb0f"},{url:"/assets/static/logo.f22e9f3.a5e261baa9961fe146ba3d259eacd132.png",revision:"36520c96d5b6eb7a6c909beddfaa51ef"},{url:"/assets/static/main.1b91758.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"a5fa01e812a0d093946220f7c86ab6c1"},{url:"/assets/static/main.1b91758.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"66c879b66c226450672d6bc3bf1f890b"},{url:"/assets/static/main.4250cd3.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"c16ef8fcafd1f7a2fb21f15be894700a"},{url:"/assets/static/main.4250cd3.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"fd7520edececb3ca1b2a79e12d984187"},{url:"/assets/static/touch-icon-120x120.png",revision:"1700e43bc7471e180aa1584fbe486e88"},{url:"/assets/static/touch-icon-128x128.png",revision:"25850408cd6bf099fc2255b9bca497d0"},{url:"/assets/static/touch-icon-144x144.png",revision:"9398355695d72868a27f743892e7e3e3"},{url:"/assets/static/touch-icon-152x152.png",revision:"1b83463e121efbc3dea4eb6cb8c9d88a"},{url:"/assets/static/touch-icon-16x16.png",revision:"041dc01dfb9c0f25ebf8f44c06391bd6"},{url:"/assets/static/touch-icon-180x180.png",revision:"c2031431c345fa94e5ff0ea02cf66c71"},{url:"/assets/static/touch-icon-192x192.png",revision:"e22c5bab58306977b8d400d9eff72796"},{url:"/assets/static/touch-icon-384x384.png",revision:"e8d5657279421b0221d87bfb9cac3013"},{url:"/assets/static/touch-icon-48x48.png",revision:"e69deff1e8970918c1188c45b333f2c8"},{url:"/assets/static/touch-icon-512x512.png",revision:"7685da60fcbdea37fa54a324ddabc498"},{url:"/assets/static/touch-icon-72x72.png",revision:"cd4f600463d136a96909be790b7f6370"},{url:"/assets/static/touch-icon-96x96.png",revision:"482528887fddfcfae136d6410770e84a"},{url:"/author/7dev7urandom/index.html",revision:"d6e21fbf7eb65d58ed098451bea86816"},{url:"/author/enderzombi102/index.html",revision:"b891f9f7e2d00183660c4ac3f0bdf9d9"},{url:"/author/gamemode-one/index.html",revision:"2d8f4049572bd0441a3c3ab9370e9d85"},{url:"/author/joelant05/index.html",revision:"3b65b601d83be650d00d7c0265ed197b"},{url:"/author/montudor/index.html",revision:"f046d5a93a0fac7d04c8091d1915296d"},{url:"/author/solveddev/index.html",revision:"c099b2d1dc5abf57664f35bf30fa01a1"},{url:"/created-plugins/2/index.html",revision:"af8b68a0ef0f0a427f5c3169e3fc40c4"},{url:"/created-plugins/3/index.html",revision:"e81f2bc3182f128f741214fc24b34c32"},{url:"/created-plugins/index.html",revision:"1d3ae06b47b900ab071d1aeffd6b0260"},{url:"/creations/index.html",revision:"e286175b30595ca0fa5149b5c97d4dc5"},{url:"/editor-docs/faq/index.html",revision:"bd84fde73f4358c1dc1edd560da602ac"},{url:"/editor-docs/features/index.html",revision:"7848db29647bcc7a8cce8fdcad63ea36"},{url:"/editor-docs/getting-started/index.html",revision:"98c423306096713d691d79faaa27ccbe"},{url:"/editor-docs/index.html",revision:"c6b9e83a0964dcab01fd9a4110a8506d"},{url:"/editor-docs/other/molang/index.html",revision:"1a814e88bc53b8389ff736cf5955a6b7"},{url:"/index.html",revision:"4414da32cc60d2eebf3734d08789d354"},{url:"/logo.png",revision:"a5e261baa9961fe146ba3d259eacd132"},{url:"/manifest.json",revision:"caae166894ac694a66597ded3a200888"},{url:"/pac-man/index.html",revision:"83ce1b078de229f2bc3368b57c0a57bc"},{url:"/plugin-docs/auto-completions/dynamic-references/index.html",revision:"3f63fa36f5db03fdef107df79bfa2c3a"},{url:"/plugin-docs/auto-completions/index.html",revision:"d5a15018371e7d0fb39b7259130c0d90"},{url:"/plugin-docs/custom-commands/index.html",revision:"9240d89faac70eb70a37589edc1e53fd"},{url:"/plugin-docs/custom-components/index.html",revision:"bf3f21b204bc8f5c51f40687d7ee81c9"},{url:"/plugin-docs/index.html",revision:"d6817f497e4305ff9a9fdcee0e9d15fd"},{url:"/plugin-docs/json/file-definitions/index.html",revision:"bdf6def69887eabafd28d8408ba63bd3"},{url:"/plugin-docs/json/lightning-cache/index.html",revision:"af5573d35c1c3aa082aca41ba5427623"},{url:"/plugin-docs/json/presets/index.html",revision:"bd51ea818c796cb4aec20f4e3f816eeb"},{url:"/plugin-docs/json/snippets/index.html",revision:"bb2724b55e9d762846de4c713330ee79"},{url:"/plugin-docs/json/themes/index.html",revision:"bd3bb570e9863a5fb744ee710d068041"},{url:"/plugin-docs/modules/env/index.html",revision:"4f4cefc035a61d8b8e0afb971f4285c7"},{url:"/plugin-docs/modules/fetch-definition/index.html",revision:"b9fd360e21384b5e37c94f44b14f7f45"},{url:"/plugin-docs/modules/footer/index.html",revision:"35e4fdf527192b996a657af726ba0c17"},{url:"/plugin-docs/modules/fs/index.html",revision:"3c21e646a5995eef0dd4ab85ce47eba6"},{url:"/plugin-docs/modules/globals/index.html",revision:"040bac76229bde02956f9bfbd7ba3ce2"},{url:"/plugin-docs/modules/index.html",revision:"2248921428412bb6550a6424b903d57c"},{url:"/plugin-docs/modules/path/index.html",revision:"62a0d60e7864dce4c90627dac67d7b56"},{url:"/plugin-docs/modules/sidebar/index.html",revision:"b44fc12169406db8a39e8b2020a2031e"},{url:"/plugin-docs/modules/ui/index.html",revision:"1f26d54eb29f0087429d55a94ad24089"},{url:"/plugin-docs/modules/utils/index.html",revision:"4e3abdd86b45c6a8449b71cac331eed2"},{url:"/plugin-docs/modules/windows/index.html",revision:"0abe59b296f8be0541db864a0cf8ebf7"},{url:"/plugin-docs/other/common-types/index.html",revision:"c14040394e9ca02cb28c4ca1a3c0ed0e"},{url:"/plugin-docs/other/default-file-types/index.html",revision:"f8d7bce37400bb19174b0ccfa0c0488f"},{url:"/plugin-docs/other/styles/index.html",revision:"f1fe0528a167bca062dd93bfe48b35ef"},{url:"/plugins/056b172d-77a8-40fc-9f34-226c163e330b/index.html",revision:"43d30dccdd634b0b5c6cdfdc271ecea0"},{url:"/plugins/44dc6685-4258-4eed-9f62-e0d0fdfd41e9/index.html",revision:"93f0e885c3e185d10ca973332bb2cda0"},{url:"/plugins/47c1b5f9-a452-4ed1-8d00-a0427dd5168a/index.html",revision:"3474ae5b8f84634de78815f6b7d0970f"},{url:"/plugins/4d73da69-6df3-46bc-9486-a602373573db/index.html",revision:"fe5cb5830992603b76d71cf6a82d822a"},{url:"/plugins/6337c024-f603-11e9-802a-5aa538984bd8/index.html",revision:"595c8ed2661233af3c44daf4e487d3f4"},{url:"/plugins/8497489b-3b80-45a6-94f3-65d8bd1188cd/index.html",revision:"603c59a23a0905446ba3b8d0927f1a9c"},{url:"/plugins/84b65ea3-b206-40fd-aaae-3f884b12b4f4/index.html",revision:"01a2478ad3f03f681688412b785ed9f4"},{url:"/plugins/87d418b3-e7ab-414e-9be1-13082c3cf46d/index.html",revision:"c484bb9cb6bd7c42f7bd19a94b09268a"},{url:"/plugins/89457173-109d-4dff-9f7e-f8f8875e307a/index.html",revision:"a3a2b0b36a85d5d1d5ac6fbb54f58787"},{url:"/plugins/a0ad4844-ee48-4687-9da2-f1a47f3d1c3a/index.html",revision:"433246e614e8482893cef0779c485ec0"},{url:"/plugins/ac340569-8df3-4409-ac9d-b855b183210b/index.html",revision:"1702a836fa6e444720dfc866c0c681a9"},{url:"/plugins/bridge.ui.common_window/index.html",revision:"e4ad63af28efa4392c0c0aba19bd6cc3"},{url:"/plugins/bridge.ui.confirm_window/index.html",revision:"d683a66bbd9131d86bdd30948f66480b"},{url:"/plugins/caa0a585-d513-48cf-a803-c920055e2afe/index.html",revision:"63a9255a7e60a4a0fe9b14346cdd673e"},{url:"/plugins/d9419ae7-69ec-46d6-9080-a9ff48e6edab/index.html",revision:"e4f4555361844c036caf152e003fab17"},{url:"/plugins/ENDERZOMBI102.bridgePlugins.create-a-block/index.html",revision:"c8b2bb6fb19f1ceb10e819708221e6e2"},{url:"/plugins/f5cecd90-dda9-11ea-87d0-0242ac130003/index.html",revision:"5f9947a7cd2e3ee87032e012b6d4ed9b"},{url:"/plugins/f883bbc1-d81a-4373-8ec7-a11b81d9070a/index.html",revision:"8bc6149e0aca42c0e2d544a4cbc14728"},{url:"/plugins/JustSkitzo.bridgePlugins.create-an-item/index.html",revision:"99e9050989a7d97714c42965bc168294"},{url:"/plugins/solved.features.dynamic_function/index.html",revision:"643e0f39c290330fa218f6825714d939"},{url:"/plugins/solved.features.dynamic_json/index.html",revision:"3edbcc1a3771718f5c4e287a8b514df5"},{url:"/plugins/solved.utilities.bridge_plugin_creator/index.html",revision:"1ce85a7826e01c409ef9534ef70561ba"},{url:"/plugins/solved.utilities.console/index.html",revision:"f04133dd121ebb98575d2f6c6be9461d"},{url:"/plugins/solved.utilities.crash_overview/index.html",revision:"727e0736d01caa0a2283b37c28ae7e6d"},{url:"/plugins/solved.utilities.file_search/index.html",revision:"585250ad6797f01b2e23e825d282d8d1"},{url:"/tags/advanced/index.html",revision:"9d2c6300f0d85c0dc16efb11e2710b37"},{url:"/tags/component/index.html",revision:"3b601e4b9dcea6c434f1f49e938dda90"},{url:"/tags/curated/index.html",revision:"4969092654dbad35c78398d698c095db"},{url:"/tags/economy/index.html",revision:"cb687d3a09c85e57c72effd4dd83a86a"},{url:"/tags/minigame/index.html",revision:"fb5179471ceec090c45621a299b88d83"},{url:"/tags/mining/index.html",revision:"7c2faca0205285c22f3323a05f02bd43"},{url:"/tags/presets/index.html",revision:"30ec59561a5eb00a60458127aac16052"},{url:"/tags/snippet/index.html",revision:"783a518f90a82b2f8f8a94b2660c17b0"},{url:"/tags/theme/index.html",revision:"3e94f650f50755ab393dd22ce22e9cf3"},{url:"/tags/utility/index.html",revision:"f385272433513c99edc0ba1116963e63"},{url:"/tags/v1-0-0/index.html",revision:"616eafc15fc3987634c0d66b923e6205"},{url:"/tags/v1-0-1/index.html",revision:"adaa5b54a1088272de1ab20d69dad491"},{url:"/tags/v1-1-0/index.html",revision:"18602d248f426f7afb01b47a5ec00ce8"},{url:"/tags/v1-1-1/index.html",revision:"27dbd5aa45b3fb42df2f6e12075e0aec"},{url:"/tags/v1-1-4/index.html",revision:"fd2b76689b7aaac74db172ea1ea3f834"},{url:"/tags/v1-1-5/index.html",revision:"21d19222efde9286e80c81f650a8d230"},{url:"/tags/v1-2-0/index.html",revision:"e8fb6688200e78fdf369b87b9433b9db"},{url:"/touch-icon.png",revision:"e64600d215ff68c5afe9cc7d5bbdd179"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/plugin-docs/modules/windows",revision:"4925427da638547a9ab39dcd6d63aebc"},{url:"/plugin-docs/modules/ui",revision:"67fe44503a425cfa80527033e5021ec8"},{url:"/plugin-docs/modules/utils",revision:"6a2db9c16b3f169f99351e1729a36a48"},{url:"/plugin-docs/other/styles",revision:"163726e4c56d13d5b27d4278a57cfd26"},{url:"/plugin-docs/modules/sidebar",revision:"0e8d93117c9e35e73b42b5a4432caa45"},{url:"/plugin-docs/json/themes",revision:"2b7e139ef3e47dc7f6740c77943f1e0c"},{url:"/plugin-docs/json/snippets",revision:"efb27c100bfdd6f00be31af6257905f7"},{url:"/plugin-docs/modules/path",revision:"b882ae2c971c4b5184665f0c8cfb5c5d"},{url:"/plugin-docs/json/presets",revision:"8650b170cd42d8aa95857a16c7f2cab2"},{url:"/plugin-docs/json/lightning-cache",revision:"853ab9ad6d70afc4b7b2bc8a68187957"},{url:"/plugin-docs/other/default-file-types",revision:"8b8077ff13dd6efb45164852af650c52"},{url:"/plugin-docs/modules/fetch-definition",revision:"34f95dde3bd5ab5ceb0b2fd6b5f1c324"},{url:"/plugin-docs/modules/globals",revision:"396cacf477003770b17c87c10d5a017f"},{url:"/plugin-docs/modules/footer",revision:"b1996dd8c02f276e640bb9974abbfefd"},{url:"/plugin-docs/modules/fs",revision:"e08b0d555fec3924e45a345d21911bad"},{url:"/plugin-docs/other/common-types",revision:"1386bf69a1d192b57f869dcb3df5dd12"},{url:"/plugin-docs/modules/env",revision:"fb9dc48ca6a91c47b2247356655ce30a"},{url:"/editor-docs/other/molang",revision:"65a42e86a21a663a2b0ac28441164ec8"},{url:"/plugin-docs/json/file-definitions",revision:"4e7c2df49f8e995d3a9b71d5a4b4cc2d"},{url:"/plugin-docs/auto-completions/dynamic-references",revision:"99c76df544827f4bea7748e9af20cce6"},{url:"/tags/v1-0-0",revision:"ebf6644fce84f431d8bfcf27f07c1b2e"},{url:"/tags/v1-0-1",revision:"32d5893eca09942910da13ae0be2c653"},{url:"/tags/v1-1-0",revision:"a89fffbc6e70f1a8616d6c693af810de"},{url:"/tags/v1-1-1",revision:"bad014755fe4d6d2acbdcc9a65151c0c"},{url:"/tags/v1-1-4",revision:"1666c54706fc96f3ec0d334c7800c31d"},{url:"/tags/v1-1-5",revision:"6760d25b2d48f44ab908eefd7b0bd4f6"},{url:"/tags/v1-2-0",revision:"34371c141e11b5c284727f6a02d4836d"},{url:"/tags/utility",revision:"b9bcd283643d8f5e5d5e5ff13fac998c"},{url:"/tags/theme",revision:"4a816ae63699e6d478379da166f09b3c"},{url:"/tags/snippet",revision:"443188ec870f0aa5e75f1949c15e6e63"},{url:"/tags/presets",revision:"70c053b297ea61b1001e91d3733a3dee"},{url:"/tags/minigame",revision:"e6706847134b36790938d0d956c552e1"},{url:"/tags/mining",revision:"9f207bded5b17dae80417bf03623c56f"},{url:"/tags/economy",revision:"aea0f3ea6bd2c107ba9c68419194ed01"},{url:"/tags/component",revision:"32ad3cfa39ee316f77415fd33ce8b3e3"},{url:"/tags/curated",revision:"c380857a493dff00af42e1332a324332"},{url:"/tags/advanced",revision:"c7cdf9145963d7cb605aee778e51f464"},{url:"/plugins/solved.features.dynamic_function",revision:"ac3a45f890dc026f2c72b9ec174514fe"},{url:"/plugins/solved.features.dynamic_json",revision:"3238312600fe6206a1fb94fe36ababc9"},{url:"/plugins/solved.utilities.bridge_plugin_creator",revision:"8fdfb81a71530a0ebe23cb122bc974c9"},{url:"/plugins/solved.utilities.console",revision:"94187fae94287c894c7bc473eb1de1dd"},{url:"/plugins/solved.utilities.crash_overview",revision:"6a2193cb2a846524f170bf2f09d31fab"},{url:"/plugins/solved.utilities.file_search",revision:"74ca46bd45d91e1cb22c6ea9f3a1bd43"},{url:"/plugin-docs/modules",revision:"f6401df87dd9ee89021a499fa93d5a8c"},{url:"/plugins/f5cecd90-dda9-11ea-87d0-0242ac130003",revision:"93abc65d9ddcb52de5b6fd52866d225a"},{url:"/plugins/f883bbc1-d81a-4373-8ec7-a11b81d9070a",revision:"33bf63db664d103d1d7c85f3e48a517f"},{url:"/plugins/d9419ae7-69ec-46d6-9080-a9ff48e6edab",revision:"32c2ad50a1742c6142db4d7954b77e8c"},{url:"/plugins/caa0a585-d513-48cf-a803-c920055e2afe",revision:"3ce9ad1c06ef3042a0195eed67a0882c"},{url:"/plugin-docs/custom-commands",revision:"abeecd5bfc3f5be0848befb43e48b8cd"},{url:"/plugin-docs/custom-components",revision:"d73003ea4237b9a931bf8f23b9b28c7f"},{url:"/plugins/a0ad4844-ee48-4687-9da2-f1a47f3d1c3a",revision:"472bf8e41f1d395cf80f4d6e6a227dc2"},{url:"/plugins/ac340569-8df3-4409-ac9d-b855b183210b",revision:"7a5ed08e20d899daefe7e2f9f23a06f7"},{url:"/author/solveddev",revision:"e3cfbfd7e54c231b25f820a717ecf704"},{url:"/plugin-docs/auto-completions",revision:"8c3c907019a4c79c2ade079e109dc930"},{url:"/plugins/bridge.ui.common_window",revision:"23b79de15f7e9a7b0e1d85e4970fd26d"},{url:"/plugins/bridge.ui.confirm_window",revision:"fdce2a1ac60d658b25ac7ddac4ad51a7"},{url:"/author/montudor",revision:"9ca300ff89325b8434c20d7dabc82180"},{url:"/editor-docs/getting-started",revision:"bfce7a6460c67cc3a183ee88b459d009"},{url:"/plugins/056b172d-77a8-40fc-9f34-226c163e330b",revision:"bd293711d3173f88f4fd881d5fbac8fb"},{url:"/plugins/44dc6685-4258-4eed-9f62-e0d0fdfd41e9",revision:"442e24044418f8ddc329545600b64934"},{url:"/plugins/47c1b5f9-a452-4ed1-8d00-a0427dd5168a",revision:"3ca1a9ba75e0694ba8b9cd44e95c2b38"},{url:"/plugins/4d73da69-6df3-46bc-9486-a602373573db",revision:"677e22d9708a3ea1ac38096248454689"},{url:"/plugins/6337c024-f603-11e9-802a-5aa538984bd8",revision:"80ad1dc6471b96d72f675505387cc7dd"},{url:"/plugins/8497489b-3b80-45a6-94f3-65d8bd1188cd",revision:"f908b0cd4e316ae2987b45d06214d646"},{url:"/plugins/84b65ea3-b206-40fd-aaae-3f884b12b4f4",revision:"df73a858286c3b2c8236b3eba8a17831"},{url:"/plugins/87d418b3-e7ab-414e-9be1-13082c3cf46d",revision:"e3f44a12af48fbb40e50f2ab30641ccb"},{url:"/plugins/89457173-109d-4dff-9f7e-f8f8875e307a",revision:"50fa44a73eac496bf915eb274708c720"},{url:"/editor-docs/faq",revision:"08e35c58f85a987e5fa8bb5935ad0040"},{url:"/editor-docs/features",revision:"ef361341eee61fdd0dfe3e3902748ac4"},{url:"/plugins/ENDERZOMBI102.bridgePlugins.create-a-block",revision:"6739936c36e3745a0f11f19ffe61cdd4"},{url:"/plugins/JustSkitzo.bridgePlugins.create-an-item",revision:"4fad7f44760525e8db530afc5a7a9a1e"},{url:"/author/joelant05",revision:"ddd600b5440a88125cce026676db17e3"},{url:"/author/gamemode-one",revision:"7947fcb557e0215df27bac8f9ccbc6c5"},{url:"/author/enderzombi102",revision:"8a2dca7ba2e9ef79ff2a4e56edab44cb"},{url:"/author/7dev7urandom",revision:"73eef6eec28008b481bf4e396135364c"},{url:"/created-plugins",revision:"1c8f3a7f8721d92f7ac1f5fed3fc88c7"},{url:"/created-plugins/2",revision:"fb1a5aaefd261a8200c8ab1ed5f8621b"},{url:"/created-plugins/3",revision:"2f541f2be28e1e988a43f2f632b60903"},{url:"/creations",revision:"a3f98ad857c7681fa05e6ed622b0bc9d"},{url:"/pac-man",revision:"69608d815529fc0c78ceab8ad94ae5f5"},{url:"/plugin-docs",revision:"c6288819b262d70980ab862394971d6a"},{url:"/editor-docs",revision:"d76c3a669edec636ae038a7c9bffdbf9"},{url:"/advanced-mining",revision:"dc8e30f749fcde52cb264cdffb61d6f0"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
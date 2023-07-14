<template>
    <header>
        <div i><img src="@/assets/img/logo.png" alt=""></div>
        <nav v-if="windowWidth > 800">
            <RouterLink to="">Projects</RouterLink>
            <RouterLink to="">AW Team</RouterLink>
            <RouterLink to="">About Us</RouterLink>
            <RouterLink to="">Our Services</RouterLink>
        </nav>
        <div c>
            <RouterLink to="">
                <span v-if="windowWidth > 480">Contact Us</span>
                <svg v-else width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.3579 25.8859L20.3541 25.8859C15.2186 25.8792 10.2953 23.8362 6.66395 20.2048C3.03267 16.5735 0.989653 11.6504 0.98291 6.51501C0.982995 5.07358 1.55564 3.69121 2.57489 2.67196C3.59422 1.65263 4.97672 1.07998 6.41826 1.08L6.42207 1.07997C6.72262 1.07768 7.02267 1.10495 7.31788 1.1614L7.32821 1.16338L7.3386 1.16492C7.62276 1.20697 7.90211 1.2768 8.17263 1.37342L8.17262 1.37343L8.17526 1.37436C8.30507 1.4199 8.42074 1.49854 8.51083 1.60249C8.60092 1.70645 8.66232 1.83212 8.68895 1.96708L8.69039 1.97435L8.69204 1.98158L10.4596 9.7226C10.4596 9.72276 10.4596 9.72292 10.4597 9.72308C10.4888 9.85164 10.4852 9.98544 10.4494 10.1123C10.4135 10.2393 10.3463 10.3553 10.2541 10.4497L10.254 10.4496L10.2453 10.4589C10.2032 10.5043 10.1935 10.5138 10.1764 10.5274C10.155 10.5444 10.1125 10.5745 10.0094 10.6343C9.7993 10.756 9.41256 10.959 8.61323 11.3749L8.1922 11.594L8.38906 12.0258C9.70969 14.923 12.0268 17.2496 14.9185 18.5821L15.35 18.7809L15.5706 18.3601C15.9929 17.5544 16.1992 17.1642 16.3226 16.9523C16.3833 16.8482 16.4139 16.805 16.4313 16.7831C16.4453 16.7656 16.4549 16.7559 16.5002 16.7138L16.5003 16.7139L16.5094 16.705C16.6038 16.6128 16.7198 16.5456 16.8468 16.5097C16.9737 16.4739 17.1075 16.4703 17.2361 16.4994C17.2362 16.4995 17.2364 16.4995 17.2365 16.4995L24.9758 18.2667C24.9761 18.2667 24.9763 18.2668 24.9766 18.2668C25.1069 18.2972 25.2274 18.3602 25.3268 18.4499C25.4263 18.5398 25.5014 18.6535 25.5448 18.7804L25.5448 18.7804L25.5467 18.7858C25.6457 19.064 25.7203 19.3504 25.7696 19.6415C25.8169 19.9376 25.8406 20.2369 25.8404 20.5367C25.8177 21.9708 25.2291 23.3379 24.2027 24.3399C23.1756 25.3428 21.7933 25.8985 20.3579 25.8859Z"
                        stroke="white" />
                </svg>
            </RouterLink>
            <div>EN <img src="@/assets/img/icon/icons8-great-britain-48.png" alt="">
                <ul>
                    <li v-for="i in 4">EN <img src="@/assets/img/icon/icons8-great-britain-48.png" alt=""></li>
                </ul>
            </div>
            <span @click="openMenu" v-if="windowWidth <= 800"><span v-for="i in 3"></span></span>
        </div>
    </header>
    <nav id="menu">
        <RouterLink to="">Projects</RouterLink>
        <RouterLink to="">AW Team</RouterLink>
        <RouterLink to="">About Us</RouterLink>
        <RouterLink to="">Our Services</RouterLink>
    </nav>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const windowWidth = ref(window.innerWidth);
let windowResized = () => windowWidth.value = window.innerWidth
onMounted(() => nextTick(() => window.addEventListener('resize', windowResized)));
onBeforeUnmount(() => window.removeEventListener('resize', windowResized))

function openMenu() {
    var menu = document.querySelector("nav#menu");
    setTimeout(() => {
        menu.style.right = "0px";
    }, 10);
}
onMounted(() => {
    document.body.addEventListener("click", function (e) {
        var menu = document.querySelector("nav#menu");
        if ((menu.style.right == 0 || menu.style.right == "0px" || menu.style.right == "") && !menu.contains(e.target)) {
            menu.style.right = -menu.getBoundingClientRect().width + "px";
            e.preventDefault();
        }
    })
});
</script>
<style lang="scss">
#app>header {
    z-index: 2;
    background-color: $c-background;
    position: sticky;
    top: 0;
    border-bottom: 3px solid $c-accent;
    display: flex;
    justify-content: space-between;

    &>div[i] {
        margin: 1em;

        &>img {
            width: 5rem;
        }
    }

    &>nav {
        display: flex;
        gap: 2rem;
        align-items: center;

        &>a {
            // color: #fff;
            text-decoration: none;
            font-family: alata;
            font-size: 1.2rem;
        }
    }

    &>div[c] {
        margin: 0.6rem;
        display: flex;
        gap: 0.4rem;
        align-items: center;

        &>a {
            // color: #fff;
            text-decoration: none;
            font-family: alata;
            font-size: 1.2rem;
            background-color: $c-primary;
            padding: 0.4rem 2rem;
            border-radius: 0.2rem;
            display: flex;
            align-items: center;
        }

        &>div {
            // color: #fff;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            padding: 0.3rem 0.8rem;
            border: 2px solid $c-primary;
            font-family: alata;
            font-size: 1.2rem;
            border-radius: 0.2rem;
            position: relative;

            &:hover {
                border-radius: 0.2rem 0.2rem 0 0;
                border-bottom: 2px solid rgba(0, 0, 0, 0);

                &>ul {
                    display: flex;
                }

            }

            &>img {
                object-fit: contain;
                width: 1.8rem;
            }

            &>ul {
                display: none;
                background-color: $c-background;
                position: absolute;
                flex-direction: column;
                top: 100%;
                width: 105%;
                transform: translateX(-0.94rem);
                border: 2px solid $c-primary;
                border-top: 0;
                border-radius: 0 0 0.2rem 0.2rem;

                &>li {
                    display: flex;
                    gap: 0.4rem;
                    justify-content: center;
                    padding: 0.4rem;

                    &:hover {
                        background-color: rgba(200, 200, 200, 0.3);
                    }

                    &>img {
                        object-fit: contain;
                        width: 1.8rem;
                    }
                }
            }
        }

        &>span {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 2.2rem;
            margin: 1em;

            &>span {
                width: 100%;
                height: 0.2rem;
                background-color: #fff;
                border-radius: 0.1rem;
            }
        }
    }
}

nav#menu {
    position: fixed;
    top: 0;
    right: -30rem;
    background-color: $c-background;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 1rem;
    transition: right 200ms ease-in-out;
}

@media (max-width:760px) {
    nav#menu {
        width: 65vw;
    }
}

@media (min-width:760px) {
    nav#menu {
        width: 20rem;
    }
}
</style>
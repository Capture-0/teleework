<template>
    <footer>
        <div n>
            <input placeholder="example@site.com">
            <button type="submit">Join TeleeWork Newsletter</button>
        </div>
        <nav>
            <div>
                <h3>Services</h3>
                <ul>
                    <li>
                        <RouterLink to="">Web</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="">Application</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="">AI</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="">Data</RouterLink>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>
                        <RouterLink to="">Info</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="">Location</RouterLink>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Legal</h3>
                <ul>
                    <li>
                        <RouterLink to="">Terms</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="">Privacy</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="">Conditions</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div s>
            <img src="@/assets/img/icon/linkedin.png" alt="">
            <img src="@/assets/img/icon/facebook.png" alt="">
            <img src="@/assets/img/icon/telegram.png" alt="">
            <img src="@/assets/img/icon/github.png" alt="">
            <img src="@/assets/img/icon/instagram.png" alt="">
        </div>
        <span>@Copyright 2023</span>
        <img src="@/assets/img/logo.png" alt="">
    </footer>
</template>
<style lang="scss">
footer {
    position: relative;
    padding-top: 6rem;

    &>[n] {
        width: fit-content;
        padding: 0.2rem;
        border: 1px solid #A441B1;
        border-radius: 0.3rem;
        display: flex;
        gap: 0.2rem;
        margin: 2rem auto;


        &>input {
            padding: 0.2rem 1rem;
            font-size: 1.1rem;
            color: #000;
            border-radius: 4px;
            border: 0;
            outline: 0;
            min-width: 14rem;
            width: 32vw;
        }

        &>button {
            background: linear-gradient(-45deg, #6B24F1, #BE4F94);
            padding: 0.6rem 1rem;
            font-size: 1rem;
            border-radius: 4px;
            border: 0;
            background-color: #fff;
            height: 100%;
        }
    }

    &>nav {
        max-width: 90%;
        width: 60rem;
        margin-inline: auto;

        &>div {
            display: flex;
            align-items: center;

            &>h3 {
                padding-right: 4rem;
                font-size: 1.4rem;
                border-right: 2px solid #fff;
                width: 8rem;
            }

            &>ul {
                display: flex;
                flex-wrap: wrap;
                gap: 0.8rem;

                &>li {
                    &>a{
                        padding: 0 4rem;
                        text-decoration: none;
                    }
                }
            }
        }
    }

    &>[s] {
        display: flex;
        gap: 1rem;
        justify-content: center;
        padding: 2rem 0;

        &>img {
            width: 2rem;
        }
    }

    &>span {
        display: flex;
        justify-content: center;
        font-weight: lighter;
        font-size: 0.9rem;
        padding: 1rem;
    }

    &>img {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 2rem;
        width: 10rem;
    }
}
</style>
<template>
  <Header></Header>
  <Container name="section" width="80rem" id="onboard">
    <div id="title">
      <h1>TeleeWork</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aut autem facilis enim recusandae
        perferendis hic nam delectus eum? Veritatis, a at nesciunt itaque distinctio corporis unde! Tenetur, alias
        placeat.
      </p>
      <button>Call To Action</button>
    </div>
    <div id="image">
      <img src="@/assets/img/home/onboard.png" alt="">
    </div>
  </Container>
  <Container name="section" width="85rem" id="worldmap">
    <h2>We Work With The Whole World</h2>
    <img m src="@/assets/img/home/worldmap.png" alt="">
    <img f src="@/assets/img/home/flags.png" alt="">
  </Container>
  <Container name="section" width="65rem" id="why">
    <h2>Why TeleeWork ?</h2>
    <div>
      <img src="@/assets/img/home/lottie1.svg" alt="">
      <div>
        <h3>Atractive</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent .
        </p>
      </div>
    </div>
  </Container>
  <Container name="section" width="65rem" id="services">
    <h2>Our Services</h2>
    <div>
      <div>
        <h3>Atractive</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent .
        </p>
      </div>
      <img src="@/assets/img/home/lottie2.png" alt="">
    </div>
  </Container>
  <section id="funder">
    <div>
      <img src="@/assets/img/home/mohammad-jafari.png" alt="">
      <span></span>
      <div cubes>
        <div v-for="i in 4"></div>
      </div>
      <div name>
        <h3>Hosein Jafari</h3>
        <span>Smarter Way To Make Money with Artificial Wave</span>
      </div>
    </div>
  </section>
  <Container name="section" width="80rem" id="whatweuse">
    <h2>What Do We Use ?</h2>
    <div>
      <h3>Front-End</h3>
      <ul>
        <li><img src="@/assets/img/home/platforms/icons8-javascript-logo-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-vue-js-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-html-5-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-bootstrap-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-css3-50.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-react-100.png" alt=""></li>
      </ul>
    </div>
    <div>
      <h3>Back-End</h3>
      <ul>
        <li><img src="@/assets/img/home/platforms/icons8-django-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-laravel-100.png" alt=""></li>
      </ul>
    </div>
    <div>
      <h3>Graphic</h3>
      <ul>
        <li><img src="@/assets/img/home/platforms/icons8-adobe-illustrator-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-figma-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-adobe-xd-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-adobe-photoshop-100.png" alt=""></li>
      </ul>
    </div>
    <div>
      <h3>Application</h3>
      <ul>
        <li><img src="@/assets/img/home/platforms/icons8-flutter-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-java-100.png" alt=""></li>
      </ul>
    </div>
    <div>
      <h3>AI</h3>
      <ul>
        <li><img src="@/assets/img/home/platforms/icons8-python-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-opencv-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-r-100.png" alt=""></li>
        <li><img src="@/assets/img/home/platforms/icons8-pandas-100.png" alt=""></li>
      </ul>
    </div>
  </Container>
  <Container name="section" width="65rem" id="testimonial">
    <h2>Customers</h2>
    <div>
      <div>
        <div i>
          <img src="@/assets/img/home/icons8-google.png" alt="">
        </div>
        <div c>
          <h3>Google.com</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Praesent .
          </p>
        </div>
      </div>
    </div>
  </Container>
  <Container name="form" width="65rem" id="form">
    <h2>Do You Have Project?</h2>
    <div>
      <img src="@/assets/img/home/teleework.png" alt="">
      <div>
        <div>
          <span>fullname</span>
          <input />
        </div>
        <div>
          <span>email</span>
          <input />
        </div>
        <div>
          <span>project name</span>
          <input />
        </div>
        <div style="grid-column: 1 / -1;">
          <span>description</span>
          <textarea style="height: 8rem;"></textarea>
        </div>
        <div>
          <span>attachments</span>
          <input type="file" style="border: none;" multiple />
        </div>
      </div>
      <button type="submit">send</button>
    </div>
  </Container>
  <Footer></Footer>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Container from "@/components/Container.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: { Header, Footer, Container }
});
</script>
<style lang="scss">
body {
  background-color: $c-background;
  overflow-x: hidden;
}

section#onboard {
  padding-top: 3rem;
  background-color: $c-background;
  display: grid;
  grid-template-areas: a b;
  grid-template: 1fr / 1fr 2fr;
  gap: 2rem;

  &>#title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    &>h1 {
      letter-spacing: 4px;
      font-size: 2.8rem;
      margin: 0;
    }

    &>p {
      font-size: 1.2rem;
    }

    &>button {
      background-color: $c-background;
      border: 4px solid #000;
      border-image: linear-gradient(135deg, $c-secondary, $c-accent, $c-accent) 1;
      border-radius: 4px;
      outline: 0.4rem solid $c-background;
      padding: 0.3em 1em;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }

  &>#image {
    &>img {
      width: 100%;
      object-fit: contain;
    }
  }
}

section#worldmap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;

  &>h2 {
    font-size: 2rem;
    margin: 0;
  }

  &>img {
    &[m] {
      width: 90%;
      object-fit: contain;
      transform: translateX(-1rem);
    }

    &[f] {
      width: 40%;
      transform: translateY(-2rem);
    }
  }
}

section#why {
  padding-top: 8rem;
  display: flex;
  flex-direction: column;

  &>h2 {
    font-size: 2rem;
    margin: 0;
  }

  &>div {
    display: flex;

    &>img {
      width: 50%;
    }

    &>div {
      padding-top: 2rem;
      width: 100%;

      &>h3 {
        font-size: 1.6rem;
        font-weight: lighter;
      }

      &>p {
        font-size: 1.2rem;
      }
    }
  }
}

section#services {
  padding-top: 6rem;
  display: flex;
  flex-direction: column;

  &>h2 {
    font-size: 2rem;
    margin: 0;
  }

  &>div {
    display: flex;

    &>div {
      padding-top: 4rem;
      width: 100%;

      &>h3 {
        font-size: 1.6rem;
        font-weight: lighter;
      }

      &>p {
        font-size: 1.2rem;
      }
    }

    &>img {
      width: 50%;
    }
  }
}

section#funder {
  background: linear-gradient(135deg, #7027ED, #7027ED, #D15A7E);
  padding: 8rem 0;

  &>div {
    background-color: $c-background;
    margin-inline: auto;
    width: 50rem;
    max-width: 75%;
    position: relative;
    $ob: 0.8rem;
    outline: $ob solid $c-background;
    border: 0.2rem solid $c-accent;
    border-image: linear-gradient(45deg, #D15A7E, $c-accent) 1;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    &>img {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      width: 25%;
    }

    &>div[cubes] {
      display: flex;
      gap: $ob;
      position: absolute;
      padding: $ob;

      &>div {
        width: 1.8rem;
        height: 1.8rem;
        background-color: blue;
        border-radius: 3px;

        &:nth-child(1) {
          background-color: $c-accent;
        }

        &:nth-child(2) {
          background-color: #fff;
        }

        &:nth-child(3) {
          background-color: $c-secondary2;
        }

        &:nth-child(4) {
          background-color: $c-primary;
        }
      }
    }

    &>div[name] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;

      &>h3 {
        font-size: 1.8rem;
      }

      &>span {
        font-size: 1.2rem;
      }
    }
  }
}

section#whatweuse {
  padding: 6rem 0;
  display: flex;
  flex-direction: column;

  &>h2 {
    font-size: 2rem;
    margin: 4rem 0;
  }

  &>div {
    display: grid;
    grid-template: auto / 20% auto;
    gap: 2rem;
    padding: 1rem;

    &>h3 {
      font-weight: lighter;
    }

    &>ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 2rem;

      &>li {
        &>img {
          width: 4rem;
        }
      }
    }
  }
}

section#testimonial {
  display: flex;
  flex-direction: column;

  &>h2 {
    font-size: 2.2rem;
    margin: 4rem 0;
  }

  &>div {
    &>div {
      background: linear-gradient(45deg, #7027ED, #7027ED, #BF5093);
      display: grid;
      grid-template: auto / 30% 60%;
      gap: 4rem;
      overflow: hidden;
      border: 1px solid #fff;
      border-radius: 8px;
      padding: 4rem;

      &>div {
        &[i] {
          background-color: #fff;
          aspect-ratio: 1 / 1;
          padding: 1rem;
          border-radius: 16px;

          &>img {
            width: 100%;
          }
        }

        &[c] {
          &>h3 {
            font-size: 1.8rem;
          }

          &>p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}

form#form {
  padding: 4rem 0 0 0;

  &>h2 {
    text-align: right;
    padding: 0 6rem 1rem 0;
    font-size: 2rem;
  }

  &>div {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-top: 8rem;
    gap: 2rem;
    position: relative;
    border: 4px solid #000;
    border-image: linear-gradient(135deg, #CB6FA1, #E8975B, #E8975B) 1;
    border-radius: 0.5rem;
    outline: 0.4rem solid $c-background;

    &>img {
      width: 20%;
      position: absolute;
      top: 0;
      transform: translateY(-50%);
    }

    &>div {
      display: grid;
      grid-template: auto / 1fr 1fr 1fr;
      gap: 1rem;

      &>div {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        &>span {
          font-size: 1.4rem;
        }

        &>input,
        &>textarea {
          background-color: transparent;
          border: 3px solid #000;
          border-image: linear-gradient(135deg, #CB6FA1, #E8975B, #E8975B) 1;
          border-radius: 4px;
          outline: 0.4rem solid $c-background;
          padding: 0.3rem;
        }
      }
    }

    &>button {
      background: linear-gradient(-45deg, #6B24F1, #BE4F94);
      padding: 0.6rem;
      font-size: 1rem;
      border-radius: 4px;
      border: 0;
    }
  }
}

* {
  color: #fff;
  font-family: alata;
}

@media (max-width:800px) {
  section#onboard {
    display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
  }

  section#funder>div {
    gap: 6rem;

    &>img {
      width: 50%;
    }

    &>[cubes] {
      display: none !important;
    }
  }

  section#testimonial>div>div {
    padding: 1rem;
    gap: 1rem;

    h3 {
      margin: 0.4rem;
    }

    p {
      margin: 0;
    }
  }

  form#form>div>div {
    grid-template: auto / auto;
  }
}

@media (min-width:800px) {
  nav#menu {
    width: 20rem;
  }
}

@font-face {
  font-family: alata;
  src: url(@/assets/fonts/alata.ttf);
}
</style>
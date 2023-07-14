<template>
  <router-view />
</template>
<style lang="scss">
body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

@media (max-width:480px) {

  /* 480px > screen-width */
  :root {
    font-size: 13px;
  }
}

@media (min-width:480px) and (max-width:600px) {

  /* 480px < screen-width < 600px */
  :root {
    font-size: 14px;
  }
}

@media (min-width:600px) and (max-width:960px) {

  /* 600px < screen-width < 960px */
  :root {
    font-size: 15px;
  }
}

@media (min-width:960px) {

  /* 960 < screen-width */
  :root {
    font-size: 16px;
  }
}
</style>
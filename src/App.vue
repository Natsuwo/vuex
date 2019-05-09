<template>
      <div class="container">
        <h1>Vuex Section</h1>
        <hr>
        <app-result />
        <hr>
        <app-other />
        <br>
        <app-counter />
      </div>
</template>

<script>
import AppOther from './components/Other'
import AppCounter from './components/Counter'
import AppResult from './components/Result'
export default {
  components: {
    AppResult,
    AppCounter,
    AppOther
  }
};
</script>

<style>

.slide-enter-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: slide-in 0.5s ease-out forwards;
}

.slide-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: slide-out 0.5s ease-out forwards;
}

.slide-leave,
.slide-enter {
  opacity: 1;
  transform: translateX(0);
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(30px);
  }
}
@keyframes slide-in {
  0% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

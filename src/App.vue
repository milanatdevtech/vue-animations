<template>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="container">
      <div class="block" :class="{animate: animatedBlock}"></div>
      <button @click="animateBlock">Animate</button>
    </div>

    <div class="container">
      <transition name="fade-button" mode="out-in">
        <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
        <button @click="hideUsers" v-else>Hide Users</button>
      </transition>
    </div>

    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>

    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>

    <div class="container">
      <button @click="showToasMessage">Show Toast Message</button>
    </div>

    <div class="container">
      <transition 
        @before-enter="beforeEnter"
        @enter="enter" 
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave" >
        <p v-if="paragraphIsVisible">Lorem ipsum dolor ist amet</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
      <users-list></users-list>
    </div>
  </div>
</template>  
 
<script>

import { useToast } from "vue-toastification";
import UsersList from '@/components/UsersList.vue';

export default {
  components: {
    UsersList
  },
  data() {
    return { 
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
    };
  },
  
  methods: {
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    showToasMessage() {
      const toast = useToast();
       toast("Hello World!", {
       position: "top-right",
       timeout: 3000,
   
     });
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    beforeEnter(el) {
      console.log('before enter: ', el);
    },
    enter(el){
      console.log('enter: ', el);
    },
    afterEnter(el){
      console.log('afterEnter: ', el);
    },
    beforeLeave(el) {
      console.log('before leave: ', el);
    },
    leave(el) {
      console.log('leave: ', el);
    },
    afterLeave(el) {
      console.log('after leave: ', el);
    },
  },
};
</script>

<style>
* {
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
  }
  body {
    margin: 0;
  }
  button {
    font: inherit;
    padding: 0.5rem 2rem;
    border: 1px solid #810032;
    border-radius: 30px;
    background-color: #810032;
    color: white;
    cursor: pointer;
  }
  button:hover,
  button:active {
    background-color: #a80b48;
    border-color: #a80b48;
  }
  .block {
    width: 8rem;
    height: 8rem;
    background-color: #290033;
    margin-bottom: 2rem;
    /*transition: transform 0.6s easy-out;*/
  }
  .container {
    max-width: 40rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid #ccc;
    border-radius: 12px;
  }
  .animate {
    /*transform: translateX(-150px);*/
    animation: slide-fade 0.3s ease-out forwards;
  }

  @keyframes slide-fade {
    0% {
      transform: translateX(0) scale(1);
    }
    70% {
    transform: translateX(-120px) scale(1.1);
    }
    100% {
      transform: translateX(-150px) scale(1);
    }
  }
  .v-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }
  .v-enter-active {
    transition: all 0.3s ease-out;
  }
  .v-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .v-leave-from {    
    opacity: 1;
    transform: translateY(0);
  }

  .v-leave-active {
    transition: all 0.3s ease-in;
  }

  .v-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  .fade-button-enter-from,
  .fade-button-leave-to {
    opacity:0;
  }

  .fade-button-enter-active {
    transition: opacity 0.3s ease-out;
  }

  .fade-button-leave-active {
    transition: opacity 0.3s ease-in;
  }

  .fade-button-enter-to,
  .fade-button-leave-from {
    opacity: 1;
  }
</style>
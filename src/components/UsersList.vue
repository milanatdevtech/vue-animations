<template>
    <transition-group tag="ul" name="users-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">
            {{  user }}
        </li>
    </transition-group>
    <div>
        <input type="text" ref="userNameInput" />
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Mika', 'Pera', 'Laza', 'Zika', 'Milutin'],
            user: String
        }
    },
    methods: {
        addUser(){
            const enteredUserName = this.$refs.userNameInput.value;
            //this.users.push(enteredUserName);
            this.users.unshift(enteredUserName);
            this.$refs.userNameInput.value = '';
        },
        removeUser(userRemove) {
            this.users = this.users.filter(user => user !== userRemove)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin:0;
        padding: 0;
    }

    li {
        border: 1px solid #ddd;
        padding:1rem;
        text-align: center;
    }

    .users-list-enter-from {
        opacity:0;
        transform: translateX(-30px);
    }

    .users-list-enter-active {
        transition: all 0.5s ease-out;
    }

    .users-list-enter-to,  .users-list-leave-from  {
        opacity:1;
        transform: translateX(0);
    }



    /* .users-list-leave-from {
        opacity:1;
        transform: translateX(0);
    } */

    .users-list-leave-active {
         transition: all 0.3s ease-in;
         position: absolute;
    }

    .users-list-leave-to {
        opacity:0;
        transform: translateX(30px);
    }

    .users-list-move {
        transition: transform 0.8s ease;
    }
</style>
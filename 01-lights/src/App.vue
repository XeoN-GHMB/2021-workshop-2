<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link :to="{path:'/about'}">About with path</router-link>
        |
         <router-link :to="{name:'About', query:{'one':123}}">About with Query</router-link>
        |
         <router-link :to="{name:'About', params:{'one':123}}">About with Params</router-link>
        |
         <router-link :to="{path:'/about/123'}">About with url Params</router-link>
        |
        <router-link to="/traffic">Traffic</router-link>
    </div>

    <router-view/>
</template>

<script>
export default {

}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.rot{
    color:red;
}



</style>

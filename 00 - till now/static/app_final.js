const firstapp = {
    setup(){
        let lights = ['red','yellow','green']
        let state = Vue.reactive({
            activelight:"red"
        })

        function activateLight(color){
            console.log(color)
            state.activelight = color
        }

        function getLight(color){
            if(color === state.activelight){
                return `${color}-light`
            }
            return ''
        }

        return {
            title:"Vue",
            getLight,
            activateLight,
            lights,
            state,

        }
    }
}

const vueapp = Vue.createApp(firstapp)
vueapp.mount("#vue")
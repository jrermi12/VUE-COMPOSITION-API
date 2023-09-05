import { defineStore } from "pinia";
import axios from "axios"
const basUrl = "http://localhost:5000"
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
export const useHeroStore = defineStore("hero", {
    state: () => ({
        heros: [],
        hero: '',
    }),
    getters: {
        getHeros(state) {
            return state.heros
        },

        // getHero(state, heroId) {
        //     return state.heros.filter((hero)=> hero._id === heroId)
        // }
    },
    actions: {
        async fetchHeros() {
            try {
                const data = await axios.get(`${basUrl}/api/v1/service/get`)
                this.heros = data.data
            } catch (err) {
                alert(err)
                console.log(err)
            }
        },
    }

})
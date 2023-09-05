import { defineStore } from "pinia";
import axios from "axios"
const basUrl = "http://localhost:5000"
export const useServiceStore = defineStore("service", {
    state: () => ({
        services: [],
        service: '',
    }),
    getters: {
        getServices(state) {
            return state.services
        },

        // getHero(state, heroId) {
        //     return state.heros.filter((hero)=> hero._id === heroId)
        // }
    },
    actions: {
        async fetchServices() {
            try {
                const data = await axios.get(`${basUrl}/api/v1/service/get`)
                this.services = data.data
            } catch (err) {
                alert(err)
                console.log(err)
            }
        },
    }

})
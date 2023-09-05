import { defineStore } from "pinia";
import axios from "axios"
// import 'vue3-toastify/dist/index.css';
// import { toast } from "vue3-toastify/index";

const basUrl = "http://localhost:5000"
export const useContactStore = defineStore("contact", {
    state: () => ({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    }),
    getters: {
        messageData() {
            return {
                fullName: this.fullName,
                email: this.email,
                phoneNumber: this.phoneNumber,
                message: this.message,
            }
        }
    },
    actions: {
        setField(fieldName, value) {
            this[fieldName] = value
        },
        resetForm() {
            this.fullName = '';
            this.email = '';
            this.phoneNumber = '';
            this.message = '';
        },
        async submitForm(messageData) {
            try {
                await axios.post(`${basUrl}/api/v1/contact/create`, messageData)
                    .then((res) => {
                        if (res.status === 201) {
                            console.log("success")
                            // toast.success(res.data.message, {
                            //     autoClose: 2000, position: toast.POSITION.BOTTOM_RIGHT,
                            //     className: 'foo-bar'
                            // });
                            this.resetForm();
                        } else {
                            console.log("error")

                            // toast.warning(res.data.message, {
                            //     autoClose: 2000, position: toast.POSITION.BOTTOM_RIGHT,
                            //     className: 'foo-bar'
                            // });
                        }
                    })

            } catch (err) {
                alert(err)
                console.log(err)
            }
        },
    }

})
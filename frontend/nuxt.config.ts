// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/axios', 
        '@nuxtjs/auth-next'
    ],
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {   
        transpile: ['vuetify']
    }, 
    
      
     
})

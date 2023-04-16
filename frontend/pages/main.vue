<template>
    <v-app id="inspire">
  
      <v-app-bar>
      
  
        <v-toolbar-title>BIBLIOTHECA</v-toolbar-title>
      </v-app-bar>
  
      
    
  
      <v-main class="bg-grey-lighten-2">
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="2">
              <v-card class="py-2 px-3">
                <v-radio-group v-model="sortBy">
                    <template v-slot:label> 
                        <h3>Sort By</h3>
                    </template>
  
                    <v-radio value="name">
                      <template v-slot:label>
                        <div>
                          By 
                          <strong>Name</strong></div>
                      </template>
                    </v-radio>
  
                    <v-radio value="price">
                      <template v-slot:label>
                        <div>
                          By
                          <strong> Price</strong></div>
                      </template>
                    </v-radio>
                  </v-radio-group>
  
                  <v-radio-group v-model="order">
                    <template v-slot:label> 
                        <h3>Sorting Order</h3>
                    </template>
  
                    <v-radio value="ascending">
                      <template v-slot:label>
                        <div>
                          By 
                          <strong>Ascending</strong></div>
                      </template>
                    </v-radio>
  
                    <v-radio value="descending">
                      <template v-slot:label>
                        <div>
                          By
                          <strong>Descending</strong></div>
                      </template>
                    </v-radio>
                  </v-radio-group>
              </v-card>
              
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script lang="ts" setup>
      const sortBy = ref('')
      const order = ref('ascending')
  </script>
  
  
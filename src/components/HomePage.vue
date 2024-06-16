<template>
    <div class="w3-padding">
        
        
        <div>
        <el-row style="padding: 30px;">
            <el-col :span="6">
                <el-col :span="6">
                    <img alt="logo" title="logo" src="https://www.studentlibrary.ru/patrns/img/logo.svg">
                </el-col>
                <el-col :span="18" style="color:black">
                    <h1>Электронная библиотека</h1>
                </el-col>
                
                
            </el-col>
           
        </el-row>
    </div>
    <el-row style="color:black">
        <el-col>
            <el-tabs v-model="activeName"  >
    <el-tab-pane label="Студентам" name="first">
        <el-tree :data="data" @node-click="handleNodeClick">
            
        </el-tree>
        
    </el-tab-pane>
    <el-tab-pane label="Преподавателям" name="second">
        <el-tree :data="data" @node-click="handleNodeClick2">
            
        </el-tree>

    </el-tab-pane>

  </el-tabs>
        </el-col>
    </el-row>



    <el-drawer
  :title="current_doc"
  :visible.sync="drawer"
  direction="rtl"
  size="60%"
  >
  <div class="w3-padding" style="height: 800px;">
    <span v-for="d in docs" :key="d.id">
    <embed v-if="d.name===current_doc" :src="d.url" width="600px" height="100%" />
  </span>
  </div>
  
  
</el-drawer>

    </div>
    
  </template>
       <style>
        
    </style>
  <script>
  import {store} from '../store'
    export default {
        data(){
            return {
            
                sizeList:[],
                drawer:false,
                current_doc:'',
                activeName:'first',
                data:[
                    { label:'1 курс', children:[
                    {label:'Математика'},
                    {label:'Русский язык'},
                    {label:'ОБЖ'},
                    {label:'История'},

                    ]  },
                    { label:'2 курс', children:[
                    {label:'МДК 02'}
                    ]  },
                    { label:'3 курс', children:[
                    {label:'МДК 03'}
                    ]  },
                    { label:'4 курс',   }
                ]
            }
            
        },
        
        computed:{
            docs(){
              return store.state.docs
            }
        },
        methods: {
             handleNodeClick(data) {
                console.log(data);
                console.log(data.label);
                if ((data.label!='1 курс')&&(data.label!='2 курс')&&(data.label!='3 курс')&&(data.label!='4 курс')){
                   this.current_doc = data.label
                   this.drawer = true
                }
            },
             handleNodeClick2(data) {
                console.log(data);
                console.log(data.label);
                if ((data.label!='1 курс')&&(data.label!='2 курс')&&(data.label!='3 курс')&&(data.label!='4 курс')){
                   this.current_doc = data.label
                   this.drawer = true
                }
            },


    },
    created(){

    }
    }
  </script>
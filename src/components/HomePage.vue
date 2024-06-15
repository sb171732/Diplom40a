<template>
    <div style="height: 50px; background-color: black; color: white; padding: 10px 0 0 10px;">
        
        <el-row>
            <el-col :span="8">Настроить шрифт
                <img src="https://www.studentlibrary.ru/patrns/img/fs_up.svg">
                <img src="https://www.studentlibrary.ru/patrns/img/fs_reset.svg">
                <img src="https://www.studentlibrary.ru/patrns/img/fs_down.svg">
            </el-col>
            <el-col :span="8"><a href="https://www.studentlibrary.ru?change_pat_file=sv_studentlibrary&amp;SSr=07E70C073FEBE)">Версия для слабовидящих</a>
            </el-col>
            <el-col :span="8">
                <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
        <i class="el-icon-user"></i>
                <a href="https://www.studentlibrary.ru/ru/cur_user/entry.html">
			<span>Вход / регистрация</span></a>
        </el-col>
        </el-row>
        <div>
        <el-row style="padding: 30px;">
            <el-col :span="6">
                <el-col :span="6">
                    <img alt="logo" title="logo" src="https://www.studentlibrary.ru/patrns/img/logo.svg">
                </el-col>
                <el-col :span="18" style="color:black">
                    <h1>Консультант студента</h1>
                </el-col>
                
                
            </el-col>
            <el-col :span="6"><el-button type="primary" round>Книги<i class="el-icon-s-fold"></i></el-button></el-col>
            <el-col :span="8"> <el-button @click="drawer = true" plain>Поиск по библиотеке<i class="el-icon-search"></i></el-button></el-col>
            <el-col :span="4">
                <el-menu mode="horizontal" >
  <el-menu-item index="1">RU</el-menu-item>
  <el-menu-item index="2">EN</el-menu-item></el-menu>
            </el-col>
        </el-row>
    </div>
    <el-row style="color:black">
        <el-col>
            <el-tabs v-model="activeName"  >
    <el-tab-pane label="User" name="first">
        <el-tree :data="data" @node-click="handleNodeClick">
            
        </el-tree>
        
    </el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
  </el-tabs>
        </el-col>
    </el-row>



    <el-drawer
  title="I am the title"
  :visible.sync="drawer"
  direction="rtl"
  size="60%"
  >
  <span>Hi, there!</span>
  <embed src="https://firebasestorage.googleapis.com/v0/b/test-28615.appspot.com/o/mat01.pdf?alt=media&token=3e71b52a-67af-4f07-86a9-5c1d9a38163a" width="600px" height="400px" />
</el-drawer>

    </div>
    
  </template>
       <style>
        
    </style>
  <script>
    export default {
        data(){
            return {
            
                sizeList:[],
                drawer:false,
                activeName:'first',
                data:[
                    { label:'1 курс', children:[
                    {label:'Математика'}
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
        methods: {
             handleNodeClick(data) {
        console.log(data);
        console.log(data.label);
        if (data.label === 'Математика') {
              this.drawer = true
    }
}

    }
    }
  </script>
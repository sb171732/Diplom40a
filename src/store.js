import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        zag:[],  // переменные , данные , состояние 
        teachers:[],
        docs:[],
        docs2:[]
    },
    mutations: {
        ...vuexfireMutations,  // мутации изменяют state если происходят action
    },
    actions: {
        bindZag: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('zag', db.collection('zagadki'))
        }), // 
        bindDocs: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('docs', db.collection('docs'))
        }), // 
        bindTeachers: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('teachers', db.collection('teachers'))
        }), // 

        addUser: firestoreAction((context, payload) => {
            return db.collection('g40b').add(payload)
        }),
        saveR: firestoreAction((context, payload) => {
            return db.collection('rezult_zagadki').add(payload)
        }),
        delUser: firestoreAction((context, payload) => {
            db.collection('g40b')
                .doc(payload)
                .delete()
        }),
        updateG: firestoreAction((context, {id, doc}) => {
            db.collection('g40b')
                .doc(id)
                .update(doc)
        }),

       
       initFirebase(){
        //  const firebaseApp =
          firebase.initializeApp({
            apiKey: "AIzaSyD2wH4khdmIWQjT7dY6UFJ0BTjlfpfhDWI",
  authDomain: "vue30app-ded17.firebaseapp.com",
  projectId: "vue30app-ded17",
  storageBucket: "vue30app-ded17.appspot.com",
  messagingSenderId: "545224563690",
  appId: "1:545224563690:web:70d920956d5d13abaf7093",
  measurementId: "G-8MP081C38V"
          });
        },
    }
})


store.dispatch('bindZag')
store.dispatch('bindDocs')
store.dispatch('bindTeachers')

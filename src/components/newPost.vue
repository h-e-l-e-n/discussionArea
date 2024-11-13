<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const title = ref([]);
const content = ref([]);
const topics = ref([]);


    onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'topics'));
    topics.value = querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
});

</script>
<template>

<div class="container">
    <h2>發表文章</h2>
    
    <form>
        <label for="title">請輸入標題：</label>
        <input type="text" placeholder="輸入文章標題" name="title" v-model="title"/>
        <br><br>
        <label for="photoupload">照片上傳</label>
        <input type="file" name="photoupload" id=""photoupload>
        <br><br>
        <label for="textcontent">請輸入內容：</label>
        <textarea type="text" placeholder="輸入文章內容" name="textcontent" v-model="content"></textarea>
        <br><br>
        <select name="topics" id="topics">
            <option value="">文章主題</option>
            <option v-for="(topic, index) in topics" :key='index' :value="topic.name">{{ topic.name }}</option>
        </select>
    </form>
</div>


</template>
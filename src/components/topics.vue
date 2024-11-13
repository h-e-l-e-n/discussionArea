<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

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
<div>
    <ul>
        <li v-for="(topic, index) in topics" :key='index'>
            {{ topic.name }}
        </li>
    </ul>
</div>
</template>
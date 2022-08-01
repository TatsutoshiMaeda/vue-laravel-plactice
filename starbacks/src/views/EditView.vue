<template>
    <MemoForm v-if="memo" :memo="memo" />
    <p v-else>指定されたメモは存在しません</p>
</template>

<script>
import MemoForm from '@/components/MemoForm.vue'
export default  {
    name: 'EditView',
    components: {
    MemoForm
},
    computed: {
        memo() {
            // TODO: parseInt前に値がいるかどうかや、定義されてるかどうかの処理を入れる
            const id = parseInt(this.$route.params.id)
            return this.$store.getters.getMemoById(id)
        }
    }
}
</script>
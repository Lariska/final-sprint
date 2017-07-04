<<template>
    <section>
        <h2>Whats</h2>
        <efix-section v-for="section in sectionCount"></efix-section>
        <div>
            <button @click="updateCount(1)">+</button>
        </div>
    </section>
</template>
<<script>
import EfixSection from './template/EfixSection'
export default {
  name: 'efix-list',
  components: {EfixSection},
  data(){
      return{
        sectionCount: 0
      }
  },
  methods: {
      updateCount(num){
        this.sectionCount += num;
      }
  }
}
</script>

<<style scoped>
    div{
        display:flex;
        justify-content: flex-end;
    }
</style>


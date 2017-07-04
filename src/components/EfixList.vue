<<template>
    <section>
        <efix-section v-for="section in sectionCount"></efix-section>
        <div>
            <button @click="updateCount">+</button>
        </div>
        <div id="modal"></div>
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
      updateCount(){

        this.sectionCount += 1;
      }
  }
}
</script>

<<style scoped>
    div{
        display:flex;
        justify-content: flex-end;
    }
    #modal{
        background-color: red;
        height: 150px;
        width: 50%;
        position: absolute;
        left: 25%;
        display:none;
    }
</style>


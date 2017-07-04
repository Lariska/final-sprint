<<template>
    <section>
        <h2>Whats</h2>
        <nav-bar-section v-for="section in sectionCount"></nav-bar-section>
        <div>
            <button @click="updateCount(1)">+</button>
        </div>
    </section>
</template>
<script>
import NavBarSection from './template/NavBarSection'
import FooterSection from './template/FooterSection'
import MainSection from './template/MainSection'
export default {
  name: 'efix-list',
  components: {NavBarSection, FooterSection, MainSection},
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

<style scoped>
    div{
        display:flex;
        justify-content: flex-end;
    }
</style>


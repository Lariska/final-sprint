<<template>
<section>
    <!--<efix-header>
        <h3>Publish Mode</h3>
    </efix-header>-->
    <component v-for="component in $store.state.efix.components"
    :id="component.id"
    :key="component.type"
    :is="component.type"
    :paramsForRender="component"
    ></component>
</section>

</template>
<<script>
// import NavBarSection from './components/NavBarSection'
import MainSection from './publishTemplates/MainSection'
import FooterSection from './publishTemplates/FooterSection'
import HeaderSection from './publishTemplates/HeaderSection'
import GallerySection from './publishTemplates/GallerySection'
import DateSection from './publishTemplates/DateSection'
import TableSection from './publishTemplates/TableSection'
import PlaceSection from './publishTemplates/PlaceSection'
export default {
    name:'publish',
    components: {
        FooterSection,
        // NavBarSection,
        MainSection,
        HeaderSection,
        GallerySection,
        DateSection,
        TableSection,
        PlaceSection
    },
    created() {
        this.$store.dispatch('getData')
    },
    // methods: {
    //      cmpToRender() {
    //         return this.$store.state.efix.components
    //     }
    // },
    computed: {
        // cmpToRender() {
        //     return this.$store.state.efix.components
        // }
    }
}
</script>
<<style scoped>
   body{
    padding: 0;
    margin: 0;
  }
</style>

<<template>
<section>
    <!--<efix-header>
        <h3>Publish Mode</h3>
    </efix-header>-->
    <component v-for="component in cmpToRender"
    :id="component.id"
    :key="component.type"
    :is="component.type"
    :paramsForRender="component"
    ></component>
</section>
      
</template>
<<script>
import NavBarSection from './components/NavBarSection'
import MainSection from './components/MainSection'
import FooterSection from './components/FooterSection'
import HeaderSection from './components/HeaderSection'
import GallerySection from './components/GallerySection'
import DateSection from './components/DateSection'
import TableSection from './components/TableSection'
import PlaceSection from './components/PlaceSection'
export default {
    name:'publish',
    components: {
        FooterSection,
        NavBarSection,
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
    computed: {
        cmpToRender() {
            console.log('getting components for cmpToRender');
            return this.$store.state.efix.components
        }
    }
}
</script>
<<style>

</style>

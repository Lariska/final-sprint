
import { HEADER_SECTION, NAV_BAR_SECTION, MAIN_SECTION, FOOTER_SECTION } from '../constants/cmpName'

function buildCmpObj(cmpName){
    console.log(`building a ${cmpName} component object`);
    var cmpObj;
    switch(cmpName){
        case(HEADER_SECTION):
            cmpObj =  {
                id: null,
                type: this.name,
                title: {
                    text: 'Hello!',
                    color: '#2C3E50'
                },
                contentText: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    color: '#2C3E50'
                },
                font: {
                    size: '16px'
                },
                img: 'wixer-logo.png',
                backgroundColor: '#CED3DC',
                color: '#2C3E50'
            }
            break; 
        case(NAV_BAR_SECTION):
            break;
        case(MAIN_SECTION):
            break;
        case(FOOTER_SECTION):
            break;
    }
}

export default {
    buildCmpObj
}


import { HEADER_SECTION, NAV_BAR_SECTION, MAIN_SECTION, FOOTER_SECTION, GALLERY_SECTION } from '../constants/cmpName'

function buildCmpObj(cmpName){
    console.log(`building a ${cmpName} component object`);
    switch(cmpName){
        case(HEADER_SECTION):
            cmpObj =  {
                id: null,
                'type':cmpName,
                data :{
                    title: {
                        text: 'Hello!',
                        style: {color: '#2C3E50'}
                    },
                    contentText: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        style: {
                            color: '#2C3E50', 
                            fontSize: '16px'}
                    },
                    img: 'wixer-logo.png',
                    style:{backgroundColor: '#CED3DC'},
                },
            }
            break; 
        case(NAV_BAR_SECTION):
            var cmpObj={'type':cmpName};
            break;
        case(MAIN_SECTION):
            var cmpObj={'type':cmpName};
            break;
        case(FOOTER_SECTION):
            var cmpObj={'type':cmpName};
            break;
        case(GALLERY_SECTION):
            var cmpObj={'type':cmpName};
            break;
    }
    return cmpObj;
}

export default {
    buildCmpObj
}

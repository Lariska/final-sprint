
import { HEADER_SECTION, NAV_BAR_SECTION, MAIN_SECTION, FOOTER_SECTION, GALLERY_SECTION } from '../constants/cmpName'

function buildCmpObj(cmpName){
    var cmpObj=null;
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
            cmpObj={
                id: null,
                'type':cmpName,
                data:{
                    links: [
                        { text: 'link1', url: '', style: {
                                                    size: '16px',
                                                    color: '#2C3E50'}},
                        { text: 'link2', url: '', style: {
                                                    size: '16px',
                                                    color: '#2C3E50'}},
                        { text: 'link3', url: '', style: {
                                                    size: '16px',
                                                    color: '#2C3E50'}},
                        { text: 'link4', url: '', style: {
                                                    size: '16px',
                                                    color: '#2C3E50'}}
                    ],
                    style: {
                        backgroundColor: '#CED3DC'
                    },
                }
            };
            break;
        case(MAIN_SECTION):
            cmpObj={
                id: null,
                'type':cmpName,
                data: {
                    title: {
                        text: 'Hello',
                        style: { color: '#2C3E50' }
                    },
                    content: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        img: 'wixer-logo.png',
                        style: { color: '#2C3E50', fontSize: '16px' }
                    },
                    style:{
                        backgroundColor: '#CED3DC',
                        color: '#2C3E50'
                    }
                }
            };
            break;
        case(FOOTER_SECTION):
            cmpObj={
                id: null,
                'type':cmpName,
                data: {
                    content: {
                        text: 'Copyrights 2017',
                        style: {
                            color: '#2C3E50',
                            fontSize: '16px'
                        }
                    },
                    style: { backgroundColor: '#CED3DC' }
                }
            };
            break;
        case(GALLERY_SECTION):
            cmpObj={
                id:null,
                'type':cmpName,
                data: { 
                    imgs:[
                        {url:'https://unsplash.it/800/1200?image=1063'},
                        {url:'https://unsplash.it/800/1200?image=1064'},
                        {url:'https://unsplash.it/800/1200?image=1065'},
                        {url:'https://unsplash.it/800/1200?image=1067'}
                    ],
                }
            };
            break;
    }
    return cmpObj;
}

export default {
    buildCmpObj
}

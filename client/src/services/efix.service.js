import {
  HEADER_SECTION,
  NAV_BAR_SECTION,
  NAV_BAR_SECTION2,
  MAIN_SECTION,
  FOOTER_SECTION,
  GALLERY_SECTION,
  DATE_SECTION,
  PLACE_SECTION,
  TABLE_SECTION
} from '../constants/cmpName'

function buildCmpObj(cmpName) {
  let cmpObj = null;
  switch (cmpName) {
    case(HEADER_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          title: {
            text: 'Welcome!',
            style: {color: '#2C3E50'}
          },
          content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'static/logo.png'
          },
          style: {
            backgroundColor: '#9A9FB6',
            color: '#2C3E50',
            fontSize: '16px'
          },
        },
      };
      break;
    case(NAV_BAR_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          content: {
            links: [
              {text: 'Home', url: ''},
              {text: 'Services', url: ''},
              {text: 'About us', url: ''},
              {text: 'Contacts', url: ''}
            ],
          },
          style: {
            backgroundColor: '#CED3DC',
            fontSize: '16px',
            color: '#2C3E50'
          },
        }
      };
      break;
    case(NAV_BAR_SECTION2):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          content: {
            links: [
              {text: 'Home', url: ''},
              {text: 'Services', url: ''},
              {text: 'About us', url: ''},
              {text: 'Contacts', url: ''}
            ],
          },
          style: {
            backgroundColor: '#CED3DC',
            fontSize: '16px',
            color: '#2C3E50'
          },
        }
      };
      break;
    case(MAIN_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          title: {
            text: 'Hello',
          },
          content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'wixer-logo.png'
          },
          style: {
            backgroundColor: '#e6e8e7',
            color: '2C3E50',
            fontSize: '16px',
            'text-align': 'center'
          }
        }
      };
      break;
    case(FOOTER_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          content: {

            text:{ copyright:'Copyrights 2017', email:'email@gmail.com', phone:'+54-8054585'},
            img: 'static/logo.png'
          },
          style: {
            backgroundColor: '#9A9FB6',
            color: '#2C3E50',
            'text-align': 'center',
            fontSize: '16px'
          }
        }
      };
      break;
    case(GALLERY_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          images: ["https://unsplash.it/800/1200?image=1063", "https://unsplash.it/800/1200?image=1064",
            "https://unsplash.it/800/1200?image=1065", "https://unsplash.it/800/1200?image=1067"],
          activeImage: -1
        }
      };
      break;
    case(DATE_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data:{
          events: [
            {
              date: '2017/7/8',
              title: 'Double click me to remove!',
              desc: 'longlonglong description'
            },
          ],
        }
      }
      break;
    case(PLACE_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          center: {lat: 10.0, lng: 10.0},
          markers: [],
          infoContent: '',
          infoOptions: {pixelOffset: {width: 0, height: -35}},
          infoWinOpen: false,
          infoWindowPos: {lat: 0, lng: 0}
        }
      };
      break;
    case(TABLE_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: [
          {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home'
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Office'
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home'
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Office'
          }
        ]
      }
      break;
  }
  return cmpObj;
}
const getCmpById = (components, id) =>
  components.find(component => component.id === id);

const generateId = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};
export default {
  buildCmpObj
}

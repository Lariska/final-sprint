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
  var cmpObj = null;
  switch (cmpName) {
    case(HEADER_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          title: {
            text: 'Hello!',
            style: {color: '#2C3E50'}
          },
          content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'static/logo.png'
          },
          style: {
            backgroundColor: '#CED3DC',
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
            backgroundColor: '#CED3DC',
            color: '#2C3E50',
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
            text: 'Copyrights 2017'
          },
          style: {
            backgroundColor: '#CED3DC',
            color: '#2C3E50',
            'text-align': 'center',
            fontSize: '16px'
          }
        }
      };
      break;
    case(GALLERY_SECTION):
      var cmpObj = {
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
      var cmpObj = {
        id: generateId(),
        type: cmpName
      }
      break;
    case(PLACE_SECTION):
      var cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {}
      };
      break;
    case(TABLE_SECTION):
      var cmpObj = {
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

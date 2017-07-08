import {
  HEADER_SECTION,
  NAV_BAR_SECTION,
  MAIN_SECTION,
  FOOTER_SECTION,
  GALLERY_SECTION,
  DATE_SECTION
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
          contentText: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            style: {
              color: '#2C3E50',
              fontSize: '16px'
            }
          },
          img: 'wixer-logo.png',
          style: {backgroundColor: '#CED3DC'},
        },
      }
      break;
    case(NAV_BAR_SECTION):
      cmpObj = {
        id: generateId(),
        type: cmpName,
        data: {
          links: [
            { text: 'Home', url: '' },
            { text: 'Services', url: '' },
            { text: 'About us', url: '' },
            { text: 'Contacts', url: '' }
          ],
          style: {
            backgroundColor: '#CED3DC',
            size: '16px',
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
            img: 'wixer-logo.png',
            style: {fontSize: '16px'}
          },
          style: {
            backgroundColor: '#CED3DC',
            color: '#2C3E50',
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
            text: 'Copyrights 2017',
            style: {
              fontSize: '16px'
            }
          },
          style: {backgroundColor: '#CED3DC', color: '#2C3E50'}
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
  }
  return cmpObj;
}
const generateId = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};
export default {
  buildCmpObj
}

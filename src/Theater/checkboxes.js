const checkbox = [
  {
    name: 'seat 1',
    key: '1',
    label: 'Check Box 1',
    disable: true
  },
  {
    name: 'seat 2',
    key: '2',
    label: 'Check Box 2',
    disable: false
  },
  {
    name: 'seat 3',
    key: '3',
    label: 'Check Box 3',
    disable: false
  },
  {
    name: 'seat 4',
    key: '4',
    label: 'Check Box 4',
    disable: true
  },
];

//Exported the mapping of checkbox to checkboxes so that I can later use checkbox as a storage variable when I get the API working.
const checkboxes = checkbox.map(check => {return {'name': check.name, 'key': check.key, 'label': check.label, 'disable': check.disable, }} )


  
  export default checkboxes;
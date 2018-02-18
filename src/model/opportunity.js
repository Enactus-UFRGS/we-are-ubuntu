import firebase from 'firebase'
import blue from 'material-ui/colors/lightBlue'
import purple from 'material-ui/colors/purple'

const OPPORTUNITIES_DATABASE = 'opportunities'

export const OPPORTUNITY_TYPES = {
  JOB: 'job',
  HOME: 'home',
}

export const OPPORTUNITY_TYPES_COLORS = {
  [OPPORTUNITY_TYPES.HOME]: purple.A200,
  [OPPORTUNITY_TYPES.JOB]: blue.A200,
}

Object.freeze(OPPORTUNITY_TYPES)
Object.freeze(OPPORTUNITY_TYPES_COLORS)

export function create({title, shortDescription, description, type}){
  const createdBy = firebase.auth().currentUser.uid
  return firebase.database().ref(OPPORTUNITIES_DATABASE).push({
    title,
    shortDescription,
    description,
    type,
    createdBy,
  })
}

export function find(id){
  return firebase.database().ref(`${OPPORTUNITIES_DATABASE}/${id}`).once('value').then(snap => snap.val())
}

export function getAll(){
  return firebase
    .database()
    .ref(OPPORTUNITIES_DATABASE)
    .once('value')
    .then(normalizeList)
}

export function onValueChange(method){
  firebase
    .database()
    .ref(OPPORTUNITIES_DATABASE)
    .on('value', snap => {
      method(normalizeList(snap))
    })
}

function normalizeList(snap){
  return Object.entries(snap.val()).map(([id, opp]) => ({ ...opp, id }))
}

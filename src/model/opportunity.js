import firebase from 'firebase'
import blue from 'material-ui/colors/lightBlue'
import brown from 'material-ui/colors/brown'
import teal from 'material-ui/colors/teal'

const OPPORTUNITIES_DATABASE = 'opportunities'

export const OPPORTUNITY_TYPES = {
  JOB: 'job',
  HOME: 'home',
  EDUCATION: 'education',
}

export const OPPORTUNITY_TYPES_COLORS = {
  [OPPORTUNITY_TYPES.HOME]: brown.A200,
  [OPPORTUNITY_TYPES.JOB]: teal.A400,
  [OPPORTUNITY_TYPES.EDUCATION]: blue[600]
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

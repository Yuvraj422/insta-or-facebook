import React from 'react'

import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import facebook from './screens/facebook'
import instagram from './screens/instagram'
import AppHeader from './screens/appheader'

export default class App extends React.Component{
 render(){
   return(
  <AppContainer/>
   )
 }
}
const tabNavigator=createBottomTabNavigator({
  facebook:{screen:facebook},
  instagram:{screen:instagram}
})
const AppContainer=createAppContainer(tabNavigator)


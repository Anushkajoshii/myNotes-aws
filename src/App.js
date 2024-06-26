import logo from "./logo.svg"
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  Card,
  View,
  withAuthenticator,
  Image,
} from "@aws-amplify/ui-react";



function App ({signOut}){
  return(
    <View className="App">
      <Card> 
        <Image>
          <img src={logo} alt="logo" />
        </Image>
        <Heading level={1}>Welcome to the Amplify UI React</Heading>
      </Card>
      <Button>signOut</Button>
    </View> 
  )
}
export default withAuthenticator(App);
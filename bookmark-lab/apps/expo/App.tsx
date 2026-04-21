import { Provider } from 'app/provider'
import { NativeStackNavigation } from './navigation/native-stack'

export default function App() {
  return (
    <Provider>
      <NativeStackNavigation />
    </Provider>
  )
}

import TypingGameDemo from '../components/TypingEditor/TypingEditor'
import { code_title, demo_cpp_code } from '../data/demo'

const App = () => {
  return <TypingGameDemo title={code_title} code={demo_cpp_code} />
}

export default App

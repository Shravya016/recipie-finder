import './App.css';
import { LoginForm } from './components/login-form';

function App() {
  return (
    <div className="App">
      <main className="min-h-screen flex items-center justify-center p-4 bg-background">
        <LoginForm />
      </main>
    </div>
  );
}

export default App;

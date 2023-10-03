import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav class="bg-black p-4">
  <div class="container mx-auto flex items-center justify-between">
    <a href="#" class="text-white text-xl font-bold">Your Logo</a>
    <ul class="flex space-x-4">
      <li>
        <a href="#" class="text-white hover:text-gray-300 relative">
          Home
          <div class="hidden absolute bg-white rounded-lg p-2 top-8 left-0 transform -translate-x-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:block">
            Content for Home
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="text-white hover:text-gray-300 relative">
          About
          <div class="hidden absolute bg-white rounded-lg p-2 top-8 left-0 transform -translate-x-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:block">
            Content for About
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="text-white hover:text-gray-300 relative">
          Services
          <div class="hidden absolute bg-white rounded-lg p-2 top-8 left-0 transform -translate-x-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:block">
            Content for Services
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="text-white hover:text-gray-300 relative">
          Contact
          <div class="hidden absolute bg-white rounded-lg p-2 top-8 left-0 transform -translate-x-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:block">
            Content for Contact
          </div>
        </a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default App;

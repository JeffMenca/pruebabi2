import logo from './logo.svg';
import './App.css';
import Container from './Container';

function App() {
  return (
    <div className="App">
       <div className=" bg-[#39424E] w-full p-6 flex items-center justify-center">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUOFB4A6mT///8AAAALERwOABgABRQABhb6+vtTVlsHtFAA7mUHrU4OABsPABYA52Pc3d0AAA8AAAbX19imp6r09PUeIysKgD4KdjsHsU/DxMaTlJfm5ucUGiMKcDkcwJDzAAABFklEQVR4nO3cvVKDQBSAUQRiUIwY4m/UvP9jpogU4WYcZouV4Dklews+yp3hFgUAAAAAAAAAAAAAAAAAAAAAgyqaNFQPZ5tUuQJ3ZXOu3IXE6jkMvbz+JG7e2i5F+54nsV6XUSx8ikN3t6ez1X17k6L9WGUqbP6q8EGhQoUKFSpUqFChQoUKFSpUqFChQoUK519Yjyi8usJJFCpUqFChQoUKFSpUqFChQoWzLwyPLn2Fqy6stiOLu6dZ/k3UP7gvVahQoUKFChUqVKhQoUKFChUqVKhQocJYGN99Wf/jF9U+rEvYh8L+czzUfH0POxUOSSsVuu6QbW3ElL0Y/W97MR7T5AoEAAAAAAAAAAAAAAAAAAAAmLUjSkxXL4VH7TgAAAAASUVORK5CYII=" alt="logo" className="w-20 h-20" />
        <span className="text-[#22C55E] text-2xl ml-2">MovieList</span>
      </div>
      <header className="bg-gray-200">
       <Container />
      </header>
    </div>
  );
}

export default App;

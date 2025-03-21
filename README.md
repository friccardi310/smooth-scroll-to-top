# Smooth Scroll To Top

A lightweight React component that provides a smooth scrolling "Back to Top" button with customizable styles, colors, and position.

## 📌 Features
- Smooth scrolling animation
- Customizable styles (color, size, position)
- Lightweight and easy to use

## 🎬 Demo
[Live Demo](https://smooth-scroll-to-top.vercel.app/)

![Smooth Scroll To Top Preview](https://github.com/friccardi310/smooth-scroll-to-top/blob/b627865a6a475e9c1eaa881dddb4aca9dd16019d/demo/public/videos/demo.gif)

## 🚀 Installation

Install via npm:
```sh
npm install smooth-scroll-to-top
```

Or using yarn:
```sh
yarn add smooth-scroll-to-top
```

## 📖 Usage

Import and use the component in your React app:
```jsx
import SmoothScrollToTop from "smooth-scroll-to-top";

function App() {
  return (
    <div>
      <SmoothScrollToTop
        bgColor="#000"
        color="white"
        width="50px"
        height="50px"
        position="left"
        visibilityOffset={300}
        customStyle="border-radius: 50%; box-shadow: 2px 2px 5px rgba(0,0,0,0.3); right: 30px;"
        customIcon="▲"
      />
    </div>
  );
}

export default App;
```

## ⚙️ Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bgColor` | string | `#000` | Background color of the button |
| `color` | string | `#fff` | Text/icon color |
| `width` | string | `50px` | Button width |
| `height` | string | `40px` | Button height |
| `position` | string | `right` | Position (`left` or `right`) |
| `visibilityOffset` | number | `300` | Scroll distance before button appears |
| `customStyle` | string | `""` | Additional CSS styles |
| `customIcon` | JSX.Element | `null` | Custom icon component |

## 🛠️ Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

## 📜 License
This project is licensed under the MIT License.

---

Made with ❤️ by [Frank Riccardi]
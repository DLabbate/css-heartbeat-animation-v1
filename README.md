# CSS Heartbeat Animation

This project is a super simple tutorial to implement a CSS heartbeat❤️ animation, which can be useful for a "like" button!

<img src="./src/heartbeat.gif" />

The code is outlined below:

```css
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
```

```css
.heart:hover {
  animation: heartbeat 1s infinite;
  fill: red;
  color: red;
  opacity: 1;
  transition: opacity 500ms;
}
```

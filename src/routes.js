import { Home, BingoGame, Slider } from "./containers";

export const routes = [
  {
    name: "Home",
    url: "/",
    component: <Home />,
    index: true,
  },
  {
    name: "Bingo Game",
    url: "/bingo-game",
    component: <BingoGame />,
  },
  {
    name: "Slider",
    url: "/slider",
    component: <Slider />,
  },
];

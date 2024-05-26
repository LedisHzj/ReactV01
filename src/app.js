const Pet = (props) => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h2", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
    ]
  );
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement(Pet, {
        name: 'catty',
        animal: 'cat',
        breed: 'mixed'
      }),
      React.createElement(Pet, {
        name: 'doggy',
        animal: 'dog',
        breed: 'cannis'
      }),
      React.createElement(Pet, {
        name: 'rundy',
        animal: 'tuttrle',
        breed: 'careta-careta'
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
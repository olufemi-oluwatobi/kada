# kada

Simple product app built with `React-Native`, `Native-Base` and `Redux`

![Slider](./screenshots/kada-slider.jpeg 'Slider')
![Create post](./screenshots/kada-products.jpeg 'Products')
![Show post](./screenshots/kada-home.jpeg 'Home')

### iOS

In the root directory

- Install dependencies: `npm install`

In the `ios` directory

- Install Pods: `gem install cocoapods`
- Install Pods: `pod install`
- Install xcpretty: `gem install xcpretty`
- Launch: `open Sample.xcworkspace`

### Android

- Ensure that local.properties and gradle.properties have the right content. `See gradle.example.properties` for more information
- To run from command line try: `yarn run-android`

### Compiling

You can compile and put it on the phone with: `npm run install:staging`

Not that there's a staging server at this point, but it's an example of how to compile things via the command line.

# Current Concepts

### Navigation

The sole method of navigation is native-base's drawe navigation, Routes are loaded into the call stack and naviagation is executed by clicking the items on the left drawer bar

#### Flux

The Components use Actions. Actions tend to use the API Services and dispatch an event. The Stores are listening to the events. The Components add and remove listeners to the Stores.
The Flux library of choice for this project is Redux

#### API

This project uses FETCH API to handle HTTP requests and sets headers and other things



```typescript
const buildQueryString = queryObject =>
  Object.entries(queryObject)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

const getDefaultHttpParams = () => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  return {headers, credentials: 'same-origin'};
};

export const makeGetRequest = async (requestURL, queryData = {}) => {
  const params = getDefaultHttpParams();

  // SET HTTP METHOD
  params.method = 'GET';
  const url = `${requestURL}?${buildQueryString(queryData)}`;

  const response = await fetch(url, params);
  const data = await response.json();

  return Promise.resolve({data, status: response.status});
};
```

#### Components

Some shared components that might be helpful

- ProductList: Make a list of products rendering products cards
- ProductCard: Card for rendering products and descriptions
- Home: Landing Page with a simple welcome message

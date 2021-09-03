# Dynamic Image

Small app to generate social media images dynamically for my blog at kinduff.com

It uses ExpressJS, Puppeteer, and EJS to generate the images.

Backgrounds are courtesey of [this unsplash collection](https://unsplash.com/collections/573009/micro-worlds).

## Setup

1. Clone the repository
2. Install dependencies: `yarn install`
3. Run the server at port 8080 `yarn start`

## How to use it

No configuration required, it will output a 1200x600 pixels image when hitting the path `/(:base64).jpg`.

It's pretty easy to modify in case you want to extend it, feel free to steal it.

## Example

```
http://0.0.0.0:8080/TG9yZW0gSXBzdW0gRG9sb3IgU2l0IEFtZXR8SSBkb24ndCBzcGVhayBMYXRpbiBidXQgSSBkb24ndCBjYXJl.jpg
```

![Example image](example.jpg)

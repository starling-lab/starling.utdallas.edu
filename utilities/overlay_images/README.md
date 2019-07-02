# overlay_images

**Overview**: Node script for generating header images for backgrounds on
software pages or elsewhere.

**Dependencies**: `node`, `npm`, [`cairo`](https://cairographics.org/), [`libffi`](https://sourceware.org/libffi/)

## Installation

System dependencies include `cairo` and `libffi`. Adapt to your local package manager:

```bash
# Ubuntu
sudo apt-get install cairo

# MacOS
brew install cairo
```

Node dependencies can be installed through `npm`. This includes
`trianglify`, `canvas`, and `commander`.

```bash
npm install
```

`libffi` path may need to be set during installation with the
`PKG_CONFIG_PATH` variable. Your path will vary, but it should
follow a pattern like this:

```bash
export PKG_CONFIG_PATH="/Users/hayesall/homebrew/opt/libffi/lib/pkgconfig"
npm install
```

## Examples

View all parameters by passing the `--help` flag:

```bash
node main.js --help
```

This generates a `splash10.png` file, then moves it to the `splash_img` directory.

```bash
cd overlay_images

# Generate a new splash image.
node main.js --variance 0.3 --output splash10.png

# Move the header image into the directory where splash images are stored.
mv splash10.png ../../assets/images/splash_img/
```

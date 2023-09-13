# Predantix

The web extension is a helper for the [pedantle](https://cemantle.certitudes.org/pedantle)/[pédantix](https://cemantix.certitudes.org/pedantix) games that submits a 
number of common words shortening the boring initial phase of trying simple
words.

It is based on the [beastify webextension example](https://github.com/mdn/webextensions-examples/tree/main/beastify). The extension icon is from [FreePNGImg.com](https://www.freepngimg.com/icon/1000261-cloud-emoji-icon-download-free)

## Usage

The extension is in early preview so in order to use it you have to install it
in developer mode.

First install the [web-ext](https://github.com/mozilla/web-ext) tool, a command line tool for extension development

```shell
npm install --global web-ext
```

Then clone the current repository
```shell
git clone https://github.com/sellisd/predantix
```

run the web extension
```shell
web-ext run
```
a Firefox browser will open up with the extension installed. Navigate to [pedantle](https://cemantle.certitudes.org/pedantle) or [pédantix](https://cemantix.certitudes.org/pedantix) and test the extension.
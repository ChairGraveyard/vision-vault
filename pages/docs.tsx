import Document, { Head, Html, Main, NextScript } from 'next/document';

class Docs extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Docs;

import React from "react";
import App, { Container } from "next/app";
import WithApollo from "containers/with-apollo";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <WithApollo>
          <Component {...pageProps} />
        </WithApollo>
      </Container>
    );
  }
}

export default MyApp;

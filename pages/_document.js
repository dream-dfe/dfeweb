import Document, {Html, Head, Main, NextScript}  from 'next/document'


class MyDocument extends Document {
    render() {
        return(
            <Html lang='en'>
            <Head>
                <meta name='description' content='Dream Factory Enterprise' />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
                <script src="https://kit.fontawesome.com/aa5d3712ea.js" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
                
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>

            </Html>
        )
    }
}

export default MyDocument
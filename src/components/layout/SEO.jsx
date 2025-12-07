import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title} | Europe Calling Tourism & Hospitality</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={`${title} | Europe Calling`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;

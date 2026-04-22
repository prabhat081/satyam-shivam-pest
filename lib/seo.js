export const generateSEO = ({
    title,
    description,
    path = "",
    image = "/images/og.jpg",
}) => {
    return {
        title,
        description,
        alternates: {
            canonical: `https://yourdomain.com${path}`,
        },
        openGraph: {
            title,
            description,
            url: `https://yourdomain.com${path}`,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
};
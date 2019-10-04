let env = process.env.NODE_ENV || 'development';

const cfg = {
    development: {
        gtmId: null,
        sentryDsn: null,
    },
    production: {
        gtmId: 'XXXXX',
        sentryDsn: "XXXXX",
    }
}[env];

export default cfg;

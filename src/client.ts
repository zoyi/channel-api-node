import Message from './message';

const rp = require('request-promise');

export default class Client {
    accessKey: string;
    accessSecret: string;

    messages: Message;

    constructor(accessKey: string, accessSecret: string) {
        this.accessKey = accessKey;
        this.accessSecret = accessSecret;
        this.messages = new Message(this);
    }

    post(endpoint: string, data: Object) {
        return rp({
            method: 'POST',
            uri: `http://api.channel.io/open${endpoint}`,
            headers: {
                'X-Access-Key': this.accessKey,
                'X-Access-Secret': this.accessSecret,
                'content-type' : 'application/json'
            },
            body: data,
            json: true
        })
    }
}

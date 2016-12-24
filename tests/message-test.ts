import * as assert from 'assert';
import { Client } from '../src';

const nock = require('nock');

describe('Message', () => {
    it('should be created', () => {
        nock('https://api.channel.io/open').post('/groups/@GroupName/messages?botName=BotName', { message: 'Message' }).reply(200, {});
        const client = new Client('AccessKey', 'AccessSecret');
        client.messages.create('GroupName', 'BotName', { message: 'Message' }).then((body: any) => {
            console.log(body)
        })
    })    
})

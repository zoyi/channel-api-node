import * as assert from 'assert';
import { Client } from '../src';

describe('Client', () => {
    const accessKey = 'accessKey'
    const accessSecret = 'accessSecret'
    it('should construct with two fields', () => {
        const client = new Client('accessKey', 'accessSecret')
        assert.equal(accessKey, client.accessKey);
        assert.equal(accessSecret, client.accessSecret);   
    })    
})

# channel-api-node

This is a Node.js bindings for Channel API https://api.channel.io/docs/open

## Installation

```
npm install channel-client
```

## Testing
Put values in test_sample.yaml
```
access:
  accessKey: YOUR_ACCESS_KEY
  accessSecret: YOUR_ACCESS_SECRET

id:
  groupId: YOUR_GROUP_ID
  userChatId: YOUR_USER_CHAT_ID

path:
  file: YOUR_FILE_PATH
```

Run commands below.
```
$ mv test_sample.yaml test.yaml
$ npm test
```

## Building

```
$ npm run build
```

## Usage

Require Channel:

```
var Channel = require('channel-client');
```

Create a client:

### Using Personal Access Key and Access Secret

```
var client = new Channel.Client({
  accessKey: 'your_access_key',
  accessSecret: 'your_access_secret'
})
```

## Bot
```
// Create a bot with avatar ('avatar_url can be undefined')
client.bots.create('bot_name', 'avatar_url').then((body) => {
  console.log(body)
}).catch((err) => {
  console.log(err)
})
```

## Manager
```
// List of managers
client.managers.get().then((body) => {
  console.log(body)
}).catch((err) => {
  console.log(err)
})
```

## Group Messages

```
// Send a message to group from bot
var message = {
  message: 'Hi! I'm bot!'
}

client.groups.messages.create('group_id', 'bot_name', message).then((body) => {
  console.log(body)
}).catch((err) => {
  console.log(err)
})

// Send a file to group from bot
var file = fs.readFileSync('file_path')

client.groups.files.create('group_id', 'bot_name', file).then((body) => {
  console.log(body)
}).catch((err) => {
  console.log(err)
})
```

## UserChat
### Message
```
// Send a message to user chat from bot
var message = {
  message: 'Hi! I'm bot!'
}

client.userChats.messages.create('user_chat_id', 'bot_name', message)
  .then((body) => {
    console.log(body)
  }).catch((err) => {
    console.log(err)
  })

// Send a file to user chat from bot
var file = fs.readFileSync('file_path')

client.userChats.files.create('user_chat_id', 'bot_name', file).then((body) => {
  console.log(body)
}).catch((err) => {
  console.log(err)
})
```
### Invite
```
// Invite a manager
client.userChats.invite('user_chat_id', 'bot_name', 'manager_id')
  .then((body) => {
    console.log(body)
  }).catch((err) => {
    console.log(err)
  })
```

## License

MIT

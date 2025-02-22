```javascript
// Correct usage of $inc operator
db.collection.updateOne({ "_id": 1 }, { $inc: { "counter": 1 } });

// Handle cases where the field might not exist or is not a number
db.collection.updateOne({ "_id": 1 }, { $inc: { "counter": 1 } }, { upsert: true });
```
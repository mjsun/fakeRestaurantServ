const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let test = null;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/restaurant', (req, res) => {
    
    res.send(test ||
        {
            "id": 1,
            "name": {
                "en": "Taste of North China",
                "cn": "聚缘轩",
                "pinyin": "Jun Yuan Xuan"
            },
            "address": {
                "street": "75 Montgomery St",
                "city": "Jersey City",
                "state": "NJ",
                "zip": "07302"
            },
            "location": {
                "lon": -74.0394413,
                "lat": 40.7182917
            },
            "phone": 2016441457,
            "hours": {
                "mon": {"gte": "11:00", "lte": "22:00"},
                "tue": {"gte": "11:00", "lte": "22:00"},
                "wed": {"gte": "11:00", "lte": "22:00"},
                "thu": {"gte": "11:00", "lte": "22:00"},
                "fri": {"gte": "11:00", "lte": "22:00"},
                "sat": {"gte": "11:00", "lte": "22:00"},
                "sun": {"gte": "11:00", "lte": "22:00"}
            },
            "cuisine": {
                "en": ["szechuan", "Northern China"],
                "cn": ["川菜", "东北菜"],
                "pinyin": ["chuancai", "dongbei"]
            },
            "price": {
                "level": 3,
                "range": { "gt": 15, "lt": 20}
            },
            "rating": 3.5,
            "ownerid": 2000,
            "images": [],
            "menu": [
                {
                    "id": 1,
                    "name": {
                        "en": "Beef and Ox Tripe in Hot Sauce",
                        "cn": "夫妻肺片",
                        "pinyin": "fuqi feipian"
                    },
                    "category": {
                        "en": "Cold Dish",
                        "cn": "凉菜"
                    },
                    "taste": {
                        "en": "Spicy",
                        "cn": "辣"
                    },
                    "new": false,
                    "chef_special": true,
                    "price": 9.5,
                    "images": []
                },
                {
                    "id": 2,
                    "name": {
                        "en": "Kong Pao Chicken",
                        "cn": "宫保鸡丁",
                        "pinyin": "gongbao jiding"
                    },
                    "category": {
                        "en": "poultry",
                        "cn": "鸡鸭类"
                    },
                    "taste": {
                        "en": "Spicy",
                        "cn": "辣"
                    },
                    "new": false,
                    "chef_special": true,
                    "price": 13,
                    "images": []
                }
            ]
        }
    );
});

app.post('/restaurant', (req, res) => {
    test = req.body;
    console.log(test);
    res.send('');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
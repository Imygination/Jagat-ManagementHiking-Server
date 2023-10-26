# Movie API Documentation

## Endpoints :

List of available endpoints:

- `GET /result`

&nbsp;

## 1. GET /result

Request:

_Response (200 - Ok)_

```json
{
    "mountain": {
        "id": 3,
        "name": "Sindoro via Kledung",
        "location": "Jawa Tengah",
        "lat": "-7.335999714756469",
        "lon": "110.03324802374907",
        "mdpl": "3153",
        "description": "Gunung Sindoro, atau yang juga kerap disebut Gunung Sundoro, memiliki ketinggian 3.153 mdpl di atas permukaan laut. Gunung ini terletak di sekitar Kabupaten Temanggung dan Wonosobo, Jawa Tengah. Gunung Sindoro merupakan gunung berapi aktif berkarakter gunung kerucut tipe Strato, dan terakhir sekali meletus tahun 1971 silam. Bersama Gunung Sumbing yang berhadapan dengannya, Gunung Sindoro dan Gunung Sumbing kerap dianggap sebagai Gunung Kembar’ dalam artian harafiah karena mirip bentuknya dan lokasinya pun berhadapan sangat dekat. Gunung Sumbing dan Sindoro selalu dijadikan target pendakian, terutama bagi pendakian tek-tok, di mana kedua gunung berusaha ditaklukkan dalam waktu yang berdekatan. Apabila dikaitkan pula dengan Gunung Slamet, maka Gunung Sindoro, Sumbing, dan Slamet memiliki julukan Triple S, tiga dari empat gunung tertinggi di Jawa Tengah yang berawalan huruf S.",
        "createdAt": "2023-10-25T17:19:00.572Z",
        "updatedAt": "2023-10-25T17:19:00.572Z",
        "Pos": [
            {
                "id": 7,
                "posName": "Pos 1",
                "time": "2 jam",
                "posMdpl": "1700",
                "posDescription": "Pos 1 adalah tempat istirahat pertama setelah memulai pendakian dari basecamp. Di pos ini, para pendaki dapat menikmati udara segar dan pemandangan hutan sekitar.",
                "MountainId": 3,
                "createdAt": "2023-10-25T17:19:00.599Z",
                "updatedAt": "2023-10-25T17:19:00.599Z"
            },
            {
                "id": 8,
                "posName": "Pos 2",
                "time": "2.5 jam",
                "posMdpl": "2200",
                "posDescription": "Pos 2 terletak di kawasan hutan yang lebat. Fasilitas di pos ini mencakup tempat istirahat, tempat berkemah, dan sumber air bersih untuk memberikan kenyamanan kepada pendaki.",
                "MountainId": 3,
                "createdAt": "2023-10-25T17:19:00.599Z",
                "updatedAt": "2023-10-25T17:19:00.599Z"
            },
            {
                "id": 9,
                "posName": "Puncak Sindoro",
                "time": "4 jam",
                "posMdpl": "3153",
                "posDescription": "Puncak Sindoro adalah tujuan akhir pendakian. Dari puncak ini, para pendaki dapat menikmati pemandangan spektakuler gunung-gemulai sekitar dan perasaan kepuasan setelah menaklukkan puncak tertinggi Gunung Sindoro.",
                "MountainId": 3,
                "createdAt": "2023-10-25T17:19:00.599Z",
                "updatedAt": "2023-10-25T17:19:00.599Z"
            }
        ]
    },
    "weather": "Clouds"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Date Invalid "
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Sorry.. your destination data is not exist in our database"
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "ISE"
}
```

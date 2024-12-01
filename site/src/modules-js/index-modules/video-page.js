import { html } from '../../lib.js';

const videosData = [
  {
    "videoId": "qslHNx_RIk0",
    "title": "01.12.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/qslHNx_RIk0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-12-01T13:11:33Z"
  },
  {
    "videoId": "wf4AFcE1Tfk",
    "title": "30.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/wf4AFcE1Tfk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-30T19:46:06Z"
  },
  {
    "videoId": "3asn-ZQ10Jw",
    "title": "24.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/3asn-ZQ10Jw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-24T11:51:43Z"
  },
  {
    "videoId": "8QE5T13Td7M",
    "title": "23.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/8QE5T13Td7M/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-23T11:54:56Z"
  },
  {
    "videoId": "NQOvWwY3_Wo",
    "title": "17.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/NQOvWwY3_Wo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-17T10:47:35Z"
  },
  {
    "videoId": "BcT-xlMUZ3s",
    "title": "16.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/BcT-xlMUZ3s/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-16T09:23:59Z"
  },
  {
    "videoId": "UbRtLYm7tZg",
    "title": "10.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/UbRtLYm7tZg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-10T11:23:56Z"
  },
  {
    "videoId": "08NRuCjjUcU",
    "title": "09.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/08NRuCjjUcU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-09T09:48:24Z"
  },
  {
    "videoId": "pLgOA63FXAg",
    "title": "08.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/pLgOA63FXAg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-08T09:42:53Z"
  },
  {
    "videoId": "zN1SzhMbsqU",
    "title": "03.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/zN1SzhMbsqU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-03T10:11:44Z"
  },
  {
    "videoId": "QX0z9HzzZcc",
    "title": "02.11.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/QX0z9HzzZcc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-11-02T09:49:11Z"
  },
  {
    "videoId": "KYAde8SXXcY",
    "title": "27.10.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/KYAde8SXXcY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-10-27T11:36:25Z"
  },
  {
    "videoId": "IW5piENEtKM",
    "title": "26.10.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/IW5piENEtKM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-10-26T09:26:00Z"
  },
  {
    "videoId": "SVIY1SbEdHw",
    "title": "20.10.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/SVIY1SbEdHw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-10-20T09:45:56Z"
  },
  {
    "videoId": "sJ5-nRyvctg",
    "title": "19.10.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/sJ5-nRyvctg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-10-19T08:33:51Z"
  },
  {
    "videoId": "gonxJVs-TV8",
    "title": "13.10.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/gonxJVs-TV8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-10-13T10:46:39Z"
  },
  {
    "videoId": "fv7h-KxB8Ds",
    "title": "06.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/fv7h-KxB8Ds/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-10-06T10:43:47Z"
  },
  {
    "videoId": "kiMIwAWiGQE",
    "title": "29.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/kiMIwAWiGQE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-09-29T09:55:40Z"
  },
  {
    "videoId": "odK9LdS9ArI",
    "title": "28.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/odK9LdS9ArI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-09-28T09:30:09Z"
  },
  {
    "videoId": "4iPXykK6hs8",
    "title": "26.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/4iPXykK6hs8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-09-26T10:51:41Z"
  },
  {
    "videoId": "z6i3kwH2aSY",
    "title": "23.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/z6i3kwH2aSY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-09-23T08:20:01Z"
  },
  {
    "videoId": "aXwkm1aqmHk",
    "title": "22.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/aXwkm1aqmHk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-09-22T09:00:14Z"
  },
  {
    "videoId": "oM3upzYUljM",
    "title": "14.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/oM3upzYUljM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-09-14T08:47:44Z"
  },
  {
    "videoId": "rlkMgMFGqmg",
    "title": "08.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/rlkMgMFGqmg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-09-08T14:00:05Z"
  },
  {
    "videoId": "8MYcTizjxZg",
    "title": "01.09.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/8MYcTizjxZg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-09-01T10:18:28Z"
  },
  {
    "videoId": "NtI999gJ9rU",
    "title": "31.08.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/NtI999gJ9rU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-08-31T11:30:36Z"
  },
  {
    "videoId": "DxuSNOmF2V8",
    "title": "25.08.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/DxuSNOmF2V8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-08-25T12:19:28Z"
  },
  {
    "videoId": "HUxvEsDaGb0",
    "title": "18.08.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/HUxvEsDaGb0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-08-18T11:30:30Z"
  },
  {
    "videoId": "0nlCpU50Bg8",
    "title": "11.08.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/0nlCpU50Bg8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-08-11T13:23:40Z"
  },
  {
    "videoId": "oVz7Z43aJVY",
    "title": "06.08.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/oVz7Z43aJVY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-08-06T09:57:40Z"
  },
  {
    "videoId": "kfZZ7DPGSD0",
    "title": "28.07.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/kfZZ7DPGSD0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-07-28T14:04:13Z"
  },
  {
    "videoId": "em1jTTr9x7A",
    "title": "21.07.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/em1jTTr9x7A/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-07-21T10:58:31Z"
  },
  {
    "videoId": "09d7zpNa6X4",
    "title": "20.07.2024 вечер проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/09d7zpNa6X4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-07-20T19:56:25Z"
  },
  {
    "videoId": "cfUJ7Ci3W1U",
    "title": "20.07.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/cfUJ7Ci3W1U/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-07-20T18:43:42Z"
  },
  {
    "videoId": "DLZhov7S0Lk",
    "title": "14.07.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/DLZhov7S0Lk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-07-14T13:47:20Z"
  },
  {
    "videoId": "OFQdWRIRaFE",
    "title": "07.07.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/OFQdWRIRaFE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-07-07T09:19:02Z"
  },
  {
    "videoId": "jsfgkOv_vMo",
    "title": "30.06.2024 проповед о. Сергей",
    "description": "Неделя след Петдесетница – на Всички светии. Събор на св. славни и всехвални 12 апостоли..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/jsfgkOv_vMo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-06-30T10:14:42Z"
  },
  {
    "videoId": "OVvNEiKRnMQ",
    "title": "29.06.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/OVvNEiKRnMQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-06-29T16:23:08Z"
  },
  {
    "videoId": "WLPA5ZWXY9g",
    "title": "23.06.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/WLPA5ZWXY9g/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-06-23T09:40:25Z"
  },
  {
    "videoId": "TcMAL-41lKU",
    "title": "22.06.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/TcMAL-41lKU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-06-22T16:05:15Z"
  },
  {
    "videoId": "GdpchRxgqrU",
    "title": "16.06.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/GdpchRxgqrU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-06-16T11:48:19Z"
  },
  {
    "videoId": "CowL4g96L-Q",
    "title": "09.06.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/CowL4g96L-Q/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-06-09T12:31:41Z"
  },
  {
    "videoId": "Y--1qX4TcYM",
    "title": "02.06.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Y--1qX4TcYM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-06-02T14:23:03Z"
  },
  {
    "videoId": "yisTN0dfjxo",
    "title": "26.05.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/yisTN0dfjxo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-26T17:02:37Z"
  },
  {
    "videoId": "YTfUzX2RxTg",
    "title": "25.05.2024 проповед о. Сергей",
    "description": "3-то намиране честната глава на св. Йоан Кръстител..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/YTfUzX2RxTg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-25T10:26:48Z"
  },
  {
    "videoId": "YAIohBzOfUs",
    "title": "19.05.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/YAIohBzOfUs/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-19T09:55:02Z"
  },
  {
    "videoId": "nj3afg5q1gM",
    "title": "12.05.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/nj3afg5q1gM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-12T12:18:00Z"
  },
  {
    "videoId": "IokU0mxFHpQ",
    "title": "11.05.2024 проповед о. Сергей",
    "description": "Св. Св. Кирил и Методи..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/IokU0mxFHpQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-11T15:20:42Z"
  },
  {
    "videoId": "sx96tjZcwhI",
    "title": "05.05.2024 проповед о. Сергей",
    "description": "Христос Воскресе..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/sx96tjZcwhI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-05T01:58:41Z"
  },
  {
    "videoId": "Byihrk2demw",
    "title": "03.05.2024 - Опело Христово - о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Byihrk2demw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-04T17:01:12Z"
  },
  {
    "videoId": "d9pXVQSo16k",
    "title": "03.05.2024 вечерна проповед о. Сергей",
    "description": "Опело Христово..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/d9pXVQSo16k/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-04T11:05:34Z"
  },
  {
    "videoId": "r8AsxoIGI1w",
    "title": "04.05.2024 проповед о. Сергей",
    "description": "Велика Събота..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/r8AsxoIGI1w/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-05-04T10:42:40Z"
  },
  {
    "videoId": "0AJxBg_IWVc",
    "title": "28.04.2024 проповед о. Сергей",
    "description": "Вход Господен в Иерусалим ..Цветница...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/0AJxBg_IWVc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-04-28T13:17:21Z"
  },
  {
    "videoId": "tt0xpluqP0w",
    "title": "21.04.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/tt0xpluqP0w/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-04-21T11:19:19Z"
  },
  {
    "videoId": "29IUlbqVpDI",
    "title": "20.04.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/29IUlbqVpDI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-04-20T10:12:41Z"
  },
  {
    "videoId": "uor0BbmwucE",
    "title": "14.04.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/uor0BbmwucE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-04-14T13:44:54Z"
  },
  {
    "videoId": "c69724p3KFo",
    "title": "13.04.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/c69724p3KFo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-04-13T15:11:02Z"
  },
  {
    "videoId": "vi1msVMP5qU",
    "title": "07.04.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/vi1msVMP5qU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-04-07T12:45:05Z"
  },
  {
    "videoId": "lsdHy872J84",
    "title": "06.04.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/lsdHy872J84/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-04-06T17:56:17Z"
  },
  {
    "videoId": "xcWkYOVXf6c",
    "title": "31.03.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/xcWkYOVXf6c/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-03-31T10:19:51Z"
  },
  {
    "videoId": "tVLE0flHDHc",
    "title": "30.03.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/tVLE0flHDHc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-03-30T18:51:59Z"
  },
  {
    "videoId": "s3zThNQrie8",
    "title": "24. 03.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/s3zThNQrie8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-03-24T11:19:24Z"
  },
  {
    "videoId": "pCsgqRmre7Q",
    "title": "23.03. 2024 проповед о. Сергей",
    "description": "Тодорова събота. Св. свщмчк Никон. Св. прпмчк Лука Одрински..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/pCsgqRmre7Q/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-03-23T10:10:09Z"
  },
  {
    "videoId": "ph1NhnAjzD0",
    "title": "17.03.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/ph1NhnAjzD0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-03-17T10:57:54Z"
  },
  {
    "videoId": "R-sF45pbgkY",
    "title": "10.03.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/R-sF45pbgkY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-03-10T10:58:48Z"
  },
  {
    "videoId": "RtfX50RotV8",
    "title": "09.03.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/RtfX50RotV8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-03-09T12:37:23Z"
  },
  {
    "videoId": "epM6UQtwphE",
    "title": "25.02.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/epM6UQtwphE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-02-25T11:47:48Z"
  },
  {
    "videoId": "bRfcJWimXuQ",
    "title": "18.02.2024 проповед о. Сергей",
    "description": "https://xn------6cdbbgfmkcadb2bm5ed1abaeiyjfm4am1j.xn--90ae/about.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/bRfcJWimXuQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-02-18T11:23:16Z"
  },
  {
    "videoId": "-C2z5FJ0g5s",
    "title": "11.02. 2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/-C2z5FJ0g5s/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-02-11T11:19:34Z"
  },
  {
    "videoId": "uLhn-gGHXTI",
    "title": "04.02.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/uLhn-gGHXTI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-02-04T10:58:07Z"
  },
  {
    "videoId": "FGK6Xayg0Cg",
    "title": "02.02.2024 проповед о. Сергей",
    "description": "Сретение Господне..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/FGK6Xayg0Cg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-02-02T14:34:14Z"
  },
  {
    "videoId": "tMmKZPCCO-U",
    "title": "21.01.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/tMmKZPCCO-U/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-01-21T13:22:05Z"
  },
  {
    "videoId": "83UfsvONfsk",
    "title": "20.01.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/83UfsvONfsk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-01-20T16:49:22Z"
  },
  {
    "videoId": "EhoinvMDlU0",
    "title": "18.01.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/EhoinvMDlU0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-01-18T14:57:23Z"
  },
  {
    "videoId": "2EXklxICYmE",
    "title": "14. 01.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/2EXklxICYmE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-01-14T11:52:00Z"
  },
  {
    "videoId": "v_X75PJ0BRs",
    "title": "07.01.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/v_X75PJ0BRs/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-01-07T11:32:24Z"
  },
  {
    "videoId": "VWFyRzpROVI",
    "title": "06.01.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/VWFyRzpROVI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-01-06T12:24:58Z"
  },
  {
    "videoId": "adaO4NNakyM",
    "title": "01.01.2024 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/adaO4NNakyM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2024-01-01T11:47:02Z"
  },
  {
    "videoId": "TIsj3XGBR70",
    "title": "31.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/TIsj3XGBR70/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-31T11:10:20Z"
  },
  {
    "videoId": "wnzgO1ugwx8",
    "title": "27.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/wnzgO1ugwx8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-27T12:44:10Z"
  },
  {
    "videoId": "W-8BUpPhbVE",
    "title": "26.12. 2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/W-8BUpPhbVE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-26T10:03:15Z"
  },
  {
    "videoId": "SOiL2waeJY8",
    "title": "25.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/SOiL2waeJY8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-25T11:26:04Z"
  },
  {
    "videoId": "AOIFdmAPFGo",
    "title": "24.12.2023 о. Сергей - вечерня",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/AOIFdmAPFGo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-24T20:15:03Z"
  },
  {
    "videoId": "ol9mD_Lhbgc",
    "title": "24.12.2023 проповед о. Сергей - вечерня",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/ol9mD_Lhbgc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-24T19:23:59Z"
  },
  {
    "videoId": "kmjB9nLos70",
    "title": "24.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/kmjB9nLos70/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-24T11:37:42Z"
  },
  {
    "videoId": "AJKkpOhQPRI",
    "title": "23.12.2023 проповед о. Сергей - вечерня",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/AJKkpOhQPRI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-23T20:13:02Z"
  },
  {
    "videoId": "t1I2I1jek6g",
    "title": "17.12. 2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/t1I2I1jek6g/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-17T10:16:39Z"
  },
  {
    "videoId": "FVfDIkezxVc",
    "title": "10.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/FVfDIkezxVc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-10T10:29:44Z"
  },
  {
    "videoId": "lhAIV5l3jkk",
    "title": "09.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/lhAIV5l3jkk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-09T11:43:58Z"
  },
  {
    "videoId": "uwtfCDfKKnU",
    "title": "05.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/uwtfCDfKKnU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-05T17:13:11Z"
  },
  {
    "videoId": "XGF5TyNlOG4",
    "title": "04.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/XGF5TyNlOG4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-04T14:58:59Z"
  },
  {
    "videoId": "F-LlcLloH4w",
    "title": "02.12.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/F-LlcLloH4w/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-12-02T14:56:40Z"
  },
  {
    "videoId": "xr9HAcD6vSk",
    "title": "30.11.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/xr9HAcD6vSk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-30T11:45:52Z"
  },
  {
    "videoId": "2irvAaL_CwQ",
    "title": "26.11.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/2irvAaL_CwQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-26T11:04:47Z"
  },
  {
    "videoId": "WWvX67K_amw",
    "title": "21.11. 2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/WWvX67K_amw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-21T10:47:47Z"
  },
  {
    "videoId": "PfPn2AGaKBg",
    "title": "19.11.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/PfPn2AGaKBg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-19T16:51:39Z"
  },
  {
    "videoId": "kLxUkChveC4",
    "title": "12. 11.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/kLxUkChveC4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-12T12:26:47Z"
  },
  {
    "videoId": "fPE2rGdmp7Q",
    "title": "11.11.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/fPE2rGdmp7Q/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-11T11:17:32Z"
  },
  {
    "videoId": "B8-dl55qo5w",
    "title": "08.11.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/B8-dl55qo5w/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-08T11:38:25Z"
  },
  {
    "videoId": "_YXVyKopWmU",
    "title": "05.11.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/_YXVyKopWmU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-05T11:12:23Z"
  },
  {
    "videoId": "NDzUrJiIwbc",
    "title": "04.11.2023 панихида задушница- о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/NDzUrJiIwbc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-04T12:47:53Z"
  },
  {
    "videoId": "MPToNbmDIX0",
    "title": "04.11.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/MPToNbmDIX0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-11-04T12:21:06Z"
  },
  {
    "videoId": "qYfExQifNc8",
    "title": "29.10.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/qYfExQifNc8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-10-29T11:04:13Z"
  },
  {
    "videoId": "cRbL_vZWPrw",
    "title": "22.10.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/cRbL_vZWPrw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-10-22T10:10:03Z"
  },
  {
    "videoId": "RKP6yxdJXz4",
    "title": "15.10.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/RKP6yxdJXz4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-10-15T15:26:17Z"
  },
  {
    "videoId": "h83V00kXfso",
    "title": "08.10.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/h83V00kXfso/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-10-08T09:49:05Z"
  },
  {
    "videoId": "S93u0ejVzgc",
    "title": "01.10.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/S93u0ejVzgc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-10-01T10:12:37Z"
  },
  {
    "videoId": "bkS2LAybDiQ",
    "title": "24.09.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/bkS2LAybDiQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-09-24T11:26:54Z"
  },
  {
    "videoId": "3zvMLPQ7nCQ",
    "title": "03.09.2023 проповед о. Сергей",
    "description": "13 Неделя след Петдесетница. Св. свщмчк Антим, еп. Никомидийски. Преп. Теоктист. Св. Фива дякониса. Св. мчца ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/3zvMLPQ7nCQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-09-03T08:59:05Z"
  },
  {
    "videoId": "1LOuwk8489U",
    "title": "01.09.2023 проповед о. Сергей",
    "description": "Начало на Църковната нова година. Преп. Симеон Стълпник. Св. Марта. Св. мчци Айтал и Амун дякони. Правед. Иисус ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/1LOuwk8489U/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-09-01T12:30:52Z"
  },
  {
    "videoId": "s9ub0oanMDg",
    "title": "31.08.2023 проповед о. Сергей",
    "description": "Полагане честния пояс на Пресвета Богородица. Св. свщмчк Киприан, еп. Картагенски. Св. Генадий, патриарх ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/s9ub0oanMDg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-31T14:35:37Z"
  },
  {
    "videoId": "2sqbrqY_bpo",
    "title": "27.08.2023 проповед о. Сергей",
    "description": "Простете за прекъсването.. Падна ми телефона докато снимам... 12 Неделя след Петдесетница. Преп. Пимен Велики. Св.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/2sqbrqY_bpo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-27T17:33:31Z"
  },
  {
    "videoId": "Ps-BZ0KwRN8",
    "title": "20.08.2023 проповед о. Сергей",
    "description": "11 Неделя след Петдесетница. Неделя след Успение Богородично. Св. прор. Самуил. Св. 37 мчци Пловдивски..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Ps-BZ0KwRN8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-20T08:40:47Z"
  },
  {
    "videoId": "5r7Wg007RwI",
    "title": "18.08.2023 проповед о. Сергей",
    "description": "Успение на преп. Йоан Рилски Чудотворец. Св. мчци Флор и Лавър..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/5r7Wg007RwI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-18T10:26:10Z"
  },
  {
    "videoId": "wMxr_RLUeMc",
    "title": "17.08.2023 проповед о. Сергей - вечерня",
    "description": "Успение на преп. Йоан Рилски Чудотворец. Св. мчци Флор и Лавър.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/wMxr_RLUeMc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-17T18:02:35Z"
  },
  {
    "videoId": "-TgpUn_ojoU",
    "title": "16.08.2023 проповед о. Сергей",
    "description": "Пренасяне на неръкотворния образ на Господ Иисус Христос. Св. мчк Диомид лекар. Преп. Йоаким Осоговски. Преп.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/-TgpUn_ojoU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-16T09:43:13Z"
  },
  {
    "videoId": "Ahto9jG5ZmM",
    "title": "15.08.2023 проповед о. Сергей - вечерня",
    "description": "Пренасяне на неръкотворния образ на Господ Иисус Христос. Св. мчк Диомид лекар. Преп. Йоаким Осоговски. Преп.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Ahto9jG5ZmM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-15T18:33:09Z"
  },
  {
    "videoId": "OAtuuOyHHHY",
    "title": "15.08.2023 проповед о. Сергей",
    "description": "УСПЕНИЕ НА ПРЕСВЕТА БОГОРОДИЦА...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/OAtuuOyHHHY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-15T09:11:21Z"
  },
  {
    "videoId": "Sp6h0xYCduk",
    "title": "14.08.2023 о. Сергей - вечерня с опело Богородично",
    "description": "Опело на Пресвета Богородица..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Sp6h0xYCduk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-14T20:47:51Z"
  },
  {
    "videoId": "o9-msIQlxyQ",
    "title": "14.08.2023 проповед о. Сергей - вечерня",
    "description": "Опело на Пресвета Богородица..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/o9-msIQlxyQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-14T20:07:53Z"
  },
  {
    "videoId": "yaBt-oqfhyU",
    "title": "13.08.2023 проповед о. Сергей",
    "description": "10 Неделя след Петдесетница. Преп. Максим Изповедник. Св. Тихон, еп. Задонски (Отдание на Преображение Господне)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/yaBt-oqfhyU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-08-13T14:05:57Z"
  },
  {
    "videoId": "qx7amzEGF24",
    "title": "30.07.2023 проповед о. Сергей",
    "description": "8 Неделя след Петдесетница. Св. апли от 70-те Сила, Силуан и другарите им..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/qx7amzEGF24/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-07-30T09:29:49Z"
  },
  {
    "videoId": "ZUadh05CF3k",
    "title": "23.07.2023 проповед о. Сергей",
    "description": "7 Неделя след Петдесетница. Св. мчци Трофим, Теофил и другарите им. Св. свщмчк Аполинарий, еп. Равенийски..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/ZUadh05CF3k/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-07-23T09:15:51Z"
  },
  {
    "videoId": "Esy5V8fn2qg",
    "title": "16.07.2023 проповед о. Сергей",
    "description": "6 Неделя след Петдесетница на св. Отци от 6-те Вселенски събори. Св. свщмчк Атиноген, еп. Севастийски и 10-те му ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Esy5V8fn2qg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-07-16T09:37:29Z"
  },
  {
    "videoId": "FcI5qXNqPf8",
    "title": "15.07.2023 проповед о. Сергей",
    "description": "Св. мчци Кирик и Юлита. Св. равноап. княз Владимир..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/FcI5qXNqPf8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-07-15T10:03:15Z"
  },
  {
    "videoId": "ft9qpULqgJo",
    "title": "12.07.2023 проповед о. Сергей",
    "description": "Преп. Паисий Светогорец. Св. мчци Прокъл и Иларий. Праведна Вероника..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/ft9qpULqgJo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-07-12T11:47:37Z"
  },
  {
    "videoId": "Sv3HdZgj8OI",
    "title": "11.07.2023 проповед о. Сергей",
    "description": "Св. вмчца Евфимия Всехвална. Св. равноап. княгиня Олга. Преп. Никодим Албански..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Sv3HdZgj8OI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-07-11T12:36:55Z"
  },
  {
    "videoId": "TL9T3Mdq6sc",
    "title": "09.07.2023 проповед о. Сергей",
    "description": "5 Неделя след Петдесетница. Св. свщмчк Панкратий, еп. Тавроменийски..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/TL9T3Mdq6sc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-07-09T09:48:07Z"
  },
  {
    "videoId": "cnkuAueKJmM",
    "title": "01.07.2023 проповед о. Сергей",
    "description": "Св. безсребърници Козма и Дамян в Рим. Възвръщане честните мощи на преп. Йоан Рилски чудотворец. Св. преподобни ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/cnkuAueKJmM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-07-01T10:22:06Z"
  },
  {
    "videoId": "bDPp1c4MYdQ",
    "title": "30.06.2023 проповед о. Сергей",
    "description": "Събор на свв. славни и всехвални Дванадесет апостоли..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/bDPp1c4MYdQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-30T09:21:26Z"
  },
  {
    "videoId": "eR1clQo5aRA",
    "title": "29 юни 2023 проповед о. Сергей",
    "description": "Св. първовърховни апли Петър и Павел (Петровден)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/eR1clQo5aRA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-29T10:40:18Z"
  },
  {
    "videoId": "MSvzFntVbuo",
    "title": "25.06.2023 проповед о. Сергей",
    "description": "3 Неделя след Петдесетница. Събор на св. Доростолски мъченици. * Св. мчк Прокопий Варненски. Св. прпмчца Феврония.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/MSvzFntVbuo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-25T09:25:05Z"
  },
  {
    "videoId": "zocQlCjw7ek",
    "title": "24.06.2023 проповед о. Сергей",
    "description": "Рождение на св. Йоан Кръстител (Еньовден) Св. Никита, еп. Ремесиански..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/zocQlCjw7ek/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-24T18:24:38Z"
  },
  {
    "videoId": "SWxR7WGM6PE",
    "title": "23.06.2023 проповед о. Сергей - вечерня",
    "description": "Рождение на св. Йоан Кръстител (Еньовден) Св. Никита, еп. Ремесиански..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/SWxR7WGM6PE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-23T22:12:35Z"
  },
  {
    "videoId": "rE5xM2Ucmac",
    "title": "18.06.2023 проповед о. Сергей",
    "description": "2 Неделя след Петдесетница – на Всички български светии. Св. мчци Леонтий, Ипатий и Теодул..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/rE5xM2Ucmac/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-18T08:47:35Z"
  },
  {
    "videoId": "eVoI5O3CfGU",
    "title": "11.06.2023 проповед о. Сергей",
    "description": "1 Неделя след Петдесетница – на Всички светии. Св. апли Вартоломей и Варнава. Св. Богородица “Достойно есть”.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/eVoI5O3CfGU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-11T09:31:56Z"
  },
  {
    "videoId": "CZpa7jmkeaY",
    "title": "04.06.2023 проповед о. Сергей",
    "description": "8 Неделя след Пасха Петдесетница (Всичко на празника)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/CZpa7jmkeaY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-04T11:44:18Z"
  },
  {
    "videoId": "ZYRBC6NmuZc",
    "title": "03.06.2023 проповед о. Сергей - вечерня",
    "description": "8 Неделя след Пасха Петдесетница (Всичко на празника)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/ZYRBC6NmuZc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-03T19:12:17Z"
  },
  {
    "videoId": "Pcxz8JU7adw",
    "title": "25.05.2023 проповед о. Сергей",
    "description": "Възнесение Господне. (Спасовден), 3-то намиране честната глава на св. Йоан Кръстител (службата на св. Йоан се ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Pcxz8JU7adw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-03T12:24:43Z"
  },
  {
    "videoId": "scQC6OhvIIw",
    "title": "03.06.2023 панихида - о. Сергей",
    "description": "Панихида на черешова задушница..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/scQC6OhvIIw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-03T12:07:45Z"
  },
  {
    "videoId": "KdNi2vuV5c4",
    "title": "03.06.2023 проповед о. Сергей",
    "description": "Св. мчци Лукилиан, Клавдий, Ипатий, Павел, Дионисий и мчца Павла девица. Св. Маркелин. Преп. Атанасий Чудотворец ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/KdNi2vuV5c4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-06-03T11:25:36Z"
  },
  {
    "videoId": "YztcBlk4wKw",
    "title": "28.05.2023 проповед о. Сергей",
    "description": "7 Неделя след Пасха – на св. Отци от Първия вселенски събор. Преп. Никита, еп. Халкидонски. Преп. Софроний ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/YztcBlk4wKw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-28T08:57:29Z"
  },
  {
    "videoId": "NIqi4aiMuJQ",
    "title": "21.05.2023 проповед о. Сергей",
    "description": "6 Неделя след Пасха – на Слепия. Св. велики царе равноапостолни Константин и Елена..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/NIqi4aiMuJQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-21T11:08:57Z"
  },
  {
    "videoId": "C7xwHKTRlxY",
    "title": "14.05.2023 проповед о. Сергей",
    "description": "5 Неделя след Пасха – на Самарянката. Св. Исидор. Св. Райко (Йоан) Шуменски..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/C7xwHKTRlxY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-14T15:37:48Z"
  },
  {
    "videoId": "v3AVu_cpAec",
    "title": "13.05.2023 проповед о. Сергей - вечерня",
    "description": "5 Неделя след Пасха – на Самарянката. Св. Исидор. Св. Райко (Йоан) Шуменски..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/v3AVu_cpAec/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-13T17:46:08Z"
  },
  {
    "videoId": "FTbENO-Lbjw",
    "title": "11.05.2023 проповед о. Сергей",
    "description": "Св. равноапостолни Кирил и Методий. Св. свщмчк Мокий..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/FTbENO-Lbjw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-11T10:05:24Z"
  },
  {
    "videoId": "df3iFcnz2ug",
    "title": "10.05.2023 проповед о. Сергей - вечерня",
    "description": "Св. равноапостолни Кирил и Методий. Св. свщмчк Мокий..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/df3iFcnz2ug/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-10T20:54:25Z"
  },
  {
    "videoId": "u2zW44kY2_k",
    "title": "09.05.2023 проповед о. Сергей",
    "description": "Пренасяне мощите на св. Николай Мирликийски чудотворец. Св. Новоселски мъченици. Св. прор. Исаия. Св. мчк ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/u2zW44kY2_k/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-09T11:16:12Z"
  },
  {
    "videoId": "ZIfSgI-zGpI",
    "title": "08.05.2023 проповед о. Сергей - вечерня",
    "description": "Пренасяне мощите на св. Николай Мирликийски чудотворец. Св. Новоселски мъченици. Св. прор. Исаия. Св. мчк ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/ZIfSgI-zGpI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-08T19:27:14Z"
  },
  {
    "videoId": "4Oj9fAVtn3I",
    "title": "08.05.2023 проповед о. Сергей",
    "description": "Св. ап. и ев. Йоан Богослов. Преп. Арсений Велики..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/4Oj9fAVtn3I/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-08T12:52:30Z"
  },
  {
    "videoId": "Jd0NgYq9jhM",
    "title": "07.05.2023 проповед о. Сергей - вечерня",
    "description": "Св. ап. и ев. Йоан Богослов. Преп. Арсений Велики..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Jd0NgYq9jhM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-07T18:08:31Z"
  },
  {
    "videoId": "bcYg3Iipigs",
    "title": "07.05.2023 проповед о. Сергей",
    "description": "4 Неделя след Пасха – на Разслабления. Св. мчк Акакий..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/bcYg3Iipigs/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-07T09:06:08Z"
  },
  {
    "videoId": "MyQTEaD2NCc",
    "title": "06.05.2023 проповед о. Сергей",
    "description": "Св. вмчк Георги Победоносец. Св. прав. Иов Многострадални (Гергьовден) (Отдание на Неделя на Мироносиците)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/MyQTEaD2NCc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-06T10:19:31Z"
  },
  {
    "videoId": "EDFikq96FAM",
    "title": "05.05.2023 проповед о. Сергей - вечерня",
    "description": "Св. вмчк Георги Победоносец. Св. прав. Иов Многострадални (Гергьовден) (Отдание на Неделя на Мироносиците)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/EDFikq96FAM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-05T17:03:31Z"
  },
  {
    "videoId": "3lTMOZ8-x7I",
    "title": "02.05.2023 проповед о. Сергей",
    "description": "Св. цар Борис-Михаил. Св. Атанасий Велики..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/3lTMOZ8-x7I/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-05-02T20:40:10Z"
  },
  {
    "videoId": "XUeVaJG4y_o",
    "title": "30.04.2023 проповед о. Сергей",
    "description": "3 Неделя след Пасха – на св. Мироносици. Св. ап. Яков Зеведеев, Св. Донат, еп. Еврийски..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/XUeVaJG4y_o/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-30T10:23:16Z"
  },
  {
    "videoId": "Juw1CS4Ir2g",
    "title": "23.04.2023 проповед о. Сергей",
    "description": "2 Неделя след Пасха – Томина. Св. мчца Александра. Св. мчк Лазар Български..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Juw1CS4Ir2g/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-23T08:52:33Z"
  },
  {
    "videoId": "K-nF_e-YqQs",
    "title": "21.04.2023 проповед о. Сергей",
    "description": "Светли петък. Живоприемни източник. Св. свщмчци Януарий и Теодор в Пергия..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/K-nF_e-YqQs/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-21T10:07:37Z"
  },
  {
    "videoId": "iYGHTBWSi2o",
    "title": "20.04.2023 проповед о. Сергей",
    "description": "Светли четвъртък. Преп. Теодор Трихина. Св. Николай Жички (Велемирович)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/iYGHTBWSi2o/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-20T07:54:46Z"
  },
  {
    "videoId": "7IqELqyoeAk",
    "title": "18.04.2023 проповед о. Сергей",
    "description": "Възкресение Христово. Преп. Йоан. Св. мчк Виктор..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/7IqELqyoeAk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-18T08:25:06Z"
  },
  {
    "videoId": "JwDNAsFSps4",
    "title": "17.04.2023 проповед о. Сергей",
    "description": "Възкресение Христово. Преп. Симеон Персидски. Преп. Акакий, еп. Мелитински..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/JwDNAsFSps4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-17T07:27:38Z"
  },
  {
    "videoId": "u0rU3Cdh0Tw",
    "title": "15.04.2023 проповед о. Сергей",
    "description": "Велика събота. (сутринта Вечерня със св. Василиева литургия)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/u0rU3Cdh0Tw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-15T10:08:15Z"
  },
  {
    "videoId": "X4OmEmt5ETQ",
    "title": "14.04.2023 Опело Христово - о. Сергей",
    "description": "Велики петък. Св. Мартин, папа Римски (Цар. час., вечерня с изнасяне на св. Плащаница) (Вечерта Опело Христово)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/X4OmEmt5ETQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-14T19:36:46Z"
  },
  {
    "videoId": "l22jAL2BZn0",
    "title": "14.04.2023 проповед о. Сергей - вечерня",
    "description": "Проповед след Опело Христово..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/l22jAL2BZn0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-14T19:14:42Z"
  },
  {
    "videoId": "qWtdEbKfCfU",
    "title": "14.04.2023 проповед о. Сергей",
    "description": "Велики петък. Св. Мартин, папа Римски (Цар. час., вечерня с изнасяне на св. Плащаница) (Вечерта Опело Христово)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/qWtdEbKfCfU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-14T10:32:20Z"
  },
  {
    "videoId": "jYGdBFlO5wc",
    "title": "13.04.2023 проповед о. Сергей - вечерня",
    "description": "Велики четвъртък. Св. свщмчк Артемон, презв. Лаодикийски (Утреня, Общ Маслосвет, св. Василиева литургия) (Вечерта ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/jYGdBFlO5wc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-13T20:44:17Z"
  },
  {
    "videoId": "Q-Zc4eQhALs",
    "title": "09.04.2023 проповед о. Сергей",
    "description": "6 Неделя на Великия пост – Връбница – Цветница. Св. мчк Евпсихий (Всичко на празника) (Злат. лит.) (Вечерта ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Q-Zc4eQhALs/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-09T09:28:04Z"
  },
  {
    "videoId": "tAVkxuqUKx0",
    "title": "08.04.2023 проповед о. Сергей",
    "description": "Лазаре, излез!",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/tAVkxuqUKx0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-08T08:05:38Z"
  },
  {
    "videoId": "KYgcBiEoYRc",
    "title": "07.04.2023 проповед о. Сергей",
    "description": "Свети Преподобни Изповедник Георги Митилински..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/KYgcBiEoYRc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-07T09:19:36Z"
  },
  {
    "videoId": "esl-79zbhVU",
    "title": "06.04.2023 проповед о. Сергей",
    "description": "Успение на св. Методий Славянобългарски..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/esl-79zbhVU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-06T11:50:17Z"
  },
  {
    "videoId": "4Hr63zV2QTY",
    "title": "05.04.2023 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/4Hr63zV2QTY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-04-05T09:01:28Z"
  },
  {
    "videoId": "Il3GQeDpCHM",
    "title": "19.03.2023 проповед о. Сергей",
    "description": "Кръстопоклона неделя...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Il3GQeDpCHM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-03-19T10:50:13Z"
  },
  {
    "videoId": "Jgs1hg_O6Eg",
    "title": "12.03.2023 проповед о. Сергей",
    "description": "Свети Григорий Палама..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Jgs1hg_O6Eg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-03-12T09:36:35Z"
  },
  {
    "videoId": "8f_Bp9x9AFo",
    "title": "11.03.2023 проповед о. Сергей",
    "description": "Свети Софроний Врачански...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/8f_Bp9x9AFo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-03-11T09:50:26Z"
  },
  {
    "videoId": "kY-nzKuy4XE",
    "title": "05.03.2023 проповед о. Сергей",
    "description": "Неделя православна..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/kY-nzKuy4XE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-03-05T09:46:29Z"
  },
  {
    "videoId": "3IUu5fcT6wc",
    "title": "04.03.2023 проповед о. Сергей",
    "description": "Тодоров ден..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/3IUu5fcT6wc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-03-04T09:14:12Z"
  },
  {
    "videoId": "bx4BxruqQr0",
    "title": "26.02.2023 проповед о. Сергей",
    "description": "Прошка...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/bx4BxruqQr0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-02-26T10:11:48Z"
  },
  {
    "videoId": "x-rRLIalvCc",
    "title": "14.02.2023 проповед о. Сергей",
    "description": "Успение на Свети Константин Кирил Философ просветител български..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/x-rRLIalvCc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-02-14T11:08:42Z"
  },
  {
    "videoId": "pcGB60HocFk",
    "title": "12.02.2023 проповед о. Сергей",
    "description": "Неделя на блудния син..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/pcGB60HocFk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-02-12T10:26:21Z"
  },
  {
    "videoId": "729yR_xj97E",
    "title": "11.02.2023 проповед о. Сергей",
    "description": "Свети Власий и Свети Георги Софийски Нови..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/729yR_xj97E/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-02-11T09:41:50Z"
  },
  {
    "videoId": "8zu4MB2XLAk",
    "title": "05.02.2023 проповед о. Сергей",
    "description": "На митаря и фарисея...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/8zu4MB2XLAk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-02-05T10:22:27Z"
  },
  {
    "videoId": "aFzs0deU3Zc",
    "title": "29.01.2023 проповед о. Сергей",
    "description": "Спасение на Апостол Закхея (от 70-те)..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/aFzs0deU3Zc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-29T11:47:38Z"
  },
  {
    "videoId": "wpm00a86u10",
    "title": "27.01.2023 проповед о. Сергей",
    "description": "Пренасяне мощите на Свети Иоан Златоуст..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/wpm00a86u10/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-27T10:34:36Z"
  },
  {
    "videoId": "32aMw9regpo",
    "title": "22.01.2023 проповед о. Сергей",
    "description": "Изцеление на иерихонският слепец...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/32aMw9regpo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-22T09:30:19Z"
  },
  {
    "videoId": "uOOkYX6QZlk",
    "title": "21.1.2023 проповед о. Сергей",
    "description": "Свети Максим Изповедник, Свети Неофит...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/uOOkYX6QZlk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-21T09:26:32Z"
  },
  {
    "videoId": "rH8SjxGP4bY",
    "title": "20.01.2023 проповед о. Сергей",
    "description": "Свети Патриарх Евтимий..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/rH8SjxGP4bY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-20T09:49:43Z"
  },
  {
    "videoId": "-MsYMxH-sc8",
    "title": "18.01.2023 проповед о. Сергей",
    "description": "Свети Атанасий Велики..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/-MsYMxH-sc8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-18T10:55:56Z"
  },
  {
    "videoId": "CRpzMF1Xjgw",
    "title": "17.01.2023 проповед о. Сергей",
    "description": "Свети Антоний Велики...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/CRpzMF1Xjgw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-17T11:17:50Z"
  },
  {
    "videoId": "u3WVRf3PoGQ",
    "title": "15.01.2023 проповед о. Сергей",
    "description": "Десетте прокажени..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/u3WVRf3PoGQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-15T10:20:34Z"
  },
  {
    "videoId": "Dh4eyiMKHaM",
    "title": "08.01.2023 проповед о. Сергей",
    "description": "Свети Георги Хозевит..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Dh4eyiMKHaM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-08T09:31:43Z"
  },
  {
    "videoId": "9n0cy8zjGbo",
    "title": "07.01.2023 проповед о. Сергей",
    "description": "Свети Иоан Кръстител. Иванов ден...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/9n0cy8zjGbo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-07T09:35:49Z"
  },
  {
    "videoId": "dkqDxCdmgaI",
    "title": "01.01.2023 проповед о. Сергей",
    "description": "Обрезание Господне. Двери Василий Велики...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/dkqDxCdmgaI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2023-01-01T11:01:49Z"
  },
  {
    "videoId": "MGysZg3jBAs",
    "title": "27.12.2022 проповед о. Сергей",
    "description": "Свети първомъченик и архидякон Стефан...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/MGysZg3jBAs/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-12-27T09:30:43Z"
  },
  {
    "videoId": "FhzqpUCrIak",
    "title": "26.12.2022 проповед о. Сергей",
    "description": "Събор на Пресвета Богородица.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/FhzqpUCrIak/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-12-26T09:03:33Z"
  },
  {
    "videoId": "7lqZ9gvDoJ8",
    "title": "25.12.2022 проповед о. Сергей",
    "description": "Рождество Христово.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/7lqZ9gvDoJ8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-12-25T09:51:55Z"
  },
  {
    "videoId": "zQl6scn9u7E",
    "title": "18.12.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/zQl6scn9u7E/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-12-18T09:41:11Z"
  },
  {
    "videoId": "vo9CxRoGCp4",
    "title": "13.12.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/vo9CxRoGCp4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-12-13T09:59:08Z"
  },
  {
    "videoId": "apBnfyOsxS4",
    "title": "12.12.2022 проповед о. Сергей",
    "description": "Свети Спиридон епископ Тримитунски Чудотворец..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/apBnfyOsxS4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-12-12T11:33:48Z"
  },
  {
    "videoId": "1fNFDA8Pl9Y",
    "title": "11.12.2022 г. проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/1fNFDA8Pl9Y/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-12-11T10:45:48Z"
  },
  {
    "videoId": "gwQEisW-FQw",
    "title": "04.12.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/gwQEisW-FQw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-12-04T16:04:00Z"
  },
  {
    "videoId": "gmMKjEotjq4",
    "title": "21.11.2022 проповед о. Сергей",
    "description": "Въведение Богородично.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/gmMKjEotjq4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-11-21T10:04:15Z"
  },
  {
    "videoId": "4szb3Vv__Hg",
    "title": "20.11.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/4szb3Vv__Hg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-11-20T10:00:12Z"
  },
  {
    "videoId": "y1KeFeMWnmI",
    "title": "16.11.2022 проповед о. Сергей",
    "description": "Свети Апостол и Евангелист Матей..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/y1KeFeMWnmI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-11-16T10:16:26Z"
  },
  {
    "videoId": "qU3MgtWN0os",
    "title": "13.11.2022 проповед о. Сергей",
    "description": "Свети Йоан Златоуст..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/qU3MgtWN0os/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-11-13T09:47:03Z"
  },
  {
    "videoId": "lqYBtAhHX3k",
    "title": "08.11.2022 проповед о. Сергей",
    "description": "Събор на Свети Архангел Михаил..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/lqYBtAhHX3k/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-11-08T10:05:15Z"
  },
  {
    "videoId": "_-3rTLIrtl0",
    "title": "06.11.2022 проповед о. Сергей",
    "description": "Св. Павел, архиеп. Константинополски. Св. Клавдия...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/_-3rTLIrtl0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-11-06T10:38:36Z"
  },
  {
    "videoId": "bkuLZ3oxwpg",
    "title": "05.11.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/bkuLZ3oxwpg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-11-05T10:15:00Z"
  },
  {
    "videoId": "nHIgDN4xtmk",
    "title": "26.10.2022 проповед о. Сергей",
    "description": "Свети Вмчк. Димитър Мироточиви.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/nHIgDN4xtmk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-10-26T09:20:16Z"
  },
  {
    "videoId": "92GUoLsUdTQ",
    "title": "24.10.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/92GUoLsUdTQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-10-24T10:29:29Z"
  },
  {
    "videoId": "WOdGCPjfluc",
    "title": "23.10.2022 проповед о. Сергей",
    "description": "Изцеление на Гадаринския бесноват..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/WOdGCPjfluc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-10-23T15:41:14Z"
  },
  {
    "videoId": "0FlfugivPAY",
    "title": "16.10.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/0FlfugivPAY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-10-16T09:09:54Z"
  },
  {
    "videoId": "o1AXKTzNfEM",
    "title": "10.10.2022 проповед о. Сергей",
    "description": "Свети 26 Преподобномъченици Зографски..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/o1AXKTzNfEM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-10-10T09:58:51Z"
  },
  {
    "videoId": "n8A9qARyykU",
    "title": "09.10.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/n8A9qARyykU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-10-09T08:33:43Z"
  },
  {
    "videoId": "vd5wRn2_n_A",
    "title": "02.10.2022 проповед о. Сергей",
    "description": "Св. Киприян и Св. Юстина..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/vd5wRn2_n_A/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-10-02T08:43:30Z"
  },
  {
    "videoId": "tDNyfJRllgk",
    "title": "01.10.2022 проповед о. Сергей",
    "description": "Покров Богородичен..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/tDNyfJRllgk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-10-01T08:12:46Z"
  },
  {
    "videoId": "-6HMKYNhm0w",
    "title": "18.09.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/-6HMKYNhm0w/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-09-18T08:36:37Z"
  },
  {
    "videoId": "1m7OSDfkq0E",
    "title": "11.09.2022 проповед о. Сергей",
    "description": "Св. преподобна Теодора Александрийска. Св. преподобни Силуан Атонски.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/1m7OSDfkq0E/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-09-11T10:49:39Z"
  },
  {
    "videoId": "uiA5AtgKSd0",
    "title": "28.08.2022 проповед о. Сергей",
    "description": "Рабе лукавий, аз ти простих целия оня дълг, защото ми се примоли ; не трябваше ли и ти да се смилиш над другаря си, ...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/uiA5AtgKSd0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-08-28T12:20:30Z"
  },
  {
    "videoId": "hN6u_Ozbc58",
    "title": "21.08.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/hN6u_Ozbc58/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-08-21T11:17:59Z"
  },
  {
    "videoId": "BQ-xvqCnJT0",
    "title": "14.08.2022 вечерна проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/BQ-xvqCnJT0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-08-14T19:32:29Z"
  },
  {
    "videoId": "01OR6wtONko",
    "title": "14.08.2022 проповед о. Сергей",
    "description": "Предпразненство на успение Богородично.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/01OR6wtONko/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-08-14T11:11:00Z"
  },
  {
    "videoId": "q_Sri-Mx39s",
    "title": "07.08.2022 проповед о. Сергей",
    "description": "Чудото с 5 хляба и две риби..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/q_Sri-Mx39s/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-08-07T09:57:43Z"
  },
  {
    "videoId": "tTm4UKKNCc4",
    "title": "06.08.2022 проповед о. Сергей",
    "description": "Преображение Господне..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/tTm4UKKNCc4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-08-06T14:29:01Z"
  },
  {
    "videoId": "1_5WdzlOpk0",
    "title": "31.07.2022 проповед о. Сергей",
    "description": "Спаси ни Иисусе, Сине Давидов...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/1_5WdzlOpk0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-07-31T09:03:12Z"
  },
  {
    "videoId": "KP9Va2-Fsg8",
    "title": "24.07.2022 проповед о. Сергей",
    "description": "Света Христина..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/KP9Va2-Fsg8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-07-24T10:29:20Z"
  },
  {
    "videoId": "q9yeWFxYrIY",
    "title": "17.07.2022 проповед о. Сергей",
    "description": "Св. Великомученице Марина и всички Светии просияли на първи до шести вселенски събора..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/q9yeWFxYrIY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-07-17T12:34:58Z"
  },
  {
    "videoId": "vzv8YnKlZC8",
    "title": "10.07.2022 проповед о. Сергей",
    "description": "И рече Иисус на стотника: иди си и, както си повярвал, нека ти бъде..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/vzv8YnKlZC8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-07-10T11:28:29Z"
  },
  {
    "videoId": "U6QM77eJov8",
    "title": "03.07.2022 проповед о. Сергей",
    "description": "Св. мчк Иакинт. Събор на св. Доростолски мъченици..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/U6QM77eJov8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-07-03T10:07:11Z"
  },
  {
    "videoId": "Sjx1ng-TChA",
    "title": "26.06.2022 проповед о. Сергей",
    "description": "Неделя на всички български Светии..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Sjx1ng-TChA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-06-26T09:59:25Z"
  },
  {
    "videoId": "xtoi-FBWDfI",
    "title": "25.06.2022 проповед о. Сергей",
    "description": "Рожден ден на о. Сергей..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/xtoi-FBWDfI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-06-25T13:09:21Z"
  },
  {
    "videoId": "JbKQNbLwhi4",
    "title": "19.06.2022 проповед о. Сергей",
    "description": "Неделя на всички Светии..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/JbKQNbLwhi4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-06-19T19:48:31Z"
  },
  {
    "videoId": "ng-qXjIPFPk",
    "title": "12.06.2022 проповед о. Сергей",
    "description": "Петдесетница..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/ng-qXjIPFPk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-06-12T12:49:50Z"
  },
  {
    "videoId": "8emJi2_Qr6I",
    "title": "11.06.2022 проповед о. Сергей",
    "description": "Черешова задушница..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/8emJi2_Qr6I/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-06-11T11:52:20Z"
  },
  {
    "videoId": "D8TS1p0msmY",
    "title": "29.05.2022 проповед о. Сергей",
    "description": "Шеста неделя след Пасха – на слепия..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/D8TS1p0msmY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-29T10:58:28Z"
  },
  {
    "videoId": "oKA2qA7ymFQ",
    "title": "21.05.2022 проповед о. Сергей",
    "description": "Светите равноапостоли Царе Константин и Елена..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/oKA2qA7ymFQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-21T13:13:02Z"
  },
  {
    "videoId": "hic-30KfEmM",
    "title": "08.05.2022 проповед о. Сергей +",
    "description": "Трета неделя след Възкресение Христово. Неделя на Светите Мироносици..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/hic-30KfEmM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-15T11:27:28Z"
  },
  {
    "videoId": "w0kFGpCnYNg",
    "title": "15.05.2022 проповед о. Сергей",
    "description": "ето, ти оздравя; недей греши вече, за да те не сполети нещо по-лошо...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/w0kFGpCnYNg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-15T11:26:50Z"
  },
  {
    "videoId": "V5aOy8oDw5k",
    "title": "06.05.2022 проповед о. Сергей +",
    "description": "Свети Великомъченик Георги Победоносец и Чудотворец..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/V5aOy8oDw5k/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-15T11:27:15Z"
  },
  {
    "videoId": "UH6Wgq3GH9c",
    "title": "08.05.2022 проповед о. Сергей",
    "description": "Неделя трета след Възкресение Христово. Неделя на Светите Мироносици..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/UH6Wgq3GH9c/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-08T10:53:37Z"
  },
  {
    "videoId": "FDs2AI2M1lY",
    "title": "06.05.2022 проповед о. Сергей",
    "description": "Свети Великомъченик Георги - Победоносец и Чудотворец...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/FDs2AI2M1lY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-06T12:54:27Z"
  },
  {
    "videoId": "aOFdGGazzlc",
    "title": "02.05.2022 проповед о. Сергей",
    "description": "Свети равноапостольная цар Борис покръстител...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/aOFdGGazzlc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-02T09:04:42Z"
  },
  {
    "videoId": "wjv1bz0rahg",
    "title": "01.05.2022 проповед о. Сергей",
    "description": "Томина неделя..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/wjv1bz0rahg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-05-01T07:55:33Z"
  },
  {
    "videoId": "8C7rgcnSD7Y",
    "title": "30.04.2022 проповед о. Сергей",
    "description": "Светла събота..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/8C7rgcnSD7Y/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-30T14:36:35Z"
  },
  {
    "videoId": "XzWGdIrb1Co",
    "title": "25.04.2022 проповед о. Сергей",
    "description": "Светли понеделник.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/XzWGdIrb1Co/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-25T08:07:26Z"
  },
  {
    "videoId": "qdD32haIlz4",
    "title": "24.04.2022 проповед о. Сергей",
    "description": "Христос Воскресе!!!",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/qdD32haIlz4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-24T08:51:40Z"
  },
  {
    "videoId": "XEODLKZEPbY",
    "title": "23.04.2022 проповед о. Сергей",
    "description": "Велика събота..",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/XEODLKZEPbY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-23T09:35:07Z"
  },
  {
    "videoId": "E3HOhiQvXc8",
    "title": "22.04.2022 проповед о. Сергей след Опело Христово...",
    "description": "След Опело Христово...",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/E3HOhiQvXc8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-22T21:14:46Z"
  },
  {
    "videoId": "1CYi11lgZVA",
    "title": "22.04.2022 проповед о. Сергей",
    "description": "Разпети петък.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/1CYi11lgZVA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-22T09:42:28Z"
  },
  {
    "videoId": "-jNdT-d7lXA",
    "title": "21.04.2022 проповед о. Сергей",
    "description": "Велики четвъртък.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/-jNdT-d7lXA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-21T14:56:54Z"
  },
  {
    "videoId": "84puoWUoz6M",
    "title": "17.04.2022 проповед о. Сергей",
    "description": "Вход Господен в Иерусалим.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/84puoWUoz6M/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-17T09:00:20Z"
  },
  {
    "videoId": "aeeIcZwOT-I",
    "title": "16.04.2022 проповед о. Сергей",
    "description": "Възкресение на Лазар.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/aeeIcZwOT-I/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-16T12:40:42Z"
  },
  {
    "videoId": "xN_UbENm1qU",
    "title": "10.04.2022 проповед о. Сергей",
    "description": "Света Мария Египетска.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/xN_UbENm1qU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-10T09:08:40Z"
  },
  {
    "videoId": "qtWLCdzCi9Y",
    "title": "09.04.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/qtWLCdzCi9Y/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-09T08:58:03Z"
  },
  {
    "videoId": "IZy-HbM6oik",
    "title": "03.04.2022 проповед о. Сергей",
    "description": "Лествица - Св. Иоан Лествичник.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/IZy-HbM6oik/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-04-03T09:02:51Z"
  },
  {
    "videoId": "sjLL_tr2Jo4",
    "title": "27.03.2022 проповед о. Сергей",
    "description": "Кръстопоклонна неделя.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/sjLL_tr2Jo4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-03-27T09:24:54Z"
  },
  {
    "videoId": "IVosZJk3nn4",
    "title": "20.03.2022 проповед о. Сергей",
    "description": "Св. Григорий Палама.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/IVosZJk3nn4/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-03-20T10:00:26Z"
  },
  {
    "videoId": "RMnSpqN02GY",
    "title": "13.03.2022 проповед о. Сергей",
    "description": "Тържество на Православието.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/RMnSpqN02GY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-03-13T10:06:45Z"
  },
  {
    "videoId": "2YK1Fcax6cA",
    "title": "VID_20180624_111947.mp4",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/2YK1Fcax6cA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-03-07T16:35:21Z"
  },
  {
    "videoId": "z6i-ubCV3es",
    "title": "06.03.2022 проповед о. Сергей",
    "description": "Сирни заговезни. Прошка.",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/z6i-ubCV3es/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-03-06T11:12:28Z"
  },
  {
    "videoId": "T8mB0UjAxIY",
    "title": "27.02.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/T8mB0UjAxIY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-02-27T11:37:25Z"
  },
  {
    "videoId": "Z0Kqh6yMrac",
    "title": "26.02.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Z0Kqh6yMrac/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-02-26T11:31:08Z"
  },
  {
    "videoId": "RDBfqlqiad0",
    "title": "20.02.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/RDBfqlqiad0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-02-20T13:01:12Z"
  },
  {
    "videoId": "3_0fm37YCVI",
    "title": "13.02.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/3_0fm37YCVI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-02-13T12:48:44Z"
  },
  {
    "videoId": "jTRGTd5X2gQ",
    "title": "06.02.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/jTRGTd5X2gQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-02-06T12:49:05Z"
  },
  {
    "videoId": "Uk2f-MdTZxw",
    "title": "02.02.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Uk2f-MdTZxw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-02-02T11:06:15Z"
  },
  {
    "videoId": "dnHr-d-WcTU",
    "title": "23.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/dnHr-d-WcTU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-23T11:53:55Z"
  },
  {
    "videoId": "9JoexuX2J6M",
    "title": "21.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/9JoexuX2J6M/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-21T15:01:17Z"
  },
  {
    "videoId": "9teA_aHIrm0",
    "title": "20.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/9teA_aHIrm0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-20T14:04:30Z"
  },
  {
    "videoId": "jM4AM-87JVM",
    "title": "17.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/jM4AM-87JVM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-17T10:00:30Z"
  },
  {
    "videoId": "u1oJa8Gy1xA",
    "title": "09.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/u1oJa8Gy1xA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-09T10:21:26Z"
  },
  {
    "videoId": "zxrDzi0G6AY",
    "title": "07.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/zxrDzi0G6AY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-07T11:32:16Z"
  },
  {
    "videoId": "-27vVRVNasg",
    "title": "06.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/-27vVRVNasg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-06T11:22:54Z"
  },
  {
    "videoId": "aWfwLRl5JmE",
    "title": "05.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/aWfwLRl5JmE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-05T12:38:27Z"
  },
  {
    "videoId": "Eyq_lFaa-50",
    "title": "02.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/Eyq_lFaa-50/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-02T12:33:04Z"
  },
  {
    "videoId": "3Hs_hWWmViA",
    "title": "01.01.2022 проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/3Hs_hWWmViA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2022-01-01T11:37:40Z"
  },
  {
    "videoId": "rdKFrlVTe8Q",
    "title": "Храм Св. вмч. Мина - 24.06.2018 г. проповед о. Сергей",
    "description": "",
    "thumbnail": {
      "url": "https://i.ytimg.com/vi/rdKFrlVTe8Q/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "publishTime": "2018-06-24T09:50:30Z"
  }
];

let ctx = null;

const videoTemplate = (data) => html`
    <div id="video-page">
        <h2>Видео</h2>
        ${data.length === 0 ? noItemsTemplate() : data.map(el => cardTemplate(el))}
    </div>
`;

const cardTemplate = (data) => html`
    <article>
        <h4><a href="${data.url}" target="_blank">${data.title}</a></h4>
    </article>
`;

const noItemsTemplate = () => html`
    <h3 class="title no-posts-title">Страницата все още няма налично съдържание ...</h3>
`;


export function showVideoPage(ctxInput) {
  ctx = ctxInput;
  ctx.render(videoTemplate(videosData));

  const allNavLinks = document.querySelectorAll('.nav-link');
  const currNavLink = document.getElementById('video-link');

  [...allNavLinks].forEach(el => el.classList.remove('active'));
  currNavLink.classList.add('active');
}

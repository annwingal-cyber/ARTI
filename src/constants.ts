/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  style: string;
  imageUrl: string;
  description: string;
}

export const ARTWORKS: Artwork[] = [
  {
    "id": "art-01",
    "title": "星夜",
    "artist": "梵高",
    "year": "1889",
    "style": "名画杰作",
    "imageUrl": "/assets/art-01.jpg",
    "description": "这是名家梵高于1889年创作的杰作《星夜》。"
  },
  {
    "id": "art-02",
    "title": "睡莲",
    "artist": "莫奈",
    "year": "1916",
    "style": "名画杰作",
    "imageUrl": "/assets/art-02.jpg",
    "description": "这是名家莫奈于1916年创作的杰作《睡莲》。"
  },
  {
    "id": "art-03",
    "title": "格尔尼卡",
    "artist": "毕加索",
    "year": "1937",
    "style": "名画杰作",
    "imageUrl": "/assets/art-03.jpg",
    "description": "这是名家毕加索于1937年创作的杰作《格尔尼卡》。"
  },
  {
    "id": "art-04",
    "title": "记忆的永恒",
    "artist": "达利",
    "year": "1931",
    "style": "名画杰作",
    "imageUrl": "/assets/art-04.jpg",
    "description": "这是名家达利于1931年创作的杰作《记忆的永恒》。"
  },
  {
    "id": "art-05",
    "title": "维纳斯的诞生",
    "artist": "波提切利",
    "year": "1486",
    "style": "名画杰作",
    "imageUrl": "/assets/art-05.jpg",
    "description": "这是名家波提切利于1486年创作的杰作《维纳斯的诞生》。"
  },
  {
    "id": "art-06",
    "title": "蒙娜丽莎",
    "artist": "达芬奇",
    "year": "1503",
    "style": "名画杰作",
    "imageUrl": "/assets/art-06.jpg",
    "description": "这是名家达芬奇于1503年创作的杰作《蒙娜丽莎》。"
  },
  {
    "id": "art-07",
    "title": "最后的晚餐",
    "artist": "达芬奇",
    "year": "1498",
    "style": "名画杰作",
    "imageUrl": "/assets/art-07.jpg",
    "description": "这是名家达芬奇于1498年创作的杰作《最后的晚餐》。"
  },
  {
    "id": "art-08",
    "title": "自由引导人民",
    "artist": "德拉克罗瓦",
    "year": "1830",
    "style": "名画杰作",
    "imageUrl": "/assets/art-08.jpg",
    "description": "这是名家德拉克罗瓦于1830年创作的杰作《自由引导人民》。"
  },
  {
    "id": "art-09",
    "title": "呐喊",
    "artist": "蒙克",
    "year": "1893",
    "style": "名画杰作",
    "imageUrl": "/assets/art-09.jpg",
    "description": "这是名家蒙克于1893年创作的杰作《呐喊》。"
  },
  {
    "id": "art-10",
    "title": "戴珍珠耳环的少女",
    "artist": "维米尔",
    "year": "1665",
    "style": "名画杰作",
    "imageUrl": "/assets/art-10.jpg",
    "description": "这是名家维米尔于1665年创作的杰作《戴珍珠耳环的少女》。"
  },
  {
    "id": "art-11",
    "title": "夜巡",
    "artist": "伦勃朗",
    "year": "1642",
    "style": "名画杰作",
    "imageUrl": "/assets/art-11.jpg",
    "description": "这是名家伦勃朗于1642年创作的杰作《夜巡》。"
  },
  {
    "id": "art-12",
    "title": "亚当的创造",
    "artist": "米开朗基罗",
    "year": "1512",
    "style": "名画杰作",
    "imageUrl": "/assets/art-12.jpg",
    "description": "这是名家米开朗基罗于1512年创作的杰作《亚当的创造》。"
  },
  {
    "id": "art-13",
    "title": "美国哥特式",
    "artist": "格兰特·伍德",
    "year": "1930",
    "style": "名画杰作",
    "imageUrl": "/assets/art-13.jpg",
    "description": "这是名家格兰特·伍德于1930年创作的杰作《美国哥特式》。"
  },
  {
    "id": "art-14",
    "title": "舞蹈",
    "artist": "马蒂斯",
    "year": "1910",
    "style": "名画杰作",
    "imageUrl": "/assets/art-14.jpg",
    "description": "这是名家马蒂斯于1910年创作的杰作《舞蹈》。"
  },
  {
    "id": "art-15",
    "title": "大碗岛的星期天下午",
    "artist": "修拉",
    "year": "1886",
    "style": "名画杰作",
    "imageUrl": "/assets/art-15.jpg",
    "description": "这是名家修拉于1886年创作的杰作《大碗岛的星期天下午》。"
  },
  {
    "id": "art-16",
    "title": "红色工作室",
    "artist": "马蒂斯",
    "year": "1911",
    "style": "名画杰作",
    "imageUrl": "/assets/art-16.jpg",
    "description": "这是名家马蒂斯于1911年创作的杰作《红色工作室》。"
  },
  {
    "id": "art-17",
    "title": "构成第八号",
    "artist": "康定斯基",
    "year": "1923",
    "style": "抽象主义",
    "imageUrl": "/assets/art-17.jpg",
    "description": "这是抽象艺术先驱瓦西里·康定斯基于1923年创作的杰作《构成第八号》。作品通过点、线、面以及丰富的几何图形，探索了色彩与形式之间的内在节奏与精神共鸣。"
  },
  {
    "id": "art-18",
    "title": "人类之子",
    "artist": "勒内·马格里特",
    "year": "1964",
    "style": "超现实主义",
    "imageUrl": "/assets/art-18.jpg",
    "description": "这是超现实主义大师勒内·马格里特于1964年创作的标志性杰作《人类之子》。作品描绘了一个穿着大衣、戴着圆顶硬礼帽的男子，他的脸大部分被一个悬浮的青苹果所遮挡，探讨了可见与不可见之间的微妙冲突。"
  },
  {
    "id": "art-19",
    "title": "熬夜者",
    "artist": "霍珀",
    "year": "1942",
    "style": "名画杰作",
    "imageUrl": "/assets/art-19.jpg",
    "description": "这是名家霍珀于1942年创作的杰作《熬夜者》。"
  },
  {
    "id": "art-20",
    "title": "宫娥",
    "artist": "委拉斯开兹",
    "year": "1656",
    "style": "名画杰作",
    "imageUrl": "/assets/art-20.jpg",
    "description": "这是名家委拉斯开兹于1656年创作的杰作《宫娥》。"
  },
  {
    "id": "art-21",
    "title": "戴草帽的自画像",
    "artist": "梵高",
    "year": "1887",
    "style": "名画杰作",
    "imageUrl": "/assets/art-21.jpg",
    "description": "这是名家梵高于1887年创作的杰作《戴草帽的自画像》。"
  },
  {
    "id": "art-22",
    "title": "吻",
    "artist": "克里姆特",
    "year": "1908",
    "style": "名画杰作",
    "imageUrl": "/assets/art-22.jpg",
    "description": "这是名家克里姆特于1908年创作的杰作《吻》。"
  },
  {
    "id": "art-23",
    "title": "拾穗者",
    "artist": "米勒",
    "year": "1857",
    "style": "名画杰作",
    "imageUrl": "/assets/art-23.jpg",
    "description": "这是名家米勒于1857年创作的杰作《拾穗者》。"
  },
  {
    "id": "art-24",
    "title": "戴金盔的男子",
    "artist": "伦勃朗工作室",
    "year": "1650",
    "style": "名画杰作",
    "imageUrl": "/assets/art-24.jpg",
    "description": "这是名家伦勃朗工作室于1650年创作的杰作《戴金盔的男子》。"
  },
  {
    "id": "art-25",
    "title": "日出·印象",
    "artist": "莫奈",
    "year": "1872",
    "style": "名画杰作",
    "imageUrl": "/assets/art-25.jpg",
    "description": "这是名家莫奈于1872年创作的杰作《日出·印象》。"
  }
];

import { Artwork } from "../constants";

export interface TasteAnalysis {
  personaTitle: string;
  description: string;
  recommendedStyles: string[];
  personalityTraits: string[];
  archetype: 'romantic' | 'classical' | 'weird' | 'lonely' | 'over-liked' | 'none-liked';
}

export function analyzeArtTasteFixed(likedArtworks: Artwork[]): TasteAnalysis {
  if (likedArtworks.length === 0) {
    return {
      personaTitle: "审美绝缘的荒原浪人",
      description: "一张画都没看上？您的审美阈值大概比喜马拉雅山还高。或者您只是单纯地在刷屏测试我的底线。这种极度的'性冷淡审美'通常意味着现实中您可能连挑个外卖都要纠结一个小时。",
      recommendedStyles: ["极简线条"],
      personalityTraits: ["油盐不进", "极致挑剔", "情感荒漠"],
      archetype: 'none-liked'
    };
  }

  // ... (counts logic same as before)
  const categories = {
    romantic: ["art-01", "art-02", "art-04", "art-15", "art-21", "art-22", "art-25"], 
    classical: ["art-05", "art-06", "art-07", "art-10", "art-11", "art-12", "art-20", "art-23", "art-24"], 
    weird: ["art-03", "art-09", "art-14", "art-16", "art-17", "art-18"], 
    lonely: ["art-09", "art-13", "art-19", "art-24"] 
  };

  const counts = {
    romantic: likedArtworks.filter(a => categories.romantic.includes(a.id)).length,
    classical: likedArtworks.filter(a => categories.classical.includes(a.id)).length,
    weird: likedArtworks.filter(a => categories.weird.includes(a.id)).length,
    lonely: likedArtworks.filter(a => categories.lonely.includes(a.id)).length
  };

  const maxCategory = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

  if (likedArtworks.length > 15) {
    return {
      personaTitle: "审美通胀的博爱主义者",
      description: "看完 25 张画您居然点了这么多喜欢？您的品位就像一个只要给钱就干的甲方，毫无底线且贪得无厌。这种'审美溢出'背后，其实是内心极度缺乏安全感，生怕错过任何一个能标榜自己有文化的标签。",
      recommendedStyles: ["大杂烩", "密集恐惧症风"],
      personalityTraits: ["贪婪的眼球", "虚假的多才多艺", "社交牛杂症"],
      archetype: 'over-liked'
    };
  }

  switch (maxCategory) {
    case "romantic":
      return {
        personaTitle: "精神内耗的氛围感流浪汉",
        description: "追求极致的'破碎感'和'朦胧美'？梵高的星空治不好您的焦虑，莫奈的睡莲只能让您在白日梦里溺水。这种品位往往伴随着深夜的网抑云吐槽和对现实生活的彻底无能为力。",
        recommendedStyles: ["印象主义", "朦胧梦境"],
        personalityTraits: ["脆弱的强迫症", "文艺遮羞布", "现实逃避者"],
        archetype: 'romantic'
      };
    case "classical":
      return {
        personaTitle: "伪装成精英的审美皇权党",
        description: "您的审美时间轴大概在文艺复兴时期就彻底熔断了。您觉得这叫'经典'，其实只是您害怕任何不确定性的表现。内心极度渴望稳定，实际生活中可能连换个手机壳都要纠结三天的精神老古董。",
        recommendedStyles: ["文艺复兴", "古典主义"],
        personalityTraits: ["保守的优雅", "精致的利己主义", "道德高地常客"],
        archetype: 'classical'
      };
    case "weird":
      return {
        personaTitle: "甲方最怕的后现代逻辑黑洞",
        description: "正常的人类表达方式已经无法满足您的表演欲了。您喜欢抽象的线条和错位的肢体，因为您的人生本就是场没剧本的荒诞剧。毒舌一点说：您不是品位高，您只是单纯地无法理解直白的逻辑。",
        recommendedStyles: ["超现实主义", "达达主义"],
        personalityTraits: ["自以为是的独特", "逻辑重塑者", "反骨仔"],
        archetype: 'weird'
      };
    case "lonely":
    default:
      return {
        personaTitle: "孤独成瘾的都市守墓人",
        description: "霍珀的寂静深夜就是您的内心写照，蒙克的灵魂尖叫是您的早起闹铃。您在孤独中品味快感，觉得众生皆俗唯我独醒。其实您只是缺个能听懂您废话的朋友，但在那之前，您会继续装作不需要任何人。",
        recommendedStyles: ["现实主义", "黑色电影风"],
        personalityTraits: ["优雅的抑郁", "沉默的控诉者", "独处狂"],
        archetype: 'lonely'
      };
  }
}

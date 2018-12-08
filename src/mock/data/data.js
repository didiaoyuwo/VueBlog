import Mock from 'mockjs'

const bannerData = []
let bannerCount = [1, 2, 3]
for (let i = 0; i < bannerCount.length; i++) {
  bannerData.push(Mock.mock({
    title: Mock.Random.ctitle(9, 13),
    author: Mock.Random.cname(),
    date: Mock.Random.date(),
    img: Mock.Random.dataImage('300x300', 'Hello Mock.js!')
  }))
}
const ArticleData = []
let ArticleCount = Mock.Random.natural(9, 13)
for (let i = 0; i < ArticleCount; i++) {
  ArticleData.push(Mock.mock({
    id: ArticleData.length,
    title: Mock.Random.ctitle(9, 13),
    content: Mock.Random.cparagraph(33, 63),
    author: Mock.Random.cname(),
    time: Mock.Random.datetime(),
    img: Mock.Random.dataImage('300x300', 'author'),
    sayNum: Mock.Random.natural(0, 3),
    zanNum: Mock.Random.natural(3, 6),
    shareNum: Mock.Random.natural(6, 9)
  }))
}
const AttentionData = []
let AttentionCount = Mock.Random.natural(9, 13)
for (let i = 0; i < AttentionCount; i++) {
  AttentionData.push(Mock.mock({
    id: i + 1,
    title: Mock.Random.ctitle(9, 13),
    content: Mock.Random.cparagraph(2, 4)
  }))
}

const ColomData = []
let ColomCount = Mock.Random.natural(9, 13)
for (let i = 0; i < ColomCount; i++) {
  ColomData.push(Mock.mock({
    id: i + 1,
    title: Mock.Random.ctitle(9, 13),
    content: Mock.Random.cparagraph(2, 4)
  }))
}

export { bannerData, ArticleData, AttentionData, ColomData }

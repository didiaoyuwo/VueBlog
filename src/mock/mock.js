import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { bannerData, ArticleData, ColomData, AttentionData } from './data/data'

export default {
  start () {
    let mock = new MockAdapter(axios, {
      delayResponse: 300
    })

    mock.onGet('/home').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve([200, {
          bannerData,
          ArticleData
        }]), 30000)
      })
    })

    mock.onGet('/attention').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve([200, {
          AttentionData
        }]), 200)
      })
    })
    mock.onGet('/colom').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve([200, {
          ColomData
        }]), 200)
      })
    })
  }
}

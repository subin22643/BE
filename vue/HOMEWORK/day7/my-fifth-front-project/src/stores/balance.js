import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBalanceStore = defineStore('balance', () => {
    const balances = ref([
        {
        name: '김하나',
        balance: 100000
        },
        {
        name: '김두리',
        balance: 10000
        },
        {
        name: '김서이',
        balance: 100
        },
    ])


    const search = (info) => {
        const result = balances.value.reduce((acc, balance) => {
            if (balance.name === info) {
                acc.push(balance)
            }
            return acc
        }, [])
        return result[0]
    }

    return { balances, search }
}) 
import { computed, ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
    const store = useStore()
    const count = computed(() => {
        return store.getters.getCount;
    });
    const category = ref(null)
    // array for all entries
    const entries = ref([])

    // text input for specific food item
    const entry_content = ref('')
    // calorie content for specifoc food item
    const calories = ref(0)

    const addEntries = () => {
        if (entry_content.value.trim() === '' || category.value === null || calories.value === 0) {
            return;
        }

        entries.value.push({
            content: entry_content.value,
            category: category.value,
            calories: calories.value,
            createdAt: new Date().getTime()
        })

        entry_content.value = ''
        category.value = null

    }

    const sortEntries = computed(() => entries.value.sort((a, b) => {
        return b.createdAt - a.createdAt
    }))



    watch(entries, (newVal) => {
        localStorage.setItem('entries', JSON.stringify(newVal))
    }, { deep: true })

    onMounted(() => {
        entries.value = JSON.parse(localStorage.getItem('entries')) || []
    })
    // total calories burned computed from each addition and sub
    const calories_burned = computed(() => {
        return sortEntries.value.reduce((acc, item) => acc + parseInt(item.calories), 0)
    })

    // calculate calories left from limit set i.e count
    const calories_available = computed(() => {
        if (count.value === 0) {
            return;
        }
        return count.value - calories_burned.value
    })

    // Remove entry from array
    const removeEntry = entry => {
        entries.value = entries.value.filter(i => i !== entry)
    }



    const today = computed(() => {
        return new Date().getFullYear() + " " + '-' + " " + (new Date().getMonth() + 1) + " " + '-' + " " + new Date().getDate()
    })
    const now = computed(() => {
        return new Date().getHours() + " " + ':' + " " + new Date().getMinutes() + " " + ":" + " " + new Date().getSeconds()

    })


    const Add = () => {
        store.commit('add', 2)
    }
    const Sub = () => {
        store.commit('sub', 2)
    }
    const Reset = () => {
        store.commit('reset')
    }
    const setValue = (set_value) => {
        store.commit('setValue', set_value)
    }


    return {
        count,
        Add,
        Sub,
        Reset,
        setValue,
        today,
        now,
        addEntries,
        calories,
        category,
        entry_content,
        sortEntries,
        calories_burned,
        calories_available,
        removeEntry
    }
}
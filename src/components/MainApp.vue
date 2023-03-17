<template>
  <NavBar />

  <section class="time">
    <p>
      {{ today }}
    </p>
    <p>
      {{ now }}
    </p>
  </section>

  <section class="intro-text">
    <div class="goal">
      <div class="stats">
        <span class="goal-span"
          >Goal: <span class="space">{{ count }} </span></span
        >
        <span class="goal-span">
          Calories Burned:
          <span class="space">{{ calories_burned }} </span>
        </span>
        <span class="goal-span">
          Calories available :
          <span class="space">{{ calories_available }} </span>
        </span>
      </div>
      <div class="set-goal">
        <div class="goal-number">
          <span class="goal-span"> Set calorie goal: </span>
          <input
            class="data"
            v-model="value"
            type="number"
            name="setCount"
            id="setCount"
          />
          <button class="action-btn" type="submit" @click="setValue(value)">
            Add Starting goal
          </button>
        </div>
        <div class="goal-buttons">
          <div>
            <button id="btn-1" @click="Add" class="goal-btn">Add</button>
          </div>
          <div>
            <button
              id="btn-2"
              class="goal-btn"
              v-if="count > 0"
              @click.prevent="Sub"
            >
              Remove
            </button>
          </div>
          <div>
            <button id="btn-3" class="goal-btn" @click="Reset">Reset</button>
          </div>
        </div>
      </div>

      <div class="calories-form">
        <form @submit.prevent="addEntries">
          <div class="data-wrap">
            <span class="goal-span">What did you eat today?</span>
            <input
              type="text"
              placeholder="e,g pancakes"
              v-model="entry_content"
              class="calorie-data"
            />

            <input
              class="calorie-data"
              type="number"
              placeholder="200"
              v-model="calories"
            />
          </div>
          <span class="goal-span">Pick a category</span>
          <div class="options">
            <label class="label">
              <input
                type="radio"
                name="category"
                id="category1"
                value="meal"
                v-model="category"
              />

              <span class="space">Meal</span>
            </label>
            <label class="label">
              <input
                type="radio"
                name="category"
                id="category2"
                value="snack"
                v-model="category"
              />
              <div class="space">Snack</div>
            </label>
          </div>
          <input type="submit" class="action-btn" value="Add calories" />
        </form>
      </div>

      <section class="entries">
        <span class="goal-span"> Entries </span>

        <div class="entry-list">
          <div class="entry" v-for="(entry, index) in sortEntries" :key="index">
            <div class="category">
              <img
                class="food-img"
                src="https://cdn-icons-png.flaticon.com/512/5862/5862680.png"
                alt="Icon"
              />
              <span>{{ entry.category }}</span>
            </div>
            <input v-model="entry.content" class="entry-data" />
            <input v-model="entry.calories" class="entry-data" />

            <button @click="removeEntry(entry)" class="action-btn">
              Delete
            </button>
          </div>
        </div>
      </section>
    </div>
  </section>
  <Footer/>
</template>

<script>
import useCounter from "@/store/counter";
import NavBar from "@/components/NavBar";
import Footer from '@/components/FooTer';

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },

  setup() {
    const {
      removeEntry,
      calories_available,
      calories_burned,
      sortEntries,
      calories,
      entry_content,
      addEntries,
      category,
      now,
      today,
      count,
      Add,
      Sub,
      Reset,
      setValue,
    } = useCounter();

    return {
      count,
      Add,
      Sub,
      Reset,
      setValue,
      value: 0,
      today,
      now,
      category,
      calories,
      entry_content,
      addEntries,
      sortEntries,
      calories_burned,
      calories_available,
      removeEntry,
    };
  },
};
</script>

<template>
  <div class="home">
    <h1>Count the Palindrome(s)</h1>
    <div v-if="!loading">
      <div class="form-wrapper">
        <input
          class="search-input"
          type="text"
          placeholder="tattarrattat"
          v-model="searchword"
          maxlength="12"
          @input="(event) => this.countThePossiblePossibilities(event)"
        />
        <button class="search-button" @click="submitMe">Submit</button>
      </div>
    </div>
    <div v-else>
      <div class="form-wrapper">
        <input
          class="search-input"
          type="text"
          placeholder="tattarrattat"
          v-model="searchword"
          maxlength="12"
          disabled
          @input="(event) => this.countThePossiblePossibilities(event)"
        />
        <button class="search-button-disabled" @click="submitMe" disabled>
          Submit
        </button>
      </div>
    </div>
    <div v-if="rounds > 1" class="permutation-container">
      <span id="pwp" :class="createColorClass()"
        >Possible word permutation: {{ rounds.toLocaleString() }}</span
      >
    </div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else-if="!loading && searched">
      <div v-if="searched">
        <Result :palindromeList="palindromeList" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { FindThePalindromeRequest } from "../models//FindThePalindromeRequest";
import Result from "../components/Result.vue";
import Loading from "../components/common/Loading.vue";
import store from "../store";

@Options({
  components: {
    Loading,
    Result,
  },
})
export default class Home extends Vue {
  palindromeList: string[] = [];
  searchword = "";
  searched = false;
  loading = false;
  rounds = 0;

  async submitMe() {
    this.loading = true;
    let cleanWord = this.sanitizeSearch();
    let req: FindThePalindromeRequest = { StringToCheck: cleanWord };
    await store.dispatch.getPalindrome(req);
    this.palindromeList = store.state.palindrome.palindrome;
    this.loading = false;
    this.searched = true;
  }

  countThePossiblePossibilities(event: any) {
    let wordCount: number = this.sanitizeSearch().length;
    if (event.data == "deleteContentBackward") wordCount = -1;
    this.rounds = this.factorial(wordCount);
  }

  createColorClass() {
    if (this.rounds - 720 < 0) return "sky";
    if (this.rounds - 40320 < 0) return "emerald";
    if (this.rounds - 362880 < 0) return "green";
    if (this.rounds - 3628800 < 0) return "grellow";
    if (this.rounds - 39916800 < 0) return "orange";
    if (this.rounds - 479001600 < 0) return "redge";
    else return "red";
  }

  factorial(number: number) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
      result = result * i;
    }

    return result;
  }

  sanitizeSearch(): string {
    return this.searchword.replace(/\s/g, "");
  }
}
</script>

<style scoped>
.permutation-container {
  padding-top: 10px;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25%;
}

.form-wrapper {
  position: relative;
  width: 300px;
}
.search-input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 100px;
  padding: 10px 100px 10px 20px;
  line-height: 1;
  box-sizing: border-box;
  outline: none;
}
.search-button {
  position: absolute;
  right: 3px;
  top: 3px;
  bottom: 3px;
  border: 0;
  background: #d1095e;
  color: #fff;
  outline: none;
  margin: 0;
  padding: 0 10px;
  border-radius: 100px;
  z-index: 2;
}

.search-button-disabled {
  position: absolute;
  right: 3px;
  top: 3px;
  bottom: 3px;
  border: 0;
  background: gray;
  color: #fff;
  outline: none;
  margin: 0;
  padding: 0 10px;
  border-radius: 100px;
  z-index: 2;
}

.sky {
  color: #1fc1ab;
  -moz-transition: all 0.6s ease-in-out;
  -webkit-transition: all 0.6s ease-in;
  -o-transition: all 0.6s ease-in;
  transition: all 0.6s ease-in;
}
.emerald {
  color: #1fc16f;
  -moz-transition: all 0.6s ease-in-out;

  -webkit-transition: all 0.6s ease-in;
  -o-transition: all 0.6s ease-in;
  transition: all 0.6s ease-in;
}
.green {
  color: #1fc12b;
  -moz-transition: all 0.6s ease-in-out;

  -webkit-transition: all 0.6s ease-in;
  -o-transition: all 0.6s ease-in;
  transition: all 0.6s ease-in;
}
.grellow {
  color: #8ecf0f;
  -moz-transition: all 0.6s ease-in-out;

  -webkit-transition: all 0.6s ease-in;
  -o-transition: all 0.6s ease-in;
  transition: all 0.6s ease-in;
}
.orange {
  color: #b17d08;
  -moz-transition: all 0.6s ease-in-out;
  -webkit-transition: all 0.6s ease-in;
  -o-transition: all 0.6s ease-in;
  transition: all 0.6s ease-in;
}
.redge {
  color: #e15715;
  -moz-transition: all 0.6s ease-in-out;
  -webkit-transition: all 0.6s ease-in;
  -o-transition: all 0.6s ease-in;
  transition: all 0.6s ease-in;
}
.red {
  color: #b10808;
  -moz-transition: all 0.6s ease-in-out;
  -webkit-transition: all 0.6s ease-in;
  -o-transition: all 0.6s ease-in;
  transition: all 0.6s ease-in;
}
</style>
import { defineModule } from "direct-vuex"
import store, { moduleActionContext, moduleGetterContext } from "./index"
import { FindThePalindromeRequest } from "@/models/FindThePalindromeRequest";
import axiosPalindromeService from "@/axios/axios.palindromeService";

export interface Palindrome {
    palindrome: string[];
}

const palindrome = defineModule({
    state: (): Palindrome => {
        return {
            palindrome: []
        }
    },
    getters: {
        selectedMakeList(...args): string[] {
            // eslint-disable-next-line
            const { state, getters, rootState, rootGetters } = mod1GetterContext(args)
            return state.palindrome;
        }

    },
    mutations: {
        ADD_PALINDROME_TO_LIST(state, resp: string[]) {
            state.palindrome = resp;
        }
    },
    actions: {

        async getPalindrome(context, req: FindThePalindromeRequest): Promise<boolean> {

            // eslint-disable-next-line
            const { dispatch, commit, getters, state } = mod1ActionContext(context);

            console.log(req.StringToCheck);
            const result = await axiosPalindromeService.getPalindrome(req);
            commit.ADD_PALINDROME_TO_LIST(result);


            return true;
        }
    }
})

export default palindrome
// eslint-disable-next-line
const mod1GetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, palindrome)
// eslint-disable-next-line
const mod1ActionContext = (context: any) => moduleActionContext(context, palindrome)
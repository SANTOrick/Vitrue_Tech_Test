import { shallowMount } from "@vue/test-utils";
import store from "@/store";
import Result from "@/components/Result.vue"



describe("Home", () => {
  store.commit.ADD_PALINDROME_TO_LIST([""]),
    it("Should not show the results if store.palindromes is empty", () => {
      const wrapper = shallowMount(Result, {
        global: {
          mocks: {
          }
        },
      });
      expect(wrapper.find('[data-test="has-result"]').exists()).toBe(false);
    });

});
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using backend.services;

namespace backend.services
{
    public class PalindromeCheckerService : IPalindromeCheckerService
    {
        List<string> result = new List<string>();
        int lengthFilter;

        public List<string> FindPalindrome(string checkme)
        {
            char[] arr = checkme.ToCharArray();
            this.lengthFilter = checkme.Length;
            LoopIn(arr);

            return this.result;
        }

        private void Mix(ref char a, ref char b)
        {
            if (a == b) return;

            var temp = a;
            a = b;
            b = temp;
        }

        public void LoopIn(char[] list)
        {
            int wordcCount = list.Length - 1;
            LoopIn(list, 0, wordcCount);
        }

        private void LoopIn(char[] list, int currentIndex, int wordCount)
        {
            if (currentIndex == wordCount)
            {

                string word = new string(list.ToArray());
                string uno = new string(list.Reverse().ToArray());
                if (word == uno)
                {
                    if (word.Length == lengthFilter)
                        if (!this.result.Contains(word))
                        {
                            this.result.Add(word);
                        }
                }

            }
            else
                for (int i = currentIndex; i <= wordCount; i++)
                {
                    Mix(ref list[currentIndex], ref list[i]);
                    LoopIn(list, currentIndex + 1, wordCount);
                    Mix(ref list[currentIndex], ref list[i]);
                }
        }
    }
}
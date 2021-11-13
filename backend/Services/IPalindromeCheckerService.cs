using System;
using System.Collections.Generic;
using System.IO;

namespace backend.services
{
    public interface IPalindromeCheckerService
    {
        public List<string> FindPalindrome(string checkme);

    }

}
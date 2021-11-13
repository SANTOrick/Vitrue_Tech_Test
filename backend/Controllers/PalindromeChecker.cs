using System.Collections.Generic;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using backend.services;
using System;
using Microsoft.AspNetCore.Http;
using backend.models;

namespace backend.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PalindromeCheckerController : ControllerBase
    {
        private readonly IPalindromeCheckerService palindromeService;

        public PalindromeCheckerController(IPalindromeCheckerService palindromeService)
        {
            this.palindromeService = palindromeService;
        }

        [HttpPost]
        public List<string> FindPalindromes(PalindromeRequest req)
        {
            List<string> result = new List<string>();

            result = palindromeService.FindPalindrome(req.StringToCheck);

            return result;
        }

    }
}
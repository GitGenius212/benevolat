package com.benevolat.springboot

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController


@RestController
class AppController {
    @GetMapping("/")
    fun index(@RequestParam("name") name: String) = "Hello, $name!"
}
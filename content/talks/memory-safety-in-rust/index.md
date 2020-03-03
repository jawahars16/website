---
title: Memory safety in Rust
date: "2019-07-25T22:12:03.284Z"
videoLink: "https://youtube.com/embed/qwJWF7XeRxs"
featuredImage: "./cover.jpeg"
viewTime: "28 minutes"
slidesLink: "https://www.slideshare.net/JawaharSureshBabu/memory-safety-in-rust"
---

A main selling point of Rust is that it guarantees, at compile time, that your application will be safe from dereferencing null or dangling pointers (a.k.a segmentation fault). Rust also makes it difficult to leak memory, but it is not a guarantee. In this talk we will be focusing on the language features, that helps Rust to ensure memory safety without needing for a garbage collector
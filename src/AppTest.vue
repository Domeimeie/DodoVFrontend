<template>
    <main class="content">
      <article>
        <div class="welcomeDesc">
          <h1>{{title}}<br> Bringing an Icon Back to Life</h1>
          <p>
            Project Dodo Revival is a groundbreaking conservation and genetic engineering initiative aimed at bringing the iconic 
            dodo bird back from extinction. Utilizing cutting-edge advancements in DNA research and cloning, scientists are working 
            to reconstruct the dodo’s genetic code using preserved DNA from dodo remains and closely related bird species. The 
            project not only seeks to restore the dodo to its natural habitat in Mauritius but also raises awareness about 
            biodiversity loss and the importance of protecting endangered species today. Through this initiative, the dodo could once 
            again roam the Earth, symbolizing hope for the future of conservation.<br>
            Is this something you support? Feel free to check out our merch store to support us financially.
          </p>
        </div> 
        <picture class="welcomePicture">
            <img v-bind:src="dodo" alt="Historical Dodo">
        </picture>
      </article>
    </main>
    </template>
    <script setup>
      import { ref } from "vue";
      const title = "Project Dodo Revival";
      const dodo = ref('./media/dodoIndex.png');
    </script>
    
    <style scoped>
  :root {
    --primary-color: #F5EFFF;
    --secondary-color: #CDC1FF;
    --accent-color: #A594F9;
    --background-color: #E5D9F2;
    --text-color: #212529;
    --link-color: #0056b3;
  }
  
  body {
    background: linear-gradient(#E5D9F2, #F5EFFF, #CDC1FF);
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  p {
    color: var(--text-color);
  }
  
  h1 {
    color: var(--text-color);
  }
  
  .content {
    margin-top: 6rem;
  }
  
     .content article {
    width: 60%;
    height: auto;    
    display: flex;
    position: absolute;
    top: 40%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  
  .welcomeDesc{
    width: 50%;
    padding-right: 2vh;
    text-align: right;
  } 
  
  .welcomeDesc p{
    padding-bottom: 2vh;
  } 
  
  .support {
    padding-left: 2vh;
    padding-right: 2vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    border-style: solid;
    border-width: 2px;
    border-radius: 3px;
    text-decoration: none;
    background-color: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--font-color);
  }
  
  .support:hover {
    cursor: pointer;
    background: none ;
  }
  
  .welcomePicture {
    width: 50%;
    margin: 0;
    padding: 0;
  }
  
  .welcomePicture img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover; 
  }
  
  @media screen and (max-width: 800px) {
      .content article {
      flex-direction: column;
      height: auto;
      top: 0;
      position: relative;
      width: 90%;
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
  
    .welcomeDesc{
      width: 100%;
      text-align: center;
    } 
  
    .welcomePicture {
      margin-top: 5vh;
      width: 100%;
    }
  }
    </style>
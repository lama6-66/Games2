export const navbar = `

<header>




  <h2><a href="/Games2/index.html" class="heder">Game</a></h2>
  
  <div class="menu-toggle" onclick="toggleMenu()">☰</div>
  <ul id="navbar-links">
    <li><a href="/Games2/Horror/gameshorror.html">Horror</a></li>
    <li><a href="/Games2/Adventure/gamesadventure.html">Adventure</a></li>
    <li><a href="/Games2/contact/play.html">play</a></li>
    <li><a href="/Games2/Heroes/heroesgame.html">Heroes</a></li>
    <li><a href="/Games2/Heroes/music.html">music</a></li>
     <li><a href="/Games2/Adventure/fighting.html">Fighting</a></li>
    <li><a href="/Games2/contact/contact1.html">Contact</a></li>

    
    
  </ul>
 
</header>



`;



function toggleMenu() {
  const menu = document.getElementById('navbar-links');
  if (menu) {
    menu.classList.toggle('active');
  }
}

  

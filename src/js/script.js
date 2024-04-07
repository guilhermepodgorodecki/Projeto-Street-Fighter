function mudarImagem() {
  var imagem = document.getElementById("minhaimagem");
  var imagemdois = document.getElementById("minhaimagem2");
  var imagemtres = document.getElementById("imagem-animada");
  var descricao = document.getElementById("description");

  if (imagem.src.match("./src/img/Screenshot_1.png")) {
    imagemdois.src = "./src/img/ryu.gif";
    descricao.innerHTML =
      "O lutador original e mais famoso “Street Fighter”. Tem grande equilíbrio de poderes e usa o karatê shoto para lutar, incluindo seus ataques como Hadouken e Shoryuken.";
  } else imagem.src.match("./src/img/ryu.gif");
  imagemtres.src = "./src/img/ryuimagemdois.gif";
}

//mudando segundo personagem

function mudarImagemDois() {
  var imagem = document.getElementById("minhaimagem");
  var imagemdois = document.getElementById("minhaimagem2");
  var imagemtres = document.getElementById("imagem-animada");
  var descricao = document.getElementById("description");

  if (imagem.src.match("./src/img/Screenshot_1.png")) {
    imagemdois.src = "./src/img/nash.gif";
    descricao.innerHTML =
      "O antigo parceiro de Guile retorna a Street Fighter V zumbificado. Tem equlíbrio, mas é focado em mobilidade.";
  } else imagem.src.match("./src/img/nash.gif");
  imagemtres.src = "./src/img/nashimagemdois.gif";
}

//mudando terceiro personagem

function mudarImagemTres() {
  var imagem = document.getElementById("minhaimagem");
  var imagemdois = document.getElementById("minhaimagem2");
  var imagemtres = document.getElementById("imagem-animada");
  var descricao = document.getElementById("description");

  if (imagem.src.match("./src/img/Screenshot_1.png")) {
    imagemdois.src = "./src/img/mbison.gif";
    descricao.innerHTML =
      "M. Bison, o grande chefão clássico da saga Street Fighter, tem grande poder e se destaca por mobilidade e técnica. É agressivo e bom para combos.";
  } else imagem.src.match("./src/img/mbison.gif");
  imagemtres.src = "./src/img/mbisonimagemdois.gif";
}

//mudando quarto personagem

function mudarImagemQuatro() {
  var imagem = document.getElementById("minhaimagem");
  var imagemdois = document.getElementById("minhaimagem2");
  var imagemtres = document.getElementById("imagem-animada");
  var descricao = document.getElementById("description");

  if (imagem.src.match("./src/img/Screenshot_1.png")) {
    imagemdois.src = "./src/img/cammy.gif";
    descricao.innerHTML =
      "Cammy, antiga serva de Bison, é totalmente focada em mobilidade, apesar de ser boa lutadora para ataques corporais.";
  } else imagem.src.match("./src/img/cammy.gif");
  imagemtres.src = "./src/img/cammyimagemdois.gif";
}

//mudando quinto personagem

function mudarImagemCinco() {
  var imagem = document.getElementById("minhaimagem");
  var imagemdois = document.getElementById("minhaimagem2");
  var imagemtres = document.getElementById("imagem-animada");
  var descricao = document.getElementById("description");

  if (imagem.src.match("./src/img/Screenshot_1.png")) {
    imagemdois.src = "./src/img/birdie.gif";
    descricao.innerHTML =
      "Birdie é originário da série Street Fighter Zero e aqui tem enorme poder e bastante saúde, isto é, uma barra de energia de fazer inveja. Mas é um lutador lento.";
  } else imagem.src.match("./src/img/birdie.gif");
  imagemtres.src = "./src/img/birdieimagemdois.gif";
}

//mudando sexto personagem

function mudarImagemSeis() {
  var imagem = document.getElementById("minhaimagem");
  var imagemdois = document.getElementById("minhaimagem2");
  var imagemtres = document.getElementById("imagem-animada");
  var descricao = document.getElementById("description");

  if (imagem.src.match("./src/img/Screenshot_1.png")) {
    imagemdois.src = "./src/img/ken.gif";
    descricao.innerHTML =
      "O eterno melhor amigo de Ryu, Ken também é equilibrado, mas tem menos técnica e se foca em mobilidade. Seu ataque preferido continua sendo o Shoryuken.";
  } else imagem.src.match("./src/Screenshot_6.png");
  imagemtres.src = "./src/img/kenimagemdois.gif";
}

//mudando sétimo personagem

function mudarImagemSete() {
  var imagem = document.getElementById("minhaimagem");
  var imagemdois = document.getElementById("minhaimagem2");
  var imagemtres = document.getElementById("imagem-animada");
  var descricao = document.getElementById("description");

  if (imagem.src.match("./src/img/Screenshot_1.png")) {
    imagemdois.src = "./src/img/vega.gif";
    descricao.innerHTML =
      "Vega é o famoso galã da série Street Fighter, sempre com sua máscara e pronto para ataques aéreos. Neste jogo ele tem grande mobilidade.";
  } else imagem.src.match("./src/vega.gif");
  imagemtres.src = "./src/img/vegaimagemdois.gif";
}

//mudando oitavo personagem

function mudarImagemOito() {
  var imagem = document.getElementById("minhaimagem");
  var imagemdois = document.getElementById("minhaimagem2");
  var imagemtres = document.getElementById("imagem-animada");
  var descricao = document.getElementById("description");

  if (imagem.src.match("./src/img/Screenshot_1.png")) {
    imagemdois.src = "./src/img/zangief.gif";
    descricao.innerHTML =
      "Um dos lutadores mais famosos de Street Fighter 2, Zangief é um combo de enorme poder e saúde. O russo se garante com agarrões e golpes fortes.";
  } else imagem.src.match("./src/zangief.gif");
  imagemtres.src = "./src/img/zangiefimagemdois.gif";
}
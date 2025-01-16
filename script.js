// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('nav.menu ul li a'); // Seleciona todos os links no menu

// Abre o menu ao clicar no botão hamburger
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu ao clicar no botão de fechar
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Fecha o menu ao clicar em um link de navegação (quando em telas pequenas)
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});



const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.transform = 'translateX(100%)'; // Esconde as outras imagens à direita
        if (i === index) {
            slide.classList.add('active');
            slide.style.transform = 'translateX(0)'; // Mostra a imagem atual
        }
    });
}

function startSlider() {
    showSlide(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000); // Troca de slide a cada 5 segundos
}

document.addEventListener('DOMContentLoaded', startSlider);





function toggleArea(id) {
  const card = document.getElementById(id);
  const detalhes = card.querySelector('.detalhes');
  const miniResumo = card.querySelector('.mini-resumo');
  const btnExpand = card.querySelector('.btn-expand');
  const btnCollapse = card.querySelector('.btn-collapse');

  // Alterna a exibição dos detalhes e do resumo
  if (detalhes.style.display === 'block') {
    detalhes.style.display = 'none';
    miniResumo.style.display = 'block';
    btnExpand.style.display = 'inline-block';
    btnCollapse.style.display = 'none';
    card.style.height = 'auto';
  } else {
    detalhes.style.display = 'block';
    miniResumo.style.display = 'none';
    btnExpand.style.display = 'none';
    btnCollapse.style.display = 'inline-block';
    card.style.height = 'auto';
  }
}







// Selecione todos os links de ancoragem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Realize a rolagem suave até a seção, com um ajuste de deslocamento
    const targetId = this.getAttribute('href').substring(1); // Remove o '#' do link
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100, // Ajuste a posição do "respiro"
      behavior: 'smooth'
    });
  });
});





  //ativação de animações
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com as classes de animação
    const elements = document.querySelectorAll('.surge-bottom, .surge-right, .surge-left');
  
    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visualização
          entry.target.classList.add('visible');
          // Para observar uma vez e parar, economizando recursos
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta para que o elemento seja considerado visível quando 10% dele estiver na viewport
    });
  
    // Observa todos os elementos
    elements.forEach(element => {
      observer.observe(element);
    });
  });


  //botão formações
  document.getElementById('toggle-button').addEventListener('click', function () {
    const textosOriginais = document.querySelector('.textos-originais');
    const formacoes = document.querySelector('.formacoes');
    const artigos = document.querySelector('.artigos');
    const botaoExibirArtigos = document.getElementById('exibir-artigos');
    const botao = this;
  
    if (formacoes.style.display === 'none' || formacoes.style.display === '') {
      // Exibir as formações
      textosOriginais.classList.add('hidden');
      formacoes.classList.remove('hidden');
      artigos.classList.add('hidden');
  
      // Ajusta o display com transição
      setTimeout(() => {
        textosOriginais.style.display = 'none';
        formacoes.style.display = 'block';
        artigos.style.display = 'none';
      }, 500);
  
      botaoExibirArtigos.style.display = 'inline-block'; // Exibe o botão de Exibir Artigos
      botao.textContent = 'Exibir Menos';
    } else {
      // Exibir os textos originais
      textosOriginais.classList.remove('hidden');
      formacoes.classList.add('hidden');
      artigos.classList.add('hidden');
  
      // Ajusta o display com transição
      setTimeout(() => {
        textosOriginais.style.display = 'block';
        formacoes.style.display = 'none';
        artigos.style.display = 'none';
      }, 500);
  
      botaoExibirArtigos.style.display = 'none'; // Esconde o botão de Exibir Artigos
      botao.textContent = 'Exibir Formações';
    }
  });
  
  document.getElementById('exibir-artigos').addEventListener('click', function () {
    const formacoes = document.querySelector('.formacoes');
    const artigos = document.querySelector('.artigos');
    const botaoExibirFormacoes = document.getElementById('toggle-button');
    const botaoExibirArtigos = this;
  
    // Exibir os artigos
    formacoes.classList.add('hidden');
    artigos.classList.remove('hidden');
  
    // Ajusta o display com transição
    setTimeout(() => {
      formacoes.style.display = 'none';
      artigos.style.display = 'block';
    }, 500);
  
    botaoExibirArtigos.style.display = 'none'; // Esconde o botão Exibir Artigos
    botaoExibirFormacoes.textContent = 'Exibir Menos'; // Mantém o botão Exibir Menos
  });
  
  
  
  
  
  
  

//relatos
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  
  {
    name: "Pesadão Burguer's",
    position: '',
    photo:
      'imagens/pesadao.jpg',
    text:
      "A Dra. Vanessa é uma excelente advogada! Além de ser super profissional, confiável, sempre disponível a  esclarecer todas as nossas dúvidas. Nos deixa super a vontade quando vamos ao escritório. Seu carisma e prestatividade são sua marca registrada Obrigado por tudo e por tanto.",
  },
  {
    name: "Cristiane Miranda",
    position: '',
    photo:
      'imagens/cristiane-miranda.jpeg',
    text:
      " Meu direitos, por duas vezes  não seriam garantidos se não fosse o olhar holístico da Dra. Vanessa Arruda Longano, gratidão pela competência e todo o carinho pelos serviços prestados, profissional confiável atenciosa e ética eis seu grande diferencial.",
  },

  {
    name: "Lucas de Souza Gomes",
    position: '',
    photo:
      'imagens/sem-foto.jpg',
    text:
      "Super indico a Dr Longano. Ótima profissional,super atenciosa,prestativa e além de tudo muito educada. Indico com maior prazer!",
  },
  {
    name: "Fábio Fosschini Hert",
    position: '',
    photo:
      'imagens/fabio.jpeg',
    text:
      "Contratar a Dra. Vanessa foi uma das melhores decisões que tomei. Ela não apenas me orientou com competência e clareza em um processo trabalhista delicado, mas também demonstrou uma empatia rara que me fez sentir acolhido em todas as etapas. O atendimento foi impecável, sempre atenta aos detalhes e pronta para responder minhas dúvidas. Hoje, mais do que minha advogada, considero-a uma grande amiga. Recomendo seus serviços de olhos fechados!",
  },


 
 
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)

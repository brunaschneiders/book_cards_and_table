import React from "react";

import CardFlip from "./components/cardFlip/CardFlip";
import Table from "./components/table/Table";

import AnjosDemoniosCover from "./assets/img/anjos_e_demonios.jpg";
import CodigoVinciCover from "./assets/img/o_codigo_da_vinci.png";
import CincoPorquinhosCover from "./assets/img/os_cinco_porquinhos.png";
import ContinenteCover from "./assets/img/o_continente.png";
import RetratoDorianGrayCover from "./assets/img/o_retrato_de_dorian_gray.png";

import "./App.css";

const columns = [
  {
    dataField: "col1",
    text: "Nome",
  },
  {
    dataField: "col2",
    text: "Autor",
  },
  {
    dataField: "col3",
    text: "Editora",
  },
  {
    dataField: "col4",
    text: "Preço",
  },
  {
    dataField: "col5",
    text: "Nº Páginas",
  },
  {
    dataField: "col6",
    text: "Idioma",
  },
];

const data = [
  {
    id: 1,
    col1: "Anjos e Demônios",
    col2: "Dan Brown",
    col3: "Arqueiro",
    col4: "R$ 30,50",
    col5: "480",
    col6: "Português",
  },
  {
    id: 2,
    col1: "O Código da Vinci",
    col2: "Dan Brown",
    col3: "Arqueiro",
    col4: "R$ 14,99",
    col5: "432",
    col6: "Português",
  },
  {
    id: 3,
    col1: "O Continente",
    col2: "Érico Veríssimo",
    col3: "Comp. das Letras",
    col4: "R$ 46,70",
    col5: "416",
    col6: "Português",
  },
  {
    id: 4,
    col1: "Os Cinco Porquinhos",
    col2: "Agatha Christie",
    col3: "Globo Livros",
    col4: "R$ 24,93",
    col5: "296",
    col6: "Português",
  },
  {
    id: 5,
    col1: "O Retrato de Dorian Gray",
    col2: "Oscar Wilde",
    col3: "Penguin",
    col4: "R$ 25,12",
    col5: "264",
    col6: "Português",
  },
];

function App() {
  return (
    <div className="global">
      <h1>Livros Interessantes</h1>
      <div className="books">
        <CardFlip
          bookCover={AnjosDemoniosCover}
          bookDescription={`Às vésperas do 
                    conclave que vai eleger o novo Papa, Langdon é chamado às pressas para analisar um misterioso símbolo marcado a fogo no peito 
                    de um físico assassinado em um grande centro de pesquisas na Suíça. Ele descobre indícios de algo inimaginável: a assinatura 
                    macabra no corpo da vítima é dos Illuminati, uma poderosa fraternidade que ressurgiu disposta a levar a cabo a lendária vingança 
                    contra a Igreja Católica. De posse de uma nova arma devastadora, roubada do centro de pesquisas, ela ameaça explodir a Cidade do 
                    Vaticano e matar os quatro cardeais mais cotados para a sucessão papal. A antiga sociedade ressurgiu disposta a levar a cabo a 
                    lendária vingança contra a Igreja Católica, seu inimigo mais odiado. De posse de uma nova arma devastadora, roubada do centro de 
                    pesquisas, ela ameaça explodir a Cidade do Vaticano e matar os quatro cardeais mais cotados para a sucessão papal. Correndo contra 
                    o tempo, Langdon voa para Roma junto com Vittoria Vetra, uma bela cientista italiana. Numa caçada frenética por criptas, igrejas e 
                    catedrais, os dois desvendam enigmas e seguem uma trilha que pode levar ao covil dos Illuminati - um refúgio secreto onde está a 
                    única esperança de salvação da Igreja nesta guerra entre ciência e religião. Em Anjos e Demônios, Dan Brown demonstra novamente sua 
                    habilidade de entremear suspense com fascinantes informações sobre ciência, religião e história da arte.`}
        ></CardFlip>
        <CardFlip
          bookCover={CodigoVinciCover}
          bookDescription={`Um assassinato 
          dentro do Museu do Louvre, em Paris, traz à tona uma sinistra conspiração para revelar um segredo que foi protegido por uma 
          sociedade secreta desde os tempos de Jesus Cristo. A vítima é o respeitado curador do museu, Jacques Saunière, um dos líderes 
          dessa antiga fraternidade, o Priorado de Sião, que já teve como membros Leonardo da Vinci, Victor Hugo e Isaac Newton. Momentos 
          antes de morrer, Saunière deixa uma mensagem cifrada que apenas a criptógrafa Sophie Neveu e Robert Langdon, um simbologista, 
          podem desvendar. Eles viram suspeitos e detetives enquanto tentam decifrar um intricado quebra-cabeças que pode lhes revelar um 
          segredo milenar que envolve a Igreja Católica. Apenas alguns passos à frente das autoridades e do perigoso assassino, Sophie e 
          Robert vão à procura de pistas ocultas nas obras de Da Vinci e se debruçam sobre alguns dos maiores mistérios da cultura ocidental 
          - da natureza do sorriso da Mona Lisa ao significado do Santo Graal. Mesclando os ingredientes de um envolvente suspense com 
          informações sobre obras de arte, documentos e rituais secretos, Dan Brown consagrou-se como um dos autores mais brilhantes da 
          atualidade.`}
        ></CardFlip>
        <CardFlip
          bookCover={CincoPorquinhosCover}
          bookDescription={`Em 
          um de seus mais intrigantes casos, Hercule Poirot enfrentará um opositor que desafiará sua inteligência e sagacidade: o tempo. 
          Procurado pela bela jovem Carla Lemarchant, Poirot é contratado para investigar um terrível crime que acontecera dezesseis anos 
          antes, e que envolveu os pais da moça. Caroline Crale foi condenada à prisão perpétua e submetida a trabalhos forçados pelo 
          assassinato do marido, o famoso pintor Amyas Crale. Mas, antes de morrer na prisão, enviara à filha, então criança, uma carta 
          afirmando sua inocência. Tantos anos depois, não há mais evidências a serem colhidas. As pistas e provas deverão ser tomadas 
          apenas na análise psicológica das testemunhas, e, para tanto, Poirot contará com sua capacidade de compreensão profunda do 
          espírito humano para desvendar esse mistério. Nas entrevistas que Poirot faz com as cinco testemunhas do crime se revelam seus 
          caracteres e intenções, e fortes sentimentos vêm à tona: angústia, inveja, amor, desejo, cobiça, ciúme. Quem, além de Caroline, 
          teria motivos para assassinar Amyas? O que se esconde por trás dos relatos das testemunhas? O que de fato aconteceu na propriedade 
          dos Crale naquele fatídico dia? Nada leva a crer que alguma daquelas pessoas possa ter assassinado Amyas Carle, impulsionando 
          o leitor a prestar muita atenção aos detalhes dos relatos, a fim de acompanhar o aguçado raciocínio de Poirot nesta trama 
          cheia de sutilezas, e que culmina em uma surpreendente revelação do assassino e dos curiosos motivos do assassinato.`}
        ></CardFlip>
        <CardFlip
          bookCover={ContinenteCover}
          bookDescription={`A trilogia O tempo 
          e o vento, que inaugura o relançamento da obra completa de Erico Verissimo pela Companhia das Letras, é a mais famosa saga da 
          literatura brasileira. São 150 anos da história do Rio Grande do Sul e do Brasil que o escritor compôs em três partes - O 
          Continente, O retrato e O arquipélago -, publicadas entre 1949 e 1962. O primeiro volume de O Continente abre a trilogia. Erico 
          mergulha no passado do Rio Grande do Sul e do Brasil em busca das raízes do presente. O país vive um momento de redescoberta de 
          si e de redefinição de caminhos, com o fim do Estado Novo e da Segunda Guerra Mundial, e o começo da Guerra Fria. Essa é a 
          moldura para sua visão vertiginosa da violência e das paixões na definição da fronteira e nas guerras civis de seu estado natal. 
          O Continente, segundo o crítico literário Antonio Candido "um dos grandes romances da literatura brasileira", lança o leitor em 
          plena ação, durante o cerco das tropas federalistas ao Sobrado do republicano Licurgo Cambará, em 1895, para em seguida retroceder 
          um século e meio e mostrar as origens míticas e históricas do clã Terra Cambará. Acompanhando a formação dessa família, Erico nos 
          apresenta toda a saga.`}
        ></CardFlip>
        <CardFlip
          bookCover={RetratoDorianGrayCover}
          bookDescription={`Em 1891, quando foi publicado em sua versão final, O retrato de Dorian Gray foi recebido com escândalo e 
          provocou um intenso debate sobre o papel da arte em relação à moralidade. Alguns anos mais tarde, o livro foi inclusive 
          usado contra o próprio autor em processos judiciais, como evidência de que ele possuía "uma certa tendência" - no caso, a 
          homossexualidade, motivo pelo qual acabou condenado a dois anos de prisão por atentado ao pudor. Mais de cem anos depois, 
          porém, o único romance de Oscar Wilde continua sendo lido e debatido no mundo inteiro, e por questões que vão muito além 
          do moralismo do fim do período vitoriano na Inglaterra, definida por um dos personagens do livro como "a terra natal da 
          hipocrisia". Seu tema central - um personagem que leva uma vida dupla, mantendo uma aparência de virtude enquanto se entrega 
          ao hedonismo mais extremado - tem apelo atemporal e universal, e sua trama se vale de alguns dos traços que notabilizaram a 
          melhor literatura de sua época, como a presença de elementos fantásticos e de grandes reflexões filosóficas, além do senso 
          de humor sagaz e do sarcasmo implacável característicos de Wilde.`}
        ></CardFlip>
      </div>
      <Table tableData={data} tableColumns={columns} />
    </div>
  );
}

export default App;

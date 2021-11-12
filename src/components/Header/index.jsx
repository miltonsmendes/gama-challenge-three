import HeaderImage from '../../assets/images/header-image.png';

import './styles.scss';


export function Header() {

    return (
        <div className="header-container">

            <div className="logo-container">
                <img className="background-header" src={HeaderImage}></img>
            </div>

            <div className="container-text">
                <h1>Quem somos</h1>
                <p>
                No dia 10 de outubro de 1998, Ivani Alves de Souza e sua esposa Elzi Pereira de Souza, juntamente com alguns amigos, fundaram o Lar Espírita da Terceira Idade André Luiz - LEAL, com a finalidade filantrópica de realizar o acolhimento de pessoas idosas vítimas de violência, abandono, pobreza e exploração.
Nessa ocasião, o Lar foi instalado num imóvel residencial na cidade de Porto Velho, situado na rua Manuel Laurentino de Souza (antiga rua Chile), s/n, no Bairro Embratel, com capacidade para abrigar nove idosos de ambos os sexos.

Desta forma, teve início o desafio de acolher idosos para receberem cuidados no Lar recém-criado. A procura pelo acolhimento no Lar André Luiz foi aumento de forma assustadora, pois em curto espaço de tempo a Casa já estava com suas vagas preenchidas, o que levou o casal Ivo e Elzi a procurarem um imóvel de dimensões maiores: esse era o novo desafio que encaravam promover a construção da sede próprio que oferecesse aos idosos espaço amplo, proporcionando-lhes melhor qualidade de vida, conforto, segurança e todas as condições necessárias as boas condições de vida deles. Após exaustivas buscas, o casal recebeu o terreno na Rua Vera, n.º 5801, bairro Igarapé, nessa cidade de Porto velho. E foi nesse espaço, preparado por Deus, que foi erguida a sede própria do Lar André Luiz. Seu Fundador, Ivani, não deixa de registrar sempre que, sem a forte presença de Deus na obra, e o apoio e a ajuda da comunidade, de empresários e de órgãos diversos, nada seria possível. Em 2006, Ivani fez a mudança dos idosos para a sede própria, onde foi construindo aos poucos, com ajuda de Deus e de todos.
                </p>
            </div>

        </div>
    );

}
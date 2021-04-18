import React, { useEffect } from 'react';
import styled from 'styled-components';
import Parallax from '../../components/Parallax';
import logoImg from '../../img/logo.jpg';
import { Logo } from '../../styled-components/authForms';
// https://rapidapi.com/mararrdeveloper/api/elenasport-io1?endpoint=apiendpoint_70030bd2-ca95-4849-b4ce-7e90e025b050

const Block = styled.section`
  padding: 60px;
  width: 1280px;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 1920px) {
    max-width: 80%;
  }

  @media screen and (max-width: 767px) {
    padding: 30px;
  }

  @media screen and (max-width: 479px) {
    padding: 30px 15px;
  }
`;

const P = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
`;

const FirstCharacter = styled.div`
  font-weight: 400;
  float: left;
  font-size: 84px;
  line-height: 64px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
  color: ${(props) => (props.color ? props.color : '#000000')};
`;

const Home = () => {
  useEffect(() => {
    document.title = `Marcos Díaz Navazo`;
  }, []);

  return (
    <div>
      <Parallax
        text="Marcos Díaz"
        top
        imageUrl="https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80"
      />
      <Block className="toBottom">
        <Logo src={logoImg} maxWidth="250px" />
        <P>
          <FirstCharacter color="#3b8595">E</FirstCharacter>n un lugar de la Mancha, de cuyo nombre
          no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
          adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero,
          salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún
          palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto
          della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de
          lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su
          casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un
          mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad
          de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto
          de rostro, gran madrugador y amigo de la caza.
        </P>
        <P className="line-break margin-top-10" />
        <P className="margin-top-10">
          Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna
          diferencia en los autores que deste caso escriben; aunque por conjeturas verosímiles se
          deja entender que se llamaba Quijana. Pero esto importa poco a nuestro cuento: basta que
          en la narración dél no se salga un punto de la verdad. Es, pues, de saber que este
          sobredicho hidalgo, los ratos que estaba ocioso -que eran los más del año-, se daba a leer
          libros de caballerías, con tanta afición y gusto que olvidó casi de todo punto el
          ejercicio de la caza, y aun la administración de su hacienda; y llegó a tanto su
          curiosidad y desatino en esto, que vendió muchas hanegas de tierra de sembradura para
          comprar libros de caballerías en que leer, y así, llevó a su casa todos cuantos pudo haber
          dellos.
        </P>
      </Block>
      <Parallax
        text="BLOQUE 2"
        imageUrl="https://images.unsplash.com/photo-1584120075590-9876c53cb48c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
      />
      <Block className="toBottom">
        <P>
          <FirstCharacter color="#3d3c3a">Y</FirstCharacter>, de todos, ningunos le parecían tan
          bien como los que compuso el famoso Feliciano de Silva, porque la claridad de su prosa y
          aquellas entricadas razones suyas le parecían de perlas; y más cuando llegaba a leer
          aquellos requiebros y cartas de desafíos, donde en muchas partes hallaba escrito: La razón
          de la sinrazón que a mi razón se hace, de tal manera mi razón enflaquece, que con razón me
          quejo de la vuestra fermosura. Y también cuando leía: los altos cielos que de vuestra
          divinidad divinamente con las estrellas os fortifican, y os hacen merecedora del
          merecimiento que merece la vuestra grandeza.
        </P>
        <P className="line-break margin-top-10" />
        <P className="margin-top-10">
          Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso -que eran los
          más del año-, se daba a leer libros de caballerías, con tanta afición y gusto que olvidó
          casi de todo punto el ejercicio de la caza, y aun la administración de su hacienda; y
          llegó a tanto su curiosidad y desatino en esto, que vendió muchas hanegas de tierra de
          sembradura para comprar libros de caballerías en que leer, y así, llevó a su casa todos
          cuantos pudo haber dellos.
        </P>
      </Block>
      <Parallax
        text="BLOQUE 3"
        imageUrl="https://images.unsplash.com/photo-1516731566880-919c39006c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80"
      />
      <Block className="toBottom">
        <P>
          <FirstCharacter color="#c48660">Q</FirstCharacter>uieren decir que tenía el sobrenombre de
          Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso
          escriben; aunque por conjeturas verosímiles se deja entender que se llamaba Quijana. Pero
          esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de
          la verdad. Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso
          -que eran los más del año-, se daba a leer libros de caballerías, con tanta afición y
          gusto que olvidó casi de todo punto el ejercicio de la caza, y aun la administración de su
          hacienda; y llegó a tanto su curiosidad y desatino en esto, que vendió muchas hanegas de
          tierra de sembradura para comprar libros de caballerías en que leer, y así, llevó a su
          casa todos cuantos pudo haber dellos.
        </P>
        <P className="line-break margin-top-10" />
        <P className="margin-top-10">
          En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía
          un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una
          olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los
          sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las
          tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo
          para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con
          su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una
          sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el
          rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años;
          era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la
          caza.
        </P>
      </Block>
    </div>
  );
};

export default Home;

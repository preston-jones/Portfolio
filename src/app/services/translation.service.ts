import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLang: string = 'de';

  constructor() {
  }


  setCurrentLanguageInService(lang: string) {
    this.currentLang = lang;
    console.log('IN SERVICE - Language set to: ' + this.currentLang);
  }

  aboveTheFold: { [key: string]: { headline: string} } = {
    en: {
      headline: 'Developer',
    },
    de: {
      headline: 'Entwickler',
    }
  }

  aboutMe: { [key: string]: { headline: string; quote: string; introduction: string; content: any } } = {
    en: {
      headline: 'About Me',
      quote: '"Every great Idea starts with a simple line of code."',
      introduction: 'Hi, I am Preston!',
      content: {
        paragraph1: 'I am a passionate frontend developer and musician based in Germany. With over ten years of experience as a professional vocalist and upright bass player, I bring a unique perspective to my work in frontend development.',
        paragraph2: 'In both music and development, I start with a simple idea, a melody, a few notes, or a line of code and build around it. This approach allows me to create innovative and dynamic user interfaces that are not only functional but also visually appealing and user-friendly.',
        paragraph3: 'Throughout my time as a frontend developer, I have honed my skills in transforming complex problems into elegant solutions. My work emphasizes intuitive design and seamless user experiences, ensuring that each project meets the highest standards of quality and aesthetics.',
        paragraph4: 'I invite you to explore my portfolio and a selection of projects I have developed. If you are interested in collaborating or simply want to say hello, please feel free to contact me.',
      }
    },
    de: {
      headline: 'Über mich',
      quote: '"Jede großartige Idee beginnt mit einer einfachen Zeile Code."',
      introduction: 'Hi, ich bin Preston!',
      content: {
        paragraph1: 'Ich bin leidenschaftlicher Frontend-Entwickler und Musiker aus Deutschland. Mit über zehn Jahren Erfahrung als professioneller Sänger und Kontrabassist ist es mir möglich, eine einzigartige Perspektive in die Frontend-Entwicklung mit einzubringen.',
        paragraph2: 'Sowohl in der Musik als auch in der Entwicklung beginne ich mit einer einfachen Idee, einer Melodie, ein paar Noten oder einer Codezeile und baue darauf auf. Dieser Ansatz ermöglicht es mir, innovative und dynamische Benutzeroberflächen zu gestalten, die nicht nur funktional, sondern auch optisch ansprechend und anwenderfreundlich sind.',
        paragraph3: 'Im Laufe meiner Zeit als Frontend Entwickler habe ich meine Fähigkeiten darin verfeinert, komplexe Probleme in elegante Lösungen zu verwandeln. Mein Fokus liegt auf intuitivem Design und nahtlosen Nutzererlebnissen, wodurch jedes Projekt höchsten Qualitäts- und Ästhetikansprüchen gerecht wird.',
        paragraph4: 'Ich lade Sie ein, mein Portfolio zu erkunden und eine Auswahl an Projekten, die ich entwickelt habe. Wenn Sie an einer Zusammenarbeit interessiert sind oder einfach nur Hallo sagen möchten, freue ich mich über Ihre Nachricht.',
      }
    }
  }

  mySkills: { [key: string]: { headline: string} } = {
    en: {
      headline: 'My Skills',
    },
    de: {
      headline: 'Meine Skills',
    }
  }
}

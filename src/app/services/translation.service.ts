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

  aboveTheFold: { [key: string]: { headline: string } } = {
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
        paragraph1: 'Frontend Entwickler und Musiker aus Leidenschaft.',
        paragraph2: 'Mit über zehn Jahren Erfahrung als professioneller Sänger und Kontrabassist bringe ich eine einzigartige Kombination aus Kreativität und technischer Expertise mit und habe gelernt, wie man aus einer einfachen Idee etwas Großes entstehen lässt – seien es ein paar Noten, eine Melodie, oder ein paar Zeilen Code. Diese kreative Herangehensweise ermöglicht es mir, beim Programmieren und Lösen komplexer Aufgaben neue Perspektiven einzunehmen und innovative Lösungen zu entwickeln.',
        paragraph3: 'Während meiner Ausbildung als Frontend-Entwickler habe ich umfangreiche praktische Erfahrungen in der Entwicklung und Erstellung von Webseiten und Business-Apps gesammelt, insbesondere mit dem Framework Angular und TypeScript.',
        paragraph4: 'Ich lade Sie herzlich ein, mein Portfolio zu erkunden und sich einen Eindruck von den Projekten zu verschaffen, die ich während meiner Ausbildung realisiert habe. Wenn Sie an einer Zusammenarbeit interessiert sind oder einfach nur Hallo sagen möchten, freue ich mich darauf, von Ihnen zu hören.',
      }
    }
  }

  mySkills: { [key: string]: { headline: string } } = {
    en: {
      headline: 'My Skills',
    },
    de: {
      headline: 'Meine Skills',
    }
  }
}

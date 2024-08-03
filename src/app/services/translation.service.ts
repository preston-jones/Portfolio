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
  }

  aboutMe: { [key: string]: { title: string; introduction: string; content: string } } = {
    en: {
      title: 'About Me',
      introduction: 'Hi, I am Preston!',
      content: 'I am a passionate frontend developer and musician based in Germany. With over ten years of experience as a professional vocalist and upright bass player, I bring a unique perspective to my work in frontend development. In both music and development, I start with a simple idea, a melody, a few notes, or a line of code and build around it. This approach allows me to create innovative and dynamic user interfaces that are not only functional but also visually appealing and user-friendly. Throughout my time as a frontend developer, I have honed my skills in transforming complex problems into elegant solutions. My work emphasizes intuitive design and seamless user experiences, ensuring that each project meets the highest standards of quality and aesthetics. I invite you to explore my portfolio and review a selection of the projects I have created and developed. If you are interested in collaborating or simply want to say hello, please feel free to contact me.'
    },
    de: {
      title: 'Über mich',
      introduction: 'Hi, ich bin Preston!',
      content: 'Ich bin leidenschaftlicher Frontend-Entwickler und Musiker aus Deutschland. Mit über zehn Jahren Erfahrung als professioneller Sänger und Kontrabassist ist es mir möglich, eine einzigartige Perspektive in die Frontend-Entwicklung mit einzubringen. Sowohl in der Musik als auch in der Entwicklung beginne ich mit einer einfachen Idee, einer Melodie, ein paar Noten oder einer Codezeile und baue darauf auf. Dieser Ansatz ermöglicht es mir, innovative und dynamische Benutzeroberflächen zu gestalten, die nicht nur funktional, sondern auch optisch ansprechend und anwenderfreundlich sind. Im Laufe meiner Zeit als Frontend Entwickler habe ich meine Fähigkeiten darin verfeinert, komplexe Probleme in elegante Lösungen zu verwandeln. Mein Fokus liegt auf intuitivem Design und nahtlosen Nutzererlebnissen, wodurch jedes Projekt höchsten Qualitäts- und Ästhetikansprüchen gerecht wird. Ich lade Sie ein, mein Portfolio und eine Auswahl der Projekte zu erkunden, die ich kreiert und entwickelt habe. Wenn Sie an einer Zusammenarbeit interessiert sind oder einfach nur Hallo sagen möchten, freue ich mich über Ihre Nachricht.'
    }
  }
}

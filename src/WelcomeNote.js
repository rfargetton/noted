import raw from 'raw.macro' ;
import dayjs from 'dayjs' ;

const markdown = raw('./WelcomeNote.md');

const WelcomeNote = {
  id : 1,
  text: markdown,
  date: dayjs().format('DD/MM/YYYY')
}

export default WelcomeNote ;

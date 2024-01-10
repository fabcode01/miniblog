//css
import { Link } from 'react-router-dom'
import styles from './About.module.css'


const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini<span>Blog</span></h2>
        <p>Este projeto foi criado com <strong>React</strong> e <strong>Firebase</strong><br/>com o objetivo de colocar em prática métodos aprendidos no curso</p>

        <Link to='/posts/create' className='btn'>Criar Post</Link>
    </div>
  )
}

export default About
import './App.scss';
import Resume from './Resume';

const data = {
    bio: {
        firstName: 'Grzegorz',
        lastName: 'Patyk',
        email: 'grzegorzxpatyk@gmail.com',
        phoneNumber: '(+48) 662 444 438',
        about: 'Creative Front End Developer taking first steps in software development industry. Trained architect, self-taught software developer. Wishing to bring my problem solving and analytical thinking skills from architecture into web development business. Passionate about dogs, visual arts and sustainable architecture.',
    },
    experience: [
        {
            position: 'Frontend development intern',
            duration: 'Jun 2021 - Present',
            company: 'Beeanco',
            location: 'Remote',
            description:
                'Implemented new Svelte components of the web application, improved already existing ones. Standardized the output to a responsive, mobile-first approach using SASS. Worked on the verge of back-end and front-end using WordPress. Effectively translated UI designs to code implementations.',
        },
        {
            position: 'Freelance web developer',
            duration: 'Feb 2021 - Present',
            company: 'Freelance',
            location: 'Remote',
            description:
                'Created responsive websites for various clients, using Wordpress, PHP, JavaScript, CSS and HTML.',
        },
        {
            position: 'Junior Architect',
            duration: 'Jul 2020 - Feb 2021',
            company: 'K3 Architektci',
            location: 'Cracow',
            description:
                'Prepared architectural designs for residential, commercial and public objects using Blender and Adobe Photoshop. Created visualizations and animations for competition designs. Took part in meetings with clients.',
        },
    ],
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Resume {...data}></Resume>
            </header>
        </div>
    );
}

export default App;

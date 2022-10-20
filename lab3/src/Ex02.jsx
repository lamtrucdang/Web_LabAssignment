import * as React from 'react';
import * as ReactDOM from 'react-dom';

const root =
    ReactDOM.createRoot(document.getElementById('root'));

function Ex02() {
        return (
            <section>
                <header>
                    <h1>A Header</h1>
                </header>
                <nav>
                    <a href="item"> Nav Item</a>
                </nav>
                <main>
                    <p>The main content...</p>
                </main>
                <footer>
                    <small>&copy; 2021</small>
                </footer>
            </section>
        );
    }

export default Ex02;
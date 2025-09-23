const e = React.createElement;

function Hero() {
  return (
    e('div', { className: 'hero-content' }, [
      e('h1', { key: 'title' }, [
        'Bienvenue chez ',
        e('span', { style: { color: '#1E90FF' }, key: 'span' }, 'IT Sanctuary'),
      ]),
      e('p', { key: 'desc' },
        'Accélérez votre croissance grâce au digital. Nous accompagnons les entreprises et entrepreneurs vers l’excellence numérique.'),
      e('div', { className: 'hero-buttons', key: 'btns' }, [
        e('a', { href: 'contact.html', className: 'btn btn-primary', key: 'contact' }, 'Commencez votre projet'),
        e('a', { href: 'about.html', className: 'btn btn-outline', key: 'about' }, 'En savoir plus'),
      ])
    ])
  );
}

ReactDOM.createRoot(document.getElementById('react-root')).render(e(Hero));
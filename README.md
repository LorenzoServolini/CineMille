# 🎦 CineMille

Prototipo di un'applicazione web per la visione della programmazione dei film in un cinema multisala.
Essa consente di visualizzare l'elenco dei film in programmazione con delle brevi informazioni. Selezionandone uno dalla lista, è possibile visualizzarne i dettagli (es. valutazione, descrizione ecc.) in una pagina dedicata.

Come base di dati per l'elenco dei film in programmazione è stato usato The Movie Database (TMDB).

L'applicazione è stata sviluppata per una challenge organizzata da [Lascaux](https://www.lascaux.it/).

## 💻 Tecnologie

Per la realizzazione del progetto sono state utilizzate:
- [npm](https://docs.npmjs.com/about-npm), un package-manager per JavaScript;
- [Vite](https://vitejs.dev/), build tool per lo sviluppo di applicazioni web;
- la libreria [React](https://react.dev/), che permette la realizzazione di UI in modo semplice ed efficiente.

Lo stile è stato sviluppato a mano utilizzando soltanto CSS. <br>

Risorse utili: <br>
- [Postman](https://www.postman.com/) → Strumento semplicissimo per la creazione di richieste HTTP e per il testing delle API


## 🎯 Installazione

Prima di cominciare: se non si possiedono gli strumenti elencati di seguito e si intende scaricarli **solo** per provare il prototipo, è consigliabile usare una macchina virtuale (ad esempio [Virtual Box](https://www.virtualbox.org/)) al fine di non sporcare il proprio sistema operativo (solo Node.js richiede più di 3GB considerato l'elevato numero di dipendenze).

1. Per usare l'applicazione, clonare la repository (`git clone https://github.com/LorenzoServolini/CineMille.git`) o scaricarla manualmente.
2. Installare npm, contenuto nel pacchetto di Node.js: https://nodejs.org/it. Aggiornarlo all'ultima versione: `npm install -g npm`.
3. Installare le dipendenze del prototipo: `npm install`.
4. Registrarsi su [TMDB](https://www.themoviedb.org/) e successivamente creare una chiave per l'accesso alle API dal proprio account personale: https://www.themoviedb.org/settings/api.
5. Creare un file `.env` dove inserire la chiave appena creata per le api di TMDB:
```
VITE_API_KEY=<CHIAVE>
```
6. Avviare un server web locale con l'applicazione in esecuzione: `npm run preview`.


## ⌛ Sviluppi futuri
- Miglioramento dell’aspetto grafico
- Scalabilità/ridimensionamento dell'applicazione su schermi piccoli
- Uso del file [`.npm-init.js`](https://docs.npmjs.com/creating-a-package-json-file) (tramite `npm init`) per porre domande personalizzate che permettono di _adattare_ l'applicazione alle varie esigenze (esempio: 'In che lingua devono essere mostrate le descrizioni dei film?')

## 💪 Extra
È possibile generare un sito web statico (e avviare un server web locale che lo esegua) lanciando il comando `npm build`.

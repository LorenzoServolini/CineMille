# 🎦 CineMille

Prototipo di un'applicazione web per la visione della programmazione dei film in un cinema multisala.
Essa consente di visualizzare l'elenco dei film in programmazione con delle brevi informazioni. Selezionandone uno dalla lista, è possibile visualizzarne i dettagli (es. valutazione, descrizione ecc.) in una pagina dedicata.

Come base di dati per l'elenco dei film in programmazione è stato usato The Movie Database (TMDB).

L'applicazione è stata sviluppata per una challenge organizzata da [Lascaux](https://www.lascaux.it/).

## 💻 Tecnologie

Per la realizzazione del progetto è stato utilizzato [npm](https://docs.npmjs.com/about-npm), [Vite](https://vitejs.dev/) e la libreria [React](https://react.dev/).
Lo stile è stato sviluppato a mano utilizzando soltanto CSS.

## 🎯 Installazione

> Prima di cominciare: se non si possiedono gli strumenti elencati di seguito e si intende scaricarli **solo** per provare il prototipo, è consigliabile usare una macchina virtuale (ad esempio [Virtual Box](https://www.virtualbox.org/)) al fine di non sporcare il proprio sistema operativo (solo Node.js richiede più di 3GB considerato l'elevato numero di dipendenze).

Per usare l'applicazione, clonare la repository:
```

git clone https://github.com/LorenzoServolini/CineMille.git

```
(o scaricarla manualmente)


Installare npm, contenuto nel pacchetto di Node.js: https://nodejs.org/it.

Aggiornare npm all'ultima versione:
```

npm install -g npm

```

Installare le dipendenze del prototipo:
```

npm install

```

Registrarsi su [TMDB](https://www.themoviedb.org/) e successivamente creare una chiave per l'accesso alle API dal proprio account personale: https://www.themoviedb.org/settings/api.

Creare un file `.env` dove inserire la chiave appena creata per le api di TMDB:
```

VITE_API_KEY=<CHIAVE>

```

Avviare un server web locale con l'applicazione in esecuzione:
```

npm run preview

```
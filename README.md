# Pokedemo

M1 IL - Dujardin Nolwenn

L'application Pokedemo permet de récupérer des informatons concernant un pokémon en ce servant de l'api [PokeApi](https://pokeapi.co/)

Ce projet est la réalisation du sujet disponible [ici](https://github.com/barais/teaching-jxs-angular/)

La page du dépot est disponible [ici](https://nolwenn-dujardin.github.io/pokedemo/)

## Installation

Pour accéder à la page sur votre machine personnelle :
- Cloner le dépôt sur votre machine
```console
git clone https://github.com/nolwenn-dujardin/pokedemo.git
```
- Depuis le dossier du dépôt, lancer le serveur de développement
```console
ng serve
```

- Accéder à la page depuis n'importe quel navigateur depuis l'url suivante
```
http://localhost:4200/
```


### Fonctionnalités

On limite la récupération de pokémons par réquête à 50. 

L'utilisateur a accès à un bouton "Fetch more pokemon" qui lui permet d'ajouter 50 pokémons en plus à la liste.

Le nombre de pokémons déjà récupéré est affiché.

### Bugs/Modifications possibles

- Les descriptions des pokémons peuvent être dans des langues différentes
- Les descriptions des pokémons peuvent apparaître plusieurs fois (info: une description peut être utilisée pour plusieurs jeux différents)
- Certains pokémons (version alternative de pokémons existants) n'ont pas détails (sprite, description, etc) fournis par PokeApi, les détails affichés resteront ceux du précédent pokémon sélectionné

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/HqilWbec)
**FRAMEWORKS 1**

# Pet app opgave
### **Opgaven indeholder følgende filer:**
- en figma fil (i assets mappen)
- svg filer til illustrationer (i assets mappen)

### **Opgavebeskrivelse**
- Brug Vite til at installere en react applikation.
  (BENSPÆND: Mappen skal være tom, når du laver en ny vite app. Du får mulighed for at ignorere de filer som ligger i mappen, men dette VIL overskrive denne readme fil. Du kan med fordel omdøbe den til fx. opgave.md)
- du kan bruge `npm create vite@latest .` til at oprette en react app i den mappe du allerede står i uden at oprette en ny mappe.
- Du skal bruge React Router til at navigere mellem siderne i appen.
- Du skal fetche hundende fra det udleverede api (se nedenfor).
- Du skal bruge et route parameter til at sende id'et videre til detaljesiden, og fetche en enkelte hund på detalje siden.
- husk at lave en branch til dit arbejde

### **Mål**
- Formålet med opgaven er at træne:
  1. At bruge React Router til at lave en applikation med flere sider i. Sørg for at dit fokus ligger primært på dette. Styling er på denne opgave et 'nice-to-have'.
  2. At lave dynamiske routes med parametre, så du kan sende information med fra en side til en anden.
  3. Bruge det indbyggede `useParams` hook til at 'fiske' id'et på detaljesiden, så du kan fetche den enkelte hund.
  4. Bruge ikoner fra react-icons biblioteket.
  5. At opdele din kode i komponenter.
  
### **Ekstraopgaver hvis du er hurtigt færdig**
  1. Lav styling til siderne med CSS.
  2. I bredden bør applikatinen passe til alle mobiltelefoner. Tænk over dit valg af layoutmodel(ler).

### **API til opgaven**
  Du kan klone api'et til opgaven her: https://github.com/rts-cmk-opgaver/frameworks1-petapp-api

### **Husk!**
- Commit og push ofte
- Tænk over dine commit-beskeder. Din commit historik må gerne afspejle udviklingen i dit projekt med små beskrivelser. 




# Opgave: Admin-side til Pet Finder App

Du skal udvide din Pet Finder applikation, som er bygget med Vite og React, med en ny admin-side. Formålet er at give dig mulighed for at tilføje nye dyr til dit API, der kører på JSON-server.  

Admin-siden skal være tilgængelig via en separat route, og den skal indeholde en formular, hvor du kan indtaste oplysninger om et dyr. Når du indsender formularen, skal data sendes som en POST-request til JSON-server, så dyret gemmes i API’et og derefter vises i din eksisterende Pet Finder app.  

## Krav
- Opret en ny route i React, fx `/admin`, som viser din admin-side.  
- Lav en formular med de nødvendige felter og håndter input med React state.  
- Brug `fetch` til at sende POST-request til JSON-server.  
- Sørg for, at listen over dyr opdateres, så det nye dyr vises i appen.  

## Ekstra udfordring
Når du har styr på det grundlæggende, kan du udfordre dig selv yderligere ved at:  
- Tilføje funktioner til at redigere eller slette dyr.  
- Lave en simpel adgangskontrol, så kun bestemte brugere kan se admin-siden.  
Link video prezentare: https://youtu.be/j4Y3bGZJESc  
Link aplicație Vercel: https://cc-proiect-beryl.vercel.app/  
Link aplicație AWS: http://18.194.3.10/ (închisă pentru a nu genera costuri suplimentare, se poate vedea funcțională in prezentarea video si in pașii descriși pentru publicarea pe aws)

# Introducere

Next.js este un framework open-source care facilitează crearea de aplicații web rapide și performante, cu un focus special pe optimizarea pentru motorul de căutare și îmbunătățirea experienței de utilizare. Aplicația dezvoltata este una de tip REST si are ca scop eficientizarea procesului de organizare și gestionare a task-urilor zilnice, atât pentru utilizare personală, cât și în mediul profesional. In plus, aplicația integrează chatbot-ul celor de la OpenAI, ChatGPT, prin intermediul API-ului oferit de aceștia, pe post de asistent personal cu ideea de a ajuta la îndeplinirea task-urilor.

# Descriere tehnologii cloud folosite

## MongoDB

MongoDB Atlas este un serviciu de baze de date cloud (DBaaS) oferit de compania MongoDB, care oferă o soluție complet gestionată pentru a rula și scala baze de date MongoDB în cloud. Atlas elimină necesitatea de a instala și de a gestiona o bază de date MongoDB propriu-zisă, în schimb oferind utilizatorilor acces la o infrastructură scalabilă și securizată de tip cloud, care este gestionată de echipa de experți de la MongoDB. Sunt oferite o gamă largă de funcții, inclusiv backup-uri automate, scalabilitate, monitorizare în timp real a performanței, patch-uri de securitate și conformitate cu standardul GDPR. De asemenea, Atlas oferă opțiuni de conectare flexibile și poate fi integrat cu o varietate de servicii și instrumente de cloud.

Interfața cloud.mongodb.com  
![image](https://i.imgur.com/xSNHZmM.png)

MongoDB Compass  
![image](https://i.imgur.com/arOsehk.png)

## Vercel

Vercel este o platformă de dezvoltare și găzduire a aplicațiilor web și mobile de tip serverless, care permite dezvoltatorilor să creeze, să lanseze și să scaleze aplicații fără a fi nevoie să gestioneze propriul lor server. Platforma este specializată în dezvoltarea de aplicații web statice și generării dinamice a conținutului la timpul de execuție folosind serverless functions. Aceasta oferă un set puternic de instrumente pentru a ajuta dezvoltatorii să creeze și să implementeze aplicații web cu o performanță ridicată, cu o scalabilitate automată și cu o securitate avansată. Printre caracteristicile sale se numără integrarea cu Git, preview-urile automate ale schimbărilor de cod, scalabilitatea automată, gestionarea DNS, analiza performanței și o gamă largă de integrări cu alte servicii și instrumente de dezvoltare web. In plus, deoarece Vercel este proprietarul Next.js, cele doua servicii sunt integrate in mod nativ.

![image](https://i.imgur.com/3S5q7Fz.png)

## Amazon EC2

Amazon Elastic Compute Cloud (EC2) este un serviciu de calcul cloud oferit de Amazon Web Services (AWS), care oferă o infrastructură virtuală scalabilă pentru a rula aplicații și servicii web. EC2 este un serviciu IaaS (Infrastructure as a Service) care permite utilizatorilor să ruleze aplicații într-un mediu de cloud privat, fără a fi nevoie să-și construiască propria infrastructură fizică.

EC2 permite utilizatorilor să ruleze mașini virtuale pe servere fizice ale AWS, astfel încât să poată beneficia de o capacitate de calcul scalabilă în funcție de nevoile lor. Utilizatorii pot alege dimensiunea, configurația și locația geografică a mașinilor virtuale pe care le rulează, astfel încât să se potrivească cu necesitățile lor specifice. EC2 oferă, de asemenea, un set larg de caracteristici și opțiuni de securitate, inclusiv izolarea VM-urilor, criptarea datelor și monitorizarea în timp real a activității sistemului. De asemenea, utilizatorii pot alege dintr-o gamă largă de sisteme de operare și aplicații software pentru a fi instalate pe VM-uri.

Serviciile sun utilizate în mod obișnuit de dezvoltatori de software, întreprinderi și organizații guvernamentale pentru a executa aplicații și servicii web, analiza datelor, procesarea în cloud, testarea și dezvoltarea de software și multe altele.

Instanțe Amazon EC2
![image](https://i.imgur.com/VesJxnV.png)

## ChatGPT API

ChatGPT API (Application Programming Interface) este o interfață prin care alte aplicații sau platforme pot sa se conecteze la ChatGPT si sa utilizeze serviciile de procesare ale limbajului natural. Prin intermediul acestui API, dezvoltatorii de software pot sa integreze funcționalitățile de inteligenta artificiala in propriile aplicații, inclusiv capacitatea de a răspunde la întrebări, de a genera texte, de a traduce limbi sau de a analiza sentimente. Prin urmare, ChatGPT API poate fi util pentru o varietate de aplicații, de la chatbot-uri si asistenți virtuali la analiza de date si platforme de cercetare. Este important de menționat ca accesul la ChatGPT API este limitat si necesita autentificarea prin intermediul platformei OpenAI.

# Capturi ecran aplicație

1. Pagina principala a aplicației pe care se afișează toate task-urile salvate in baza de date.
   ![image](https://i.imgur.com/14DIXbZ.png)

2. Pagina de inserare cuprinde un formular prin intermediul căruia se pot adăuga noi task-uri.
   ![image](https://i.imgur.com/Gh1wylI.png)

3. Pagina chat care integrează chatbot-ul celor de la OpenAI cu rolul de asistent personal pentru a ajuta utilizatorul in îndeplinirea task-urilor pe care si le-a propus.
   ![image](https://i.imgur.com/Hl3Xzb5.png)

# Publicarea pe AWS

1. Instalare si pornire Nginx
   ![image](https://i.imgur.com/Zg2hFDO.png)
   ![image](https://i.imgur.com/Ww12gFa.png)

2. Configurare Nginx
   ![image](https://i.imgur.com/CVyiP1J.png)

3. Instalare Docker
   ![image](https://i.imgur.com/LaSQVF0.png)
   ![image](https://i.imgur.com/h8S1bsQ.png)
   ![image](https://i.imgur.com/909DIso.png)
   ![image](https://i.imgur.com/6kU3NSi.png)
   ![image](https://i.imgur.com/t2CmnYl.png)

4. Asigurare acces sudo pentru comenzile docker
   ![image](https://i.imgur.com/5zpsnJv.png)

5. Pregătirea proiectului pentru a fi introdus într-o imagine Docker
   ![image](https://i.imgur.com/mQ1Q42G.png)
   ![image](https://i.imgur.com/M5STIbs.png)

6. Configurare aplicație pe mașina virtuala
   ![image](https://i.imgur.com/ulR0s1e.png)
   ![image](https://i.imgur.com/XO8CPys.png)
   ![image](https://i.imgur.com/scKmjge.png)
   ![image](https://i.imgur.com/UHttwh0.png)

# Referințe

Documentație Seminar Cloud Computing
https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs
https://www.mongodb.com/basics/mongodb-atlas-tutorial
https://vercel.com/blog/what-is-vercel
https://www.techtarget.com/searchaws/definition/Amazon-Elastic-Compute-Cloud-Amazon-EC2
https://openai.com/blog/introducing-chatgpt-and-whisper-apis
https://www.makeuseof.com/chatgpt-api-complete-guide/

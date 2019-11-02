

function clickMe(){
    let welcome = prompt('Nu börjar vi spela! är du redo?')

    if(isChoiceValid(welcome,['yes', 'ja'])){
          firstStatusonBaby()
    }
    else {
        alert('Tråkigt, vi ses en annan gång!')
    }
}

function firstStatusonBaby(){
   alert('Härligt då kör vi igång! Din uppgift är att få bebisen att sluta gråta. Du testar först att ge bebisen mat!')
    hungryBaby()
}

function hungryBaby(){
    let choiceOfFood = prompt('Välkommen till köket! Vad tror du Sture vill äta? en sked kanel, mosad banan med kaviar eller eggs benedict ')
    
    if(isChoiceValid(choiceOfFood, ['en sked med kanel', 'kanel', 'sked kanel'])){
        cinammonInFace()
    }

    else if(isChoiceValid(choiceOfFood, ['mosad banan med kaviar', 'mosad banan', 'banan', 'kaviar'])){
        alert('GAME OVER! Åherregud vad har du gjort?! Sture är allergisk mot banan OCH kaviar och dog. Hur ska du gå vidare från det här kan man undra.... Ryck upp dig och försök igen.')
        hungryBaby()
    }

    else if(isChoiceValid(choiceOfFood, ['eggs benedict', 'eggs', 'ägg', 'benedict'])){
        alert('Ånej! Sture är allergisk mot ägg och har nu rännskita! Bajset nästan rinner ur blöjan! Gå till badrummet och byt blöjan!')
        changeDiaper()
    }
}



function cinammonInFace() {
    alert('GAME OVER! Vad i helvete! Man kan ju inte äta kanel! Sture hostar upp kanelen och du får i ögonen och blir blind och måste åka in till sjukhuset! ')
    hungryBaby()
}

function babyCriesMoreThanEver(){
    alert('Sture är rosenrasande och skriker mer än nånsin! Du måste komma på ett annat sätt att få honom att sluta!')
    changeDiaperAgain()
}



function changeDiaper(){
    let change = prompt('Du är nu i badrummet och ska byta blöjan. Den rinniga bajsiga blöjan är av och Sture skriker sig röd i ansiktet på skötbordet. Torkar du först? sätter du på en ny blöja direkt? eller ska han få vara naken?')

    if(isChoiceValid(change, ['torkar', 'jag torkar först', 'torka'])){
        alert('GAME OVER! En god tanke men du tog för lång tid på dig. Sture kissade dig rätt in i munnen att du kvävdes och dog.')
        firstStatusonBaby()
    }

    else if(isChoiceValid(change, ['jag sätter på en ny blöja', 'ny blöja', 'jag sätter på en ny blöja först', 'blöja', 'en ny blöja först'])){
        alert('Du kan väl ändå inte sätta på en ny blöja innan du har torkat upp bajset...')
        changeDiaperAgain()
    }

    else if(isChoiceValid(change, ['han ska få vara naken', 'naken', 'få vara naken', 'jag låter honom vara naken', 'jag låter sture vara naken'])){
        alert('Han fryser ju stackarn!! Och om han är naken kommer han väl ändå bajsa ner hela jävla stället! kom igen nu... STEP IT UP!')
        babyCriesMoreThanEver()
    }
}

function changeDiaperAgain(){
    let changeAgain = prompt('Kom igen nu, skynda dig den här gången med att göra ditt val! Torkar du först? sätter du på en ny blöja direkt? eller ska han få vara naken?')

    if(isChoiceValid(changeAgain, ['torkar', 'jag torkar först', 'först torkar jag', 'torka'])){
        alert('Tänka sig att du ändå hade lite fart i de där händerna. Sture är nu torkad om stjärten')
        babySatisfiedForAMoment()
    }

    else if(isChoiceValid(changeAgain, ['jag sätter på en ny blöja', 'ny blöja', 'jag sätter på en ny blöja först', 'blöja', 'en ny blöja först'])) {
        alert('GAME OVER! har du hört talas om "man lär sig av sina misstag"? ne tänkte väl det....')
    }

    else if(isChoiceValid(changeAgain, ['han ska få vara naken', 'naken', 'få vara naken', 'jag låter honom vara naken', 'jag låter sture vara naken'])){
        alert('GAME OVER! tur att du inte har några egna barn...')
    }

}

function babySatisfiedForAMoment(){
    alert('På med en blöja för i helvete innan han kväver dig igen!')
    alert('Någonting lyckades du med iallafall. Sture har äntligen en ren blöja på sig. Han är ju dock inte nöjd och skriker fortfarande. Det kanske är så att han vill leka. Gå till vardagsrummet och se vad som finns där.')
    playingBaby()
}

function playingBaby(){
    let play = prompt('Vad tror du Sture vill leka med? en pistol, råttfällan eller jenga')

    if(isChoiceValid(play, ['han vill leka med en pistol', 'leka med en pistol', 'med en pistol', 'pistol'])){
        alert('GAME OVER! Sture sköt precis ihjäl dig. ajdå')
        firstStatusonBaby()
    }

    else if(isChoiceValid(play, ['råttfällan', 'jag tror att han vill leka med råttfällan', 'han vill leka med råttfällan', 'leka med råttfällan'])){
        alert('Sture älskar det!! Tänka sig att du kunde lista ut det. Men det roliga varade ej länge. Sture är inte nöjd längre. Han skriker och gråter och får knappt luft. Vill han kanske sova? Ta honom till sovrummet.')
        tiredBaby()
    }

    else if(isChoiceValid(play, ['jenga', 'han vill spela jenga', 'spela jenga', 'leka med jenga'])){
        alert('GAME OVER! JengaTornet rasade precis över Sture och han dog. Bra jobbat... hur ska du nånsin komma över detta...')
        firstStatusonBaby()
    }
}

function tiredBaby(){
    let tired = prompt('Nu har du burit in Sture i sovrummet och ska få tyst på honom genom att få honom att sova. Hur tänker du lyckas med det? genom att sjunga imse vimse spindel? läsa en bok? eller slå honom med boken?')

    if(isChoiceValid(tired, ['sjunga en vaggvisa', 'sjunga', 'vaggvisa', 'genom att sjunga en vaggvisa'])){
        alert('GAME OVER! Sture är ju förfan blind! Hur tror du att han ska kunna njuta av en imse vimse spindel då? Du måste ju sjunga en annan låt.')
        tiredBabyAgain()
    }
    else if(isChoiceValid(tired, ['slå honom med boken', 'boken', 'jag slår honom med en bok', 'genom att slå honom med en bok'])){
        alert('GAME OVER! Det här är ju absurt, hur kan du ens få vara barnvakt...')
        firstStatusonBaby()
    }
    else if(isChoiceValid(tired, ['läsa en bok', 'genom att läsa en bok', 'en bok', 'bok'])){
        alert('GAME OVER! Men Sture är ju förfan döv. Hur ska han kunna höra dig när du läser. Bara för att du inte är döv kan du ju inte läsa en bok bara för att du ska få njuta. Själviskt.')
        firstStatusonBaby()
    }
}

function tiredBabyAgain(){
    let tiredBabyAgain = prompt('Nu försöker vi en gång till. Hur tänker du att du ska natta Sture? Tänker du sjunga en vaggvisa? läsa en bok? eller slå Sture med boken?')
    
    if(isChoiceValid(tiredBabyAgain, ['sjunga en vaggvisa', 'sjunga', 'vaggvisa', 'genom att sjunga en vaggvisa'])){
        alert('Titta där du har något bakom pannbenet ändå. Bra val av vaggvisa, Sture håller äntligen på att somna!')
        babySleepingAndGameIsWon()
    }

    else if(isChoiceValid(tiredBabyAgain, ['slå honom med boken', 'boken', 'jag slår honom med en bok', 'genom att slå honom med en bok'])){
        alert('GAME OVER! herregud...')
        firstStatusonBaby()
    }

    else if(isChoiceValid(tiredBabyAgain, ['läsa en bok', 'genom att läsa en bok', 'en bok', 'bok'])){
        alert('GAME OVER! han är ju fortfarande döv...')
    }

}

function babySleepingAndGameIsWon(){
    alert('Och där klev föräldrarna in i huset och Sture har äntligen somnat. Du kanske får en slant och får gå hem nu. Tackhej')
}

function isChoiceValid(choice, validChoices){

    for(const validChoice of validChoices){
        if(choice === validChoice){
            return true
        }
    }
    return false
}

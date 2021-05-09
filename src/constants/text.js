import {getDate} from './utils'

const AUDREY_TEXT = {
    header:  'AUDREY',
    html: `
    <div class="chunk">
        Born on June 8, 1891 in Rochester, NY, Audrey Munson was catapulted from a young age to fame, which according to her mother, was her destiny forecasted as a young child. At five-years-old, Audrey’s mother, Katherine Mahaney, took her daughter to see Gypsy Queen Eliza who was visiting from England. Eliza looked at Audrey and predicted:
    </div>
    <div class="quote">
        “You shall be beloved and famous. But when you think that happiness is yours, its Dead Sea fruit shall turn to ashes in your mouth.”
    </div>
    <div class="chunk">
        Eleven years later, Eliza’s prophecy would be realized when Audrey was approached by a photographer in Manhattan asking her to model for an upcoming project. Baffled by her natural professionalism and captivating presence, he referred Audrey to other artists. At just sixteen-years-old, Audrey posed nude for artists such as Isidore Kante, Daniel Chester French, Allen George Newman, Albert Jaegers, and many other renowned sculptors. By her early twenties, she became one of the best known women in Manhattan. She was called “America’s First Supermodel”, Miss Manhattan, and other names acknowledging her greatness.
    </div>
    <div class="chunk">
        Audrey Munson was a living muse for artists at the peak of the Beaux Art movement in New York City. She was regarded as “the most perfect, most versatile, most famous of American models, whose face and figure have inspired thousands of modern masterpieces of sculpture and painting.” At one point, over thirty sculptures were present at the Metropolitan Museum of Art alone bearing Audrey’s likeness, while hundreds of others are scattered across the country.
    </div>
    <div class="chunk">
        Though her image can be seen everywhere from museums to city streets, few know her name. Plaques publicize the name of the piece - Memory, Progress, Republic, or Victory - and the artist, but Audrey Munson remains unrecognized. We know her naked body, her vacant stare, but we don’t know her name. As quickly as she ascended to fame, she fell into obscurity.
    </div>
    <div class="quote">
        “The sculptor’s natural way of expressing himself is to mold into form his conceptions. From the earliest ages beauty and truth have been expressed in the figure of a woman.” <br />- Allen George Newman
    </div>

    <br />
    <h1>IN THE REBELLION</h2>
    <div class="chunk">
        During the Caryatid Rebellion, Audrey broke out of her marble cage on ${getDate()} and became ruler of the snakes, turning men into stone to live the fate that she and her sisters lived. You can watch her in the Rebellion as Alma Mater at Columbia University and Brian Tolle’s Miss Manhattan and Miss Brooklyn in Downtown Brooklyn.
    </div>
    <br />
    <br />
    `
}

const DORIS_TEXT = {
    header:  'DORIS',
    html: `
        <div></div>
    `
}

const HETTIE_TEXT = {
    header:  'HETTIE',
    html: `
        <div></div>
    `
}

const ABOUT_TEXT = {
    header: 'ABOUT',
    html: `
    <div>
        In New York City, there are only five monuments of named women but hundreds of anonymous ones such as caryatids, architectural columns in the form of feminine bodies. The male monument is allowed individuality while her body is an allegory, inexpressible and unable to exist independently as flesh and blood. Looking for the original women behind the sculptures, I found Audrey Munson, Hettie Anderson, and Doris Doscher, three models who posed for many of the unnamed sculptures found in New York and across the United States. <br><br>

        <i>The Caryatid Rebellion</i> is an interactive comic and 7-minute video experience based on Hettie, Audrey, and Doris and their uprising against the buildings and institutions they have been forced to carry. With music by Violet June of Machine+, the experience begins with the caryatids’ current state, holding up buildings and institutions that continue to exclude and oppress, and documents their eventual rebellion and reclamation of the built world. Creating this world also involved my own process of rebellion by 3D modeling Korean architecture and designing avatars that looked more like me and other people of color, subverting the encoded white standards of beauty in Neoclassical architecture.
    </div>
    <br />
    <br />

    <h1>CREDITS</h1>
    `
}

const VIDEO_TEXT = {
    header: 'WATCH THE REBELLION',
    html: `
    <iframe src="https://player.vimeo.com/video/544792816" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>    
    `
}

const TEXT = {
    audrey: AUDREY_TEXT,
    doris: DORIS_TEXT,
    hettie: HETTIE_TEXT,
    about: ABOUT_TEXT,
    video: VIDEO_TEXT
}

export default TEXT
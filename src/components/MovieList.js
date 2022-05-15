import React, { Component } from 'react'
import Movie from './Movie'

let movieOne = {
    title: 'Landfill Traffic',
    rating: 'PG',
    synopsis: 'On their way to the dump they found some loose gravel',
    reviews: [{
        reviewTitle: 'Landfill Traffic Dumpster Dives',
        reviewer: 'Bob Snow',
        stars: 3,
        review: 'They find all the gems inside of the trash'
    }, {
        reviewTitle: 'Diamond in the Dumpster',
        reviewer: 'Frank Blizzard',
        stars: 5,
        review: 'The trashman brings more depth to the pile then you could ever imagine'
    }]
};

let movieTwo = {
    title: 'The Mangler',
    rating: 'R',
    synopsis: 'A laundry-folding Machine has been possessed by a demon, causing it to develop homicidal tendencies ',
    reviews: [{
        reviewTitle: 'Horrible Garbage',
        reviewer: 'Jeff Sylvester',
        stars: 1,
        review: 'Mangler is one of the worst movies ever made.  Robert Englund is a horrible actor in any movie where he is not playing Freddy Krueger. Ted Levine is eually bad here.'
    }, {
        reviewTitle: 'Bizarr but not Awful',
        reviewer: 'Gavin Long',
        stars: 2,
        review: 'The reviews for "The Mangler" are predominantly bad. Richard Harrington wrote, "The Mangler is ludicrous from start to finish: its plot lines dangle, its effects fail to dazzle and the acting and directing are uniformly bad... even the least demanding of genre fans will be hard-pressed to tremble in its presence." This is partially true. The plot is not as strong as it could be, but it does have a few nice touches, most notably the gore.'
    }]
};

let movieThree = {
    title: 'Disco Beaver from Outer Space',
    rating: 'Unrated',
    synopsis: 'A couple is watching TV late at night constantly switching channels and commenting on what\'s on them. In "Disco Beaver from Outer Space", a spoof of cheap Sci-Fi movies, a disco beaver from outer space, who has its own theme song, lands in New York in search of wood. In "Dragula", a spoof of horror movies, a "hemosexual" vampire visits the little town of Gotham on the Hudson for some snack and the only one who can stop him is miss Van Helsing. Pope John Paul II has an accident while doing laundry.',
    reviews: [{
        reviewTitle: 'Obscure but wacky ',
        reviewer: 'Karina Hill',
        stars: 4,
        review: 'Before Amazon Women on the Moon, before the Kentucky Fried Movie, before them all (I think), there was Disco Beaver from Outer Space. I watched it on HBO and my dad taped it and then I proceeded to watch the tape to death - I have never seen it in a store for rent. It\'s great - silly, fun, like the National Lampoon used to be. Sure, it was 1978, it\'s got Disco Beaver for goodness\' sake - it makes fun of TV and movies, it\'s not politically correct, but just Dragula alone makes it worth watching.'
    }, {
        reviewTitle: 'National Lampoon at its best!',
        reviewer: 'Kevin Shrew',
        stars: 5,
        review: 'A hilarious movie, actually a collection of shorts that transpire as the people in the movie watching the movie change channels. Who can forget the image of the Disco Beaver getting a little too friendly with the lady in the fur coat? Or Helping Horny Hands? Or Rocky Rococco?'
    }]
};
let movies = [movieOne, movieTwo, movieThree];

export default class MovieList extends Component {
    render() {
        let movieComponents
        if (movies) {
            movieComponents = movies.map((movie, index) => <Movie key={index} {...movie} />);
        }
        return (
            <div>
                {movieComponents}
            </div>
        )
    }
}

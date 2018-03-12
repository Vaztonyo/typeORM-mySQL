import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Place} from "../entity/Places";

/**
 * Saves given post.
 */
export async function placePostAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const myPlaceRepository = getRepository(Place);
    let data = request.body;


    // create a real post object from post json object sent over http
    const newPlace = new Place();

    newPlace.placeName = data.placeName;
    newPlace.type = data.type;
    newPlace.website = data.website;
    newPlace.address_components = data.address_components;
    newPlace.latlng = data.latlng;
    newPlace.review = data.review;

    // save received post
    await myPlaceRepository.save(newPlace);

    // return saved post back
    response.send(newPlace);
}
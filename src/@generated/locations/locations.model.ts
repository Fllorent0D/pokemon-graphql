import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { regions } from '../regions/regions.model';
import { location_areas } from '../location-areas/location-areas.model';
import { location_game_indices } from '../location-game-indices/location-game-indices.model';
import { location_names } from '../location-names/location-names.model';
import { pokemon_evolution } from '../pokemon-evolution/pokemon-evolution.model';
import { LocationsCount } from '../prisma/locations-count.output';

@ObjectType()
export class locations {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id!: number | null;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => regions, {nullable:true})
    regions?: regions | null;

    @Field(() => [location_areas], {nullable:true})
    location_areas?: Array<location_areas>;

    @Field(() => [location_game_indices], {nullable:true})
    location_game_indices?: Array<location_game_indices>;

    @Field(() => [location_names], {nullable:true})
    location_names?: Array<location_names>;

    @Field(() => [pokemon_evolution], {nullable:true})
    pokemon_evolution?: Array<pokemon_evolution>;

    @Field(() => LocationsCount, {nullable:false})
    _count?: LocationsCount;
}

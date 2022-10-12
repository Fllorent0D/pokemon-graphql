import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokedexes } from '../pokedexes/pokedexes.model';
import { regions } from '../regions/regions.model';
import { abilities } from '../abilities/abilities.model';
import { generation_names } from '../generation-names/generation-names.model';
import { item_game_indices } from '../item-game-indices/item-game-indices.model';
import { location_game_indices } from '../location-game-indices/location-game-indices.model';
import { moves } from '../moves/moves.model';
import { pokemon_game_indices } from '../pokemon-game-indices/pokemon-game-indices.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';
import { types } from '../types/types.model';
import { version_groups } from '../version-groups/version-groups.model';
import { GenerationsCount } from '../prisma/generations-count.output';

@ObjectType()
export class generations {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    main_region_id!: number;

    @Field(() => Int, {nullable:false})
    canonical_pokedex_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokedexes, {nullable:false})
    pokedexes?: pokedexes;

    @Field(() => regions, {nullable:false})
    regions?: regions;

    @Field(() => [abilities], {nullable:true})
    abilities?: Array<abilities>;

    @Field(() => [generation_names], {nullable:true})
    generation_names?: Array<generation_names>;

    @Field(() => [item_game_indices], {nullable:true})
    item_game_indices?: Array<item_game_indices>;

    @Field(() => [location_game_indices], {nullable:true})
    location_game_indices?: Array<location_game_indices>;

    @Field(() => [moves], {nullable:true})
    moves?: Array<moves>;

    @Field(() => [pokemon_game_indices], {nullable:true})
    pokemon_game_indices?: Array<pokemon_game_indices>;

    @Field(() => [pokemon_species], {nullable:true})
    pokemon_species?: Array<pokemon_species>;

    @Field(() => [types], {nullable:true})
    types?: Array<types>;

    @Field(() => [version_groups], {nullable:true})
    version_groups?: Array<version_groups>;

    @Field(() => GenerationsCount, {nullable:false})
    _count?: GenerationsCount;
}

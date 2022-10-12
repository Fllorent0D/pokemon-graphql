import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';
import { encounters } from '../encounters/encounters.model';
import { pokemon_abilities } from '../pokemon-abilities/pokemon-abilities.model';
import { pokemon_forms } from '../pokemon-forms/pokemon-forms.model';
import { pokemon_game_indices } from '../pokemon-game-indices/pokemon-game-indices.model';
import { pokemon_items } from '../pokemon-items/pokemon-items.model';
import { pokemon_stats } from '../pokemon-stats/pokemon-stats.model';
import { pokemon_types } from '../pokemon-types/pokemon-types.model';
import { PokemonCount } from '../prisma/pokemon-count.output';

@ObjectType()
export class pokemon {

    @Field(() => ID, {nullable:false})
    id!: number;

    @HideField()
    species_id!: number | null;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Int, {nullable:false})
    weight!: number;

    @Field(() => Int, {nullable:false})
    base_experience!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => pokemon_species, {nullable:true})
    pokemon_species?: pokemon_species | null;

    @Field(() => [encounters], {nullable:true})
    encounters?: Array<encounters>;

    @Field(() => [pokemon_abilities], {nullable:true})
    pokemon_abilities?: Array<pokemon_abilities>;

    @Field(() => [pokemon_forms], {nullable:true})
    pokemon_forms?: Array<pokemon_forms>;

    @Field(() => [pokemon_game_indices], {nullable:true})
    pokemon_game_indices?: Array<pokemon_game_indices>;

    @Field(() => [pokemon_items], {nullable:true})
    pokemon_items?: Array<pokemon_items>;

    @Field(() => [pokemon_stats], {nullable:true})
    pokemon_stats?: Array<pokemon_stats>;

    @Field(() => [pokemon_types], {nullable:true})
    pokemon_types?: Array<pokemon_types>;

    @Field(() => PokemonCount, {nullable:false})
    _count?: PokemonCount;
}

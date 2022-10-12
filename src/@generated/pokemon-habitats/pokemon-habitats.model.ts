import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { pokemon_habitat_names } from '../pokemon-habitat-names/pokemon-habitat-names.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';
import { Pokemon_habitatsCount } from '../prisma/pokemon-habitats-count.output';

@ObjectType()
export class pokemon_habitats {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [pokemon_habitat_names], {nullable:true})
    pokemon_habitat_names?: Array<pokemon_habitat_names>;

    @Field(() => [pokemon_species], {nullable:true})
    pokemon_species?: Array<pokemon_species>;

    @Field(() => Pokemon_habitatsCount, {nullable:false})
    _count?: Pokemon_habitatsCount;
}

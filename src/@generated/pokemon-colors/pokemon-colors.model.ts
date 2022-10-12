import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { pokemon_color_names } from '../pokemon-color-names/pokemon-color-names.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';
import { Pokemon_colorsCount } from '../prisma/pokemon-colors-count.output';

@ObjectType()
export class pokemon_colors {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [pokemon_color_names], {nullable:true})
    pokemon_color_names?: Array<pokemon_color_names>;

    @Field(() => [pokemon_species], {nullable:true})
    pokemon_species?: Array<pokemon_species>;

    @Field(() => Pokemon_colorsCount, {nullable:false})
    _count?: Pokemon_colorsCount;
}

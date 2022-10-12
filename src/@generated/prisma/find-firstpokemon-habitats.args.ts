import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitatsWhereInput } from '../pokemon-habitats/pokemon-habitats-where.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsOrderByWithRelationInput } from '../pokemon-habitats/pokemon-habitats-order-by-with-relation.input';
import { pokemon_habitatsWhereUniqueInput } from '../pokemon-habitats/pokemon-habitats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_habitatsScalarFieldEnum } from './pokemon-habitats-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonHabitatsArgs {

    @Field(() => pokemon_habitatsWhereInput, {nullable:true})
    @Type(() => pokemon_habitatsWhereInput)
    where?: pokemon_habitatsWhereInput;

    @Field(() => [pokemon_habitatsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_habitatsOrderByWithRelationInput>;

    @Field(() => pokemon_habitatsWhereUniqueInput, {nullable:true})
    cursor?: pokemon_habitatsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_habitatsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_habitatsScalarFieldEnum>;
}

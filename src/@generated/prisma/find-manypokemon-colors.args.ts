import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_colorsWhereInput } from '../pokemon-colors/pokemon-colors-where.input';
import { Type } from 'class-transformer';
import { pokemon_colorsOrderByWithRelationInput } from '../pokemon-colors/pokemon-colors-order-by-with-relation.input';
import { pokemon_colorsWhereUniqueInput } from '../pokemon-colors/pokemon-colors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_colorsScalarFieldEnum } from './pokemon-colors-scalar-field.enum';

@ArgsType()
export class FindManypokemonColorsArgs {

    @Field(() => pokemon_colorsWhereInput, {nullable:true})
    @Type(() => pokemon_colorsWhereInput)
    where?: pokemon_colorsWhereInput;

    @Field(() => [pokemon_colorsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_colorsOrderByWithRelationInput>;

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:true})
    cursor?: pokemon_colorsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_colorsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_colorsScalarFieldEnum>;
}

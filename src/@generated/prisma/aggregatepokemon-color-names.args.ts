import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_color_namesWhereInput } from '../pokemon-color-names/pokemon-color-names-where.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesOrderByWithRelationInput } from '../pokemon-color-names/pokemon-color-names-order-by-with-relation.input';
import { pokemon_color_namesWhereUniqueInput } from '../pokemon-color-names/pokemon-color-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokemonColorNamesArgs {

    @Field(() => pokemon_color_namesWhereInput, {nullable:true})
    @Type(() => pokemon_color_namesWhereInput)
    where?: pokemon_color_namesWhereInput;

    @Field(() => [pokemon_color_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_color_namesOrderByWithRelationInput>;

    @Field(() => pokemon_color_namesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_color_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

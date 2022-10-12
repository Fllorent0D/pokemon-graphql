import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shapesWhereInput } from '../pokemon-shapes/pokemon-shapes-where.input';
import { Type } from 'class-transformer';
import { pokemon_shapesOrderByWithRelationInput } from '../pokemon-shapes/pokemon-shapes-order-by-with-relation.input';
import { pokemon_shapesWhereUniqueInput } from '../pokemon-shapes/pokemon-shapes-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokemonShapesArgs {

    @Field(() => pokemon_shapesWhereInput, {nullable:true})
    @Type(() => pokemon_shapesWhereInput)
    where?: pokemon_shapesWhereInput;

    @Field(() => [pokemon_shapesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_shapesOrderByWithRelationInput>;

    @Field(() => pokemon_shapesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_shapesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

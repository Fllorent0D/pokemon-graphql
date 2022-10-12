import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereInput } from '../pokemon-shape-prose/pokemon-shape-prose-where.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseOrderByWithRelationInput } from '../pokemon-shape-prose/pokemon-shape-prose-order-by-with-relation.input';
import { pokemon_shape_proseWhereUniqueInput } from '../pokemon-shape-prose/pokemon-shape-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_shape_proseScalarFieldEnum } from './pokemon-shape-prose-scalar-field.enum';

@ArgsType()
export class FindManypokemonShapeProseArgs {

    @Field(() => pokemon_shape_proseWhereInput, {nullable:true})
    @Type(() => pokemon_shape_proseWhereInput)
    where?: pokemon_shape_proseWhereInput;

    @Field(() => [pokemon_shape_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_shape_proseOrderByWithRelationInput>;

    @Field(() => pokemon_shape_proseWhereUniqueInput, {nullable:true})
    cursor?: pokemon_shape_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_shape_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_shape_proseScalarFieldEnum>;
}

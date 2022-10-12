import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { pokedexesOrderByWithAggregationInput } from './pokedexes-order-by-with-aggregation.input';
import { PokedexesScalarFieldEnum } from '../prisma/pokedexes-scalar-field.enum';
import { pokedexesScalarWhereWithAggregatesInput } from './pokedexes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class pokedexesGroupByArgs {

    @Field(() => pokedexesWhereInput, {nullable:true})
    @Type(() => pokedexesWhereInput)
    where?: pokedexesWhereInput;

    @Field(() => [pokedexesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokedexesOrderByWithAggregationInput>;

    @Field(() => [PokedexesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PokedexesScalarFieldEnum>;

    @Field(() => pokedexesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokedexesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

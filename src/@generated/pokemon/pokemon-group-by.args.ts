import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { pokemonOrderByWithAggregationInput } from './pokemon-order-by-with-aggregation.input';
import { PokemonScalarFieldEnum } from '../prisma/pokemon-scalar-field.enum';
import { pokemonScalarWhereWithAggregatesInput } from './pokemon-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class pokemonGroupByArgs {

    @Field(() => pokemonWhereInput, {nullable:true})
    @Type(() => pokemonWhereInput)
    where?: pokemonWhereInput;

    @Field(() => [pokemonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemonOrderByWithAggregationInput>;

    @Field(() => [PokemonScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PokemonScalarFieldEnum>;

    @Field(() => pokemonScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemonScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCountAggregate } from './pokemon-count-aggregate.output';
import { PokemonAvgAggregate } from './pokemon-avg-aggregate.output';
import { PokemonSumAggregate } from './pokemon-sum-aggregate.output';
import { PokemonMinAggregate } from './pokemon-min-aggregate.output';
import { PokemonMaxAggregate } from './pokemon-max-aggregate.output';

@ObjectType()
export class PokemonGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    species_id?: number;

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

    @Field(() => PokemonCountAggregate, {nullable:true})
    _count?: PokemonCountAggregate;

    @Field(() => PokemonAvgAggregate, {nullable:true})
    _avg?: PokemonAvgAggregate;

    @Field(() => PokemonSumAggregate, {nullable:true})
    _sum?: PokemonSumAggregate;

    @Field(() => PokemonMinAggregate, {nullable:true})
    _min?: PokemonMinAggregate;

    @Field(() => PokemonMaxAggregate, {nullable:true})
    _max?: PokemonMaxAggregate;
}

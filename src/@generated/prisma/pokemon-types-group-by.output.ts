import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_typesCountAggregate } from './pokemon-types-count-aggregate.output';
import { Pokemon_typesAvgAggregate } from './pokemon-types-avg-aggregate.output';
import { Pokemon_typesSumAggregate } from './pokemon-types-sum-aggregate.output';
import { Pokemon_typesMinAggregate } from './pokemon-types-min-aggregate.output';
import { Pokemon_typesMaxAggregate } from './pokemon-types-max-aggregate.output';

@ObjectType()
export class Pokemon_typesGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => Pokemon_typesCountAggregate, {nullable:true})
    _count?: Pokemon_typesCountAggregate;

    @Field(() => Pokemon_typesAvgAggregate, {nullable:true})
    _avg?: Pokemon_typesAvgAggregate;

    @Field(() => Pokemon_typesSumAggregate, {nullable:true})
    _sum?: Pokemon_typesSumAggregate;

    @Field(() => Pokemon_typesMinAggregate, {nullable:true})
    _min?: Pokemon_typesMinAggregate;

    @Field(() => Pokemon_typesMaxAggregate, {nullable:true})
    _max?: Pokemon_typesMaxAggregate;
}

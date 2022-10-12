import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_habitat_namesCountAggregate } from './pokemon-habitat-names-count-aggregate.output';
import { Pokemon_habitat_namesAvgAggregate } from './pokemon-habitat-names-avg-aggregate.output';
import { Pokemon_habitat_namesSumAggregate } from './pokemon-habitat-names-sum-aggregate.output';
import { Pokemon_habitat_namesMinAggregate } from './pokemon-habitat-names-min-aggregate.output';
import { Pokemon_habitat_namesMaxAggregate } from './pokemon-habitat-names-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_habitat_names {

    @Field(() => Pokemon_habitat_namesCountAggregate, {nullable:true})
    _count?: Pokemon_habitat_namesCountAggregate;

    @Field(() => Pokemon_habitat_namesAvgAggregate, {nullable:true})
    _avg?: Pokemon_habitat_namesAvgAggregate;

    @Field(() => Pokemon_habitat_namesSumAggregate, {nullable:true})
    _sum?: Pokemon_habitat_namesSumAggregate;

    @Field(() => Pokemon_habitat_namesMinAggregate, {nullable:true})
    _min?: Pokemon_habitat_namesMinAggregate;

    @Field(() => Pokemon_habitat_namesMaxAggregate, {nullable:true})
    _max?: Pokemon_habitat_namesMaxAggregate;
}

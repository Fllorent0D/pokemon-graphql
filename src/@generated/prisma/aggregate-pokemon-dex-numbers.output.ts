import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_dex_numbersCountAggregate } from './pokemon-dex-numbers-count-aggregate.output';
import { Pokemon_dex_numbersAvgAggregate } from './pokemon-dex-numbers-avg-aggregate.output';
import { Pokemon_dex_numbersSumAggregate } from './pokemon-dex-numbers-sum-aggregate.output';
import { Pokemon_dex_numbersMinAggregate } from './pokemon-dex-numbers-min-aggregate.output';
import { Pokemon_dex_numbersMaxAggregate } from './pokemon-dex-numbers-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_dex_numbers {

    @Field(() => Pokemon_dex_numbersCountAggregate, {nullable:true})
    _count?: Pokemon_dex_numbersCountAggregate;

    @Field(() => Pokemon_dex_numbersAvgAggregate, {nullable:true})
    _avg?: Pokemon_dex_numbersAvgAggregate;

    @Field(() => Pokemon_dex_numbersSumAggregate, {nullable:true})
    _sum?: Pokemon_dex_numbersSumAggregate;

    @Field(() => Pokemon_dex_numbersMinAggregate, {nullable:true})
    _min?: Pokemon_dex_numbersMinAggregate;

    @Field(() => Pokemon_dex_numbersMaxAggregate, {nullable:true})
    _max?: Pokemon_dex_numbersMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokeathlon_stat_namesCountAggregate } from './pokeathlon-stat-names-count-aggregate.output';
import { Pokeathlon_stat_namesAvgAggregate } from './pokeathlon-stat-names-avg-aggregate.output';
import { Pokeathlon_stat_namesSumAggregate } from './pokeathlon-stat-names-sum-aggregate.output';
import { Pokeathlon_stat_namesMinAggregate } from './pokeathlon-stat-names-min-aggregate.output';
import { Pokeathlon_stat_namesMaxAggregate } from './pokeathlon-stat-names-max-aggregate.output';

@ObjectType()
export class AggregatePokeathlon_stat_names {

    @Field(() => Pokeathlon_stat_namesCountAggregate, {nullable:true})
    _count?: Pokeathlon_stat_namesCountAggregate;

    @Field(() => Pokeathlon_stat_namesAvgAggregate, {nullable:true})
    _avg?: Pokeathlon_stat_namesAvgAggregate;

    @Field(() => Pokeathlon_stat_namesSumAggregate, {nullable:true})
    _sum?: Pokeathlon_stat_namesSumAggregate;

    @Field(() => Pokeathlon_stat_namesMinAggregate, {nullable:true})
    _min?: Pokeathlon_stat_namesMinAggregate;

    @Field(() => Pokeathlon_stat_namesMaxAggregate, {nullable:true})
    _max?: Pokeathlon_stat_namesMaxAggregate;
}

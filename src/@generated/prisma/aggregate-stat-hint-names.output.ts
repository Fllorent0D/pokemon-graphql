import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Stat_hint_namesCountAggregate } from './stat-hint-names-count-aggregate.output';
import { Stat_hint_namesAvgAggregate } from './stat-hint-names-avg-aggregate.output';
import { Stat_hint_namesSumAggregate } from './stat-hint-names-sum-aggregate.output';
import { Stat_hint_namesMinAggregate } from './stat-hint-names-min-aggregate.output';
import { Stat_hint_namesMaxAggregate } from './stat-hint-names-max-aggregate.output';

@ObjectType()
export class AggregateStat_hint_names {

    @Field(() => Stat_hint_namesCountAggregate, {nullable:true})
    _count?: Stat_hint_namesCountAggregate;

    @Field(() => Stat_hint_namesAvgAggregate, {nullable:true})
    _avg?: Stat_hint_namesAvgAggregate;

    @Field(() => Stat_hint_namesSumAggregate, {nullable:true})
    _sum?: Stat_hint_namesSumAggregate;

    @Field(() => Stat_hint_namesMinAggregate, {nullable:true})
    _min?: Stat_hint_namesMinAggregate;

    @Field(() => Stat_hint_namesMaxAggregate, {nullable:true})
    _max?: Stat_hint_namesMaxAggregate;
}

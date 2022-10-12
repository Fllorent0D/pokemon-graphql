import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Stat_namesCountAggregate } from './stat-names-count-aggregate.output';
import { Stat_namesAvgAggregate } from './stat-names-avg-aggregate.output';
import { Stat_namesSumAggregate } from './stat-names-sum-aggregate.output';
import { Stat_namesMinAggregate } from './stat-names-min-aggregate.output';
import { Stat_namesMaxAggregate } from './stat-names-max-aggregate.output';

@ObjectType()
export class AggregateStat_names {

    @Field(() => Stat_namesCountAggregate, {nullable:true})
    _count?: Stat_namesCountAggregate;

    @Field(() => Stat_namesAvgAggregate, {nullable:true})
    _avg?: Stat_namesAvgAggregate;

    @Field(() => Stat_namesSumAggregate, {nullable:true})
    _sum?: Stat_namesSumAggregate;

    @Field(() => Stat_namesMinAggregate, {nullable:true})
    _min?: Stat_namesMinAggregate;

    @Field(() => Stat_namesMaxAggregate, {nullable:true})
    _max?: Stat_namesMaxAggregate;
}

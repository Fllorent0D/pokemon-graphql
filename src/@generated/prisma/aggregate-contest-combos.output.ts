import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Contest_combosCountAggregate } from './contest-combos-count-aggregate.output';
import { Contest_combosAvgAggregate } from './contest-combos-avg-aggregate.output';
import { Contest_combosSumAggregate } from './contest-combos-sum-aggregate.output';
import { Contest_combosMinAggregate } from './contest-combos-min-aggregate.output';
import { Contest_combosMaxAggregate } from './contest-combos-max-aggregate.output';

@ObjectType()
export class AggregateContest_combos {

    @Field(() => Contest_combosCountAggregate, {nullable:true})
    _count?: Contest_combosCountAggregate;

    @Field(() => Contest_combosAvgAggregate, {nullable:true})
    _avg?: Contest_combosAvgAggregate;

    @Field(() => Contest_combosSumAggregate, {nullable:true})
    _sum?: Contest_combosSumAggregate;

    @Field(() => Contest_combosMinAggregate, {nullable:true})
    _min?: Contest_combosMinAggregate;

    @Field(() => Contest_combosMaxAggregate, {nullable:true})
    _max?: Contest_combosMaxAggregate;
}

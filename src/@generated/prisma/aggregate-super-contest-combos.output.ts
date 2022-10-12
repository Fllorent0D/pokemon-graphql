import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Super_contest_combosCountAggregate } from './super-contest-combos-count-aggregate.output';
import { Super_contest_combosAvgAggregate } from './super-contest-combos-avg-aggregate.output';
import { Super_contest_combosSumAggregate } from './super-contest-combos-sum-aggregate.output';
import { Super_contest_combosMinAggregate } from './super-contest-combos-min-aggregate.output';
import { Super_contest_combosMaxAggregate } from './super-contest-combos-max-aggregate.output';

@ObjectType()
export class AggregateSuper_contest_combos {

    @Field(() => Super_contest_combosCountAggregate, {nullable:true})
    _count?: Super_contest_combosCountAggregate;

    @Field(() => Super_contest_combosAvgAggregate, {nullable:true})
    _avg?: Super_contest_combosAvgAggregate;

    @Field(() => Super_contest_combosSumAggregate, {nullable:true})
    _sum?: Super_contest_combosSumAggregate;

    @Field(() => Super_contest_combosMinAggregate, {nullable:true})
    _min?: Super_contest_combosMinAggregate;

    @Field(() => Super_contest_combosMaxAggregate, {nullable:true})
    _max?: Super_contest_combosMaxAggregate;
}

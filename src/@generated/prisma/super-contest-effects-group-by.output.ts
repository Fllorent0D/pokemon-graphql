import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Super_contest_effectsCountAggregate } from './super-contest-effects-count-aggregate.output';
import { Super_contest_effectsAvgAggregate } from './super-contest-effects-avg-aggregate.output';
import { Super_contest_effectsSumAggregate } from './super-contest-effects-sum-aggregate.output';
import { Super_contest_effectsMinAggregate } from './super-contest-effects-min-aggregate.output';
import { Super_contest_effectsMaxAggregate } from './super-contest-effects-max-aggregate.output';

@ObjectType()
export class Super_contest_effectsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Super_contest_effectsCountAggregate, {nullable:true})
    _count?: Super_contest_effectsCountAggregate;

    @Field(() => Super_contest_effectsAvgAggregate, {nullable:true})
    _avg?: Super_contest_effectsAvgAggregate;

    @Field(() => Super_contest_effectsSumAggregate, {nullable:true})
    _sum?: Super_contest_effectsSumAggregate;

    @Field(() => Super_contest_effectsMinAggregate, {nullable:true})
    _min?: Super_contest_effectsMinAggregate;

    @Field(() => Super_contest_effectsMaxAggregate, {nullable:true})
    _max?: Super_contest_effectsMaxAggregate;
}

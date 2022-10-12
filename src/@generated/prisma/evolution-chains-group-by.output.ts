import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Evolution_chainsCountAggregate } from './evolution-chains-count-aggregate.output';
import { Evolution_chainsAvgAggregate } from './evolution-chains-avg-aggregate.output';
import { Evolution_chainsSumAggregate } from './evolution-chains-sum-aggregate.output';
import { Evolution_chainsMinAggregate } from './evolution-chains-min-aggregate.output';
import { Evolution_chainsMaxAggregate } from './evolution-chains-max-aggregate.output';

@ObjectType()
export class Evolution_chainsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    baby_trigger_item_id?: number;

    @Field(() => Evolution_chainsCountAggregate, {nullable:true})
    _count?: Evolution_chainsCountAggregate;

    @Field(() => Evolution_chainsAvgAggregate, {nullable:true})
    _avg?: Evolution_chainsAvgAggregate;

    @Field(() => Evolution_chainsSumAggregate, {nullable:true})
    _sum?: Evolution_chainsSumAggregate;

    @Field(() => Evolution_chainsMinAggregate, {nullable:true})
    _min?: Evolution_chainsMinAggregate;

    @Field(() => Evolution_chainsMaxAggregate, {nullable:true})
    _max?: Evolution_chainsMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Evolution_triggersCountAggregate } from './evolution-triggers-count-aggregate.output';
import { Evolution_triggersAvgAggregate } from './evolution-triggers-avg-aggregate.output';
import { Evolution_triggersSumAggregate } from './evolution-triggers-sum-aggregate.output';
import { Evolution_triggersMinAggregate } from './evolution-triggers-min-aggregate.output';
import { Evolution_triggersMaxAggregate } from './evolution-triggers-max-aggregate.output';

@ObjectType()
export class Evolution_triggersGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Evolution_triggersCountAggregate, {nullable:true})
    _count?: Evolution_triggersCountAggregate;

    @Field(() => Evolution_triggersAvgAggregate, {nullable:true})
    _avg?: Evolution_triggersAvgAggregate;

    @Field(() => Evolution_triggersSumAggregate, {nullable:true})
    _sum?: Evolution_triggersSumAggregate;

    @Field(() => Evolution_triggersMinAggregate, {nullable:true})
    _min?: Evolution_triggersMinAggregate;

    @Field(() => Evolution_triggersMaxAggregate, {nullable:true})
    _max?: Evolution_triggersMaxAggregate;
}

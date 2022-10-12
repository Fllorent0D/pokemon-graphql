import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Encounter_methodsCountAggregate } from './encounter-methods-count-aggregate.output';
import { Encounter_methodsAvgAggregate } from './encounter-methods-avg-aggregate.output';
import { Encounter_methodsSumAggregate } from './encounter-methods-sum-aggregate.output';
import { Encounter_methodsMinAggregate } from './encounter-methods-min-aggregate.output';
import { Encounter_methodsMaxAggregate } from './encounter-methods-max-aggregate.output';

@ObjectType()
export class Encounter_methodsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Encounter_methodsCountAggregate, {nullable:true})
    _count?: Encounter_methodsCountAggregate;

    @Field(() => Encounter_methodsAvgAggregate, {nullable:true})
    _avg?: Encounter_methodsAvgAggregate;

    @Field(() => Encounter_methodsSumAggregate, {nullable:true})
    _sum?: Encounter_methodsSumAggregate;

    @Field(() => Encounter_methodsMinAggregate, {nullable:true})
    _min?: Encounter_methodsMinAggregate;

    @Field(() => Encounter_methodsMaxAggregate, {nullable:true})
    _max?: Encounter_methodsMaxAggregate;
}

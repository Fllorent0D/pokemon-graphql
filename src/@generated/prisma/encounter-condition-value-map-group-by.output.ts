import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Encounter_condition_value_mapCountAggregate } from './encounter-condition-value-map-count-aggregate.output';
import { Encounter_condition_value_mapAvgAggregate } from './encounter-condition-value-map-avg-aggregate.output';
import { Encounter_condition_value_mapSumAggregate } from './encounter-condition-value-map-sum-aggregate.output';
import { Encounter_condition_value_mapMinAggregate } from './encounter-condition-value-map-min-aggregate.output';
import { Encounter_condition_value_mapMaxAggregate } from './encounter-condition-value-map-max-aggregate.output';

@ObjectType()
export class Encounter_condition_value_mapGroupBy {

    @Field(() => Int, {nullable:false})
    encounter_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;

    @Field(() => Encounter_condition_value_mapCountAggregate, {nullable:true})
    _count?: Encounter_condition_value_mapCountAggregate;

    @Field(() => Encounter_condition_value_mapAvgAggregate, {nullable:true})
    _avg?: Encounter_condition_value_mapAvgAggregate;

    @Field(() => Encounter_condition_value_mapSumAggregate, {nullable:true})
    _sum?: Encounter_condition_value_mapSumAggregate;

    @Field(() => Encounter_condition_value_mapMinAggregate, {nullable:true})
    _min?: Encounter_condition_value_mapMinAggregate;

    @Field(() => Encounter_condition_value_mapMaxAggregate, {nullable:true})
    _max?: Encounter_condition_value_mapMaxAggregate;
}

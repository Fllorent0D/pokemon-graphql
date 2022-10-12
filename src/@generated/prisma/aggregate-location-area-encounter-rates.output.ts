import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Location_area_encounter_ratesCountAggregate } from './location-area-encounter-rates-count-aggregate.output';
import { Location_area_encounter_ratesAvgAggregate } from './location-area-encounter-rates-avg-aggregate.output';
import { Location_area_encounter_ratesSumAggregate } from './location-area-encounter-rates-sum-aggregate.output';
import { Location_area_encounter_ratesMinAggregate } from './location-area-encounter-rates-min-aggregate.output';
import { Location_area_encounter_ratesMaxAggregate } from './location-area-encounter-rates-max-aggregate.output';

@ObjectType()
export class AggregateLocation_area_encounter_rates {

    @Field(() => Location_area_encounter_ratesCountAggregate, {nullable:true})
    _count?: Location_area_encounter_ratesCountAggregate;

    @Field(() => Location_area_encounter_ratesAvgAggregate, {nullable:true})
    _avg?: Location_area_encounter_ratesAvgAggregate;

    @Field(() => Location_area_encounter_ratesSumAggregate, {nullable:true})
    _sum?: Location_area_encounter_ratesSumAggregate;

    @Field(() => Location_area_encounter_ratesMinAggregate, {nullable:true})
    _min?: Location_area_encounter_ratesMinAggregate;

    @Field(() => Location_area_encounter_ratesMaxAggregate, {nullable:true})
    _max?: Location_area_encounter_ratesMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Location_area_proseCountAggregate } from './location-area-prose-count-aggregate.output';
import { Location_area_proseAvgAggregate } from './location-area-prose-avg-aggregate.output';
import { Location_area_proseSumAggregate } from './location-area-prose-sum-aggregate.output';
import { Location_area_proseMinAggregate } from './location-area-prose-min-aggregate.output';
import { Location_area_proseMaxAggregate } from './location-area-prose-max-aggregate.output';

@ObjectType()
export class AggregateLocation_area_prose {

    @Field(() => Location_area_proseCountAggregate, {nullable:true})
    _count?: Location_area_proseCountAggregate;

    @Field(() => Location_area_proseAvgAggregate, {nullable:true})
    _avg?: Location_area_proseAvgAggregate;

    @Field(() => Location_area_proseSumAggregate, {nullable:true})
    _sum?: Location_area_proseSumAggregate;

    @Field(() => Location_area_proseMinAggregate, {nullable:true})
    _min?: Location_area_proseMinAggregate;

    @Field(() => Location_area_proseMaxAggregate, {nullable:true})
    _max?: Location_area_proseMaxAggregate;
}

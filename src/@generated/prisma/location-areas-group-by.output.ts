import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Location_areasCountAggregate } from './location-areas-count-aggregate.output';
import { Location_areasAvgAggregate } from './location-areas-avg-aggregate.output';
import { Location_areasSumAggregate } from './location-areas-sum-aggregate.output';
import { Location_areasMinAggregate } from './location-areas-min-aggregate.output';
import { Location_areasMaxAggregate } from './location-areas-max-aggregate.output';

@ObjectType()
export class Location_areasGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Location_areasCountAggregate, {nullable:true})
    _count?: Location_areasCountAggregate;

    @Field(() => Location_areasAvgAggregate, {nullable:true})
    _avg?: Location_areasAvgAggregate;

    @Field(() => Location_areasSumAggregate, {nullable:true})
    _sum?: Location_areasSumAggregate;

    @Field(() => Location_areasMinAggregate, {nullable:true})
    _min?: Location_areasMinAggregate;

    @Field(() => Location_areasMaxAggregate, {nullable:true})
    _max?: Location_areasMaxAggregate;
}

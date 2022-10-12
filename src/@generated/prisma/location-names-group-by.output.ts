import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Location_namesCountAggregate } from './location-names-count-aggregate.output';
import { Location_namesAvgAggregate } from './location-names-avg-aggregate.output';
import { Location_namesSumAggregate } from './location-names-sum-aggregate.output';
import { Location_namesMinAggregate } from './location-names-min-aggregate.output';
import { Location_namesMaxAggregate } from './location-names-max-aggregate.output';

@ObjectType()
export class Location_namesGroupBy {

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Location_namesCountAggregate, {nullable:true})
    _count?: Location_namesCountAggregate;

    @Field(() => Location_namesAvgAggregate, {nullable:true})
    _avg?: Location_namesAvgAggregate;

    @Field(() => Location_namesSumAggregate, {nullable:true})
    _sum?: Location_namesSumAggregate;

    @Field(() => Location_namesMinAggregate, {nullable:true})
    _min?: Location_namesMinAggregate;

    @Field(() => Location_namesMaxAggregate, {nullable:true})
    _max?: Location_namesMaxAggregate;
}

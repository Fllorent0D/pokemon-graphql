import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Region_namesCountAggregate } from './region-names-count-aggregate.output';
import { Region_namesAvgAggregate } from './region-names-avg-aggregate.output';
import { Region_namesSumAggregate } from './region-names-sum-aggregate.output';
import { Region_namesMinAggregate } from './region-names-min-aggregate.output';
import { Region_namesMaxAggregate } from './region-names-max-aggregate.output';

@ObjectType()
export class Region_namesGroupBy {

    @Field(() => Int, {nullable:false})
    region_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Region_namesCountAggregate, {nullable:true})
    _count?: Region_namesCountAggregate;

    @Field(() => Region_namesAvgAggregate, {nullable:true})
    _avg?: Region_namesAvgAggregate;

    @Field(() => Region_namesSumAggregate, {nullable:true})
    _sum?: Region_namesSumAggregate;

    @Field(() => Region_namesMinAggregate, {nullable:true})
    _min?: Region_namesMinAggregate;

    @Field(() => Region_namesMaxAggregate, {nullable:true})
    _max?: Region_namesMaxAggregate;
}

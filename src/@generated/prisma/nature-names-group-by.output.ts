import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Nature_namesCountAggregate } from './nature-names-count-aggregate.output';
import { Nature_namesAvgAggregate } from './nature-names-avg-aggregate.output';
import { Nature_namesSumAggregate } from './nature-names-sum-aggregate.output';
import { Nature_namesMinAggregate } from './nature-names-min-aggregate.output';
import { Nature_namesMaxAggregate } from './nature-names-max-aggregate.output';

@ObjectType()
export class Nature_namesGroupBy {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Nature_namesCountAggregate, {nullable:true})
    _count?: Nature_namesCountAggregate;

    @Field(() => Nature_namesAvgAggregate, {nullable:true})
    _avg?: Nature_namesAvgAggregate;

    @Field(() => Nature_namesSumAggregate, {nullable:true})
    _sum?: Nature_namesSumAggregate;

    @Field(() => Nature_namesMinAggregate, {nullable:true})
    _min?: Nature_namesMinAggregate;

    @Field(() => Nature_namesMaxAggregate, {nullable:true})
    _max?: Nature_namesMaxAggregate;
}

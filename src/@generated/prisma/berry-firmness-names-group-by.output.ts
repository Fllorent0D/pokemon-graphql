import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Berry_firmness_namesCountAggregate } from './berry-firmness-names-count-aggregate.output';
import { Berry_firmness_namesAvgAggregate } from './berry-firmness-names-avg-aggregate.output';
import { Berry_firmness_namesSumAggregate } from './berry-firmness-names-sum-aggregate.output';
import { Berry_firmness_namesMinAggregate } from './berry-firmness-names-min-aggregate.output';
import { Berry_firmness_namesMaxAggregate } from './berry-firmness-names-max-aggregate.output';

@ObjectType()
export class Berry_firmness_namesGroupBy {

    @Field(() => Int, {nullable:false})
    berry_firmness_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Berry_firmness_namesCountAggregate, {nullable:true})
    _count?: Berry_firmness_namesCountAggregate;

    @Field(() => Berry_firmness_namesAvgAggregate, {nullable:true})
    _avg?: Berry_firmness_namesAvgAggregate;

    @Field(() => Berry_firmness_namesSumAggregate, {nullable:true})
    _sum?: Berry_firmness_namesSumAggregate;

    @Field(() => Berry_firmness_namesMinAggregate, {nullable:true})
    _min?: Berry_firmness_namesMinAggregate;

    @Field(() => Berry_firmness_namesMaxAggregate, {nullable:true})
    _max?: Berry_firmness_namesMaxAggregate;
}

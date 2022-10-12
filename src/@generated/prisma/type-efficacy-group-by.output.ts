import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Type_efficacyCountAggregate } from './type-efficacy-count-aggregate.output';
import { Type_efficacyAvgAggregate } from './type-efficacy-avg-aggregate.output';
import { Type_efficacySumAggregate } from './type-efficacy-sum-aggregate.output';
import { Type_efficacyMinAggregate } from './type-efficacy-min-aggregate.output';
import { Type_efficacyMaxAggregate } from './type-efficacy-max-aggregate.output';

@ObjectType()
export class Type_efficacyGroupBy {

    @Field(() => Int, {nullable:false})
    damage_type_id!: number;

    @Field(() => Int, {nullable:false})
    target_type_id!: number;

    @Field(() => Int, {nullable:false})
    damage_factor!: number;

    @Field(() => Type_efficacyCountAggregate, {nullable:true})
    _count?: Type_efficacyCountAggregate;

    @Field(() => Type_efficacyAvgAggregate, {nullable:true})
    _avg?: Type_efficacyAvgAggregate;

    @Field(() => Type_efficacySumAggregate, {nullable:true})
    _sum?: Type_efficacySumAggregate;

    @Field(() => Type_efficacyMinAggregate, {nullable:true})
    _min?: Type_efficacyMinAggregate;

    @Field(() => Type_efficacyMaxAggregate, {nullable:true})
    _max?: Type_efficacyMaxAggregate;
}

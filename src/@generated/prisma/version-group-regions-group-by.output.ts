import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Version_group_regionsCountAggregate } from './version-group-regions-count-aggregate.output';
import { Version_group_regionsAvgAggregate } from './version-group-regions-avg-aggregate.output';
import { Version_group_regionsSumAggregate } from './version-group-regions-sum-aggregate.output';
import { Version_group_regionsMinAggregate } from './version-group-regions-min-aggregate.output';
import { Version_group_regionsMaxAggregate } from './version-group-regions-max-aggregate.output';

@ObjectType()
export class Version_group_regionsGroupBy {

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    region_id!: number;

    @Field(() => Version_group_regionsCountAggregate, {nullable:true})
    _count?: Version_group_regionsCountAggregate;

    @Field(() => Version_group_regionsAvgAggregate, {nullable:true})
    _avg?: Version_group_regionsAvgAggregate;

    @Field(() => Version_group_regionsSumAggregate, {nullable:true})
    _sum?: Version_group_regionsSumAggregate;

    @Field(() => Version_group_regionsMinAggregate, {nullable:true})
    _min?: Version_group_regionsMinAggregate;

    @Field(() => Version_group_regionsMaxAggregate, {nullable:true})
    _max?: Version_group_regionsMaxAggregate;
}

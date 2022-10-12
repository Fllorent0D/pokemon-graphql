import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Version_namesCountAggregate } from './version-names-count-aggregate.output';
import { Version_namesAvgAggregate } from './version-names-avg-aggregate.output';
import { Version_namesSumAggregate } from './version-names-sum-aggregate.output';
import { Version_namesMinAggregate } from './version-names-min-aggregate.output';
import { Version_namesMaxAggregate } from './version-names-max-aggregate.output';

@ObjectType()
export class Version_namesGroupBy {

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Version_namesCountAggregate, {nullable:true})
    _count?: Version_namesCountAggregate;

    @Field(() => Version_namesAvgAggregate, {nullable:true})
    _avg?: Version_namesAvgAggregate;

    @Field(() => Version_namesSumAggregate, {nullable:true})
    _sum?: Version_namesSumAggregate;

    @Field(() => Version_namesMinAggregate, {nullable:true})
    _min?: Version_namesMinAggregate;

    @Field(() => Version_namesMaxAggregate, {nullable:true})
    _max?: Version_namesMaxAggregate;
}

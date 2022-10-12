import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Language_namesCountAggregate } from './language-names-count-aggregate.output';
import { Language_namesAvgAggregate } from './language-names-avg-aggregate.output';
import { Language_namesSumAggregate } from './language-names-sum-aggregate.output';
import { Language_namesMinAggregate } from './language-names-min-aggregate.output';
import { Language_namesMaxAggregate } from './language-names-max-aggregate.output';

@ObjectType()
export class Language_namesGroupBy {

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Language_namesCountAggregate, {nullable:true})
    _count?: Language_namesCountAggregate;

    @Field(() => Language_namesAvgAggregate, {nullable:true})
    _avg?: Language_namesAvgAggregate;

    @Field(() => Language_namesSumAggregate, {nullable:true})
    _sum?: Language_namesSumAggregate;

    @Field(() => Language_namesMinAggregate, {nullable:true})
    _min?: Language_namesMinAggregate;

    @Field(() => Language_namesMaxAggregate, {nullable:true})
    _max?: Language_namesMaxAggregate;
}

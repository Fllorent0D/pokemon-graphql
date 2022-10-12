import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Type_namesCountAggregate } from './type-names-count-aggregate.output';
import { Type_namesAvgAggregate } from './type-names-avg-aggregate.output';
import { Type_namesSumAggregate } from './type-names-sum-aggregate.output';
import { Type_namesMinAggregate } from './type-names-min-aggregate.output';
import { Type_namesMaxAggregate } from './type-names-max-aggregate.output';

@ObjectType()
export class AggregateType_names {

    @Field(() => Type_namesCountAggregate, {nullable:true})
    _count?: Type_namesCountAggregate;

    @Field(() => Type_namesAvgAggregate, {nullable:true})
    _avg?: Type_namesAvgAggregate;

    @Field(() => Type_namesSumAggregate, {nullable:true})
    _sum?: Type_namesSumAggregate;

    @Field(() => Type_namesMinAggregate, {nullable:true})
    _min?: Type_namesMinAggregate;

    @Field(() => Type_namesMaxAggregate, {nullable:true})
    _max?: Type_namesMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Contest_type_namesCountAggregate } from './contest-type-names-count-aggregate.output';
import { Contest_type_namesAvgAggregate } from './contest-type-names-avg-aggregate.output';
import { Contest_type_namesSumAggregate } from './contest-type-names-sum-aggregate.output';
import { Contest_type_namesMinAggregate } from './contest-type-names-min-aggregate.output';
import { Contest_type_namesMaxAggregate } from './contest-type-names-max-aggregate.output';

@ObjectType()
export class AggregateContest_type_names {

    @Field(() => Contest_type_namesCountAggregate, {nullable:true})
    _count?: Contest_type_namesCountAggregate;

    @Field(() => Contest_type_namesAvgAggregate, {nullable:true})
    _avg?: Contest_type_namesAvgAggregate;

    @Field(() => Contest_type_namesSumAggregate, {nullable:true})
    _sum?: Contest_type_namesSumAggregate;

    @Field(() => Contest_type_namesMinAggregate, {nullable:true})
    _min?: Contest_type_namesMinAggregate;

    @Field(() => Contest_type_namesMaxAggregate, {nullable:true})
    _max?: Contest_type_namesMaxAggregate;
}

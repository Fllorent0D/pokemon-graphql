import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Contest_typesCountAggregate } from './contest-types-count-aggregate.output';
import { Contest_typesAvgAggregate } from './contest-types-avg-aggregate.output';
import { Contest_typesSumAggregate } from './contest-types-sum-aggregate.output';
import { Contest_typesMinAggregate } from './contest-types-min-aggregate.output';
import { Contest_typesMaxAggregate } from './contest-types-max-aggregate.output';

@ObjectType()
export class Contest_typesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Contest_typesCountAggregate, {nullable:true})
    _count?: Contest_typesCountAggregate;

    @Field(() => Contest_typesAvgAggregate, {nullable:true})
    _avg?: Contest_typesAvgAggregate;

    @Field(() => Contest_typesSumAggregate, {nullable:true})
    _sum?: Contest_typesSumAggregate;

    @Field(() => Contest_typesMinAggregate, {nullable:true})
    _min?: Contest_typesMinAggregate;

    @Field(() => Contest_typesMaxAggregate, {nullable:true})
    _max?: Contest_typesMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Version_namesCountAggregate } from './version-names-count-aggregate.output';
import { Version_namesAvgAggregate } from './version-names-avg-aggregate.output';
import { Version_namesSumAggregate } from './version-names-sum-aggregate.output';
import { Version_namesMinAggregate } from './version-names-min-aggregate.output';
import { Version_namesMaxAggregate } from './version-names-max-aggregate.output';

@ObjectType()
export class AggregateVersion_names {

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

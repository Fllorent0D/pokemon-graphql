import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_namesCountAggregate } from './move-names-count-aggregate.output';
import { Move_namesAvgAggregate } from './move-names-avg-aggregate.output';
import { Move_namesSumAggregate } from './move-names-sum-aggregate.output';
import { Move_namesMinAggregate } from './move-names-min-aggregate.output';
import { Move_namesMaxAggregate } from './move-names-max-aggregate.output';

@ObjectType()
export class AggregateMove_names {

    @Field(() => Move_namesCountAggregate, {nullable:true})
    _count?: Move_namesCountAggregate;

    @Field(() => Move_namesAvgAggregate, {nullable:true})
    _avg?: Move_namesAvgAggregate;

    @Field(() => Move_namesSumAggregate, {nullable:true})
    _sum?: Move_namesSumAggregate;

    @Field(() => Move_namesMinAggregate, {nullable:true})
    _min?: Move_namesMinAggregate;

    @Field(() => Move_namesMaxAggregate, {nullable:true})
    _max?: Move_namesMaxAggregate;
}

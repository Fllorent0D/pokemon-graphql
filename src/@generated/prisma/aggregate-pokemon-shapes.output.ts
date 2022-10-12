import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_shapesCountAggregate } from './pokemon-shapes-count-aggregate.output';
import { Pokemon_shapesAvgAggregate } from './pokemon-shapes-avg-aggregate.output';
import { Pokemon_shapesSumAggregate } from './pokemon-shapes-sum-aggregate.output';
import { Pokemon_shapesMinAggregate } from './pokemon-shapes-min-aggregate.output';
import { Pokemon_shapesMaxAggregate } from './pokemon-shapes-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_shapes {

    @Field(() => Pokemon_shapesCountAggregate, {nullable:true})
    _count?: Pokemon_shapesCountAggregate;

    @Field(() => Pokemon_shapesAvgAggregate, {nullable:true})
    _avg?: Pokemon_shapesAvgAggregate;

    @Field(() => Pokemon_shapesSumAggregate, {nullable:true})
    _sum?: Pokemon_shapesSumAggregate;

    @Field(() => Pokemon_shapesMinAggregate, {nullable:true})
    _min?: Pokemon_shapesMinAggregate;

    @Field(() => Pokemon_shapesMaxAggregate, {nullable:true})
    _max?: Pokemon_shapesMaxAggregate;
}

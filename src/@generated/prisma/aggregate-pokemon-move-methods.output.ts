import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_move_methodsCountAggregate } from './pokemon-move-methods-count-aggregate.output';
import { Pokemon_move_methodsAvgAggregate } from './pokemon-move-methods-avg-aggregate.output';
import { Pokemon_move_methodsSumAggregate } from './pokemon-move-methods-sum-aggregate.output';
import { Pokemon_move_methodsMinAggregate } from './pokemon-move-methods-min-aggregate.output';
import { Pokemon_move_methodsMaxAggregate } from './pokemon-move-methods-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_move_methods {

    @Field(() => Pokemon_move_methodsCountAggregate, {nullable:true})
    _count?: Pokemon_move_methodsCountAggregate;

    @Field(() => Pokemon_move_methodsAvgAggregate, {nullable:true})
    _avg?: Pokemon_move_methodsAvgAggregate;

    @Field(() => Pokemon_move_methodsSumAggregate, {nullable:true})
    _sum?: Pokemon_move_methodsSumAggregate;

    @Field(() => Pokemon_move_methodsMinAggregate, {nullable:true})
    _min?: Pokemon_move_methodsMinAggregate;

    @Field(() => Pokemon_move_methodsMaxAggregate, {nullable:true})
    _max?: Pokemon_move_methodsMaxAggregate;
}

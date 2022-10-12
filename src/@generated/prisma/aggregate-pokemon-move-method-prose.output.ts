import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_move_method_proseCountAggregate } from './pokemon-move-method-prose-count-aggregate.output';
import { Pokemon_move_method_proseAvgAggregate } from './pokemon-move-method-prose-avg-aggregate.output';
import { Pokemon_move_method_proseSumAggregate } from './pokemon-move-method-prose-sum-aggregate.output';
import { Pokemon_move_method_proseMinAggregate } from './pokemon-move-method-prose-min-aggregate.output';
import { Pokemon_move_method_proseMaxAggregate } from './pokemon-move-method-prose-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_move_method_prose {

    @Field(() => Pokemon_move_method_proseCountAggregate, {nullable:true})
    _count?: Pokemon_move_method_proseCountAggregate;

    @Field(() => Pokemon_move_method_proseAvgAggregate, {nullable:true})
    _avg?: Pokemon_move_method_proseAvgAggregate;

    @Field(() => Pokemon_move_method_proseSumAggregate, {nullable:true})
    _sum?: Pokemon_move_method_proseSumAggregate;

    @Field(() => Pokemon_move_method_proseMinAggregate, {nullable:true})
    _min?: Pokemon_move_method_proseMinAggregate;

    @Field(() => Pokemon_move_method_proseMaxAggregate, {nullable:true})
    _max?: Pokemon_move_method_proseMaxAggregate;
}

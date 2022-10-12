import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_shape_proseCountAggregate } from './pokemon-shape-prose-count-aggregate.output';
import { Pokemon_shape_proseAvgAggregate } from './pokemon-shape-prose-avg-aggregate.output';
import { Pokemon_shape_proseSumAggregate } from './pokemon-shape-prose-sum-aggregate.output';
import { Pokemon_shape_proseMinAggregate } from './pokemon-shape-prose-min-aggregate.output';
import { Pokemon_shape_proseMaxAggregate } from './pokemon-shape-prose-max-aggregate.output';

@ObjectType()
export class Pokemon_shape_proseGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_shape_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    awesome_name?: string;

    @Field(() => Pokemon_shape_proseCountAggregate, {nullable:true})
    _count?: Pokemon_shape_proseCountAggregate;

    @Field(() => Pokemon_shape_proseAvgAggregate, {nullable:true})
    _avg?: Pokemon_shape_proseAvgAggregate;

    @Field(() => Pokemon_shape_proseSumAggregate, {nullable:true})
    _sum?: Pokemon_shape_proseSumAggregate;

    @Field(() => Pokemon_shape_proseMinAggregate, {nullable:true})
    _min?: Pokemon_shape_proseMinAggregate;

    @Field(() => Pokemon_shape_proseMaxAggregate, {nullable:true})
    _max?: Pokemon_shape_proseMaxAggregate;
}

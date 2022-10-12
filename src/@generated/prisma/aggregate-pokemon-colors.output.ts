import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_colorsCountAggregate } from './pokemon-colors-count-aggregate.output';
import { Pokemon_colorsAvgAggregate } from './pokemon-colors-avg-aggregate.output';
import { Pokemon_colorsSumAggregate } from './pokemon-colors-sum-aggregate.output';
import { Pokemon_colorsMinAggregate } from './pokemon-colors-min-aggregate.output';
import { Pokemon_colorsMaxAggregate } from './pokemon-colors-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_colors {

    @Field(() => Pokemon_colorsCountAggregate, {nullable:true})
    _count?: Pokemon_colorsCountAggregate;

    @Field(() => Pokemon_colorsAvgAggregate, {nullable:true})
    _avg?: Pokemon_colorsAvgAggregate;

    @Field(() => Pokemon_colorsSumAggregate, {nullable:true})
    _sum?: Pokemon_colorsSumAggregate;

    @Field(() => Pokemon_colorsMinAggregate, {nullable:true})
    _min?: Pokemon_colorsMinAggregate;

    @Field(() => Pokemon_colorsMaxAggregate, {nullable:true})
    _max?: Pokemon_colorsMaxAggregate;
}

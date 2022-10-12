import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_color_namesCountAggregate } from './pokemon-color-names-count-aggregate.output';
import { Pokemon_color_namesAvgAggregate } from './pokemon-color-names-avg-aggregate.output';
import { Pokemon_color_namesSumAggregate } from './pokemon-color-names-sum-aggregate.output';
import { Pokemon_color_namesMinAggregate } from './pokemon-color-names-min-aggregate.output';
import { Pokemon_color_namesMaxAggregate } from './pokemon-color-names-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_color_names {

    @Field(() => Pokemon_color_namesCountAggregate, {nullable:true})
    _count?: Pokemon_color_namesCountAggregate;

    @Field(() => Pokemon_color_namesAvgAggregate, {nullable:true})
    _avg?: Pokemon_color_namesAvgAggregate;

    @Field(() => Pokemon_color_namesSumAggregate, {nullable:true})
    _sum?: Pokemon_color_namesSumAggregate;

    @Field(() => Pokemon_color_namesMinAggregate, {nullable:true})
    _min?: Pokemon_color_namesMinAggregate;

    @Field(() => Pokemon_color_namesMaxAggregate, {nullable:true})
    _max?: Pokemon_color_namesMaxAggregate;
}

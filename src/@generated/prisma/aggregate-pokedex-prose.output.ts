import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokedex_proseCountAggregate } from './pokedex-prose-count-aggregate.output';
import { Pokedex_proseAvgAggregate } from './pokedex-prose-avg-aggregate.output';
import { Pokedex_proseSumAggregate } from './pokedex-prose-sum-aggregate.output';
import { Pokedex_proseMinAggregate } from './pokedex-prose-min-aggregate.output';
import { Pokedex_proseMaxAggregate } from './pokedex-prose-max-aggregate.output';

@ObjectType()
export class AggregatePokedex_prose {

    @Field(() => Pokedex_proseCountAggregate, {nullable:true})
    _count?: Pokedex_proseCountAggregate;

    @Field(() => Pokedex_proseAvgAggregate, {nullable:true})
    _avg?: Pokedex_proseAvgAggregate;

    @Field(() => Pokedex_proseSumAggregate, {nullable:true})
    _sum?: Pokedex_proseSumAggregate;

    @Field(() => Pokedex_proseMinAggregate, {nullable:true})
    _min?: Pokedex_proseMinAggregate;

    @Field(() => Pokedex_proseMaxAggregate, {nullable:true})
    _max?: Pokedex_proseMaxAggregate;
}

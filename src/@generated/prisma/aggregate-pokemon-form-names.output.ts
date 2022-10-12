import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_form_namesCountAggregate } from './pokemon-form-names-count-aggregate.output';
import { Pokemon_form_namesAvgAggregate } from './pokemon-form-names-avg-aggregate.output';
import { Pokemon_form_namesSumAggregate } from './pokemon-form-names-sum-aggregate.output';
import { Pokemon_form_namesMinAggregate } from './pokemon-form-names-min-aggregate.output';
import { Pokemon_form_namesMaxAggregate } from './pokemon-form-names-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_form_names {

    @Field(() => Pokemon_form_namesCountAggregate, {nullable:true})
    _count?: Pokemon_form_namesCountAggregate;

    @Field(() => Pokemon_form_namesAvgAggregate, {nullable:true})
    _avg?: Pokemon_form_namesAvgAggregate;

    @Field(() => Pokemon_form_namesSumAggregate, {nullable:true})
    _sum?: Pokemon_form_namesSumAggregate;

    @Field(() => Pokemon_form_namesMinAggregate, {nullable:true})
    _min?: Pokemon_form_namesMinAggregate;

    @Field(() => Pokemon_form_namesMaxAggregate, {nullable:true})
    _max?: Pokemon_form_namesMaxAggregate;
}

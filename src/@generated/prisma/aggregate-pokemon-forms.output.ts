import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_formsCountAggregate } from './pokemon-forms-count-aggregate.output';
import { Pokemon_formsAvgAggregate } from './pokemon-forms-avg-aggregate.output';
import { Pokemon_formsSumAggregate } from './pokemon-forms-sum-aggregate.output';
import { Pokemon_formsMinAggregate } from './pokemon-forms-min-aggregate.output';
import { Pokemon_formsMaxAggregate } from './pokemon-forms-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_forms {

    @Field(() => Pokemon_formsCountAggregate, {nullable:true})
    _count?: Pokemon_formsCountAggregate;

    @Field(() => Pokemon_formsAvgAggregate, {nullable:true})
    _avg?: Pokemon_formsAvgAggregate;

    @Field(() => Pokemon_formsSumAggregate, {nullable:true})
    _sum?: Pokemon_formsSumAggregate;

    @Field(() => Pokemon_formsMinAggregate, {nullable:true})
    _min?: Pokemon_formsMinAggregate;

    @Field(() => Pokemon_formsMaxAggregate, {nullable:true})
    _max?: Pokemon_formsMaxAggregate;
}

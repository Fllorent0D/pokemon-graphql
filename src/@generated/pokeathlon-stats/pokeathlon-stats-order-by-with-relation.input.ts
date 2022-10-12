import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { nature_pokeathlon_statsOrderByRelationAggregateInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-order-by-relation-aggregate.input';
import { pokeathlon_stat_namesOrderByRelationAggregateInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-order-by-relation-aggregate.input';
import { pokemon_form_pokeathlon_statsOrderByRelationAggregateInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-order-by-relation-aggregate.input';

@InputType()
export class pokeathlon_statsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => nature_pokeathlon_statsOrderByRelationAggregateInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsOrderByRelationAggregateInput;

    @Field(() => pokeathlon_stat_namesOrderByRelationAggregateInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_form_pokeathlon_statsOrderByRelationAggregateInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsOrderByRelationAggregateInput;
}

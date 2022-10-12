import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { itemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { pokemon_speciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';

@InputType()
export class evolution_chainsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    baby_trigger_item_id?: keyof typeof SortOrder;

    @Field(() => itemsOrderByWithRelationInput, {nullable:true})
    items?: itemsOrderByWithRelationInput;

    @Field(() => pokemon_speciesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByRelationAggregateInput;
}

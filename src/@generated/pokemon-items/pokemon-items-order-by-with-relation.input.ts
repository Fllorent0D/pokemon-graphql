import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { itemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { versionsOrderByWithRelationInput } from '../versions/versions-order-by-with-relation.input';
import { pokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';

@InputType()
export class pokemon_itemsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rarity?: keyof typeof SortOrder;

    @Field(() => itemsOrderByWithRelationInput, {nullable:true})
    items?: itemsOrderByWithRelationInput;

    @Field(() => versionsOrderByWithRelationInput, {nullable:true})
    versions?: versionsOrderByWithRelationInput;

    @Field(() => pokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: pokemonOrderByWithRelationInput;
}

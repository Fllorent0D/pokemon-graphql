import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class pokemon_itemsScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_itemsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_itemsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_itemsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_itemsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rarity?: IntWithAggregatesFilter;
}

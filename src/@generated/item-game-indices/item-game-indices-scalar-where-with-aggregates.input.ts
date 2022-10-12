import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class item_game_indicesScalarWhereWithAggregatesInput {

    @Field(() => [item_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => [item_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => [item_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;
}

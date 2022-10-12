import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class location_game_indicesScalarWhereWithAggregatesInput {

    @Field(() => [location_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<location_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => [location_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<location_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => [location_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<location_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;
}

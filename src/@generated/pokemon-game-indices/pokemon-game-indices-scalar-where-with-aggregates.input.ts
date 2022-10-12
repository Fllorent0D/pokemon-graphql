import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class pokemon_game_indicesScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_game_indicesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_game_indicesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;
}

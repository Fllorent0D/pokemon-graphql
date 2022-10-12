import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class nature_battle_style_preferencesScalarWhereWithAggregatesInput {

    @Field(() => [nature_battle_style_preferencesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<nature_battle_style_preferencesScalarWhereWithAggregatesInput>;

    @Field(() => [nature_battle_style_preferencesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<nature_battle_style_preferencesScalarWhereWithAggregatesInput>;

    @Field(() => [nature_battle_style_preferencesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<nature_battle_style_preferencesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    nature_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_battle_style_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    low_hp_preference?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    high_hp_preference?: IntWithAggregatesFilter;
}

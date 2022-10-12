import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_battle_stylesScalarWhereWithAggregatesInput {

    @Field(() => [move_battle_stylesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_battle_stylesScalarWhereWithAggregatesInput>;

    @Field(() => [move_battle_stylesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_battle_stylesScalarWhereWithAggregatesInput>;

    @Field(() => [move_battle_stylesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_battle_stylesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}

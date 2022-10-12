import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class move_flag_proseScalarWhereWithAggregatesInput {

    @Field(() => [move_flag_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_flag_proseScalarWhereWithAggregatesInput>;

    @Field(() => [move_flag_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_flag_proseScalarWhereWithAggregatesInput>;

    @Field(() => [move_flag_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_flag_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_flag_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}

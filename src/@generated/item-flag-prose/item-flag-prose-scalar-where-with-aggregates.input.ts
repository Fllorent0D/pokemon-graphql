import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class item_flag_proseScalarWhereWithAggregatesInput {

    @Field(() => [item_flag_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_flag_proseScalarWhereWithAggregatesInput>;

    @Field(() => [item_flag_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_flag_proseScalarWhereWithAggregatesInput>;

    @Field(() => [item_flag_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_flag_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_flag_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}

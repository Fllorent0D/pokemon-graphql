import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class move_target_proseScalarWhereWithAggregatesInput {

    @Field(() => [move_target_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_target_proseScalarWhereWithAggregatesInput>;

    @Field(() => [move_target_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_target_proseScalarWhereWithAggregatesInput>;

    @Field(() => [move_target_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_target_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_target_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}

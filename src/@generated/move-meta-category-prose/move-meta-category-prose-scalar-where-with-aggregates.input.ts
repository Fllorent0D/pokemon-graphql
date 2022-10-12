import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_meta_category_proseScalarWhereWithAggregatesInput {

    @Field(() => [move_meta_category_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_meta_category_proseScalarWhereWithAggregatesInput>;

    @Field(() => [move_meta_category_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_meta_category_proseScalarWhereWithAggregatesInput>;

    @Field(() => [move_meta_category_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_meta_category_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_meta_category_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class item_categoriesScalarWhereWithAggregatesInput {

    @Field(() => [item_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [item_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [item_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pocket_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}

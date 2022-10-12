import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_meta_categoriesScalarWhereWithAggregatesInput {

    @Field(() => [move_meta_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_meta_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [move_meta_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_meta_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [move_meta_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_meta_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}

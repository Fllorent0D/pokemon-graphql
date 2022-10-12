import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class contest_effect_proseScalarWhereWithAggregatesInput {

    @Field(() => [contest_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<contest_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => [contest_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<contest_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => [contest_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<contest_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    contest_effect_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    flavor_text?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    effect?: StringNullableWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class super_contest_effect_proseScalarWhereWithAggregatesInput {

    @Field(() => [super_contest_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<super_contest_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => [super_contest_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<super_contest_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => [super_contest_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<super_contest_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    super_contest_effect_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    flavor_text?: StringWithAggregatesFilter;
}

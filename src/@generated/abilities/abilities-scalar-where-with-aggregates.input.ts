import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class abilitiesScalarWhereWithAggregatesInput {

    @Field(() => [abilitiesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<abilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [abilitiesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<abilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [abilitiesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<abilitiesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;
}

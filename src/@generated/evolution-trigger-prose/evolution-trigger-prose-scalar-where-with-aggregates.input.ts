import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class evolution_trigger_proseScalarWhereWithAggregatesInput {

    @Field(() => [evolution_trigger_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<evolution_trigger_proseScalarWhereWithAggregatesInput>;

    @Field(() => [evolution_trigger_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<evolution_trigger_proseScalarWhereWithAggregatesInput>;

    @Field(() => [evolution_trigger_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<evolution_trigger_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    evolution_trigger_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}

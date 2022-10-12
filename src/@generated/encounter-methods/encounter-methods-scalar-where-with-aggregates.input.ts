import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class encounter_methodsScalarWhereWithAggregatesInput {

    @Field(() => [encounter_methodsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<encounter_methodsScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_methodsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<encounter_methodsScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_methodsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<encounter_methodsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class evolution_triggersScalarWhereWithAggregatesInput {

    @Field(() => [evolution_triggersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<evolution_triggersScalarWhereWithAggregatesInput>;

    @Field(() => [evolution_triggersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<evolution_triggersScalarWhereWithAggregatesInput>;

    @Field(() => [evolution_triggersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<evolution_triggersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}

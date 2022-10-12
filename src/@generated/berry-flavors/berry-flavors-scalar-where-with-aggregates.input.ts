import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class berry_flavorsScalarWhereWithAggregatesInput {

    @Field(() => [berry_flavorsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<berry_flavorsScalarWhereWithAggregatesInput>;

    @Field(() => [berry_flavorsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<berry_flavorsScalarWhereWithAggregatesInput>;

    @Field(() => [berry_flavorsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<berry_flavorsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    berry_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    contest_type_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    flavor?: IntWithAggregatesFilter;
}

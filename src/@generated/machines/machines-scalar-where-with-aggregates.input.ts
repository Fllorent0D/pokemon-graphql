import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class machinesScalarWhereWithAggregatesInput {

    @Field(() => [machinesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<machinesScalarWhereWithAggregatesInput>;

    @Field(() => [machinesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<machinesScalarWhereWithAggregatesInput>;

    @Field(() => [machinesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<machinesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    machine_number?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;
}

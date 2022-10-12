import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class version_group_regionsScalarWhereWithAggregatesInput {

    @Field(() => [version_group_regionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<version_group_regionsScalarWhereWithAggregatesInput>;

    @Field(() => [version_group_regionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<version_group_regionsScalarWhereWithAggregatesInput>;

    @Field(() => [version_group_regionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<version_group_regionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    region_id?: IntWithAggregatesFilter;
}

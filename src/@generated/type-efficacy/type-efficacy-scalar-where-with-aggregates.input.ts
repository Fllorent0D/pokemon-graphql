import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class type_efficacyScalarWhereWithAggregatesInput {

    @Field(() => [type_efficacyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<type_efficacyScalarWhereWithAggregatesInput>;

    @Field(() => [type_efficacyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<type_efficacyScalarWhereWithAggregatesInput>;

    @Field(() => [type_efficacyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<type_efficacyScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    damage_type_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    target_type_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    damage_factor?: IntWithAggregatesFilter;
}

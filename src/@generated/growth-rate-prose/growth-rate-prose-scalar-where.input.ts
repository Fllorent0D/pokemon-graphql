import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class growth_rate_proseScalarWhereInput {

    @Field(() => [growth_rate_proseScalarWhereInput], {nullable:true})
    AND?: Array<growth_rate_proseScalarWhereInput>;

    @Field(() => [growth_rate_proseScalarWhereInput], {nullable:true})
    OR?: Array<growth_rate_proseScalarWhereInput>;

    @Field(() => [growth_rate_proseScalarWhereInput], {nullable:true})
    NOT?: Array<growth_rate_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
